# Mobile Testing v1.0 — Certification

**Certified 2026-08-06**, following the Mobile Testing Certification Sprint. Mobile Testing v1.0 (16 modules, 8 Section Review/Solutions pages) is certified as TestAtlas's **seventh Reference Curriculum**, joining Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, Database Testing v1.0, Performance Testing v1.0, and AI for QA v1.0.

This document records what certification actually verified, not just that it happened — the same standard `REFERENCE_CURRICULUM_CERTIFICATION.md` set for the first six paths.

---

## Validation Summary

A direct repository audit (this sprint, cross-checked against `CONTENT_MODEL.md`, `CURRICULUM_EVOLUTION.md`, `REFERENCE_CURRICULUM_CERTIFICATION.md`, and `STYLE_GUIDE.md` as source of truth) covered nine categories:

| Category | Result |
|---|---|
| Recurring elements (Modules 1–12: all five; Modules 13–16: Quick Revision only) | ✅ Clean — From the Field, Senior QA Insight, and Mini Challenge each appear in exactly 12 files (Modules 1–12); Quick Revision appears in exactly 16 files (all instruction and Application Modules); Common Interview Mistake appears in 13 files (Modules 1–12 plus the capstone, matching Performance Testing's own precedent for a capstone carrying one) |
| Frontmatter & metadata (title, sidebar_label, description, keywords, difficulty, time_to_read, last_reviewed) | ✅ Clean — all 24 files complete, zero missing fields across any file |
| Difficulty tagging | ✅ Clean — Modules 1–12 and all 8 Review/Solutions pages `"beginner"`; Modules 13–16 (Application Modules and capstone) `"intermediate"`, matching Performance Testing's convention |
| Heading consistency (hierarchy, no skipped levels) | ✅ Clean — zero hierarchy skips across all 24 files |
| Cross-path duplicate title | ✅ Clean — zero collisions repository-wide |
| Cross-path duplicate description | ✅ Clean — zero collisions repository-wide, verified against every shipped path's frontmatter, not just Mobile Testing's own |
| Internal link audit (incl. cross-path links into Manual, API, Database, Automation, Foundations, and Performance Testing) | ✅ Clean — zero dead links; one broken forward-reference found and fixed during implementation (see Known Accepted Exceptions) |
| Orphan pages | ✅ Clean — every page has inbound links from elsewhere in the path; Section 1 and 2 Solutions pages correctly show exactly one inbound link, from their own Review page, matching every certified path's identical pattern |
| Diagrams (`npm run validate:diagrams`) | ✅ 102/102 repository-wide, including all 12 Mobile Testing diagrams (VIS-001 through VIS-012), all with `accTitle`/`accDescr` and byte-identical `.mmd` mirrors in `assets/diagrams/mobile-testing/` |

**One finding, fixed before this sprint began**: during implementation, Module 15's forward reference to the capstone used a descriptive slug (`capstone-atlasbank-mobile-end-to-end-verification`) rather than the capstone file's actual, filename-derived slug (`mobile-testing-capstone`) — caught immediately by `npm run build`'s broken-link check and corrected in both the Prerequisites/Leads-to block and the closing "Next" link. No other instance of this defect class was found across the path.

**Full build validation**: `npm run build` clean, `npm run validate:diagrams` 102/102.

## Architecture Compliance

Verified against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s three certified sections:

- **Architecture Principles**: Progressive Extraction held throughout — Mobile Testing references, never re-teaches, Manual Testing's own Combinatorial/Pairwise Testing (Module 7, applied directly to device fragmentation), Boundary Value Analysis and Equivalence Partitioning (Module 5, applied to touch gestures and rotation transitions), API Testing's own idempotency and retry-safety concepts (Module 6, extended to offline reconnect behavior), and Performance Testing's and the established QA-level security-testing scope (Modules 10–11, extended to mobile's device-side layer) rather than re-deriving any of them.
- **Curriculum Rules**: Prerequisites/Leads-to blocks, all five recurring elements (Instruction Modules 1–12), Application Module lighter structure (Modules 13–16), dedicated Section Review/Solutions from Section 1 — all verified present and correctly applied, zero exceptions found.
- **Governance Rules**: Documentation matches shipped reality — `LEARNING_PATHS.md`'s Path 9 section carries a complete "As Shipped" record for all five sections, including the reviewer-mandated Module 8 anti-checklist framework, the Position 9 renumbering of Interview Preparation and Career and Leadership, and every implementation decision made along the way.

