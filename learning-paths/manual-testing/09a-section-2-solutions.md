---
title: "Manual Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — which technique fits each scenario, and why the alternatives fall short."
keywords: ["test design technique selection", "boundary value analysis", "decision table testing", "state transition testing", "error guessing"]
difficulty: "beginner"
time_to_read: "8 min"
last_reviewed: "2026-08-04"
---

# Section 2 Solutions

These are the answers to [Error Guessing](/learning-paths/manual-testing/error-guessing)'s Section 2 Knowledge Check. If you haven't attempted the five scenarios yet, do that first — the value of a Knowledge Check comes from making your own decision before checking it against reasoning here, not from reading the answer first.

## Scenario 1: Hotel Booking Guest Count (1–8 people)

**Correct technique**: Boundary Value Analysis, primarily — this is a single numeric input with a clear minimum and maximum.

**Why it's correct**: The field has exactly the shape BVA targets: a defined range where off-by-one defects are the most likely failure mode. Test 0 (rejected), 1 (accepted, minimum), 2 (accepted), 7 (accepted), 8 (accepted, maximum), 9 (rejected).

**Why the alternatives are less appropriate**: Equivalence Partitioning has a role here too — technically the valid range 1–8 is one partition — but with only 8 possible valid values, the range is small enough that BVA alone provides strong coverage without needing a separate partitioning exercise. Decision Tables, State Transitions, and Pairwise Testing don't apply — there's no second interacting condition, no history-dependent behavior, and no multi-variable combination space here.

**Real-world reasoning**: Small, single-input numeric ranges are the clearest, most direct BVA use case in the entire section — this scenario is deliberately close to the module's own worked examples.

## Scenario 2: Airline Check-In (Time-to-Departure States + Baggage)

**Correct technique**: State Transition Testing for the time-to-departure behavior, combined with Decision Table Testing for how it interacts with the separate baggage condition.

**Why it's correct**: "More than 24 hours away," "within 24 hours," and "already checked in" are genuinely states — the system's behavior depends on which one currently applies, and there are real transitions between them (time passing moves a booking from one state to the next). The baggage condition is a second, independent factor that combines with state — exactly the shape Decision Table Testing targets when a second condition needs to be tested against each relevant state.

**Why the alternatives are less appropriate**: BVA and Equivalence Partitioning don't fit — there's no single numeric range being tested here. Pairwise Testing would be overkill for just two factors (state and baggage) — that variable count doesn't yet justify combinatorial reduction; a small, explicit decision table is more direct and just as manageable.

**Real-world reasoning**: This scenario deliberately combines two techniques from the section, because real features often need more than one — recognizing that a state-driven system needs Decision-Table-style combination logic layered on top is a genuinely advanced judgment call, not a beginner-level "pick one" decision.

## Scenario 3: Video Streaming App (6 Devices × 4 Tiers × 3 Regions, One Week to Test)

**Correct technique**: Combinatorial and Pairwise Testing.

**Why it's correct**: 6 × 4 × 3 = 72 full combinations, and one week doesn't allow exhaustive testing of all 72. This is a textbook combinatorial explosion scenario — pairwise reduction produces a much smaller, defensible test set guaranteeing every device-tier, tier-region, and device-region pair is covered.

**Why the alternatives are less appropriate**: BVA and Equivalence Partitioning don't apply — these aren't numeric ranges or simple valid/invalid classes, they're independent configuration variables. Decision Table Testing would technically work but would require reasoning about all 72 combinations explicitly, which is exactly the scale problem pairwise reduction exists to solve — at 3 variables with multiple values each, pairwise is the more practical tool. State Transition Testing doesn't apply; there's no history-dependent behavior described.

**Real-world reasoning**: The specific detail "one week to test" is the signal — it's a direct statement that exhaustive testing isn't feasible, which is exactly the condition that should trigger reaching for pairwise reduction instead of trying to brute-force a smaller ad hoc subset.

## Scenario 4: Password Reset States

**Correct technique**: State Transition Testing.

**Why it's correct**: "No reset requested," "reset link sent," "reset link used," and "reset link expired" are explicitly named states, with clear real-world transitions between them (requesting a reset, clicking the link, the link expiring). This is close to the module's own ATM and login examples in structure.

**Why the alternatives are less appropriate**: None of the other five techniques address history-dependent behavior — BVA, Equivalence Partitioning, Decision Tables, and Pairwise Testing all evaluate conditions fresh, without reference to what state the system was already in. Error Guessing could supplement this (testing what happens if a reset link is clicked twice, for instance) but isn't the primary technique for mapping the states themselves.

**Real-world reasoning**: Whenever a requirement uses words like "sent," "used," or "expired" to describe a feature, that's close to a direct signal that the feature has real states worth mapping explicitly — the same instinct State Transition Testing's own module teaches.

## Scenario 5: New Tester, Unfamiliar Domain, One Week to Contribute

**Correct technique**: The five systematic techniques first, applied to whatever specific features are assigned — Error Guessing is the wrong primary technique here, which is the actual point of this scenario.

**Why it's correct**: Error Guessing's value depends directly on accumulated domain experience, which this tester explicitly doesn't have yet. Leaning on the systematic techniques (which don't require domain-specific pattern recognition to apply correctly) lets a new tester contribute real, defensible coverage immediately, while their domain-specific Error Guessing intuition builds over time.

**Why the alternative is less appropriate**: Reaching for Error Guessing first, without domain experience behind it, risks producing exactly the unsystematic "try things that come to mind" testing the very first module in this path warned against — the opposite of what Error Guessing is supposed to be.

**Real-world reasoning**: This scenario is deliberately the trickiest of the five, because the "obvious"-sounding answer (a new domain calls for exploratory, intuition-driven testing) is actually backwards. It directly tests whether a learner internalized Error Guessing's own stated limitation — that it works best built on a systematic foundation, not as a substitute for one — rather than just recalling that Error Guessing exists.

---

## What This Confirms

If your own answers differed from these — especially on Scenarios 2 and 5, the two built to require combining techniques or recognizing a technique's limitation — that's useful information about where to focus a second pass through Section 2, not a sign the section failed to teach the material. Judgment like this is exactly what Section 2 exists to build, and it's normal for it to take more than one pass to fully land.

**Continue to Section 3**: [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases), where the techniques from Section 2 get turned into test cases a real team can execute.
