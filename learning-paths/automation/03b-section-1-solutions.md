---
title: "Automation Testing — Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — applying frequency, stability, determinism, business risk, and novelty to five realistic automation-candidate scenarios."
keywords: ["automation candidate knowledge check", "test automation solutions"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/automation/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Forgot Password Flow

**Correct answer**: Strong automation candidate.

**Explanation**: This is [Introduction to Automation Testing](/learning-paths/automation/introduction-to-automation-testing)'s and [Selecting the Right Test Cases for Automation](/learning-paths/automation/selecting-the-right-test-cases-for-automation)'s criteria all satisfied at once — high frequency, deterministic result, stable feature. A textbook strong candidate.

**Alternative approaches considered**: There's no real case for leaving this manual — every criterion favors automation, and none of the anti-criteria (subjective judgment, active redesign, genuine exploration, extreme rarity) apply.

**Real-world reasoning**: Deliberately unambiguous, testing whether the basic criteria were understood before the more nuanced scenarios that follow.

## Scenario 2: Brand-New AI Chat Feature

**Correct answer**: Manual/exploratory, not automation, at this stage.

**Explanation**: This is [Automation vs. Manual Testing](/learning-paths/automation/automation-vs-manual-testing)'s core lesson directly — a brand-new feature with no usage history has unknown, unanticipated risk that exploratory testing is specifically suited to discover. There isn't yet a well-understood, stable behavior to write deterministic automated assertions against.

**Alternative approaches considered**: Automating the presumed happy path immediately would risk building against assumptions that turn out wrong once real usage patterns emerge — premature automation on an unstable, unfamiliar feature.

**Real-world reasoning**: Mirrors the module's own biometric-login exploratory example — a new-feature-category situation where discovery has to come before automation can even target the right things.

## Scenario 3: "Looks Appealing" Banner Check

**Correct answer**: Not a valid automation candidate — this fails the determinism criterion entirely.

**Explanation**: [Selecting the Right Test Cases for Automation](/learning-paths/automation/selecting-the-right-test-cases-for-automation)'s anti-criteria name this directly — "does this look appealing" is a subjective judgment call, not a deterministic pass/fail condition a script can evaluate. (Note: automated *visual regression* tooling — comparing pixels against a prior baseline — is a different, more specialized technique than what this path covers, and doesn't answer "is this appealing" either, only "did this change.")

**Alternative approaches considered**: Attempting to force this into an automated check (e.g., asserting specific colors or element positions) would test something narrower and different from what was actually requested ("appealing"), not a genuine automation of the original request.

**Real-world reasoning**: A direct application of the module's named anti-criterion, testing whether "subjective judgment disqualifies a candidate" was understood as a hard rule, not a soft preference.

## Scenario 4: Rare Compliance Audit-Log Export

**Correct answer**: Weak automation candidate — likely stays manual, despite being fully deterministic.

**Explanation**: This satisfies determinism but fails frequency badly — run twice a year, by two people. [Selecting the Right Test Cases for Automation](/learning-paths/automation/selecting-the-right-test-cases-for-automation)'s anti-criteria name extremely rare execution directly: the upfront cost of building and maintaining automation rarely pays back for something run this infrequently.

**Alternative approaches considered**: One could argue compliance-relevance alone justifies automation regardless of frequency — but low frequency specifically undermines automation's core value proposition (amortizing a build cost over many repeated runs), so this is a genuinely weak candidate on cost-benefit grounds even though the check itself is legitimate and important.

**Real-world reasoning**: Deliberately combines a "favorable" signal (deterministic, compliance-relevant) with a clearly disqualifying one (extreme rarity), testing whether a single strong signal was mistaken for sufficient justification on its own.

## Scenario 5: Account Balance Display

**Correct answer**: Strong automation candidate.

**Explanation**: Every criterion favors automation — near-universal frequency, deterministic correctness, two years of stability. This is effectively the same shape as the AtlasBank login/balance/transfer example from [Introduction to Automation Testing](/learning-paths/automation/introduction-to-automation-testing).

**Alternative approaches considered**: None seriously compete — no anti-criterion applies, and every positive criterion is satisfied strongly.

**Real-world reasoning**: A near-restatement of the module's own opening example, confirming the basic criteria transfer cleanly to a new but structurally identical case.

## Section 1 Complete

Across three modules, this section covered what automation is and isn't, why it's complementary to manual testing rather than a replacement for it, and a concrete framework for deciding what actually deserves automation. From here, continue to Section 2 — Framework and Design Patterns, starting with [Automation Framework Fundamentals](/learning-paths/automation/automation-framework-fundamentals), where selected candidates start becoming real, maintainable automated tests.