## Curriculum Compliance

- **Recurring elements**: 100% compliance, Modules 1–12 (all five) and 13–16 (Quick Revision only) — matching Automation Testing's, Database Testing's, Performance Testing's, and AI for QA's own clean records.
- **Application Module convention**: Modules 13–16 correctly tagged `difficulty: "intermediate"`, correctly omit Mini Challenge and the three narrative callouts, and correctly have no separate "Common Mistakes" heading in the Module 15 sense (Module 15 itself *is* the Common Mistakes module, structured as six named cross-cutting patterns — the same structure Performance Testing's and Database Testing's own Common Mistakes modules use). Four Application Modules shipped, matching the standard four-module Section 5 size (not the five-module exception Performance Testing's added Interview Scenarios module introduced).
- **Capstone convention**: Module 16 structurally mirrors the Performance Testing capstone most closely of any prior path — phase-based structure, "What This Capstone Reinforces," a "v1.0 Complete" closing heading, cross-links to all five other capstones — and delivers the approved capstone framing exactly: a sixth, distinct question (does correct, verified behavior survive real device conditions) about the same International Money Transfer feature five other certified paths already verified, with an explicit, repeated statement that the finding (safe retry behavior across a connectivity-interruption-plus-backgrounding sequence) is a confirmation, not a defect in or contradiction of any prior layer's fix.
- **AtlasBank/AtlasShop domain extension**: recorded in `STYLE_GUIDE.md`'s Recurring Fictional Product section — Mobile Testing reuses both AtlasBank and AtlasShop as mobile *clients* of the same existing entities, introducing no third domain, per the approved decision. This sprint found and fixed a genuine documentation gap: the Mobile Testing extension entry was missing from `STYLE_GUIDE.md` entirely (present in the module content and in `LEARNING_PATHS.md`, but never recorded in the style guide's own running list) — added during this sprint's Phase 2 cross-path review.

## Known Accepted Exceptions

1. **Manual Testing Modules 1–7's partial recurring-element pattern** and **the capstone closing-heading naming inconsistency** (Manual Testing's own capstone predates the "vX.0 Complete" convention) — both already documented and accepted in `CURRICULUM_EVOLUTION.md` Entry 3 and prior certification records; unrelated to Mobile Testing, restated here only because this sprint's cross-path comparison touched both.
2. **The five other certified capstones do not link forward to Mobile Testing's capstone.** Mobile Testing's own capstone links back to all five, per the Related Topics convention every capstone follows — but per the standing non-retrofit policy, already-shipped, already-certified capstones are not edited to add a forward reference just for symmetry, the same treatment given at every prior certification.
3. **The Module 15 slug-mismatch defect** (see Validation Summary) was caught and fixed during implementation, before this sprint began, via the standard `npm run build` broken-link check — recorded here for completeness, not as an open finding.
4. **The `STYLE_GUIDE.md` Mobile Testing extension entry gap** (see Curriculum Compliance) was found and fixed *during* this certification sprint's Phase 2, not before it — the one governance-documentation gap this sprint's audit itself caught, now closed.

## Readiness Status

✅ **Certified and ready.** Mobile Testing v1.0 meets the same bar Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, Database Testing v1.0, Performance Testing v1.0, and AI for QA v1.0 were certified against — clean architecture compliance, clean curriculum compliance, one pre-existing documentation gap found and closed during this sprint's own audit, and no other findings requiring a fix. Ready for inclusion in a future release milestone alongside the other six certified paths.

**Not yet verified** (inherited, unchanged from all six prior certifications): real screen-reader/assistive-technology testing, Lighthouse/Axe scores, and Core Web Vitals all remain unverified pending a public URL for this path's live pages — tracked in `QUALITY_GATES.md`'s Post-Deployment Gates, not specific to this path.
