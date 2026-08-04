---
title: "Automation Testing — Section 2 Review"
slug: section-2-review
sidebar_label: "Section 2 — Review"
description: "A recap of Framework and Design Patterns — framework fundamentals, Page Object Model, and data-driven testing — plus a Knowledge Check."
keywords: ["automation framework review", "page object model review", "data driven testing review"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-05"
---

# Section 2 Review

You've finished **Framework and Design Patterns**, the second section of Test Automation. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **Automation Framework Fundamentals** — the six structural concerns every framework addresses (test runner, locators, assertions, configuration, reporting, reusable setup), independent of tool
✔ **Page Object Model** — the specific pattern separating how to interact with a page from what a test verifies
✔ **Data-Driven Testing** — separating test logic from test data so adding coverage means adding a data row, not duplicating a test

**How they build on each other**: Module 4 named the structural concerns in the abstract. Module 5 solved one of them (locators/interactions) with a specific, established pattern. Module 6 closed the section by solving a related but distinct concern (test data) with its own pattern — both modules are concrete instances of Module 4's general "shared logic lives in exactly one place" principle, applied to two different kinds of shared logic.

## Separation-of-Concerns Reference

A quick reference for what stays separated from what, and why:

| Separated From | Separated Into | What This Prevents |
|---|---|---|
| Test intent ("log in") | Page object (locators, interaction methods) | A UI change requiring updates across every test |
| Test assertions | Page object interaction methods | Page objects becoming unreusable across tests with different expectations |
| Test logic (the steps) | Test data (the values) | A business-rule value change requiring updates across every duplicated test |

## Section 2 Knowledge Check

Five realistic scenarios. For each, identify which pattern applies and what specifically to check. No answers are provided here. **Solutions**: [Section 2 Solutions](/learning-paths/automation/section-2-solutions).

**Scenario 1**: AtlasBank's automation suite has 45 tests, each containing its own inline logic for finding and clicking the "Transfer Funds" button, written by different contributors over six months.

**Scenario 2**: A page object's `submitLoginForm()` method includes an assertion that the dashboard page loads successfully.

**Scenario 3**: AtlasBank wants to test its interest-rate calculator against 12 different account-balance tiers, each requiring the same steps (enter balance, submit, verify calculated interest) but different expected numeric outcomes.

**Scenario 4**: A team's data-driven test for currency conversion only uses round numbers ($100.00, $500.00, $1,000.00) as its test data.

**Scenario 5**: AtlasBank's `DashboardPage`, `TransferPage`, and `AccountPage` objects each independently define locators for the shared top navigation bar.

## Continue to Section 3

**Reliability and Verification**, starting with [Synchronization and Wait Strategies](/learning-paths/automation/synchronization-and-wait-strategies) — where this section's structural foundation gets applied to the single biggest source of automation failure: timing.
