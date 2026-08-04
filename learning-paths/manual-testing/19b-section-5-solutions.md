---
title: "Section 5 Solutions"
slug: section-5-solutions
sidebar_label: "Section 5 — Solutions"
description: "Answers and reasoning for Section 5's Knowledge Check — bug reports, execution reporting, and test case review."
keywords: ["bug reports", "test execution reporting", "test case review"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 5 Solutions

These are the answers to the [Section 5 Review](/learning-paths/manual-testing/section-5-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Developer Can't Reproduce a Defect From the Initial Report

**Correct answer**: Writing Effective Bug Reports — specifically, the reproduction steps and reproducibility fields.

**Explanation**: A defect a developer can't reproduce almost always traces back to missing or ambiguous detail in the reproduction steps — often sequence or timing, exactly as this module's discount-code and healthcare examples both showed. The fix is rewriting the report with precise, ordered steps and an explicit reproducibility statement, not simply asking the developer to try harder.

**Alternative approaches considered**: This isn't a review or execution-reporting problem — the defect itself may be real and well-understood by the reporter, but poorly communicated. The fix is specifically in how it's written up.

**Real-world reasoning**: This is deliberately close to the module's own opening scenario, testing whether the core lesson (precision in reproduction steps, especially sequence) actually landed.

## Scenario 2: Critical Defect Open at Day 3 of 5, Exit Criteria Require Zero

**Correct answer**: Test Execution and Reporting Results — specifically, surfacing exit-criteria risk immediately, not waiting for the final report.

**Explanation**: This is the module's own core lesson about early visibility — a daily report should flag this explicitly as "at risk for exit criteria" the moment it's known, giving the team two remaining days to respond, rather than discovering the gap only in the Day 5 summary.

**Alternative approaches considered**: Waiting until the final report to mention this (technically still "reporting," but late) misses the entire point of daily reporting's early-warning value — the difference between the two "teams" in the module's own examples.

**Real-world reasoning**: The specific detail "three days into a five-day cycle" signals there's still time to act — exactly the situation where early, explicit surfacing matters most.

## Scenario 3: Two Nearly Identical Test Cases Submitted for Review

**Correct answer**: Reviewing Test Cases — specifically, the duplicate-detection check.

**Explanation**: This is a direct application of the review module's duplicate check, itself grounded in Equivalence Partitioning's reasoning — two test cases verifying the same underlying class add execution cost without adding real coverage, and a substantive review should catch and flag this before execution.

**Alternative approaches considered**: This isn't primarily a bug-report or execution-reporting scenario — it's specifically about evaluating someone else's test case set before it's used, which is Module 19's exact focus.

**Real-world reasoning**: This scenario is close to the module's own PDF-export Mini Challenge, testing the same specific skill directly.

## Scenario 4: Product Owner Needs a Specific, Checkable "Are We Ready" Answer

**Correct answer**: Test Execution and Reporting Results — specifically, an explicit exit-criteria evaluation in a test summary report.

**Explanation**: This is exactly what a test summary report's most important sentence exists to answer — a direct, specific, checkable statement rather than a general impression, connecting straight back to Foundations' exit-criteria concept.

**Alternative approaches considered**: A vague "testing went well" answer, however well-intentioned, is precisely the failure mode the module's opening scenario shows going wrong — leaving the actual release decision ungrounded in specific evidence.

**Real-world reasoning**: This scenario directly mirrors the module's own release-readiness meeting example, testing whether the exit-criteria-evaluation lesson landed as the report's central purpose, not an optional detail.

## Scenario 5: Reviewer Approves Test Cases Because They "Look Professional"

**Correct answer**: Reviewing Test Cases — specifically, the mistake of reviewing for readability instead of gaps.

**Explanation**: This is directly the module's own opening scenario and its most emphasized common mistake — a review that checks presentation instead of actively auditing for what's missing (completeness, ambiguity, duplicates, coverage) provides the appearance of review without its actual substance.

**Alternative approaches considered**: None of the other two modules in this section address the review process itself — this is squarely Module 19's territory, and specifically its central warning, not a peripheral point.

**Real-world reasoning**: This scenario is deliberately built to test whether a learner recognizes rubber-stamp review as a real, common failure mode, not just an obviously bad practice nobody would actually do — the healthcare "From the Field" story shows exactly how easily this happens in practice, even with a review process technically in place.

---

## What This Confirms

Scenarios 3 and 5 both center on the review module, but for different specific checks (duplication versus the broader readability-instead-of-gaps mistake) — if you conflated them, it's worth rereading Module 19's five-dimension framework (completeness, ambiguity, duplicates, coverage, maintainability) to see how each is a distinct, specific check, not one general "review well" instruction.

**Continue to Section 6**: Applying Test Design Across Domains (coming soon), where every technique and artifact from Sections 2 through 5 gets applied together, in one integrated exercise per domain.
