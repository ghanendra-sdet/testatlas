# Reference Curriculum Certification

**Certified 2026-08-04, during the TestAtlas Platform Consistency Sprint.**

**Manual Testing v1.0** (23 modules), **API Testing v1.0** (21 modules), **Automation Testing v1.0** (18 modules, certified 2026-08-05 — see `AUTOMATION_TESTING_CERTIFICATION.md`), **Database Testing v1.0** (16 modules, certified 2026-08-05 — see `DATABASE_TESTING_CERTIFICATION.md`), **Performance Testing v1.0** (17 modules, certified 2026-08-05 — see `PERFORMANCE_TESTING_CERTIFICATION.md`), **AI for QA v1.0** (17 modules, certified 2026-08-05 — see `AI_FOR_QA_CERTIFICATION.md`), **Mobile Testing v1.0** (16 modules, certified 2026-08-06 — see `MOBILE_TESTING_CERTIFICATION.md`), **Security Testing v1.0** (22 modules, certified 2026-08-06 — see `SECURITY_TESTING_CERTIFICATION.md`), **Interview Preparation v1.0** (21 modules, certified 2026-08-07, released v1.2.0), and **Career & Leadership v1.0** (35 modules, certified 2026-08-08, released v1.3.0 — see `CAREER_LEADERSHIP_CERTIFICATION.md`) are certified as TestAtlas's **Reference Curricula** — the standard every future learning path is built against. This document exists so that standard is explicit and portable, not something a future contributor has to reverse-engineer by reading 225 modules and thirteen architecture documents.

Automation Testing was the first path built entirely against this certification rather than against a single prior example — its own audit found zero structural deviations and, notably, zero recurring-element gaps from Module 1 onward, the exact defect class that was this certification's largest single finding when API Testing was first audited. Database Testing repeated that clean record, and additionally caught and fixed a genuinely new defect class this certification hadn't previously flagged by name: a cross-path duplicate frontmatter `description` copied verbatim from a prior path's Common-Mistakes module template without a path-specific rewrite — see `DATABASE_TESTING_CERTIFICATION.md`. Performance Testing's own certification closed with **zero findings** — the first TestAtlas certification sprint with nothing to fix, a direct result of writing its own module descriptions against the exact lesson Database Testing's certification had just surfaced. AI for QA repeated that zero-finding record a second consecutive time, including verifying a genuinely new check this path specifically needed — that a scoped fictional feature (the AtlasBank AI Support Assistant) stayed within its documented boundaries across every one of 17 modules, with no informal scope creep anywhere. Mobile Testing's own certification found one pre-existing gap — its `STYLE_GUIDE.md` domain-extension entry had never been recorded, despite the module content and `LEARNING_PATHS.md` both already reflecting it — caught and closed during this sprint's own Phase 2 audit. Security Testing's own certification found one implementation-time defect (a cross-link built against an invented, non-existent slug), fixed before its certification sprint began, and recorded a genuine, evidence-based capstone-domain decision — continuing AtlasBank as the capstone's seventh narrative layer rather than adopting a proposed alternative, generic TestAtlas-owned entity — directly in `LEARNING_PATHS.md` rather than resolving it silently. That's the certification working as intended: each path's audit finds real, if small, issues the previous audits didn't think to check for, and future paths inherit the expanded checklist.

This document doesn't repeat what's already defined elsewhere — it points to the source of each rule and states *why it's certified*, so the certification can be re-verified later rather than taken on faith.

---

## What "Reference Curriculum" Means

A future learning path (Database Testing, Automation, Performance, Security, ...) should default to everything in this document, and deviate only where there's a stated, evidenced reason — the same bar API Testing itself was held to ("Do not introduce new architectural patterns unless there is a strong educational reason supported by evidence"). This document is that default, made explicit and reusable instead of re-derived from Manual Testing's example every time.

