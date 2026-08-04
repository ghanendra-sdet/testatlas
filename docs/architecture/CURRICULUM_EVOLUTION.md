# Curriculum Evolution

A record of significant curriculum architecture decisions over time — what changed, why, and what stayed as originally shipped. This document is for contributors, not learners: it preserves the historical reasoning behind structural changes without cluttering `CONTENT_MODEL.md` or `LEARNING_PATHS.md`, which describe the *current* standard, not its history.

**Standard for adding an entry**: a change belongs here when it alters the curriculum's structural pattern (not its content) and was adopted only after a problem recurred, not on first appearance — see the entry below for why that bar matters.

---

## Entry 1: Section Review + Solutions Pages (Manual Testing Section 4, 2026-08-04)

**Previous approach**: Section-closing content (a "Section N Complete" summary, a technique/decision matrix, and a Knowledge Check) was appended directly onto the last teaching module in each section, before that module's own Glossary. Knowledge Check answers lived on a separate Solutions page, but the summary, matrix, and questions themselves stayed bundled into the final module.

**New approach**: Starting with Manual Testing Section 4, section-closing content moved entirely off the last teaching module and onto two dedicated pages of their own: a **Section N Review** page (summary, decision/selection matrix, Knowledge Check, transition to the next section) and a **Section N Solutions** page (full reasoning for every Knowledge Check answer), both following the established `slug:` and `sidebar_label` conventions documented in `CONTENT_MODEL.md`.

**Reason**: The bundled pattern recurred three times — Module 3 (Thinking Like a Tester), Module 9 (Error Guessing), and Module 13 (Test Data Design) — and each time it inflated that module's word count past the normal target band (2,478, 2,995, and 3,161 words respectively, versus a typical module's 2,000–2,600). The pattern wasn't adopted or changed after the first occurrence — it took three repetitions to confirm this was a structural problem, not one module running long for its own content reasons. This is the deliberate bar for this document: a pattern earns a permanent architecture decision after repeated evidence, not a single instance, even a clean one.

**Benefits observed**: Module 16, the first section-closer built under the new pattern, landed at 2,327 words — back in the normal range, with no section-closing content bundled in. The Review and Solutions pages are independently linkable and revisitable (useful before an interview, not just on first read-through), and every teaching module's length is now consistent regardless of whether it happens to close a section.

**Migration policy**: Sections 1–3 are **not retrofitted**. Their existing bundled pattern stays exactly as published — Module 3's Section 1 Complete content, Module 9's Section 2 Complete content, and Module 13's Section 3 Complete content remain inline, permanently. This means Manual Testing has two structurally different section-closing patterns coexisting by design: Sections 1–3 use the original bundled approach, Section 4 onward uses the dedicated-page approach. This is a deliberate, accepted inconsistency — retrofitting three already-shipped, already-reviewed modules for structural uniformity alone was judged not worth disturbing content that was already correct, just structured differently. Future learning paths adopt the dedicated-page pattern from their first section.

---

## Entry 2: Application Modules as a Distinct Content Type (Manual Testing Section 6, 2026-08-04)

**Previous approach**: Every module in the path, regardless of purpose, followed the same instruction-module template — Why This Matters, Common Mistakes, Best Practices, Mini Challenge, Quick Revision, From the Field, Senior QA Insight, Common Interview Mistake, tagged `difficulty: "beginner"`.

**New approach**: Modules that apply previously-taught material to a real scenario, rather than teaching something new, are recognized as a distinct type — **Application Modules** — with deliberately lighter structure: no Mini Challenge or the three recurring callouts (From the Field, Senior QA Insight, Common Interview Mistake), and tagged `difficulty: "intermediate"`. Quick Revision is retained — every shipped Application Module keeps it, since it's a low-cost, high-value scan aid regardless of whether the module teaches new content or synthesizes prior content. Module 22 (a synthesis of cross-cutting mistake patterns) additionally has no separate "Common Mistakes" heading, since the module's entire content already is that, organized as numbered patterns instead.

