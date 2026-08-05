# AI for QA v1.0 — Certification

**Certified 2026-08-05**, following the AI for QA Certification Sprint. AI for QA v1.0 (17 modules, 8 Section Review/Solutions pages) is certified as TestAtlas's **sixth Reference Curriculum**, joining Manual Testing v1.0, API Testing v1.0, Database Testing v1.0, Automation Testing v1.0, and Performance Testing v1.0.

This document records what certification actually verified, not just that it happened — the same standard `REFERENCE_CURRICULUM_CERTIFICATION.md` set for the first five paths.

---

## Validation Summary

A direct repository audit (this sprint, cross-checked against `CONTENT_MODEL.md`, `CURRICULUM_EVOLUTION.md`, `REFERENCE_CURRICULUM_CERTIFICATION.md`, and `STYLE_GUIDE.md` as source of truth) covered nine categories:

| Category | Result |
|---|---|
| Recurring elements (Modules 1–13: all five; Modules 14–17: Quick Revision only) | ✅ Clean — verified by direct grep count across every instruction and Application Module |
| Frontmatter & metadata | ✅ Clean — all 25 files complete, keyword counts 3+ on every page |
| Heading consistency | ✅ Clean — zero hierarchy skips; Review/Solutions H1-vs-title convention matches every certified path |
| Cross-path duplicate title | ✅ Clean — zero collisions across all six paths |
| Cross-path duplicate description | ✅ Clean — zero collisions, applying the check Database Testing's own certification introduced |
| Internal link audit (incl. cross-path links into Manual, API, Database, Automation, Performance Testing) | ✅ Clean — zero dead links |
| Orphan pages | ✅ Clean — every page has inbound links; Solutions pages show exactly one, from their own Review page, matching every certified path's identical pattern |
| AtlasBank AI Support Assistant scope consistency | ✅ Clean — every reference stays within the documented six categories (transaction questions, card support, loan FAQs, KYC guidance, account information, payment help); every "general-purpose chatbot" mention found is an explicit negation, not scope creep |
| Diagrams (`npm run validate:diagrams`) | ✅ 90/90, including all 13 AI for QA diagrams, all with `accTitle`/`accDescr` and byte-identical `.mmd` mirrors in `assets/diagrams/ai-for-qa/` |

**Zero findings this sprint** — the second consecutive TestAtlas certification (after Performance Testing) to close with nothing to fix, applying every lesson from the four prior certifications proactively rather than discovering them again.

**Full build validation**: `npm run build` clean, `npm run validate:diagrams` 90/90.

## Architecture Compliance

Verified against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s three certified sections:

- **Architecture Principles**: Progressive Extraction held throughout — AI for QA references, never re-teaches, Manual Testing's Boundary Value Analysis and Equivalence Partitioning (applied to AI-drafted test cases in Module 4), Database/Performance Testing's own test-data criteria (applied to AI-generated data in Module 5), and Automation Testing's own quality standards (applied to AI-generated code in Module 6).
- **Curriculum Rules**: Prerequisites/Leads-to blocks, all five recurring elements (Instruction Modules 1–13), Application Module lighter structure (Modules 14–17), dedicated Section Review/Solutions from Section 1 — all verified present and correctly applied, zero exceptions found.
- **Governance Rules**: Documentation matches shipped reality — `LEARNING_PATHS.md`'s Path 8 section carries a complete "As Shipped" record for all five sections, including all four approved decisions (capstone domain, AtlasBank AI Support Assistant scope, path slug, and the central "AI accelerates, doesn't replace judgment" curriculum principle) and both implementation-time module-count deviations, documented rather than silently absorbed.

## Curriculum Compliance

- **Recurring elements**: 100% compliance, Modules 1–13 (all five) and 14–17 (Quick Revision only) — matching Automation, Database, and Performance Testing's own clean records.
- **Application Module convention**: Modules 14–17 correctly tagged `difficulty: "intermediate"`, correctly omit Mini Challenge and the three narrative callouts, Module 16 correctly has no separate "Common Mistakes" heading.
- **Capstone convention**: Module 17 structurally mirrors every other certified capstone (phase-based structure, "What This Capstone Reinforces," a "v1.0 Complete" closing heading) while being the first TestAtlas capstone to deliberately not continue the five-path International Transfer narrative thread — an explicitly approved, documented divergence, not an inconsistency. It delivers a genuine, evidenced payoff distinct from every other capstone: three findings from three structurally different layers (a testing-technique gap, a compound AI-quality pattern, and a governance-layer catch no testing technique could have made), closing this path's own central theme in three separate forms.
- **AtlasBank AI Support Assistant**: recorded in `STYLE_GUIDE.md` as an official, permanently-scoped AtlasBank feature (approved 2026-08-05) — verified via direct grep that every reference across all 17 modules stays within its documented six categories, with zero informal scope expansion found.
- **Deterministic-vs-AI-quality distinction**: the reviewer-requested conceptual anchor (Module 8) is applied consistently — every later AI-feature-testing module (9, 10, 14, 17) explicitly builds on it rather than treating AI output as either fully deterministic or entirely unpredictable.

## Known Accepted Exceptions

1. **Manual Testing Modules 1–7's partial recurring-element pattern** and **the capstone closing-heading naming inconsistency** (Manual Testing's own capstone predates the "vX.0 Complete" convention) — both already documented and accepted in `CURRICULUM_EVOLUTION.md` Entry 3 and prior certification records; unrelated to AI for QA, restated here only because this sprint's cross-path comparison touched both.
2. **This capstone does not continue the International Transfer narrative thread**, and the other five certified capstones do not link forward to it. Both are explicit, approved, documented divergences (see `LEARNING_PATHS.md`'s Decisions record) — not retrofitted onto any already-shipped capstone, per the standing non-retrofit policy every prior certification has applied.
3. **Application Module word-count band**: Modules 14–16 landed leaner than API Testing's approved 1,700–2,200 band (Module 17, the capstone, landed within range) — the same accepted pattern noted at every certification since Automation Testing's.
4. **Section 5 has four Application Modules (matching the standard default)**, but Section 3 (3 modules, consolidated) and Section 4 (3 modules, one a genuine synthesis addition) both deviate in size from a fixed template — both are evidenced, approved deviations recorded in `LEARNING_PATHS.md`, the same "size follows content" principle Database Testing's and Performance Testing's own non-default section sizes already established.

## Readiness Status

✅ **Certified and ready.** AI for QA v1.0 meets the same bar Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, Database Testing v1.0, and Performance Testing v1.0 were certified against — clean architecture compliance, clean curriculum compliance, **zero findings requiring a fix**, the second consecutive certification sprint to close this way. Ready for inclusion in a future release milestone alongside the other five certified paths.

**Not yet verified** (inherited, unchanged from all five prior certifications): real screen-reader/assistive-technology testing, Lighthouse/Axe scores, and Core Web Vitals all remain unverified pending a public URL for this path's live pages — tracked in `QUALITY_GATES.md`'s Post-Deployment Gates, not specific to this path.
