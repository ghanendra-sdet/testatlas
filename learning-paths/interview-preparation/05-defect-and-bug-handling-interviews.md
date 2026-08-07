---
title: "Defect and Bug-Handling Interviews"
sidebar_label: "05 Defect and Bug-Handling Interviews"
description: "Explaining severity and priority judgment and defect-lifecycle reasoning conversationally, including how to discuss a real disagreement with a developer professionally."
keywords: ["severity vs priority interview", "defect lifecycle interview question", "bug triage interview", "QA developer disagreement interview"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-06"
---

# Defect and Bug-Handling Interviews

**Prerequisites**: You should already have completed [Test Design Interviews](/learning-paths/interview-preparation/test-design-interviews).
**Leads to**: After this, you'll be ready for [SDLC, STLC, and Process Interviews](/learning-paths/interview-preparation/sdlc-stlc-and-process-interviews).

"How do you decide severity versus priority?" and "tell me about a time you disagreed with a developer about a bug" are two of the most common defect-handling questions in QA interviews — and both are really asking whether you can reason about risk and communicate about conflict professionally, not whether you know the textbook definitions.

## Why This Matters

**A candidate who recites definitions.** Asked to explain severity versus priority, a candidate correctly states: "severity is how bad the bug is, priority is how soon it needs fixing." The definition is accurate, but when the interviewer follows up with "give me an example where they'd differ," the candidate hesitates and produces a vague, unconvincing example — the definition was memorized, not something they'd actually reasoned through on a real defect.

**A candidate who reasons through a concrete case.** A different candidate, given the identical follow-up, answers immediately with a specific example: a typo in a rarely-visited legal disclaimer page (low severity, low priority) versus a crash on the app's splash screen that only affects a small, soon-to-be-deprecated device model (high severity, but arguably lower priority than a more widely-impactful medium-severity issue) — demonstrating the judgment call itself, not just the vocabulary describing it.

Both candidates knew the correct definitions. Only one of them could actually apply the judgment those definitions describe.

## Reasoning About Risk, Conversationally

**Severity vs. priority, demonstrated not defined**: per [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle)'s own distinction, severity is about technical impact and priority is about business urgency — the strongest interview answer names a specific example where the two genuinely diverge, since that's what proves the concept is understood, not just memorized.

**Disagreement stories, framed professionally**: when discussing a real disagreement with a developer, focus on the evidence you brought (a reproduction, a specific impact argument) and the outcome, not blame — per [Presenting Your Testing Work Credibly](/learning-paths/interview-preparation/presenting-your-testing-work-credibly)'s own specificity standard, applied here to a professionally sensitive topic.

**The lifecycle as a conversation, not a diagram recitation**: an interviewer asking "walk me through what happens when you find a bug" wants your actual practice — how you verify it's reproducible, how you write it up, how you track it to resolution — not a recitation of state names.

## What the Interviewer Is Really Evaluating

- **Judgment, not vocabulary**: can you apply severity/priority reasoning to a concrete example, not just define the terms
- **Professionalism under a sensitive topic**: does a disagreement story stay focused on evidence and outcome, or drift into blame
- **Ownership of the full lifecycle**: do you describe your own actual practice for tracking a defect through resolution, not an abstract process

## Common Mistakes

**Mistake 1: Reciting the textbook definition of severity vs. priority without a concrete example ready.**
This module's opening scenario's entire gap traces to exactly this — an accurate definition with no demonstrated judgment behind it.

**Mistake 2: Framing a developer-disagreement story around blame ("they just didn't want to fix it") instead of evidence and outcome.**
This reads as a red flag about how you'll handle future disagreements, regardless of whether you were technically right.

**Mistake 3: Describing the defect lifecycle as an abstract diagram instead of your own actual, specific practice.**
"New, then triaged, then assigned, then fixed, then verified, then closed" answers the question technically but shows nothing about how you personally handle it.

## Interviewer Expectations

A strong candidate answers a severity/priority question with a concrete, specific example ready immediately, and discusses any developer disagreement in terms of the evidence they brought and the eventual outcome, never in terms of blame.

:::note From the Field
A candidate asked about a disagreement with a developer described, in specific detail, presenting a reproducible data-corruption case with clear before/after evidence, and framed the developer's initial pushback as reasonable given the information they'd had at the time — closing with "once they saw the reproduction, they agreed immediately, and we added a regression test together." The interviewer's feedback specifically noted the complete absence of blame framing as a positive signal about how the candidate would function on their team.
:::

:::tip Senior QA Insight
A newer candidate treats severity-vs-priority as a vocabulary question to answer correctly. A senior candidate treats it as an invitation to demonstrate real risk judgment with a specific, ready example — because the definition itself takes ten seconds to state, and the entire rest of the answer's value comes from what's said after it.
:::

## Mini Challenge

**Scenario**: You're asked, "Tell me about a time a developer disagreed with your bug report."

**Your task**: Write a response focused entirely on the evidence you presented and the eventual outcome, with zero blame-framed language.

## Key Takeaways

- Severity and priority questions evaluate demonstrated judgment on a concrete example, not memorized definitions.
- A developer-disagreement story should focus on evidence and outcome, never blame, regardless of who was technically right.
- Describe your own actual defect-tracking practice, not an abstract recitation of lifecycle states.
- Having a specific, ready example prepared in advance is what separates a strong answer from a technically correct but unconvincing one.

---

## What You Just Learned

- Why severity-vs-priority questions evaluate demonstrated judgment, not just vocabulary
- How to frame a developer-disagreement story around evidence and outcome, never blame
- How to describe your own actual defect-handling practice instead of reciting an abstract lifecycle
- Why having a specific, concrete example ready in advance makes the difference in this class of question

**Next:** [SDLC, STLC, and Process Interviews](/learning-paths/interview-preparation/sdlc-stlc-and-process-interviews)

## Related Topics

- [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle) — The severity/priority distinction this module applies to a concrete, conversational interview answer
- [Presenting Your Testing Work Credibly](/learning-paths/interview-preparation/presenting-your-testing-work-credibly) — The specificity standard this module applies to a professionally sensitive topic
- [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports) — The evidence-based reporting discipline this module's disagreement stories draw on directly

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Severity/priority questions evaluate demonstrated judgment — always have a specific, concrete example ready.
✓ Frame developer-disagreement stories around evidence and outcome, never blame.
✓ Describe your own actual defect-tracking practice, not an abstract lifecycle recitation.
✓ Severity is technical impact; priority is business urgency — the strongest answer shows a case where they diverge.
✓ A ready, specific example is what separates a strong answer from a technically correct but unconvincing one.
