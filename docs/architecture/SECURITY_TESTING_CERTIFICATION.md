# Security Testing v1.0 — Certification

**Certified 2026-08-06**, following the Security Testing Certification Sprint. Security Testing v1.0 (22 modules, 10 Section Review/Solutions pages) is certified as TestAtlas's **eighth Reference Curriculum**, joining Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, Database Testing v1.0, Performance Testing v1.0, Mobile Testing v1.0, and AI for QA v1.0.

This document records what certification actually verified, not just that it happened — the same standard `REFERENCE_CURRICULUM_CERTIFICATION.md` set for the first seven paths.

---

## Validation Summary

A direct repository audit (this sprint, cross-checked against `CONTENT_MODEL.md`, `CURRICULUM_EVOLUTION.md`, `REFERENCE_CURRICULUM_CERTIFICATION.md`, and `STYLE_GUIDE.md` as source of truth) covered nine categories:

| Category | Result |
|---|---|
| Recurring elements (Modules 1–18: all five; Modules 19–22: Quick Revision, plus Common Interview Mistake on the capstone matching Performance/Mobile Testing's own precedent) | ✅ Clean — From the Field, Senior QA Insight, and Mini Challenge each appear in exactly 18 files (Modules 1–18); Quick Revision appears in exactly 22 files (every module); Common Interview Mistake appears in 19 files (Modules 1–18 plus the capstone) |
| Frontmatter & metadata (title, sidebar_label, description, keywords, difficulty, time_to_read, last_reviewed) | ✅ Clean — all 32 files (22 modules + 10 Review/Solutions pages) complete, zero missing fields |
| Difficulty tagging | ✅ Clean — Modules 1–18 and all 10 Review/Solutions pages `"beginner"`; Modules 19–22 (Application Modules and capstone) `"intermediate"`, matching every prior path's convention |
| Heading consistency (hierarchy, no skipped levels) | ✅ Clean — zero hierarchy skips across all 32 files |
| Cross-path duplicate title | ✅ Clean — zero collisions repository-wide |
| Cross-path duplicate description | ✅ Clean — zero collisions repository-wide |
| Internal link audit (incl. cross-path links into Foundations, Manual Testing, API Testing, Automation Testing, Database Testing, Performance Testing, Mobile Testing, and AI for QA) | ✅ Clean — zero dead links; one broken cross-link found and fixed during implementation (see Known Accepted Exceptions) |
| Orphan pages | ✅ Clean — every page has at least 2 inbound references; Section Solutions pages show exactly 2, matching every certified path's identical pattern |
| Diagrams (`npm run validate:diagrams`) | ✅ 120/120 repository-wide, including all 18 Security Testing diagrams (VIS-SEC-001 through VIS-SEC-018), all with `accTitle`/`accDescr` and byte-identical `.mmd` mirrors in `assets/diagrams/security-testing/` (verified via direct programmatic diff, zero mismatches) |

**One finding, fixed during implementation, before this sprint began**: Module 17's cross-link to Automation Testing's CI/CD module used an invented slug (`automation-in-ci-cd-pipelines`) that didn't match the real, filename-derived slug (`cicd-integration`) — caught by `npm run build`'s broken-link check and corrected in both `LEARNING_PATHS.md` and the module itself. No other instance of this defect class was found across the path.

**Full build validation**: `npm run build` clean, `npm run validate:diagrams` 120/120.

## Architecture Compliance

Verified against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s three certified sections:

- **Architecture Principles**: Progressive Extraction held throughout — Security Testing references, never re-teaches, Manual Testing's own Writing Clear Test Cases and Writing Effective Bug Reports (Modules 9, 18), API Testing's own API Security Fundamentals and Injection and Input-Based Attacks (Module 16), Database Testing's own Database Security Testing and Backup/Recovery/Audit Validation (Modules 7, 15, 16), Mobile Testing's own Mobile Security Testing (Module 16), AI for QA's own AI Security and Privacy Awareness (Modules 14, 16), Automation Testing's own CI/CD Integration (Module 17), and Foundations' own Risk-Based Testing Fundamentals and Testing Across the SDLC (Modules 2, 3) — rather than re-deriving any of them.
- **Curriculum Rules**: Prerequisites/Leads-to blocks, all five recurring elements (Instruction Modules 1–18), Application Module lighter structure (Modules 19–22), dedicated Section Review/Solutions from Section 1 — all verified present and correctly applied, zero exceptions found.
- **Governance Rules**: Documentation matches shipped reality — `LEARNING_PATHS.md`'s Path 7 section carries a complete "As Shipped" record for all six sections, including the position-retention decision (no renumbering needed, unlike Mobile Testing's own addition) and the explicit capstone-domain decision (see Curriculum Compliance below).

