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

## v1.0 — TestAtlas Public Launch

**Date**: 2026-08-04
**Status**: ✅ Shipped

Three certified learning paths, the TestAtlas Authoring Platform, and full GitHub/community-health readiness.

### Manual Testing v1.0 — Certified

23/23 modules shipped across seven sections, plus 6 dedicated Section Review/Solutions pages (introduced Section 4 onward — see `docs/architecture/CURRICULUM_EVOLUTION.md` Entry 1). A Curriculum Consistency Sprint (2026-08-04) aligned `LEARNING_PATHS.md` with shipped reality and fixed one genuine content gap (Module 3's missing "From the Field"). Established two permanent architectural patterns during development, both documented in `CURRICULUM_EVOLUTION.md`: Section Review/Solutions pages, and Application Modules as a distinct content type (Modules 20–23). Certified as a Reference Curriculum in `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`.

### API Testing v1.0 — Certified

21/21 modules shipped across seven sections, plus 12 dedicated Section Review/Solutions pages (adopted from Section 1, reusing Manual Testing's Entry 1 pattern from day one). Uses Manual Testing v1.0 as its reference implementation throughout: reuses BVA/Equivalence Partitioning/Decision Tables/State Transitions by direct link rather than re-teaching them, extends the AtlasBank convention from Manual Testing, and reuses the Application Module pattern for Section 7 (Modules 18–21).

**Deviations from the original architecture proposal**, both flagged and approved during development: Section 7's Modules 18–19 stayed within AtlasBank (two contrasting multi-system scenarios) rather than introducing a second domain, since every prior module had used AtlasBank exclusively; and a documentation/shipped-content mismatch in `CURRICULUM_EVOLUTION.md` Entry 2 (it claimed Application Modules omit Quick Revision, but Manual Testing's own Modules 20/21/23 all shipped with one) was corrected rather than propagated into API Testing's template.

**Content stays at a QA-validation level throughout Section 5 (API Security Testing)**: explicitly scoped to recognizing symptoms and reporting responsibly, never exploit construction — a deliberate boundary stated directly in Module 14.

A repository-wide Platform Consistency Sprint (2026-08-04) subsequently found and fixed a real, path-wide gap: all 17 API Testing instruction modules were missing two of five required recurring elements (From the Field, Senior QA Insight) — fixed across every module, plus several smaller SEO/accessibility/cross-link findings.

### Automation Testing v1.0 — Certified

18 modules across five sections: Automation Foundations, Framework and Design Patterns, Reliability and Verification, Reporting and Execution at Scale, and Application/Capstone. Uses both Manual Testing and API Testing as reference implementations. Section 5's architecture (6 modules instead of the 4-module precedent) was proposed and approved explicitly before implementation, justified by two genuinely new-content topics (deliberate tool selection, long-term suite maintenance) the reference paths' closing sections never needed. The capstone automates the same AtlasBank International Transfer feature Manual Testing and API Testing each already tested at their own layer, independently rediscovering the same real compliance-aggregation defect a third time — a deliberate, evidenced cross-path payoff.

Applied the Platform Consistency Sprint's largest lesson proactively: all five recurring elements present from Module 1, with zero gaps found on its own dedicated certification audit (`docs/architecture/AUTOMATION_TESTING_CERTIFICATION.md`) — the cleanest audit result of the three paths.

### TestAtlas Authoring Platform

Contributor documentation (`AUTHOR_GUIDE.md`, `CURRICULUM_CHECKLIST.md`, `REVIEW_CHECKLIST.md`, `SEO_CHECKLIST.md`, `ACCESSIBILITY_CHECKLIST.md`, `MERMAID_GUIDELINES.md`, `WRITING_GUIDELINES.md`), nine reusable templates under `templates/`, `docs/architecture/REPOSITORY_STANDARDS.md`, and `docs/architecture/AUTOMATION_SPECIFICATIONS.md` (implementation-ready specs for validation not yet built). Built after all three paths shipped, so every convention documented is a verified, evidenced pattern rather than a speculative one.

### Release Preparation

`CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, `CHANGELOG.md`, GitHub issue and pull request templates, and `RELEASE_READINESS.md` added ahead of the public `v1.0.0` tag.

---

## v1.1 — Database Testing

**Status**: ✅ Shipped, certified

16/16 modules across five sections: Database Testing Foundations, Core SQL and Data Verification, Data Integrity and Transactions, Advanced Database Testing, and Application/Capstone. Introduced **AtlasShop**, TestAtlas's second recurring fictional domain, for its second Application Module — the same pattern Manual Testing and API Testing each used a contrasting second scenario for, now formalized as a named, reusable entity. Certified as a Reference Curriculum (`docs/architecture/DATABASE_TESTING_CERTIFICATION.md`), after fixing one genuine cross-path defect: a frontmatter `description` duplicated verbatim from a prior path's Common-Mistakes module template — a defect class this certification's own audit added to the standing checklist for every path after it.

---

## v1.2 — Performance Testing

**Status**: ✅ Shipped, certified

17/17 modules across five sections: Performance Testing Foundations, Designing a Performance Test, Executing and Tooling, Analysis and Operations, and Application/Capstone. Reuses Database Testing's own QA-level slow-query recognition and API Testing's performance-recognition module rather than re-teaching either. Kept concept-first and tool-neutral throughout, with JMeter introduced as a primary, not canonical, worked example. Certified with **zero findings** — the first TestAtlas certification sprint to close with nothing to fix (`docs/architecture/PERFORMANCE_TESTING_CERTIFICATION.md`).

---

## v1.3 — AI for QA

**Status**: ✅ Shipped, certified

17/17 modules across five sections: Foundations, AI-Assisted Testing Techniques, Testing AI-Driven Features, AI Governance and Security, and Application/Capstone. TestAtlas's first path to expand beyond traditional testing disciplines, kept deliberately distinct throughout: using AI to accelerate testing versus testing AI-driven features themselves, threaded through every module as "AI accelerates testing, it does not replace engineering judgment." Introduced the **AtlasBank AI Support Assistant**, TestAtlas's first AI-native fictional feature, permanently scoped to six question categories and never expanded into a general-purpose chatbot. Certified with zero findings, a second consecutive clean sprint (`docs/architecture/AI_FOR_QA_CERTIFICATION.md`).

---

## v1.4 — Mobile Testing

**Status**: ✅ Shipped, certified

16/16 modules across five sections: Mobile Testing Foundations, Functional Mobile Testing, Device and Platform Testing, Mobile Performance/Security/Diagnostics, and Application/Capstone. Added as an evidenced 11th path at Position 9 — not part of the original 10-path plan — once six certified curricula already existed to build on, renumbering Interview Preparation and Career and Leadership to Positions 10/11 (safe, since neither had shipped content). Reuses Combinatorial/Pairwise Testing, Boundary Value Analysis/Equivalence Partitioning, and API Testing's idempotency/retry concepts directly rather than re-deriving them. The capstone extends the same International Money Transfer feature five other certified paths already verified at their own layer, confirming it also survives real mobile-device conditions — connectivity interrupted mid-transaction combined with the app being backgrounded — as a sixth, distinct layer in that shared narrative. Certified as a Reference Curriculum (`docs/architecture/MOBILE_TESTING_CERTIFICATION.md`), after fixing one documentation gap this sprint's own audit found: a missing `STYLE_GUIDE.md` domain-extension entry.

### What's Next

With seven certified Reference Curricula and 145 modules live (Foundations plus seven certified curricula), further curriculum work is deliberately paused for real learner and contributor feedback — see `docs/architecture/REFERENCE_CURRICULUM_CERTIFICATION.md`'s closing note. The next path (Security Testing is the current front-runner) starts from a written architecture proposal once that feedback justifies resuming, not automatically.
