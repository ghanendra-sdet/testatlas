# Database Testing v1.0 — Certification

**Certified 2026-08-05**, following the Database Testing Certification Sprint. Database Testing v1.0 (16 modules, 8 Section Review/Solutions pages) is certified as TestAtlas's **fourth Reference Curriculum**, joining Manual Testing v1.0, API Testing v1.0, and Automation Testing v1.0.

This document records what certification actually verified, not just that it happened — the same standard `REFERENCE_CURRICULUM_CERTIFICATION.md` set for the first three paths.

---

## Validation Summary

A direct repository audit (this sprint, cross-checked against `CONTENT_MODEL.md`, `CURRICULUM_EVOLUTION.md`, `REFERENCE_CURRICULUM_CERTIFICATION.md`, and `STYLE_GUIDE.md` as source of truth) covered nine categories:

| Category | Result |
|---|---|
| Recurring elements (Modules 1–12: all five; Modules 13–16: Quick Revision only) | ✅ Clean — exact compliance, verified by direct grep count across every instruction and Application Module |
| Frontmatter & metadata (title, sidebar_label, description, keywords, difficulty, time_to_read, last_reviewed) | ✅ Clean — all 24 files complete, keyword counts 3+ on every page |
| Heading consistency (H1-vs-title convention, no hierarchy skips) | ✅ Clean — Review/Solutions pages correctly use the shorter in-page H1 against the path-prefixed `title`, matching every certified path's own convention |
| Cross-path duplicate title | ✅ Clean — zero collisions across all four paths |
| Cross-path duplicate description | **1 finding** — Module 15's description was byte-identical to Automation Testing's own Common Mistakes module description (a copy-paste of the shared template with no path-specific rewrite); fixed |
| Internal link audit (incl. cross-path links into Manual Testing, API Testing, Automation Testing) | ✅ Clean — zero dead links, zero unresolved "(coming soon)" placeholders |
| Orphan pages | ✅ Clean — every page has inbound links from elsewhere in the path |
| AtlasBank / AtlasShop table-naming consistency | ✅ Clean — `Customers`, `Accounts`, `Transactions`, `Beneficiaries`, `Loans`, `Cards`, `Audit Logs`, `KYC`, `Payments`, `ComplianceFlags` (AtlasBank) and `Products`, `Inventory`, `Orders`, `OrderItems` (AtlasShop) used consistently everywhere referenced, no naming variants found |
| Diagrams (`npm run validate:diagrams`) | ✅ 65/65, including all 12 Database Testing diagrams, all with `accTitle`/`accDescr` and byte-identical `.mmd` mirrors in `assets/diagrams/database-testing/` |

**One finding, fixed**: Module 15's frontmatter `description` was identical to Automation Testing's Module 17 — both had reused the same generic "recurring mistake patterns... shortcut that feels reasonable" phrasing from the Common-Mistakes-module pattern without a path-specific rewrite. Corrected to name this path's own specific mistake categories (SQL verification, constraints, concurrency, triggers, performance/security). No content, structure, or cross-link defects found.

**Full build validation**: `npm run build` clean, `npm run validate:diagrams` 65/65, re-verified after the fix.

## Architecture Compliance

Verified against `REFERENCE_CURRICULUM_CERTIFICATION.md`'s three certified sections:

- **Architecture Principles**: Progressive Extraction held throughout — Database Testing references, never re-teaches, Manual Testing's [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) and [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning), applying both directly to constraint boundaries (Module 5) exactly as `KNOWLEDGE_GRAPH.md` had pre-designated before this path's architecture proposal was written.
- **Curriculum Rules**: Prerequisites/Leads-to blocks, all five recurring elements (Instruction Modules 1–12), Application Module lighter structure (Modules 13–16), dedicated Section Review/Solutions from Section 1 — all verified present and correctly applied, one cosmetic metadata exception found and fixed (above).
- **Governance Rules**: Documentation matches shipped reality — `LEARNING_PATHS.md`'s Path 4 section carries a complete "As Shipped" record for all five sections, including the two approved Section 5 decisions (Test Data Management integrated rather than standalone; AtlasShop as the named contrasting domain) and the capstone's two findings.