## Curriculum Compliance

- **Recurring elements**: 100% compliance, Modules 1–18 (all five) and 19–22 (Quick Revision, plus Common Interview Mistake on the capstone) — matching every certified path's own clean record.
- **Application Module convention**: Modules 19–22 correctly tagged `difficulty: "intermediate"`, correctly omit Mini Challenge and the three narrative callouts, and correctly have no separate Section Review/Solutions pages. Four Application Modules shipped, matching the standard default (not Performance Testing's approved five-module exception).
- **Capstone convention**: Module 22 structurally mirrors the Performance Testing and Mobile Testing capstones most closely, while using an expanded, 15-section structure (Realistic Business Scenario, Requirements, Architecture Overview, Risk Areas, Security Objectives, Threat Model Summary, Functional Context, Suggested Testing Scope, Security Test Strategy, Sample Test Cases, Expected Findings, Reporting Guidance, Regression Guidance, Lessons Learned, Summary) specified directly in the implementation prompt — a genuine, approved content variation within the existing capstone type, not a new curriculum pattern requiring a `CURRICULUM_EVOLUTION.md` entry, since it was specified once, for this path, not proposed as a new default. It delivers the same seven-layer AtlasBank framing every prior capstone in the narrative established: a distinct, seventh question (does correct, verified behavior also resist deliberate business-logic bypass and leave a trustworthy record) about the same feature six other certified paths already verified, with the business-logic finding explicitly framed as a confirmation, and one genuinely new, structurally-unreachable-by-prior-layers finding (audit-log tamper resistance).
- **Capstone domain decision**: the user's own review flagged an alternative — introducing a distinct, TestAtlas-owned generic fictional entity instead of continuing AtlasBank — and explicitly deferred the decision to implementation time. The capstone was built continuing AtlasBank, with the reasoning recorded directly in `LEARNING_PATHS.md`'s Decisions block: introducing a third naming convention alongside AtlasBank/AtlasShop would have fragmented, not extended, the single-recurring-domain discipline every other certified path holds to, and would have discarded rather than completed the seven-layer narrative this path's own approved architecture was built around. This is recorded as a reasoned implementation decision, not a silent override.
- **AtlasBank/AtlasShop domain extension**: recorded in `STYLE_GUIDE.md`'s Recurring Fictional Product section — Security Testing reuses both AtlasBank and AtlasShop without introducing a third domain, consistent with every certified path since Database Testing's own extension.

## Known Accepted Exceptions

1. **Manual Testing Modules 1–7's partial recurring-element pattern** and **the capstone closing-heading naming inconsistency** — both already documented and accepted in `CURRICULUM_EVOLUTION.md` Entry 3 and prior certification records; unrelated to Security Testing, restated here only because this sprint's cross-path comparison touched both.
2. **The seven other certified capstones do not link forward to Security Testing's capstone.** Security Testing's own capstone links back to all six others verifying the same AtlasBank feature, per the Related Topics convention every capstone follows — but per the standing non-retrofit policy, already-shipped, already-certified capstones are not edited to add a forward reference just for symmetry.
3. **The Module 17 slug-mismatch defect** (see Validation Summary) was caught and fixed during implementation, before this sprint began, via the standard `npm run build` broken-link check — recorded here for completeness, not as an open finding.
4. **Module 16's forward cross-links to Mobile Testing (Position 9) and AI for QA (Position 8)**, despite Security Testing sitting at Position 7 — resolved as Related-Topics pointers, not blocking prerequisites, per the reasoning recorded in `LEARNING_PATHS.md` Section 11 of the architecture proposal. Not a defect; a documented, deliberate design decision.

## Readiness Status

✅ **Certified and ready.** Security Testing v1.0 meets the same bar Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, Database Testing v1.0, Performance Testing v1.0, Mobile Testing v1.0, and AI for QA v1.0 were certified against — clean architecture compliance, clean curriculum compliance, one pre-existing implementation-time defect found and closed before this sprint began, and no other findings requiring a fix. Ready for inclusion in a future release milestone alongside the other seven certified paths.

**Not yet verified** (inherited, unchanged from all seven prior certifications): real screen-reader/assistive-technology testing, Lighthouse/Axe scores, and Core Web Vitals all remain unverified pending a public URL for this path's live pages — tracked in `QUALITY_GATES.md`'s Post-Deployment Gates, not specific to this path.
