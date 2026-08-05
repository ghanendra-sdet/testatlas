---
title: "Performance Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — applying test-type selection, environment parity, and realistic test data to five realistic scenarios."
keywords: ["performance testing solutions", "test type knowledge check", "test data design answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/performance-testing/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Gradual Growth, Not Sudden Surges

**Correct answer**: [Performance Testing Types](/learning-paths/performance-testing/performance-testing-types)'s type-selection framework — this profile favors load and volume testing over spike testing.

**Explanation**: Spike testing specifically measures reaction to a *sudden* change; a feature expected to grow gradually is better matched by load testing (confirming each new expected level is handled) and volume testing (confirming performance holds as data grows over that same gradual timeline).

**Alternative approaches considered**: Running a spike test here wouldn't be wrong, but it wouldn't match this feature's actual risk profile as precisely as load and volume testing would — per the module's own "match the type to the real risk" principle.

**Real-world reasoning**: Tests whether the type-selection logic (matching test type to actual traffic shape) was understood as the deciding factor, not just memorized definitions.

## Scenario 2: Instant Fraud-Check Mock

**Correct answer**: [Performance Test Environment](/learning-paths/performance-testing/performance-test-environment)'s dependency-realism principle — model the mock against the real fraud-check service's actual observed latency.

**Explanation**: This is the module's own compliance-service mock example restated with a different service — an unrealistically fast mock can hide the real dependency's contribution to overall response time, exactly the AtlasBank finding the module described.

**Alternative approaches considered**: Leaving the mock instant would produce results that look better than production will actually be, hiding a real bottleneck the fraud-check service's actual latency would introduce.

**Real-world reasoning**: A close variant of the module's own worked example, confirming the dependency-realism lesson transfers to a different named service.

## Scenario 3: 10,000 Accounts, Exactly 20 Transactions Each

**Correct answer**: [Test Data for Performance](/learning-paths/performance-testing/test-data-for-performance)'s distribution lesson — this data has volume but no realistic distribution; it's missing the skew production data actually has.

**Explanation**: Every account having exactly the same transaction count is the module's own opening scenario's artificial-uniformity problem — real production data is very often skewed, and this dataset would never exercise the high-volume-account scenarios where real problems concentrate.

**Alternative approaches considered**: Simply adding more accounts at the same uniform 20-transaction count would increase volume without fixing the actual gap — distribution, not just row count, is the missing property.

**Real-world reasoning**: Directly tests whether "volume alone isn't sufficient" was understood, using a dataset that looks superficially realistic (10,000 is a large number) but fails the module's actual distribution criterion.

## Scenario 4: Sudden Viral Traffic Surge

**Correct answer**: [Performance Testing Types](/learning-paths/performance-testing/performance-testing-types)'s spike testing — specifically designed to test reaction speed to a sudden, sharp increase.

**Explanation**: A viral surge is the textbook spike-testing scenario the module described — sudden and sharp, not gradual, which is exactly the condition spike testing (and not load testing at the same eventual level) is built to evaluate.

**Alternative approaches considered**: A load test at the same eventual peak traffic level wouldn't test the same thing — the module explicitly warns against confusing "a faster load test" with what spike testing actually measures: whether the system reacts fast enough to a *sudden* change, not just whether it handles a given level reached gradually.

**Real-world reasoning**: A direct, unambiguous application of the module's own central spike-vs-load distinction to a realistic scenario.

## Scenario 5: Inconsistent Results a Week Apart

**Correct answer**: [Test Data for Performance](/learning-paths/performance-testing/test-data-for-performance)'s repeatability principle — check whether test data was reset to a consistent state before each run.

**Explanation**: The module explicitly names this exact situation — a results difference between comparable runs might reflect a data-state difference, not an actual system-performance change, if the data wasn't reset consistently between runs.

**Alternative approaches considered**: Assuming the system's actual performance changed, without first ruling out a data-state difference, risks investigating a change that never really happened — the module's repeatability check is the correct first step before any deeper investigation.

**Real-world reasoning**: Tests whether the repeatability lesson was understood as a genuine, first-line diagnostic step, not just a background detail in the module's own explanation.

## Section 2 Complete

Across three modules, this section covered the five performance test types and how to select among them, environment parity and the risk of unrealistic mocks, and realistic test data design across volume, shape, and distribution. From here, continue to Section 3 — Executing Performance Tests, starting with Performance Testing Tools, where this section's test design becomes an actual, running test.