Certification is a statement about **structure and process**, not about content being permanently frozen. Both paths remain correctable — a genuine defect found later still gets fixed (see Manual Testing's Module 3 fix, found and corrected during its own Consistency Sprint). What's certified is that the *pattern* both paths follow is sound enough to build the next path on without re-litigating it.

---

## 1. Architecture Principles

| Principle | Defined In | Why It's Certified |
|---|---|---|
| **Progressive Extraction** — a concept becomes a standalone knowledge node only once a third real reference need appears, not speculatively | `KNOWLEDGE_GRAPH.md` | API Testing referenced Manual Testing's BVA/Equivalence Partitioning/Decision Tables/State Transitions nodes directly (Modules 3, 19, 21) rather than re-teaching them — verified working across a real second path, not just a single-path theory |
| **Why-What-When-How structure** for every teaching module | `CONTENT_MODEL.md` | Followed consistently across both paths' 38 instruction modules |
| **Knowledge nodes taught once, referenced everywhere** | `KNOWLEDGE_GRAPH.md` | Confirmed by API Testing's own reuse of Manual Testing's technique nodes — the mechanism was designed once, proven twice |
| **One route per content type; internal links rooted at `/learning-paths/...`** | `CONTENT_MODEL.md` | Zero broken links across both paths at every validation checkpoint (`onBrokenLinks: 'throw'`) |
| **Forward Reference Rule** — unresolved references are plain "(coming soon)" text, never `](#)` | `STYLE_GUIDE.md` | Zero `](#)` dead links found across either path in this sprint's audit |

## 2. Curriculum Rules

| Rule | Defined In | Applies To |
|---|---|---|
| **Prerequisites/Leads to block** immediately after the H1 | `CONTENT_MODEL.md` | Every module in both paths |
| **Five recurring elements** for instruction modules — From the Field, Senior QA Insight, Mini Challenge, Common Interview Mistake, Quick Revision | `CONTENT_MODEL.md` | Every instruction module (not Application Modules, not Foundations — Foundations predates the standard and is not retrofitted) |
| **"When NOT to Use [Technique]"** for any module teaching a technique or artifact | `CONTENT_MODEL.md` | Technique/artifact modules only — not mindset modules (e.g., Thinking Like a Tester), not Application Modules |
| **Section Review + Solutions dedicated pages**, `slug: section-N-review` / `section-N-solutions` | `CURRICULUM_EVOLUTION.md` Entry 1 | Manual Testing from Section 4 onward (recurred 3x in the bundled pattern before this was formalized — see Entry 1's own evidence bar); API Testing, Automation Testing, and Database Testing all from Section 1 onward (future paths inherit the dedicated-page pattern from day one, per Entry 1's migration policy) |
| **Application Modules** — `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, no Section Review/Solutions | `CURRICULUM_EVOLUTION.md` Entry 2 (corrected 2026-08-04) | Manual Testing Modules 20–21, 23 (Module 22 is a known, deliberately-unretrofitted exception — see Entry 2's Correction); API Testing Modules 18–21; Automation Testing Modules 15–18; Database Testing Modules 13–16; Performance Testing Modules 13–17 (five modules, one more than every other path's four — a genuine, approved size difference, not an inconsistency; see `PERFORMANCE_TESTING_CERTIFICATION.md`); AI for QA Modules 14–17; Mobile Testing Modules 13–16; Security Testing Modules 19–22 |
| **AtlasBank** as the default recurring domain, with explicit exception for a genuinely better-fitting domain | `STYLE_GUIDE.md` | Manual Testing from Section 3 onward; all of API Testing (extended 2026-08-04), Automation Testing, Database Testing, Performance Testing, AI for QA, Mobile Testing, and Security Testing — Database Testing introduced **AtlasShop**, a named contrasting domain, for its second Application Module (approved 2026-08-05); Performance Testing reuses both domains without introducing a third; AI for QA introduced the **AtlasBank AI Support Assistant** (approved 2026-08-05), TestAtlas's first AI-native feature, deliberately scoped to six question categories and never expanded into a general-purpose chatbot; Mobile Testing reuses both AtlasBank and AtlasShop as mobile *clients* of the same existing entities, introducing no third domain; Security Testing's capstone continues AtlasBank as a seventh narrative layer, a deliberate decision recorded in `LEARNING_PATHS.md` after an alternative (a new, generic entity) was explicitly considered and rejected |

**Governance rule this table itself demonstrates**: a pattern is formalized into a rule only after it recurs at least 3 times with evidence, not on first appearance (Entry 1's own standard). Future contributors proposing a new recurring pattern should hold it to the same bar — one clean instance is not yet a rule.

## 3. Governance Rules

1. **Documentation describes the shipped product, not the plan for it.** `LEARNING_PATHS.md` is updated after every batch/section, not just at path completion — verified current as of this certification (23/23 Manual Testing, 21/21 API Testing, 18/18 Automation Testing, 16/16 Database Testing, 17/17 Performance Testing, 17/17 AI for QA, 16/16 Mobile Testing, 22/22 Security Testing, 21/21 Interview Preparation, and 35/35 Career & Leadership modules, all reflected accurately, including every approved Section decision and capstone finding for the seven most recent paths).
2. **A contradiction between documentation and shipped content gets corrected, not silently propagated.** Demonstrated twice in this sprint: `CURRICULUM_EVOLUTION.md` Entry 2's Quick Revision claim was found to not match Modules 20/21/23, and was corrected with a dated note rather than either ignored or used to justify changing already-shipped content to match the (wrong) doc.
3. **A real design conflict gets flagged before building past it, not resolved unilaterally.** Demonstrated by API Testing Section 7's domain-scope decision — the original architecture proposal's two-domain plan conflicted with three repeated instructions to keep AtlasBank canonical; this was raised as an explicit decision point rather than either silently following the stale proposal or silently overriding it.
4. **Already-shipped, already-reviewed content is not retrofitted for consistency alone.** Only a *genuine* defect (not a stylistic preference) justifies touching shipped content — see Manual Testing's Module 3 fix (a real gap) versus Module 22's left-as-is inconsistency (cosmetic, not worth disturbing reviewed content).
5. **A pattern earns formalization after repeated evidence, not a single clean instance.** The explicit standard behind every entry in `CURRICULUM_EVOLUTION.md`.

## 4. Contributor Expectations

Every future learning path module must clear `CONTENT_MODEL.md`'s **Definition of Done** in full, including the **Cross-Link Resolution Check** — run before *every* module is marked complete, not deferred to the end of a path. Both Reference Curricula were built module-by-module with this check applied at each step; the result, verified in this sprint, is zero remaining "(coming soon)" placeholders anywhere in either path that had a resolvable target.

A new learning path should, in order:
1. Produce an architecture proposal (structure, sections, module list, word-count estimates, Review/Solutions strategy, Application-Module strategy, capstone approach) using this certification's Section 1–2 rules as the default, explicitly flagging any point where evidence justifies a deviation — the same 10-point structure API Testing's own proposal followed.
2. Get the proposal approved before writing module content.
3. Build section by section, running the Cross-Link Resolution Check and full validation (`npm run build`, `npm run validate:diagrams`, slug/metadata/dead-link checks) at every section boundary.
4. Flag — don't silently resolve — any point where a governance decision, a new curriculum pattern, or a real documentation/content contradiction is discovered.
5. Update `LEARNING_PATHS.md` with an "As Shipped" note for every section, including any deviation from the original proposal and why.

---

## Certification Scope and Limits

This certification covers **structure and process** — the patterns in Sections 1–3 above, verified working identically across two independently-built paths. It does not certify:
- Editorial/QA sign-off beyond this sprint's audit (see the Consolidated Engineering Review for this sprint's specific findings)
- Production deployment readiness (`QUALITY_GATES.md`'s post-deployment gates remain unmet — no public URL yet)
- Content accuracy beyond what's been reviewed in the Engineering Reviews already delivered for each batch

**Next path**: with ten certified Reference Curricula now shipped (Manual Testing, API Testing, Automation Testing, Database Testing, Performance Testing, AI for QA, Mobile Testing, Security Testing, Interview Preparation, Career & Leadership — 208 modules total across the certified curricula as of today, 225 including Foundations; individual certified-at counts above sum to 206/223 since Interview Preparation grew by 2 modules after its 2026-08-07 certification), the user's own stated direction is to pause new-curriculum work again: decide the next learning path based on actual project goals and user/community feedback, not automatically add an eleventh path. Whichever path comes next should still be architected as a proposal against this certification's defaults, following the nine most recent paths' own example of a written architecture proposal reviewed and approved before any module content is written — but the trigger for starting it is feedback and deliberate decision, not this document alone.
