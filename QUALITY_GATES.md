# Quality Gates

A learning path cannot be tagged as a release until every gate below is satisfied. This is the release checklist — the single source of truth for "is this actually done," used the same way for every path, not reinvented per release.

## Gates

- [ ] **QA Review passed** — a structured review sprint across Curriculum Consistency, Navigation, Learning Flow, Technical Validation, and Editorial Review (see `FOUNDATIONS_QA_REPORT.md` for the template this follows), with zero open Critical or Major findings
- [ ] **Editorial review passed** — no unresolved repetition, weak examples, or overly long sections flagged during the QA review's Editorial suite
- [ ] **Build passes** — `npm run build` succeeds with zero errors
- [ ] **Links verified** — zero broken links, and zero dead `](#)` placeholder links (see the Forward Reference Rule in `STYLE_GUIDE.md`)
- [ ] **Diagrams validated** — `npm run validate:diagrams` passes for every `.mmd` file touched. `npm run build` alone does not catch invalid Mermaid syntax (see `VISUAL_STANDARDS.md`), so this is a separate, required check
- [ ] **Navigation verified** — sidebar order matches the intended curriculum sequence; every module's Prerequisites "Leads to" line and bottom "Next" link agree with each other and point to real content
- [ ] **Metadata complete** — every module has full frontmatter (title, description, keywords, difficulty, time_to_read, last_reviewed) and a Prerequisites block
- [ ] **Learning outcomes verified** — the path's stated Learning Outcomes in `LEARNING_PATHS.md` are each achievable by completing the published modules, with no gap between what's promised and what's taught
- [ ] **Release notes written** — a `releases/` entry covering what was added, why it matters, who benefits, curriculum changes, and future work
- [ ] **Version tagged** — a completed learning path is tagged using curriculum-product versioning (e.g. `v1.0-foundations`), independent of the site's own `v0.x` release-train numbering in `ROADMAP.md`. The two schemes track different things: `ROADMAP.md` versions the site's build-out sequence; a path's own tag versions that path as a standalone product, the way `LEARNING_PATHS.md`'s Curriculum Versioning section already tracks it (Foundations v1.0, Manual Testing v1.0, and so on)

## Post-Deployment Gates (once a path has a public URL)

Not yet active — Foundations has no public URL yet (no GitHub remote configured). Add these once one exists:

- [ ] **Lighthouse Accessibility** — automated baseline, repeatable across releases
- [ ] **Lighthouse SEO**
- [ ] **Lighthouse Performance**
- [ ] **Axe accessibility scan** (optional, supplementary to Lighthouse's accessibility audit)

Lighthouse isn't perfect, but it replaces reasoned-from-first-principles claims (like `SEO_GUIDELINES.md`'s current Core Web Vitals section) with a real, repeatable number.

## Backlog (not active gates — tracked here so they aren't lost)

- **CI Check: Mermaid Mirror Synchronization** — `scripts/validate-diagrams.mjs` currently validates each `.mmd` file's syntax but does not check that it stays byte-identical to its inline module counterpart (see `VISUAL_STANDARDS.md`'s "What goes here, and how it stays in sync"). Manual sync is adequate at the current scale (19 diagrams across 17 modules). Automate this — extend the script to diff inline fence against mirror file and fail on mismatch — once TestAtlas approaches roughly 100 diagrams across all learning paths, where manual drift becomes a real risk rather than a theoretical one.

## Why This Exists

Foundations' QA Review Sprint found that nearly every real defect traced back to one root cause: forward references written correctly at the time, never revisited once their target shipped in a later batch. That's a process gap, not a one-off mistake — the Cross-Link Resolution Check added to `CONTENT_MODEL.md`'s Definition of Done exists to catch it at the module level, as each module is written. These Quality Gates exist to catch it — and everything else that Cross-Link check doesn't cover — at the path level, once, before a release is called done.

## How to Use This

Run through every gate above before tagging any learning path's `v1.0`. Do not skip a gate because a path "feels" done — that feeling is exactly what a structured QA review sprint exists to check, not replace.