**Reason**: Sections 2–5's instruction modules teach one technique or artifact each, and benefit from the full scaffolding — a Mini Challenge to practice the specific new skill, the three narrative callouts to add color and interview-readiness. Modules 20–23 teach nothing new; they combine techniques already taught, so a Mini Challenge has no new skill to isolate and practice, and the narrative callouts have no new field lesson or interview-mistake pattern specific to *this* module to add. Quick Revision doesn't have this problem — it summarizes whatever the module actually covers, new or synthesized, so it stays useful either way.

**Benefits observed**: Modules 20–23 landed at 1,707, 1,613, 1,815, and 2,035 words respectively — tighter and more focused than the instruction modules around them, without needing to pad toward a template's expected sections. Confirmed consistent across all four modules during the Curriculum Consistency Sprint audit (see `LEARNING_PATHS.md`'s Consistency Sprint Findings), not just a one-off editorial choice for a single module.

**Correction (2026-08-04, during API Testing v1.0 Section 7 planning)**: This entry originally stated Application Modules also omit Quick Revision. That was inaccurate — Modules 20, 21, and 23 all shipped with a Quick Revision section; only Mini Challenge and the three callouts were actually, consistently omitted. Module 22 additionally shipped with a Mini Challenge and two of the three callouts (Senior QA Insight, From the Field), a minor inconsistency against even the corrected pattern, discovered during the same review and left as-is — not retrofitted, per this entry's own migration policy of not disturbing already-shipped, already-reviewed content for structural uniformity alone.

**Migration policy**: Applies to Manual Testing Section 6 (Modules 20–21) and Section 7 (Modules 22–23) as shipped — not retrofitted onto anything earlier, since no earlier module in this path is an application module. Future learning paths should identify their own application/synthesis sections during curriculum design (not after the fact) and apply this lighter structure (Quick Revision retained; Mini Challenge and the three callouts omitted) to them from the start, tagged `difficulty: "intermediate"` for consistency with this precedent.

---

## Entry 3: Recurring Elements Formalization Timeline (Manual Testing Modules 1–7, discovered 2026-08-04 during the TestAtlas Platform Consistency Sprint)

**What was found**: `CONTENT_MODEL.md`'s Definition of Done lists all five recurring elements (From the Field, Senior QA Insight, Mini Challenge, Common Interview Mistake, Quick Revision) as required for every Manual Testing module, with no stated exception. A repository-wide audit found Modules 1–7 don't fully match this: Module 1 has none of the five; Modules 2–4 have three (From the Field, Senior QA Insight, Mini Challenge); Modules 5–7 have four (adding Common Interview Mistake); Module 8 onward has all five.

**Why this isn't a defect**: this is exactly what `CONTENT_MODEL.md`'s own description of the pattern already implies — the five elements were "proven out informally across Manual Testing's first two batches," meaning they were adopted incrementally as the pattern was discovered, not handed down complete before Module 1 was written. The progression found (0 → 3 → 4 → 5 elements, moving forward through the module sequence) is the visible trace of that incremental adoption, not scattered, random omissions.

**Decision**: documented as an accepted historical exception, not retrofitted. This is the same policy already applied to Sections 1–3's bundled Section-closing pattern (Entry 1) and Module 22's own extra elements (Entry 2's Correction) — already-shipped, already-reviewed content doesn't get rewritten to match a pattern that postdates it, absent a genuine content defect (which this isn't).

**`CONTENT_MODEL.md` correction**: its Definition of Done now notes this exception explicitly (Modules 1–7) alongside the existing Foundations exception, rather than stating an unconditional requirement the shipped path doesn't actually meet.

**Migration policy**: Applies to Manual Testing Modules 1–7 as shipped. Not a precedent for skipping the five-element requirement on new modules going forward — Module 8 onward already demonstrates full, correct adoption, and every module in API Testing (which had no such formalization history to work through) is held to the complete five-element standard from Module 1 onward.
