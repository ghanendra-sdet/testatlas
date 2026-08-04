---
title: "Automation Testing — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — hardcoded waits, undiagnosed retries, weak assertions, test order dependency, and exact-match verification."
keywords: ["synchronization knowledge check", "flaky test solutions", "assertion strategy answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/automation/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Hardcoded Four-Second Wait

**Correct answer**: Replace the hardcoded pause with an explicit wait for the success message's actual appearance, up to a generous maximum timeout.

**Explanation**: This is [Synchronization and Wait Strategies](/learning-paths/automation/synchronization-and-wait-strategies)'s core lesson directly — a fixed guess either wastes time (if export genuinely takes less than four seconds) or fails intermittently (if it occasionally takes longer), exactly the two-sided cost the module's opening example demonstrated.

**Alternative approaches considered**: Increasing the guess to six seconds "to be safe" repeats the same mistake at a larger scale — still a guess, still eventually wrong in one direction or the other.

**Real-world reasoning**: A near-restatement of the module's own opening example, applied to a different feature (export instead of transfer), testing whether the fix (explicit wait, not a bigger guess) transfers to a new scenario.

## Scenario 2: Automatic Retry on an Undiagnosed Flaky Test

**Correct answer**: Diagnose the root cause before relying on the retry — the current practice risks masking a real regression exactly as [Test Stability and Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests)'s opening example describes.

**Explanation**: A 1-in-8 failure rate handled by blind retry, with no diagnosis, is precisely the module's central warning — the retry logic can't distinguish a genuine test-authoring flaw from a real, intermittent product regression, and will mask both equally.

**Alternative approaches considered**: Treating the current retry practice as "good enough since it's already passing most runs" ignores that the module's entire point is that passing isn't the same as trustworthy — the AtlasBank beneficiary example found a real backend defect hiding behind exactly this kind of tolerated flakiness.

**Real-world reasoning**: A direct application of the module's central lesson to a new feature, testing whether "diagnose before retrying" was understood as a firm rule, not a suggestion to consider only when convenient.

## Scenario 3: URL-Only Assertion on Card Activation

**Correct answer**: This assertion is too weak — it should check the actual activation status/content on the page, not just that the URL changed.

**Explanation**: This is [Assertions and Verification Strategies](/learning-paths/automation/assertions-and-verification-strategies)'s billing-downgrade "From the Field" example almost exactly — a URL or navigation-based assertion can't distinguish a genuinely successful outcome from a failure that happens to redirect to the same generic page.

**Alternative approaches considered**: Treating URL navigation as sufficient because "the flow completed" repeats the exact gap the module's From the Field example describes — the URL says nothing about which specific outcome actually occurred.

**Real-world reasoning**: Deliberately mirrors the module's own strongest cautionary example, testing whether the specific risk (URL/navigation assertions masking a wrong-but-similar-looking outcome) was recognized in a new context.

## Scenario 4: Test That Only Fails After a Specific Prior Test

**Correct answer**: This is test order dependency, likely from shared, improperly isolated state between the creation and deletion tests.

**Explanation**: [Test Stability and Flaky Tests](/learning-paths/automation/test-stability-and-flaky-tests)'s root-cause table names this pattern directly — a test that passes alone but fails in a specific sequence is close to a textbook symptom of order dependency, exactly like the AtlasBank beneficiary-creation/deletion example in that module.

**Alternative approaches considered**: Assuming this is a synchronization issue (Module 7's territory) would miss the specific, distinguishing symptom — a *consistent* failure tied to a *specific* prior test's execution, not the environment-dependent, timing-flavored intermittency Module 7's issues typically show.

**Real-world reasoning**: A close restatement of the module's own beneficiary-creation/deletion race-condition example, testing whether the specific diagnostic symptom (fails only in a specific sequence) was correctly matched to its named root cause.

## Scenario 5: Exact-Match Balance Assertion

**Correct answer**: This is a strong, correct assertion — no change needed.

**Explanation**: This is [Assertions and Verification Strategies](/learning-paths/automation/assertions-and-verification-strategies)'s own recommended default for numeric/calculated values — an exact match to the cent is precisely the precision level the module recommends for anything with a genuinely correct, specific expected value.

**Alternative approaches considered**: Suggesting this should be "loosened" to a range or approximate check would move in the wrong direction entirely — financial values are exactly where exact-match precision matters most.

**Real-world reasoning**: Deliberately included as the one "already correct" scenario in this set, testing whether learners can recognize a well-designed assertion and not just find something to criticize in every scenario.

## Section 3 Complete

Across three modules, this section covered timing (waiting for the real condition, not a guess), reliability (diagnosing flakiness instead of masking it), and precision (asserting on what actually matters, not a weaker proxy) — the three qualities that make an automated test result genuinely trustworthy. From here, continue to Section 4 — Reporting and Execution at Scale, starting with [Test Reporting](/learning-paths/automation/test-reporting), where these trustworthy results become the actual information a human or a pipeline acts on.
