---
title: "SDLC, STLC, and Process Interviews"
sidebar_label: "06 SDLC, STLC, and Process Interviews"
description: "Explaining testing's place in the delivery lifecycle and shift-left reasoning conversationally, closing Section 2's arc of applying Manual Testing's own technique under interview conditions."
keywords: ["SDLC interview questions", "STLC interview questions", "shift-left interview", "QA process interview questions"]
difficulty: "intermediate"
time_to_read: "8 min"
last_reviewed: "2026-08-06"
---

# SDLC, STLC, and Process Interviews

**Prerequisites**: You should already have completed [Defect and Bug-Handling Interviews](/learning-paths/interview-preparation/defect-and-bug-handling-interviews).
**Leads to**: After this, you'll be ready for [Section 2 Review](/learning-paths/interview-preparation/section-2-review).

"Walk me through the software development lifecycle" and "what does shift-left mean to you" are questions that reward a completely different kind of answer than most candidates give — not a diagram recitation, but a demonstration that you actually understand where testing creates value, and can say so in plain, conversational terms.

## Why This Matters

**A candidate who recites the diagram.** Asked to explain the SDLC, a candidate lists the phases in order — requirements, design, development, testing, deployment, maintenance — accurately, the way a textbook would. Asked a natural follow-up, "so where does testing actually add the most value in that cycle," the candidate repeats that testing happens "after development, before deployment" — the same phase-recitation, with nothing added about *why* that placement matters or whether it's even the right placement.

**A candidate who explains the value, not just the diagram.** A different candidate, given the same prompt, briefly names the phases, then immediately pivots to the actual point: "testing's value is highest the earlier it happens — a requirements ambiguity caught before development starts costs almost nothing to fix; the same ambiguity caught as a production defect costs enormously more." Asked about shift-left specifically, they give a concrete example — reviewing a requirement document and catching an unspecified edge case before a single line of code exists — reusing [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc)'s own core lesson conversationally, not as a memorized phrase.

Both candidates know the SDLC's phases. Only one of them demonstrated understanding *why* the sequence matters.

## Explaining Process Reasoning, Not Reciting It

**Lead with value, not vocabulary**: per [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc)'s own central point, the cost of a defect grows the later it's caught — this is the actual insight behind "shift-left," and stating it directly, with a concrete example, is far stronger than defining the term.

**Use your own real example, not a hypothetical**: if you've ever caught a requirement ambiguity before development began, or wished you had, that's the exact story this question is inviting — a real example beats a generic, textbook one every time.

**Keep the phase-naming brief**: the phases themselves (requirements, design, development, testing, deployment) are table stakes — spend most of your answer on the *reasoning* about value and timing, not the list itself.

## What the Interviewer Is Really Evaluating

- **Understanding versus memorization**: can you explain *why* the sequence matters, not just recite its steps
- **Real, not hypothetical, grounding**: is there an actual example behind your shift-left explanation
- **Conversational clarity**: can you explain a process concept the way you'd explain it to a colleague, not the way a textbook would

## Common Mistakes

**Mistake 1: Answering an SDLC or shift-left question with pure phase-recitation and no reasoning about value.**
This module's opening scenario's entire gap traces to exactly this — an accurate list with no demonstrated understanding of why the order matters.

**Mistake 2: Defining "shift-left" as a phrase without a concrete example behind it.**
"Testing earlier in the cycle" is the definition; a specific instance of catching something early is the actual evidence you understand it.

**Mistake 3: Treating this as a purely theoretical question when you have real, relevant experience to draw on.**
Even a small, real example (reviewing a requirement doc, flagging an ambiguity in a planning meeting) is stronger than a generic, hypothetical answer.

## Interviewer Expectations

A strong candidate briefly names the relevant phases, then spends the majority of their answer explaining the reasoning about value and cost-of-timing, grounded in a real or realistic specific example rather than an abstract definition.

:::note From the Field
A candidate asked "what does shift-left testing mean to you" answered in under a minute: a one-sentence definition, followed immediately by a specific example — reviewing a user story before sprint planning and catching that it never specified behavior for a failed payment, flagging it in the same meeting, before any code existed. The interviewer's own notes cited this as "the clearest shift-left answer of the day," specifically because it was grounded in something real rather than the standard textbook phrasing every other candidate had used.
:::

:::tip Senior QA Insight
A newer candidate treats "explain the SDLC" as a request to prove they know the diagram. A senior candidate treats it as an invitation to demonstrate understanding of *why* testing's timing matters — and answers accordingly, spending most of their time on reasoning and a real example, not the phase list itself.
:::

## Mini Challenge

**Scenario**: You're asked, "How do you think about quality across the development lifecycle, not just during the testing phase?"

**Your task**: Write a response that names the relevant SDLC concept briefly, then spends most of your answer on a specific, real or realistic example of quality work happening outside the traditional "testing phase."

## Key Takeaways

- SDLC and shift-left questions reward explained reasoning about value and timing, not accurate phase-recitation alone.
- The strongest shift-left answers are grounded in a real, specific example, not just the definition of the term.
- Keep phase-naming brief; spend the majority of your answer on why the sequence and timing actually matter.
- This is a conversational-clarity question as much as a technical-knowledge one — explain it the way you would to a colleague.

---

## What You Just Learned

- Why SDLC and shift-left questions reward explained reasoning over accurate phase-recitation
- How to ground a shift-left answer in a real, specific example rather than the term's textbook definition
- Why spending most of your answer on reasoning about value, not phase-naming, demonstrates real understanding
- How this section's own applied-technique theme — reusing existing TestAtlas content conversationally — closes here

**Next:** [Section 2 Review](/learning-paths/interview-preparation/section-2-review)

## Related Topics

- [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc) — The shift-left principle this module applies to a specific, conversational interview answer
- [Defect and Bug-Handling Interviews](/learning-paths/interview-preparation/defect-and-bug-handling-interviews) — The demonstrated-judgment-over-vocabulary principle this module applies to process questions specifically
- [How QA Interviews Are Structured](/learning-paths/interview-preparation/how-qa-interviews-are-structured) — The round-recognition skill this module's process questions are typically embedded within

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ SDLC and shift-left questions reward explained reasoning about value and timing, not accurate phase-recitation.

✓ Ground your shift-left answer in a real, specific example, not just the term's definition.

✓ Keep phase-naming brief — spend most of your answer on why the sequence and timing matter.

✓ A real or realistic example beats a generic, hypothetical one every time.

✓ Explain process concepts the way you'd explain them to a colleague, not the way a textbook would.
