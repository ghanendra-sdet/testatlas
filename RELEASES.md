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

## Unreleased — Manual Testing v1.0 (content complete, not yet tagged)

23/23 modules shipped across seven sections, plus 6 dedicated Section Review/Solutions pages (introduced Section 4 onward — see `docs/architecture/CURRICULUM_EVOLUTION.md` Entry 1). Committed (`2624d5b` and prior batch commits); not yet tagged `manual-testing-v1.0.0`. A Curriculum Consistency Sprint (2026-08-04) aligned `LEARNING_PATHS.md` with shipped reality and fixed one genuine content gap (Module 3's missing "From the Field"). Established two permanent architectural patterns during development, both documented in `CURRICULUM_EVOLUTION.md`: Section Review/Solutions pages, and Application Modules as a distinct content type (Modules 20–23).

## Unreleased — API Testing v1.0 (content complete, pending commit)

21/21 modules shipped across seven sections, plus 12 dedicated Section Review/Solutions pages (adopted from Section 1, reusing Manual Testing's Entry 1 pattern from day one — see `docs/architecture/LEARNING_PATHS.md`, Path 2 → Path 3). Uses Manual Testing v1.0 as its reference implementation throughout: reuses BVA/Equivalence Partitioning/Decision Tables/State Transitions by direct link rather than re-teaching them, extends the AtlasBank convention from Manual Testing (approved 2026-08-04, see `STYLE_GUIDE.md`), and reuses the Application Module pattern for Section 7 (Modules 18–21). Not yet committed — awaiting final approval.

**Deviations from the original architecture proposal**, both flagged and approved during development: Section 7's Modules 18–19 stayed within AtlasBank (two contrasting multi-system scenarios) rather than introducing a second domain, since every prior module had used AtlasBank exclusively; and a documentation/shipped-content mismatch in `CURRICULUM_EVOLUTION.md` Entry 2 (it claimed Application Modules omit Quick Revision, but Manual Testing's own Modules 20/21/23 all shipped with one) was corrected rather than propagated into API Testing's template.

**Content stays at a QA-validation level throughout Section 5 (API Security Testing)**: explicitly scoped to recognizing symptoms and reporting responsibly, never exploit construction — a deliberate boundary stated directly in Module 14.
