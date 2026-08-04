---
title: "Common Mistakes in Test Design"
sidebar_label: "22 Common Mistakes in Test Design"
description: "The recurring mistake patterns that cut across every technique in this path — and why prevention, not a longer checklist, is what actually closes them."
keywords: ["test design mistakes", "escaped defects", "test design anti-patterns", "QA best practices"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-04"
---

# Common Mistakes in Test Design

**Prerequisites**: You should already understand every module in Sections 2–6 of this path.
**Leads to**: After this, you'll be ready for the [Manual Testing Capstone](/learning-paths/manual-testing/manual-testing-capstone).

Every module in this path named mistakes specific to its own technique. This module is different — it steps back and asks which mistakes recur *across* techniques, in patterns visible only once you've seen the whole toolkit. These aren't new rules. They're the handful of underlying habits that, left unchecked, undermine almost any technique built on top of them.

## Pattern 1: Treating a Technique as Optional Once It Feels Familiar

Once a tester has applied Boundary Value Analysis or Decision Table Testing successfully a few times, there's a real temptation to start skipping the deliberate, written-out version and rely on a faster, informal approximation — "I know roughly where the boundaries are, I don't need to write them all out this time."

**How this leads to an escaped defect**: a tester at AtlasBank, experienced with BVA, mentally estimates a tier boundary for a new fee structure instead of writing out the full min−1/min/min+1/max−1/max/max+1 set. The mental estimate is off by one tier level from the actual requirement — an error the written-out technique would have caught immediately, since it forces an explicit comparison against the actual documented boundary, not a remembered approximation.

**Prevention**: familiarity with a technique should make it faster to execute, not optional to execute. The discipline is in writing the actual values down and checking them against the actual requirement, every time — not in mentally simulating the technique from memory.

## Pattern 2: Confusing Test Case Volume with Test Coverage

[Test Design Fundamentals](/learning-paths/manual-testing/test-design-fundamentals) opened this entire path with this exact mistake, and it recurs throughout — more test cases feels like more thoroughness, even when many of them are redundant.

**How this leads to an escaped defect**: a team proud of a large regression suite (thousands of test cases) discovers, after a real production defect, that dozens of those test cases were near-duplicates covering the same equivalence class, while a genuinely distinct partition — one this path's Equivalence Partitioning module would have flagged as needing its own representative test — had zero coverage at all. The suite's size created false confidence that obscured a real, structural gap.

**Prevention**: periodically ask "does this test case verify something distinct from what's already covered," not just "do we have enough tests." This is the exact discipline Section 3's [Reviewing Test Cases](/learning-paths/manual-testing/reviewing-test-cases) module built specifically to catch.

## Pattern 3: Designing Tests Only for What the Requirement Explicitly States

[From Requirements to Test Ideas](/learning-paths/manual-testing/from-requirements-to-test-ideas) taught that most requirements describe only the happy path by default. The mistake recurs even after learning this, because it's genuinely easier to test what's written than to actively hunt for what isn't.

**How this leads to an escaped defect**: a healthcare feature's requirement says patients can search for appointments by date — nothing about what happens with a date range containing zero results, or a malformed date entry. A tester who tests only the stated behavior ships a feature where a zero-result search displays a confusing blank screen instead of a clear "no appointments found" message — not a technically incorrect implementation of the written requirement, just an incomplete one.

**Prevention**: treat every requirement as an incomplete starting point, per this path's own Module 2, and actively apply the ambiguity-category checklist from that module before considering test design finished.

## Pattern 4: Applying One Familiar Technique to Every Situation

A tester who's grown confident with Decision Table Testing starts reaching for it even where State Transition Testing or Pairwise Testing would fit the actual risk shape better — comfort with one tool crowding out situational judgment.

**How this leads to an escaped defect**: a tester builds an elaborate decision table for an order-status feature that's actually a state machine — order status depends on the sequence of prior events, not just a fresh combination of current conditions. The decision table technically passes, but misses a defect that only appears in a specific *transition* sequence (canceling an order that's already mid-shipment), because the technique applied doesn't model sequence or history at all — exactly the gap [State Transition Testing](/learning-paths/manual-testing/state-transition-testing) exists to cover.

**Prevention**: before designing tests, explicitly ask which technique's underlying shape actually matches the feature — a single input with a range (BVA/Equivalence Partitioning), multiple conditions evaluated fresh (Decision Tables), or behavior that depends on history (State Transitions) — rather than defaulting to whichever technique feels most comfortable.

## Pattern 5: Writing the Expected Result as the Headline Outcome Only

[Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases) named this directly, and it recurs because the primary, obvious outcome is what naturally comes to mind first when writing a test case.

**How this leads to an escaped defect**: a test case for a scheduled transfer confirms "transfer is scheduled successfully" but never states, as part of the expected result, that the account balance should *not* decrease until the scheduled date arrives. The feature ships with a defect that deducts the balance immediately instead of on the scheduled date — technically passing the test case as written, because the test case never checked the detail that actually mattered.

