# Performance Testing v1.0 — Certification

**Certified 2026-08-05**, following the Performance Testing Certification Sprint. Performance Testing v1.0 (17 modules, 8 Section Review/Solutions pages) is certified as TestAtlas's **fifth Reference Curriculum**, joining Manual Testing v1.0, API Testing v1.0, Database Testing v1.0, and Automation Testing v1.0.

This document records what certification actually verified, not just that it happened — the same standard `REFERENCE_CURRICULUM_CERTIFICATION.md` set for the first four paths.

---

## Validation Summary

A direct repository audit (this sprint, cross-checked against `CONTENT_MODEL.md`, `CURRICULUM_EVOLUTION.md`, `REFERENCE_CURRICULUM_CERTIFICATION.md`, and `STYLE_GUIDE.md` as source of truth) covered nine categories:

| Category | Result |
|---|---|
| Recurring elements (Modules 1–12: all five; Modules 13–17: Quick Revision only) | ✅ Clean — exact compliance, verified by direct grep count across every instruction and Application Module |
| Frontmatter & metadata (title, sidebar_label, description, keywords, difficulty, time_to_read, last_reviewed) | ✅ Clean — all 25 files complete, keyword counts 3+ on every page |
| Heading consistency (hierarchy, H1-vs-title convention) | ✅ Clean — zero hierarchy skips; Review/Solutions pages correctly use the shorter in-page H1 against the path-prefixed `title`, matching every certified path's convention |
| Cross-path duplicate title | ✅ Clean — zero collisions across all five paths |
| Cross-path duplicate description | ✅ Clean — zero collisions, including Module 15's Common-Mistakes description, written path-specific from the start this time, applying the exact lesson Database Testing's own certification found |
| Internal link audit (incl. cross-path links into Manual, API, Database, and Automation Testing) | ✅ Clean — zero dead links, including all four cross-references to the other capstones |
| Orphan pages | ✅ Clean — every page has inbound links from elsewhere in the path; Solutions pages correctly show exactly one inbound link, from their own Review page, matching every certified path's identical pattern |
| AtlasBank / AtlasShop consistency | ✅ Clean — table names used consistently everywhere referenced, no naming variants found |
| Diagrams (`npm run validate:diagrams`) | ✅ 77/77, including all 12 Performance Testing diagrams, all with `accTitle`/`accDescr` and byte-identical `.mmd` mirrors in `assets/diagrams/performance-testing/` |

**Zero findings this sprint.** This is the first TestAtlas certification sprint with nothing to fix — a direct result of two prior lessons applied proactively: Automation Testing's zero-recurring-element-gap record (applying the API Testing lesson), and Database Testing's own certification catching a cross-path duplicate description (a check this path's own module descriptions were written against, and re-verified here, from the start).

**Full build validation**: `npm run build` clean, `npm run validate:diagrams` 77/77.

## Architecture Compliance

Verified against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s three certified sections:

- **Architecture Principles**: Progressive Extraction held throughout — Performance Testing references, never re-teaches, Database Testing's own QA-level slow-query recognition (Module 6, Module 9) and API Testing's own performance-recognition module, and keeps the five performance-test types on one page rather than five, applying the same discipline already used for Combinatorial/Pairwise Testing and the six Quality Attributes.
- **Curriculum Rules**: Prerequisites/Leads-to blocks, all five recurring elements (Instruction Modules 1–12), Application Module lighter structure (Modules 13–17), dedicated Section Review/Solutions from Section 1 — all verified present and correctly applied, zero exceptions found.
- **Governance Rules**: Documentation matches shipped reality — `LEARNING_PATHS.md`'s Path 6 section carries a complete "As Shipped" record for all five sections, including both approved Section 5 decisions (the five-layer capstone framing; tool neutrality with JMeter as primary, not canonical) and every deviation from the original architecture proposal (the Section 1/2 module reordering, specified directly at implementation time, the same pattern Automation Testing's own Sections 1–4 used).

## Curriculum Compliance

- **Recurring elements**: 100% compliance, Modules 1–12 (all five) and 13–17 (Quick Revision only) — matching Automation Testing's and Database Testing's own clean records.
- **Application Module convention**: Modules 13–17 correctly tagged `difficulty: "intermediate"`, correctly omit Mini Challenge and the three narrative callouts, Module 15 correctly has no separate "Common Mistakes" heading. Module 16 (**Performance Testing Interview Scenarios**) is a genuine content variation within the existing Application Module type, not a new curriculum pattern — its six scenarios require synthesizing this path's full toolkit, distinct in *purpose* from the single recall-style Interview Questions pair every other module already carries, per the reasoning explicitly approved before implementation. No governance update was needed or made for this.
- **Capstone convention**: Module 17 structurally mirrors all four reference capstones (phase-based structure, "What This Capstone Reinforces," a "v1.0 Complete" closing heading matching API/Automation/Database Testing's convention, cross-links to all four other capstones) and delivers the approved five-layer framing exactly: a fifth, distinct question (operational cost under load) about the same feature four other certified paths already verified, with an explicit, repeated statement that the finding is not a defect in or contradiction of Database Testing's certified fix. This is the cleanest capstone-framing execution of the five paths, having had four prior examples to learn from.
- **AtlasBank/AtlasShop domain extension**: recorded in `STYLE_GUIDE.md`'s Recurring Fictional Product section (already covers both domains from Database Testing's own extension) — Performance Testing reuses both without introducing a third entity, per its own approved decision.

## Known Accepted Exceptions

1. **Manual Testing Modules 1–7's partial recurring-element pattern** and **the capstone closing-heading naming inconsistency** (Manual Testing's own capstone predates the "vX.0 Complete" convention) — both already documented and accepted in `CURRICULUM_EVOLUTION.md` Entry 3 and prior certification records; unrelated to Performance Testing, restated here only because this sprint's cross-path comparison touched both.
2. **The four other certified capstones do not link forward to Performance Testing's capstone.** Performance Testing's own capstone links back to all four, per the Related Topics convention every capstone follows — but per the standing non-retrofit policy, already-shipped, already-certified capstones are not edited to add a forward reference just for symmetry, the same treatment given at every prior certification.
3. **Application Module word-count band**: Modules 13–16 landed leaner than API Testing's approved 1,700–2,200 band, closer to Automation Testing's and Database Testing's own tighter shipped ranges (Module 17, the capstone, landed within the full range). Within `CONTENT_MODEL.md`'s tolerance, not a defect — the same accepted pattern noted at every certification since Automation Testing's.
4. **Section 5 has five Application Modules instead of the four every other certified path shipped**, due to the added Interview Scenarios module (Decision, approved before implementation, not retroactively justified). A genuine, evidenced size difference — not an inconsistency requiring correction.

## Readiness Status

✅ **Certified and ready.** Performance Testing v1.0 meets the same bar Manual Testing v1.0, API Testing v1.0, Automation Testing v1.0, and Database Testing v1.0 were certified against — clean architecture compliance, clean curriculum compliance, **zero findings requiring a fix**, the first TestAtlas certification sprint to close with nothing to correct. Ready for inclusion in a future release milestone alongside the other four certified paths.

**Not yet verified** (inherited, unchanged from all four prior certifications): real screen-reader/assistive-technology testing, Lighthouse/Axe scores, and Core Web Vitals all remain unverified pending a public URL for this path's live pages — tracked in `QUALITY_GATES.md`'s Post-Deployment Gates, not specific to this path.
