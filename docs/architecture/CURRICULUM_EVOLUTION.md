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