**Prevention**: for every expected result, explicitly ask "what else should be true here, beyond the obvious outcome" before considering a test case complete.

## Pattern 6: Skipping Structured Technique Under Time Pressure, Even for Compliance-Critical Risk

[When to Use Structured vs. Exploratory Testing](/learning-paths/manual-testing/when-to-use-structured-vs-exploratory-testing) named this as the single factor that should almost never be overridden by convenience — and it's the mistake most tempting to make anyway, specifically because time pressure is exactly when a shortcut feels most justified.

**How this leads to an escaped defect**: this path's own insurance underwriting "From the Field" story showed this directly — a team's exploratory-testing comfort left them unable to answer a regulatory audit's request for systematic, provable coverage, because compliance risk had been tested with the wrong tool under deadline pressure.

**Prevention**: identify compliance-critical risk areas in advance, before time pressure hits, and treat structured technique there as non-negotiable regardless of deadline — a decision made calmly in advance, not improvised under pressure.

:::tip Senior QA Insight
Every pattern in this module has the same underlying shape: a shortcut that feels reasonable in the moment, taken specifically because the full discipline feels unnecessary *this time*. A senior tester doesn't have fewer moments of temptation to skip a step — they've just seen enough of these patterns recur to recognize the temptation itself as a signal worth pausing on, not evidence the shortcut is actually safe.
:::

:::note From the Field
A team reviewing a string of production incidents over one quarter found that nearly every incident traced back to one of a small handful of repeating patterns — not new, exotic failure modes, but the same few mistakes (informal boundary estimation, happy-path-only requirement coverage, technique mismatch) recurring across different features and different testers. Naming these patterns explicitly, and reviewing new test designs against them specifically before execution began, reduced escaped defects more in the following quarter than any single new technique the team adopted that same period — a reminder that avoiding recurring mistakes can matter as much as learning new techniques.
:::

## Mini Challenge

**Scenario**: Review your own Mini Challenge answers from three earlier modules in this path (your choice). For each, identify whether any of this module's six patterns applied to your original answer — even if it was technically correct, could it have been more efficient, more complete, or better-matched to the technique?

## Key Takeaways

- Six recurring patterns cut across this path's individual techniques: skipping a technique once it feels familiar, confusing volume with coverage, testing only the stated requirement, defaulting to a familiar technique regardless of fit, writing an incomplete expected result, and skipping structured technique under time pressure for compliance-critical risk.
- Each pattern is a shortcut that feels reasonable in the specific moment it's taken — recognizing the moment of temptation itself is the actual skill, more than memorizing the list.
- Prevention beats detection: each pattern has a specific, learnable habit that closes it, not just a longer checklist to remember.
- Reviewing recurring mistake patterns explicitly, across a whole team's real defects, can reduce escaped defects more than adopting any single new technique.

---

## What You Just Learned

- Six mistake patterns that recur across techniques, not within any single one
- How each pattern, left unchecked, has led to a real escaped defect in this module's examples
- The specific prevention habit for each pattern
- Why recognizing the moment of temptation to shortcut matters more than memorizing a list of mistakes

**Next:** [Manual Testing Capstone](/learning-paths/manual-testing/manual-testing-capstone)

## Related Topics

- [Reviewing Test Cases](/learning-paths/manual-testing/reviewing-test-cases) — The discipline that catches Pattern 2 (volume-versus-coverage) directly
- [From Requirements to Test Ideas](/learning-paths/manual-testing/from-requirements-to-test-ideas) — Where Pattern 3's ambiguity-category checklist comes from
- [When to Use Structured vs. Exploratory Testing](/learning-paths/manual-testing/when-to-use-structured-vs-exploratory-testing) — Where Pattern 6's compliance-critical warning was first taught

## Interview Questions

**Q1: What's a common mistake you've seen (or made) in test design, and how would you prevent it?**

*What to look for*: A specific, real pattern (not a generic "not testing enough") with a concrete prevention habit attached — evidence of genuine reflection, not a rehearsed answer.

**Q2: How do you decide which test design technique to apply to a new feature?**

*What to look for*: A candidate who describes matching technique to the feature's actual shape (single input with a range, multiple fresh conditions, history-dependent behavior) rather than defaulting to whichever technique they're most comfortable with — directly addressing Pattern 4.

---

## Glossary

**Escaped Defect**: A defect that reached production despite testing having occurred, typically traceable to a specific gap in test design rather than an absence of testing effort.

**Test Design Anti-Pattern**: A recurring, specific way test design goes wrong, distinct from a one-off mistake — recognizable and preventable once named.

## Quick Revision

Remember these five points:

✓ Familiarity with a technique should make it faster to execute correctly, not optional to execute at all.
✓ More test cases is not the same as more coverage — check for distinct coverage, not just volume.
✓ Requirements describe the happy path by default — actively hunt for what's unstated.
✓ Match technique to the feature's actual shape, not to whichever technique feels most comfortable.
✓ Compliance-critical risk should never be tested with a shortcut under time pressure — decide this in advance, not under deadline.
