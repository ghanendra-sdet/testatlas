# Releases

The public history of TestAtlas, one entry per major milestone. Per-batch detail lives in `releases/`; this file is the curated, high-level record — what a visitor or contributor should read to understand how the project got here.

---

## v1.0 — Foundations

**Date**: 2026-08-03
**Tag**: `foundations-v1.0.0`
**Status**: 🔒 Frozen

### Highlights

The first complete learning path, plus the entire production process that will build every path after it. This release is as much about the *pipeline* — curriculum design → content batches → QA review → visual sprint → SEO/accessibility pass → engineering review → release — as it is about the 17 modules themselves. Every later phase in the roadmap reuses this pipeline unchanged.

### New Modules

17 modules across six sections (Introduction → Software Development Context → Testing Fundamentals → Quality Mindset → Defect Management → Professional QA). Full breakdown, learning outcomes, and section-by-section dependency reasoning in `docs/architecture/LEARNING_PATHS.md`.

### Content Metrics

Not word count — learner-outcome metrics, which is what a learner actually experiences: 50 interview questions, 65 common mistakes documented, 68 best practices, 67 glossary terms, 15 full worked examples, 31 real-world opening scenarios. (35,852 words, for reference only.)

### Visual Improvements

18 Mermaid diagrams added across 15 modules in the first Visual Sprint, then reviewed a second time in the Visual & SEO Enhancement Sprint: 3 replaced with structured cards where a diagram implied a relationship that didn't exist (Software Testing Principles, Quality Attributes, QA Career Roadmap — all three logged as future SVG infographic candidates, not abandoned). Brand-matched, accessible Mermaid theme; a real Mermaid-parser validator (`npm run validate:diagrams`) that caught a genuine silent-failure bug before it shipped.

### SEO Improvements

`docs/architecture/SEO_GUIDELINES.md` established. Verified (not assumed) that Docusaurus generates canonical URLs, Open Graph/Twitter tags, and `BreadcrumbList` structured data automatically. Confirmed zero duplicate titles or descriptions across all 17 modules. `Article`/`Course` structured data scoped as deliberate future work, not built yet.

### Accessibility Improvements

`accTitle`/`accDescr` added to every diagram (real screen-reader support, not just visual). Numbered sidebar navigation added without leaking numbers into page titles, URLs, H1s, or breadcrumbs — resolved via a small, isolated `DocBreadcrumbs` swizzle after discovering Docusaurus derives breadcrumb labels from the same source as sidebar labels.

### Process Established (reused by every future phase)

- **QA Review Sprint** — structured review across Curriculum Consistency, Navigation, Learning Flow, Technical Validation, and Editorial Review (`FOUNDATIONS_QA_REPORT.md` is the template)
- **Cross-Link Resolution Check** — added to `CONTENT_MODEL.md`'s Definition of Done after nearly every real defect in the QA Review traced to the same root cause: forward references never revisited once their target shipped
- **Engineering Review** — mandatory self-critical report (Purpose, Benefits, Trade-offs, Educational/SEO/Accessibility/Performance/Maintenance Impact, Future Scalability, Risks, Validation, Remaining Work, Recommendation, Confidence) for every significant change from this point forward
- **`QUALITY_GATES.md`** — the release checklist every future path must clear before being tagged
- **Curriculum-product versioning** (`foundations-v1.0.0`) — separate from the site's own `v0.x` build-out sequence in `ROADMAP.md`

### Breaking Changes

None — first release.

### Known Issues

- Three SVG infographics planned, not built (Software Testing Principles, Quality Attributes, QA Career Roadmap) — architectural placeholders, intentionally deferred until the project-simulation illustration work makes building the visual language once, for all of them, practical
- No structured data beyond `BreadcrumbList` (`Article`/`Course` schema not yet built)
- Accessibility (screen reader, keyboard nav) and mobile readability reasoned from first principles, not verified with real assistive technology or a real device — no tooling available in the development environment
- Core Web Vitals not measured — the site has no public URL yet (no GitHub remote configured)
- Mermaid inline/mirror file sync (`assets/diagrams/foundations/`) is a manual discipline, not CI-enforced — tracked as a backlog item in `QUALITY_GATES.md`, worth automating around ~100 diagrams

### What's Next

Manual Testing v1.0 — curriculum already designed and frozen at 23 modules (`docs/architecture/LEARNING_PATHS.md`, Path 2). Content development begins now, in 3–5 module batches, through the same pipeline this release established.

---

## Unreleased — Manual Testing (in progress)

Curriculum frozen at 23 modules across seven sections. Content development starting now.
