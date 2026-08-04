# Reference Curriculum Certification

**Certified 2026-08-04, during the TestAtlas Platform Consistency Sprint.**

**Manual Testing v1.0** (23 modules) and **API Testing v1.0** (21 modules) are certified as TestAtlas's **Reference Curricula** — the standard every future learning path is built against. This document exists so that standard is explicit and portable, not something a future contributor has to reverse-engineer by reading 44 modules and eight architecture documents.

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
| **Section Review + Solutions dedicated pages**, `slug: section-N-review` / `section-N-solutions` | `CURRICULUM_EVOLUTION.md` Entry 1 | Manual Testing from Section 4 onward (recurred 3x in the bundled pattern before this was formalized — see Entry 1's own evidence bar); API Testing from Section 1 onward (future paths inherit the dedicated-page pattern from day one, per Entry 1's migration policy) |
| **Application Modules** — `difficulty: "intermediate"`, Quick Revision retained, Mini Challenge and the three narrative callouts omitted, no Section Review/Solutions | `CURRICULUM_EVOLUTION.md` Entry 2 (corrected 2026-08-04) | Manual Testing Modules 20–21, 23 (Module 22 is a known, deliberately-unretrofitted exception — see Entry 2's Correction); API Testing Modules 18–21 |
| **AtlasBank** as the default recurring domain, with explicit exception for a genuinely better-fitting domain | `STYLE_GUIDE.md` | Manual Testing from Section 3 onward; all of API Testing (extended 2026-08-04) |

**Governance rule this table itself demonstrates**: a pattern is formalized into a rule only after it recurs at least 3 times with evidence, not on first appearance (Entry 1's own standard). Future contributors proposing a new recurring pattern should hold it to the same bar — one clean instance is not yet a rule.

## 3. Governance Rules

1. **Documentation describes the shipped product, not the plan for it.** `LEARNING_PATHS.md` is updated after every batch/section, not just at path completion — verified current as of this certification (21/21 API Testing modules, 23/23 Manual Testing modules, both reflected accurately).
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

**Next path** (per the user's own stated intent): Automation Testing, which should be architected as a proposal against this certification's defaults before any module content is written.
