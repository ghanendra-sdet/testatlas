---
title: "Section 6 Solutions"
slug: section-6-solutions
sidebar_label: "Section 6 — Solutions"
description: "Answers and reasoning for Section 6's Knowledge Check — disproportionate scaling, sibling-endpoint comparison, and matching tool category to task category."
keywords: ["api performance knowledge check", "api testing tools solutions", "sibling endpoint comparison", "exploratory vs maintained testing"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-04"
---

# Section 6 Solutions

These are the answers to the [Section 6 Review](/learning-paths/api-testing/section-6-review)'s Knowledge Check. If you haven't attempted the four scenarios yet, do that first.

## Scenario 1: Response Time Scaling with Transaction Count

**Correct answer**: Check whether the scaling is proportional (roughly 16x more data producing roughly proportionally more time) or disproportionate — a jump from 250ms to 4 seconds for 100x the data (16x, not 100x) is roughly proportional here and less immediately alarming than a much larger jump would be, but still worth comparing against sibling endpoints to confirm it's reasonable for this API.

**Explanation**: This is [Performance Testing APIs](/learning-paths/api-testing/performance-testing-apis)'s core distinction directly — not every response-time increase with data volume is a defect; the question is whether the scaling is reasonable for the amount of additional data, similar to the module's own transaction-history reasoning.

**Alternative approaches considered**: Immediately flagging this as a defect without checking the proportionality or comparing against similar endpoints would risk a false, unsupported report — the module specifically warns against judging "slow" by feeling alone.

**Real-world reasoning**: Deliberately calculated to be a genuinely ambiguous case (roughly proportional, not dramatically disproportionate), testing whether the learner applies the module's actual reasoning method rather than pattern-matching to "large number equals defect."

## Scenario 2: An Outlier Compared to Sibling Endpoints

**Correct answer**: This is worth investigating specifically because it's slow even for accounts with minimal data — ruling out data-volume scaling as the explanation, and pointing toward something else being inefficient in the implementation itself, similar to the module's beneficiary-list fraud-screening example.

**Explanation**: This is [Performance Testing APIs](/learning-paths/api-testing/performance-testing-apis)'s relative sibling-comparison technique directly — an endpoint's outlier response time, especially with minimal data, is a strong, low-effort signal worth investigating even without a formal performance budget.

**Alternative approaches considered**: Dismissing this because "it still returns correctly" would repeat the module's opening example's exact mistake — correctness and adequate speed are independent claims.

**Real-world reasoning**: A near-restatement of the module's own beneficiary-list example, testing whether the "minimal data, still slow" signal (ruling out data volume as the cause) was understood as the specific, distinguishing detail.

## Scenario 3: A Quick, One-Off Check on a Changing API

**Correct answer**: A GUI-based or lightweight REST client — fast setup, no coding required, well-suited to this specifically exploratory, one-off, early-stage situation.

**Explanation**: This is [API Testing Tools](/learning-paths/api-testing/api-testing-tools)'s core tool-category-to-task-category matching directly — a quick, exploratory check on a still-changing API is exactly the scenario a GUI or lightweight client is strongest at, and over-investing in a code-based setup here would add friction without benefit.

**Alternative approaches considered**: Recommending a code-based approach here would repeat the module's named mistake of over-investing in setup for genuinely one-off, exploratory testing.

**Real-world reasoning**: Directly mirrors the module's own Mini Challenge scenario (an actively-changing KYC API), testing whether the exploratory-versus-maintained distinction, not a fixed tool preference, drives the choice.

## Scenario 4: An Automated Regression Suite with Shared Logic

**Correct answer**: A code-based approach — the need for a shared authentication header applied consistently across 80 requests, plus automatic execution on every code change, are exactly the conditions favoring centralized, maintainable logic and CI/CD integration.

**Explanation**: This is [API Testing Tools](/learning-paths/api-testing/api-testing-tools)'s 200-request cross-cutting-change example directly — a large, maintained, automatically-run suite with shared logic needs is precisely where a GUI-only approach's maintenance cost becomes a real, compounding risk.

**Alternative approaches considered**: A GUI-based tool could technically support this suite, but the module's own real-project example shows the specific failure mode this invites — an inconsistently-applied cross-cutting change discovered only through a confusing later test failure.

**Real-world reasoning**: A close restatement of the module's own AtlasBank 200-request example, testing whether the specific triggers (shared logic, automatic execution, cross-cutting change risk) were recognized, not just "big suite equals code."

## Section 6 Complete

Across two modules, this section covered what a functional tester can meaningfully test about API performance without specialized infrastructure, and how to choose a testing tool by matching its category to the actual task at hand, rather than by habit or feature-list comparison. From here, continue to Section 7 — Application and Capstone, starting with [Applying API Testing: AtlasBank Cross-Border Payment Flow](/learning-paths/api-testing/applying-api-testing-cross-border-payment-flow), where every technique from Sections 1 through 6 comes together in realistic, integrated AtlasBank scenarios.