## Curriculum Compliance

- **Recurring elements**: 100% compliance, Modules 1–12 (all five) and 13–16 (Quick Revision only) — matching Automation Testing's own clean record, with zero gaps found on audit.
- **Application Module convention**: Modules 13–16 correctly tagged `difficulty: "intermediate"`, correctly omit Mini Challenge and the three narrative callouts, Module 15 correctly has no separate "Common Mistakes" heading (the module's content *is* that, as six numbered patterns).
- **Capstone convention**: Module 16 structurally mirrors all three reference capstones (phase-based structure, "What This Capstone Reinforces," a "v1.0 Complete" closing heading matching API Testing's and Automation Testing's convention, cross-links to all three other capstones) and delivers a genuine, evidenced cross-path payoff — independently rediscovering the same AtlasBank compliance-aggregation defect all three other capstones found, and additionally tracing it to its exact root cause (the stored procedure's rolling-hour date clause) using access none of the other three layers has. Also introduces one new, database-specific defect (an audit-trigger bypass on a batch reconciliation path) per this sprint's approved capstone requirement — a genuine addition, not a retrofit of the shared narrative thread.
- **AtlasBank/AtlasShop domain extension**: recorded in `STYLE_GUIDE.md`'s Recurring Fictional Product section, following the same extension pattern API Testing and Automation Testing each already established — this path is the first to introduce a genuinely new, named contrasting domain (AtlasShop) rather than reusing AtlasBank exclusively or leaving a second domain unnamed, an explicit, approved decision (not an open question at certification time).

## Known Accepted Exceptions

1. **Manual Testing Modules 1–7's partial recurring-element pattern** and **the capstone closing-heading naming inconsistency** (Manual Testing's capstone uses `## Manual Testing Complete`, no version number, since it shipped before the "vX.0 Complete" convention existed) — both already documented and accepted in `CURRICULUM_EVOLUTION.md` Entry 3 and `AUTOMATION_TESTING_CERTIFICATION.md`; unrelated to Database Testing, restated here only because this sprint's cross-path comparison touched both.
2. **The three certified capstones (Manual Testing, API Testing, Automation Testing) do not link forward to Database Testing's capstone.** Database Testing's own capstone links back to all three, per the Related Topics convention every capstone follows — but per the standing non-retrofit policy, already-shipped, already-certified capstones are not edited to add a forward reference just for symmetry. This is the same treatment given to every other already-shipped, already-reviewed content in this project's history (e.g., Manual Testing Module 22's left-as-is inconsistency).
3. **Application Module word-count band runs leaner than API Testing's approved range**: Modules 13–15 landed at 1,435–1,523 words against the approved 1,700–2,200 band (Module 16, the capstone, landed at 1,779, within range). This is closer to Automation Testing's own shipped Application Module range (1,312–1,412) than to API Testing's — within `CONTENT_MODEL.md`'s tolerance, not a defect, already flagged transparently in this sprint's Engineering Review and in `LEARNING_PATHS.md`'s Section 5 "As Shipped" note.
4. **Section 4 combines Performance and Security into one section**, rather than each getting its own dedicated section the way API Testing dedicated a full section to Security alone. This is a deliberate, evidenced scope decision recorded in the original architecture proposal (both topics explicitly scoped to QA-level "basics" per this path's originating task, not full specialist depth) — not an oversight, and not retrofitted.

## Readiness Status

✅ **Certified and ready.** Database Testing v1.0 meets the same bar Manual Testing v1.0, API Testing v1.0, and Automation Testing v1.0 were certified against — clean architecture compliance, clean curriculum compliance, one trivial metadata finding fixed, zero structural or content defects. Ready for inclusion in a future release milestone alongside the other three certified paths.

**Not yet verified** (inherited, unchanged from all three prior certifications): real screen-reader/assistive-technology testing, Lighthouse/Axe scores, and Core Web Vitals all remain unverified pending a public URL for this path's live pages — tracked in `QUALITY_GATES.md`'s Post-Deployment Gates, not specific to this path.
