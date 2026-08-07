---
title: "Security Testing — Section 3 Review"
slug: section-3-review
sidebar_label: "Section 3 — Review"
description: "Knowledge Check for Section 3 — Input Validation and Output Encoding, Security Test Planning and Test Case Design, Static vs. Dynamic Security Testing, and Vulnerability Validation and Security Regression Testing."
keywords: ["security testing review", "security test design knowledge check", "vulnerability validation review"]
difficulty: "beginner"
time_to_read: "5 min"
last_reviewed: "2026-08-06"
---

# Section 3 Review

Section 3 covered how testers design for and verify security specifically: the two-part input/output defense, formal traceable test cases, static and dynamic scanning, and validating findings before they become lasting, regression-protected fixes.

## Knowledge Check

Work through these five scenarios before checking the [Section 3 Solutions](/learning-paths/security-testing/section-3-solutions).

**Scenario 1: Passed Validation, Still a Problem**

A feature's input validation correctly rejects malformed submissions. A harmless proof string, once submitted successfully and later displayed to another user, still renders as active content. What went wrong, and where?

**Scenario 2: Tribal Knowledge**

A tester who deeply understands security risk finds a real defect but only mentions it informally to a teammate rather than writing a test case. What's missing from this picture, and why does it matter?

**Scenario 3: Clean Scan, Real Defect**

A static code scan reports zero findings on a feature. A manual test later finds a real access-control gap in the same feature. How can both be true at once?

**Scenario 4: The Overwhelmed Inbox**

A team receives 80 automated scanner findings in a week and, lacking time to investigate each individually, assigns all of them the same "medium" priority. What's the actual first step missing here?

**Scenario 5: Fixed, Then Broken Again**

A security defect fixed six months ago reappears after an unrelated code refactor. What practice, if it had been in place, would have caught this before release?

**Next:** Check your answers against the [Section 3 Solutions](/learning-paths/security-testing/section-3-solutions), then continue to Section 4 — Data, Configuration, and Business Logic Security.
