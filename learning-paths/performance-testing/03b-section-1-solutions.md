---
title: "Performance Testing — Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — applying correctness-vs-performance, percentile metrics, and risk-based strategy to five realistic scenarios."
keywords: ["performance testing solutions", "performance metrics knowledge check", "performance strategy answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/performance-testing/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Functionally Passing, Readiness for a Traffic Event Unknown

**Correct answer**: [What is Performance Testing?](/learning-paths/performance-testing/what-is-performance-testing)'s central distinction — functional passing tells you nothing about readiness for load; a dedicated performance-testing effort is needed.

**Explanation**: This is the module's own opening scenario directly — correctness and performance under load are independent properties, and only a dedicated test (not more functional testing) can answer the readiness question.

**Alternative approaches considered**: Running more functional tests, or re-verifying existing ones, wouldn't answer the actual question being asked — the gap is specifically about behavior under load, which functional testing structurally doesn't exercise.

**Real-world reasoning**: A near-restatement of the module's own AtlasBank promotional-campaign scenario, confirming the core distinction transfers directly.

## Scenario 2: Is "Average Response Time: 400ms" Good News?

**Correct answer**: Not necessarily — [Performance Metrics and SLAs](/learning-paths/performance-testing/performance-metrics-and-slas)'s percentile lesson: request the p95/p99 before concluding anything.

**Explanation**: An average can hide a real, painful tail of slow requests — the module's own opening scenario (an 800ms average masking a 4-second tail) is exactly this situation. "400ms average" alone isn't sufficient evidence of good performance.

**Alternative approaches considered**: Accepting the average at face value risks missing a real problem affecting a meaningful share of users, exactly as happened in the module's own worked example.

**Real-world reasoning**: Tests whether the average-vs-percentile distinction was understood as a general caution to apply whenever only an average is reported, not just within the module's own specific example.

## Scenario 3: Three Weeks, Five Features, Uneven Priority

**Correct answer**: [Performance Testing Strategy](/learning-paths/performance-testing/performance-testing-strategy)'s prioritization framework — rank the five features by traffic, business criticality, and known risk before allocating time.

**Explanation**: This is the module's own opening scenario in miniature — limited time requires deliberate prioritization, not equal effort spread across every candidate regardless of actual risk.

**Alternative approaches considered**: Testing whichever features are easiest to set up first (this module's own named anti-pattern) risks running out of time before reaching the features that actually carry the most risk.

**Real-world reasoning**: Directly tests whether the prioritization criteria (traffic, business criticality, risk) were understood as the actual decision framework, not just background context for the AtlasBank example.

## Scenario 4: Stress Testing Before Anything Else

**Correct answer**: [Performance Testing Strategy](/learning-paths/performance-testing/performance-testing-strategy)'s sequencing rule — run a baseline test first; stress testing without one has no meaningful comparison point.

**Explanation**: The module explicitly states this exact rule — a stress test's "breaking point" finding is only meaningful relative to a known normal, which only a baseline test establishes.

**Alternative approaches considered**: Proceeding directly to stress testing might still produce a number, but that number can't be interpreted as "degraded from normal" without first knowing what normal actually was.

**Real-world reasoning**: A direct test of the module's own stated sequencing rule, confirming it was understood as a hard dependency, not just a suggested order.

## Scenario 5: Contractual SLA vs. Internal Testing Threshold

**Correct answer**: [Performance Metrics and SLAs](/learning-paths/performance-testing/performance-metrics-and-slas)'s SLA/SLO distinction — set an internal SLO tighter than the 2-second SLA, giving a real safety margin.

**Explanation**: This is the module's own AtlasBank example directly — testing against the exact same threshold as the real, external SLA leaves no room to catch a developing problem before the actual contractual commitment is at risk.

**Alternative approaches considered**: Testing against the SLA number itself would technically be valid, but per the module's own reasoning, provides no early-warning margin — a result that just barely passes still leaves the team with no cushion against normal variance.

**Real-world reasoning**: Applies the module's own SLA/SLO reasoning to a new but structurally identical scenario, confirming the "tighter internal target" principle generalizes beyond the one specific number used in the original example.

## Section 1 Complete

Across three modules, this section established why performance needs dedicated testing, the precise vocabulary to measure it, and the strategic discipline to decide what to test and in what order. From here, continue to Section 2 — Designing a Performance Test, starting with [Performance Testing Types](/learning-paths/performance-testing/performance-testing-types), where this section's strategy and metrics become an actual, executable test design.
