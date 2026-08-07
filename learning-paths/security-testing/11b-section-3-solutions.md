---
title: "Security Testing — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — applying input/output testing, traceable test-case design, SAST/DAST, and vulnerability validation to five realistic scenarios."
keywords: ["security testing solutions", "test case design answers", "vulnerability validation knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-06"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/security-testing/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Passed Validation, Still a Problem

**Correct answer**: Output encoding is missing — per [Input Validation and Output Encoding](/learning-paths/security-testing/input-validation-and-output-encoding), input validation and output encoding are two separate defenses. Input validation passing says nothing about whether the data is safely encoded at the point it's later displayed.

**Explanation**: This is the module's own central lesson restated — a feature can pass input validation completely and still have a real output-encoding defect, since they protect different things at different points.

**Alternative approaches considered**: Assuming input validation passing means the feature is fully protected against this class of defect is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether the two-defense distinction was understood as functionally, not just conceptually, different.

## Scenario 2: Tribal Knowledge

**Correct answer**: A formal, written, traceable security test case is missing — per [Security Test Planning and Test Case Design](/learning-paths/security-testing/security-test-planning-and-test-case-design), individual knowledge that isn't written down isn't provable or transferable team coverage.

**Explanation**: This is the module's own opening scenario restated — real security knowledge existed, but nothing made it durable or verifiable beyond one person's memory.

**Alternative approaches considered**: Considering the risk "handled" because a knowledgeable tester is aware of it ignores what happens when that specific person is unavailable or leaves.

**Real-world reasoning**: Tests whether written traceability was understood as the actual solution, not just "make sure testers know about security."

## Scenario 3: Clean Scan, Real Defect

**Correct answer**: A static scan (SAST) analyzes source code without running the application — per [Static vs. Dynamic Security Testing](/learning-paths/security-testing/static-vs-dynamic-security-testing), it cannot confirm whether the running application actually enforces a check its code appears to implement. An access-control gap that's only observable in real runtime behavior is exactly the class of defect static testing structurally cannot catch.

**Explanation**: This is the module's own opening scenario restated — both facts are true simultaneously because static and dynamic testing catch genuinely different defect classes.

**Alternative approaches considered**: Treating a clean static scan as proof the feature is secure is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether the structural difference between what SAST and DAST can each see was understood, not just that "both are types of scanning."

## Scenario 4: The Overwhelmed Inbox

**Correct answer**: Validating each finding by attempting to reproduce it using legitimate access — per [Vulnerability Validation and Security Regression Testing](/learning-paths/security-testing/vulnerability-validation-and-security-regression-testing), assigning uniform priority without validation is exactly the alert-fatigue failure mode the module's opening scenario describes.

**Explanation**: This is the module's own central lesson — raw scanner findings are candidates requiring validation, not a finished, equally-urgent priority list.

**Alternative approaches considered**: Sorting findings by the scanner's own severity label without validating them first doesn't solve the actual problem, since an unvalidated severity label is itself unreliable.

**Real-world reasoning**: Tests whether validation-before-prioritization was understood as the necessary first step, not an optional extra.

## Scenario 5: Fixed, Then Broken Again

**Correct answer**: A standing security regression test for the originally-fixed defect, added at the time it was first fixed and run on every subsequent release — per the module's own real-project example, this is exactly what catches a quiet reintroduction before release.

**Explanation**: This is the module's own AtlasBank example restated — a fix without a standing regression test has no protection against returning through a later, unrelated change.

**Alternative approaches considered**: Relying on the original fix alone, without a standing test, is exactly Mistake 3 the module names directly.

**Real-world reasoning**: Tests whether "add a regression test at fix time" was understood as a required step, not something optional once a defect is already fixed once.

## Section 3 Complete

Across four modules, this section covered how testers design for and verify security deliberately: the two-part input/output defense, formal and traceable test-case design, the complementary coverage of static and dynamic scanning, and the validate-then-protect discipline that turns a raw finding into lasting, regression-tested protection. From here, continue to Section 4 — Data, Configuration, and Business Logic Security, starting with Configuration, Secrets, and Transport Security.
