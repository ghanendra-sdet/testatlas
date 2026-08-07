---
title: "Live Coding and Debugging Interviews"
sidebar_label: "10 Live Coding and Debugging Interviews"
description: "Reading and debugging someone else's broken automated test under interview conditions, reusing Diagnosing Flaky Tests' own diagnostic discipline, closing Section 3's applied-technique arc."
keywords: ["live debugging interview", "flaky test interview question", "read broken code interview", "automation debugging interview"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-08"
---

# Live Coding and Debugging Interviews

**Prerequisites**: You should already have completed [Automation Framework Interviews](/learning-paths/interview-preparation/automation-framework-interviews).
**Leads to**: After this, you'll be ready for [Section 3 Review](/learning-paths/interview-preparation/section-3-review).

Being handed someone else's broken test and asked "why is this failing" is a genuinely different skill from writing your own test from scratch — it's reading, not authoring. This module closes Section 3 by applying [Diagnosing Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests)'s own diagnostic discipline to that specific interview moment.

## Why This Matters

**A candidate who guesses at the fix.** Handed a failing test with an intermittent timeout, a candidate immediately proposes increasing the timeout value, without reading the surrounding code or asking a single question about when the failure happens. The fix might even make the test pass more often — but it treats a symptom without understanding the cause, and the interviewer has no evidence the candidate actually diagnosed anything.

**A candidate who diagnoses before proposing a fix.** A different candidate, given the identical failing test, first reads through the test's setup and the page interaction it depends on, then asks: "does this fail consistently, or only sometimes?" Learning it's intermittent, they reason aloud: "that points to a timing issue rather than a logic error — is this waiting for a fixed pause, or an explicit condition?" Finding a hardcoded `sleep()` call, they identify the actual cause — the same fixed-pause-versus-explicit-wait distinction [Diagnosing Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests) already teaches — before proposing the fix.

Both candidates might end up proposing a similar fix. Only one of them demonstrated they understood *why* it was the right one.

## Diagnosing Before Fixing, Live

**Read before you touch anything**: resist the urge to immediately start editing — read the test, its setup, and what it's actually asserting first, out loud if it helps structure your thinking.

**Ask whether the failure is consistent or intermittent**: this single question, reusing [Diagnosing Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests)'s own framing, immediately narrows the diagnosis space — a consistent failure suggests a logic error; an intermittent one suggests timing or environment.

**State your hypothesis before testing it**: "I think this is a timing issue because of the hardcoded wait — let me check" is a stronger, more evaluable statement than silently changing the code and seeing what happens.

## What the Interviewer Is Really Evaluating

- **Diagnosis before action**: does the candidate read and reason before editing, or start guessing immediately
- **Structured questions**: does the candidate ask the specific, narrowing question (consistent vs. intermittent) that actually advances the diagnosis
- **Explaining the fix, not just applying it**: can the candidate state *why* their proposed fix addresses the actual root cause

## Common Mistakes

**Mistake 1: Proposing a fix before reading and understanding the failing code.**
This module's opening scenario's entire gap traces to exactly this — a plausible-sounding fix with no demonstrated diagnosis behind it.

**Mistake 2: Never asking whether the failure is consistent or intermittent.**
This is the single highest-value diagnostic question in this exact scenario, and skipping it wastes the fastest path to narrowing the actual cause.

**Mistake 3: Silently changing code and re-running it repeatedly instead of stating a hypothesis first.**
This looks like trial and error to an interviewer, even when the underlying instinct is correct — stating the hypothesis first makes the reasoning visible.

## Best Practices

**Practice 1: Always read and understand the failing code before proposing or making any change.**
This is the single practice that separates real diagnosis from a lucky guess.

**Practice 2: Ask whether the failure is consistent or intermittent as your first diagnostic question.**
This immediately narrows the space between a logic error and a timing/environment issue.

**Practice 3: State your hypothesis explicitly before testing it, so your reasoning is visible even if the first hypothesis turns out to be wrong.**
A wrong-but-stated hypothesis, corrected aloud, is stronger than a silent guess that happens to work.

:::note From the Field
A candidate handed a test failing only in a CI environment, never locally, immediately asked: "does the CI environment run at a different screen resolution or with a slower page load than local?" This single question — narrowing toward an environment-specific timing or rendering difference rather than a logic error — led directly to the actual cause (a responsive layout element that hadn't rendered yet under CI's slower load time). The interviewer's feedback specifically credited the question itself as evidence of real, experience-based debugging instinct.
:::

:::tip Senior QA Insight
A newer candidate treats a debugging exercise as a race to produce a working fix. A senior candidate treats it as a demonstration of diagnostic process — the actual fix often matters less than whether the interviewer watched a structured, narrowing line of reasoning get there.
:::

## Mini Challenge

**Scenario**: You're handed a test that fails only on the first run after a fresh database seed, but passes on every subsequent run.

**Your task**: Write the first diagnostic question you'd ask, and your reasoning for why it's the highest-value question to ask first.

## Key Takeaways

- Read and understand failing code before proposing or making any change.
- "Is this consistent or intermittent" is the single highest-value first diagnostic question for a failing test.
- State your hypothesis explicitly before testing it, making your reasoning visible even when a first guess is wrong.
- A debugging exercise evaluates diagnostic process at least as much as the final fix.

---

## What You Just Learned

- Why reading and understanding failing code before touching it is the foundation of a strong live-debugging answer
- How to use the consistent-versus-intermittent question to immediately narrow a diagnosis
- Why stating a hypothesis explicitly, before testing it, makes your reasoning visible to an interviewer
- How this section's applied-technique theme closes by reusing Automation Testing's own diagnostic discipline directly

**Next:** [Section 3 Review](/learning-paths/interview-preparation/section-3-review)

## Related Topics

- [Diagnosing Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests) — The diagnostic discipline this module applies directly to a live interview exercise
- [Automation Framework Interviews](/learning-paths/interview-preparation/automation-framework-interviews) — The reasoning-over-features theme this module extends into a live debugging context
- [SQL and Database Interview Scenarios](/learning-paths/interview-preparation/sql-and-database-interview-scenarios) — The same narrate-before-acting discipline, applied to a different live technical exercise

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Read and understand failing code before proposing or making any change.
✓ Ask whether the failure is consistent or intermittent as your first diagnostic question.
✓ State your hypothesis explicitly before testing it.
✓ A debugging exercise evaluates diagnostic process as much as the final fix.
✓ A wrong-but-stated hypothesis, corrected aloud, is stronger than a silent guess.
