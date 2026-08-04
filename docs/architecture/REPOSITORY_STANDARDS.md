# Repository Standards

The conventions TestAtlas already follows consistently, documented in one place rather than left implicit across 44+ shipped module files. Written during the TestAtlas Authoring Platform sprint (2026-08-04), after a repository-wide audit confirmed these patterns hold cleanly across both Reference Curricula — this document describes what's *already true*, it doesn't propose anything new.

## Folder Structure

```
learning-paths/<path-slug>/     one folder per learning path (manual-testing/, api-testing/, ...)
assets/diagrams/<path-slug>/    that path's diagram .mmd mirrors, one folder per path
assets/diagrams/templates/      generic, unfilled diagram starting points (not path-specific)
docs/architecture/              governance and design documents (this file's home)
docs/project/                   meta/governance content served at /project/...
templates/                      contributor-facing page/process templates (this sprint's Phase 2)
releases/                       per-release detail entries (RELEASES.md is the curated summary)
```

One route per content type — `learning-paths/` serves at `/learning-paths/...`, `docs/project/` at `/project/...`. Never nest one content type's files inside another's directory. See `CONTENT_MODEL.md`'s Cross-Linking Strategy for the full reasoning.

## File Naming

**Learning path modules**: `NN-descriptive-slug.md`, purely numeric prefix (`01-`, not `1-` or `01a-`) so Docusaurus strips it automatically from the route. The slug matches the page's real topic — never a number or abbreviation as the URL itself.

**Section Review/Solutions pages**: `NNa-section-M-review.md` / `NNb-section-M-solutions.md`, where `NN` is the section's last teaching module's number, so the files sort immediately after it. These need an **explicit `slug:` frontmatter override** — Docusaurus only strips purely numeric prefixes; an alphanumeric one like `16a-` is not stripped automatically, and without the override the route leaks internal file numbering into the URL. This caused a real build failure the first time a Solutions page was created (see `CURRICULUM_EVOLUTION.md` Entry 1) — don't skip it.

**Diagram mirrors**: `VIS-XXX-slug.mmd` (or `VIS-<PATHPREFIX>-XXX-slug.mmd` for a path using a distinct ID prefix, like API Testing's `VIS-API-XXX`) in the path's own `assets/diagrams/<path>/` folder. See `MERMAID_GUIDELINES.md`.

**General rule**: lowercase kebab-case everywhere (`boundary-value-analysis.md`, not `BoundaryValueAnalysis.md` or `boundary_value_analysis.md`) — see `STYLE_GUIDE.md` section 4.

## Frontmatter Conventions

Every module: `title` (plain, no number), `sidebar_label` (numbered — `"NN Title"`), `description` (unique site-wide, under ~160 characters), `keywords` (3–6 entries), `difficulty` (`"beginner"` or `"intermediate"` only — no `"advanced"` currently in use), `time_to_read`, `last_reviewed` (`"YYYY-MM-DD"`). Review/Solutions pages additionally require `slug:` (see above). Full field-by-field detail: `CONTENT_MODEL.md`.

**Cross-path title uniqueness**: `title:` must be unique across the *entire site*, not just within one path — a same-numbered Section Review/Solutions page in two different paths needs a path-name prefix (`"API Testing — Section 4 Review"`). This was a real, found duplicate-title bug (see `LEARNING_PATHS.md`'s Platform Consistency Sprint entry) — check before publishing a new Review/Solutions page.

## Heading Conventions

- Exactly one `#` (H1) per page, matching `title`.
- `##` for major sections, `###` only when a section needs subdivision — never skip a level.
- Five headings appear on every instruction module, worded identically, no variation: `## What You Just Learned`, `## Related Topics`, `## Key Takeaways`, `## Interview Questions`, `## Glossary`.
- `## Mini Challenge` and `## Quick Revision` use that exact wording too, when present (see `CONTENT_MODEL.md` for which module types include them).
- Headings describe content meaningfully, using terms a learner would actually search for — not generic labels.

## Admonition (Callout) Conventions

Docusaurus admonition syntax (`:::note`, `:::tip`, `:::warning`), always with a title:

```markdown
:::note From the Field
[content]
:::

:::tip Senior QA Insight
[content]
:::

:::note Common Interview Mistake
[content]
:::
```

Only these three admonition titles are in current use for the five recurring elements (Mini Challenge and Quick Revision are `##` headings, not admonitions). Don't invent a new admonition title without it recurring 3 times with evidence first — see `CURRICULUM_EVOLUTION.md`'s standard.

## Table Conventions

Used only for genuine field/option/comparison data a reader needs to scan across rows — never as a layout trick. Every table has a proper `|---|---|` header separator row (a missing one breaks screen-reader navigation, not just visual rendering). See `ACCESSIBILITY_CHECKLIST.md`.

## Diagram Conventions

Mermaid only (no hand-drawn imports, no external tool exports) or hand-authored SVG for infographics. Full convention: `MERMAID_GUIDELINES.md`. The two non-negotiables: `accTitle`/`accDescr` as the first two lines, and a byte-identical mirror saved to `assets/diagrams/<path>/`.

## JSON Example Conventions

Used extensively in API Testing (request/response bodies) and occasionally elsewhere. Conventions, established across all 21 API Testing modules:

- Realistic but clearly fictional field values (`"ACC-4471829"`, not `"12345"` or a real-looking production ID pattern)
- Currency amounts shown with explicit decimal precision (`250.00`, not `250`)
- Fenced with an explicit `json` language tag
- Kept minimal — only the fields relevant to what's being taught, not a full realistic payload with every field a real API might return

## Code Block Conventions

Every fenced code block has a language tag — `json`, `http`, `text` (for non-language content like annotated ASCII diagrams), or the relevant language for pseudocode. A code block with no tag was a real, found finding in this sprint's audit (4 instances in API Testing, since fixed) — it affects both syntax highlighting and how some screen readers announce the block. Pseudocode is explicitly labeled as such, never presented as if runnable, per `STYLE_GUIDE.md` section 6.

## Prerequisites Block Convention

Immediately after the H1, before the opening paragraph, exactly two lines:

```markdown
**Prerequisites**: [text or links]
**Leads to**: [text or links]
```

Real links once targets exist; plain "(coming soon)" text otherwise — never `](#)`. See the Forward Reference Rule in `STYLE_GUIDE.md`.

## What's Deliberately NOT Standardized

- **"When NOT to Use" heading wording** varies per module (`"When NOT to Use Decision Table Testing"`, not a fixed template string) — matching the specific technique/artifact name is the correct, intended variation, confirmed during the Manual Testing Consistency Sprint audit.
- **Section-closing table shape** (Review page's Decision/Selection/Reference Matrix) varies by section content — a technique-selection matrix and a severity-reference table are both valid, chosen for what's actually useful in that section.
- **Diagram type** — chosen per what the content actually shows, not fixed per module type.

Don't force uniformity onto these — the variation is intentional, not drift.
