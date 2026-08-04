# Automation Specifications

Implementation-ready specs for validation TestAtlas currently runs by hand (ad hoc grep, one-off audit sprints) but doesn't yet enforce automatically. **Not implemented** — this document exists so building any of these is a translation exercise, not a design exercise, whenever it becomes worth the effort. Modeled on `scripts/validate-diagrams.mjs`, the one real validation script that already exists, which every spec below follows the same shape as: a single-purpose Node script, run via `npm run <name>`, exits non-zero with exact file:line detail on failure.

Every spec below exists because of a **real, already-found issue** it would have caught automatically — not a hypothetical.

## 1. Frontmatter Validation

**Script**: `scripts/validate-frontmatter.mjs` → `npm run validate:frontmatter`

**Found it would have caught**: nothing yet (frontmatter has been clean in every audit) — but the highest-value gate to build first, since it's the cheapest to implement and would catch a regression immediately rather than at the next ad hoc sprint.

**Input**: every `.md` file under `learning-paths/**`.

**Algorithm**:
1. Parse YAML frontmatter (a `gray-matter`-style parse, same dependency class as Docusaurus itself uses internally).
2. For an Instruction/Application Module: assert `title`, `sidebar_label`, `description`, `keywords`, `difficulty`, `time_to_read`, `last_reviewed` all present and non-empty.
3. For a Review/Solutions page (`slug:` field present): additionally assert `slug` matches the pattern `section-\d+-(review|solutions)`.
4. Assert `difficulty` is exactly `"beginner"` or `"intermediate"` (flag anything else — including a future `"advanced"` until explicitly added to the standard).
5. Assert `last_reviewed` matches `YYYY-MM-DD` and is not more than 1 year in the past relative to run date (per `CONTENT_MODEL.md`'s freshness rule) — warn, don't fail, since a stale review date is a prompt to check, not a build blocker.
6. Assert `keywords` array has 3–6 entries (a real, found issue — two Section 6 pages shipped with 2, one Section 2 page shipped with 7).

**Output**: one line per violation, `path/to/file.md:field — what's wrong`. Exit 1 if any hard-fail assertion (steps 2–4, 6) violated; exit 0 with warnings printed for step 5.

## 2. Duplicate Metadata Detection

**Script**: `scripts/validate-metadata-uniqueness.mjs` → `npm run validate:metadata`

**Found it would have caught**: 12 duplicate `title:` values across Manual Testing and API Testing (both paths shipped a page literally titled "Section 4 Review") — found manually during the Platform Consistency Sprint, would have been caught instantly by this script.

**Input**: every `.md` file under `learning-paths/**` (all paths combined — this must be a sitewide check, not per-path, since the found bug was specifically a *cross-path* collision a per-path check would miss).

**Algorithm**:
1. Extract `title` and `description` from every file's frontmatter.
2. Group by exact string match (case-sensitive) across the entire site.
3. Any group with more than one member is a violation.

**Output**: `Duplicate title: "X" in [file1, file2, ...]`. Exit 1 on any duplicate found.

## 3. Orphan Page Detection

**Script**: `scripts/validate-no-orphans.mjs` → `npm run validate:orphans`

**Found it would have caught**: nothing yet (zero orphans found in this sprint's audit) — a regression-prevention gate, not a currently-needed fix.

**Input**: every `.md` file's derived route (accounting for `slug:` overrides) under `learning-paths/**`, plus every internal markdown link (`](/learning-paths/...)`) in the same corpus.

**Algorithm**:
1. Build the set of all real routes.
2. Build the set of all routes referenced by at least one internal link anywhere in the corpus.
3. Any route in the first set not in the second is an orphan — **except** each path's own Module 1 (reachable via sidebar, not required to have an inbound content link) and any file explicitly listed in an `ORPHAN_ALLOWLIST` constant in the script (for deliberate exceptions, reviewed and commented inline).

**Output**: `Orphan page: path/to/file.md (route: /learning-paths/...)`. Exit 1 on any unallowlisted orphan.

## 4. Duplicate Keyword / Over-Concentration Detection

**Script**: extend `scripts/validate-metadata-uniqueness.mjs` rather than a new script — same input corpus.

**Found it would have caught**: the keyword-count outliers from item 1 above (this is really a sub-check of frontmatter validation, listed separately here because the task explicitly separated it) — and would additionally catch two unrelated pages using nearly-identical keyword sets, a form of soft duplication distinct from title/description collision.

**Algorithm**: for every pair of pages, compute keyword-array overlap (Jaccard similarity). Flag any pair above a threshold (start at 80% overlap, tune after the first real run) as worth a human look — not an automatic failure, since some legitimate near-duplication exists between a module and its own Solutions page.

**Output**: warning-level only, printed for human review, does not fail the build.

## 5. Heading Validation

**Script**: `scripts/validate-headings.mjs` → `npm run validate:headings`

**Found it would have caught**: nothing yet (heading consistency was clean in this sprint's audit) — but this is exactly the kind of check a one-off audit agent currently does by hand every few sprints; automating it removes the need for that recurring manual pass.

**Input**: every module `.md` file (excluding Review/Solutions pages, which have their own heading set).

**Algorithm**:
1. Assert exactly one `# ` (H1) line, and it matches (or closely matches — allow the sidebar-number-stripped comparison) the frontmatter `title`.
2. Assert no heading level is skipped (track current heading depth; a `###` appearing when the last heading was `#` — no intervening `##` — is a violation).
3. Assert these exact strings appear, in any order relative to each other but each present, for a non-Application-Module: `## What You Just Learned`, `## Related Topics`, `## Key Takeaways`, `## Interview Questions`, `## Glossary`, `## Mini Challenge`, `## Quick Revision`.
4. For an Application Module (`difficulty: "intermediate"` in frontmatter AND file path matches a known Application Module list, since not every intermediate-difficulty page is automatically an Application Module): assert `## Quick Revision` present, assert `## Mini Challenge` **absent**.
5. Assert admonition presence via regex on raw content: `:::note From the Field`, `:::tip Senior QA Insight`, `:::note Common Interview Mistake` — same present/absent logic as step 4, split by module type.

**This is the single highest-value script to build next.** It would have caught the sprint's largest real finding (all 17 API Testing modules missing 2 of 5 recurring elements) automatically, at PR time, instead of requiring a dedicated audit sprint to discover after the fact.

**Output**: `path/to/file.md — missing: [element list]`. Exit 1 on any missing required element for that module's type.

## 6. Curriculum Validation

**Script**: `scripts/validate-curriculum.mjs` → `npm run validate:curriculum`

**Found it would have caught**: the stale `CURRICULUM_ARCHITECTURE.md` module lists (never automatically checked against what actually shipped).

**Input**: `docs/architecture/LEARNING_PATHS.md` (parsed for stated module counts and titles per path) cross-referenced against actual files in `learning-paths/**`.

**Algorithm**:
1. For each path documented in `LEARNING_PATHS.md`, extract the stated module list.
2. Compare against actual `.md` files present in that path's directory (excluding Review/Solutions pages, matched separately).
3. Flag any module `LEARNING_PATHS.md` claims exists but has no corresponding file, and any file present with no corresponding entry in `LEARNING_PATHS.md`.

**Output**: `LEARNING_PATHS.md claims "[Module Title]" but no file found` / `File exists with no LEARNING_PATHS.md entry: path/to/file.md`. Exit 1 on any mismatch — this is meant to run on a schedule (weekly, or on any push to `docs/architecture/LEARNING_PATHS.md` or `learning-paths/**`), not necessarily on every PR, since it's checking documentation drift rather than a single PR's correctness.

## 7. Cross-Reference Validation

**Script**: extend `scripts/validate-orphans.mjs`'s link-extraction logic, or a new `scripts/validate-cross-references.mjs` → `npm run validate:crossref`

**Found it would have caught**: the README.md broken link (a relative path that resolves differently through an MDX import than on GitHub) — Docusaurus's own `onBrokenLinks: 'throw'` already catches this at build time for `.md`/`.mdx` files rendered as pages, but does NOT catch a broken link inside a file (like `README.md`) that's only imported as a component into another page, since the linter processes it differently than a normal doc page.

**Algorithm**:
1. Extract every internal link across `learning-paths/**` AND any `.md` file imported via MDX (`docs/project/overview.mdx`'s `<ProjectReadme />` pattern — grep for `import ... from '@site/...'` to find these).
2. For files reached via MDX import specifically, resolve relative links against the *importing page's route*, not the source file's location on disk (this is the exact distinction that caused the real bug) — flag any relative link that would resolve differently under each interpretation, since that ambiguity is itself the risk.
3. For everything else, this duplicates Docusaurus's own broken-link check — don't rebuild it, just confirm `onBrokenLinks: 'throw'` is still set in `docusaurus.config.ts` as part of this script's own self-check.

**Output**: `File imported via MDX at [importing route]: link "X" resolves differently as page-relative vs. disk-relative`. Exit 1 on ambiguity found.

## Suggested Build Order

1. **Heading Validation** (#5) — highest value, would have caught this sprint's biggest finding automatically.
2. **Frontmatter Validation** (#1) and **Duplicate Metadata Detection** (#2) — cheap, mechanical, catch real found issues.
3. **Cross-Reference Validation** (#7) — catches the specific MDX-import class of bug, narrow but real.
4. **Orphan Page Detection** (#3) and **Curriculum Validation** (#6) — lower urgency (zero current findings), but cheap regression prevention once the corpus is large enough that manual audits become expensive.
5. **Duplicate Keyword Detection** (#4) — lowest priority, warning-only, most useful once TestAtlas has enough pages that near-duplicate keyword sets become a real signal-quality problem rather than a curiosity.

## Integration Point

Every script above should be added to `package.json`'s scripts and to `QUALITY_GATES.md`'s gate list the same way `validate-diagrams.mjs` was — as a required, separate check, not folded into `npm run build`, since (per the diagram-validator's own lesson) a passing build does not imply these checks would also pass.
