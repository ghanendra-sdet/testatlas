---
title: "Database Testing — Section 2 Review"
slug: section-2-review
sidebar_label: "Section 2 — Review"
description: "A recap of Data Validation — CRUD validation, constraints and keys, and cross-row consistency — plus a Knowledge Check."
keywords: ["CRUD validation review", "database constraints review", "data integrity review"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-05"
---

# Section 2 Review

You've finished **Data Validation**, the second section of Database Testing. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **CRUD Validation** — a systematic framework for Create, Read, Update, and Delete: the intended row changed correctly, no unintended row changed, and related rows were handled as designed
✔ **Constraints, Keys, and Relationships** — testing that NOT NULL, UNIQUE, and foreign-key constraints are actually enforced by the database, applying Boundary Value Analysis and Equivalence Partitioning directly to constraint boundaries
✔ **Data Integrity and Consistency** — verifying that related rows agree with each other the way a multi-step operation promises, especially under partial-failure/interruption conditions, and diagnosing a UI bug versus a genuine data bug

**How they build on each other**: Module 4 gave you a systematic check for each of the four basic operations. Module 5 added the constraint layer underneath those operations — the rules the database itself enforces, regardless of which operation is trying to violate them. Module 6 zoomed out from any single operation or constraint to the relationship *between* rows across a multi-step operation, the level neither of the first two modules can check on their own.

## Data Validation Quick Reference

| Question | What to Check |
|---|---|
| Did an Update change only the intended row? | `COUNT(*)` excluding the intended row, expecting 0 |
| Is a constraint actually enforced by the database? | A direct insert/update attempting to violate it, bypassing the UI |
| Does a multi-row operation preserve its invariant? | A `SUM`/comparison across every row the operation touched |
| Is a reported wrong value a UI bug or a data bug? | Compare the UI's displayed value against a direct query on the same row |

## Section 2 Knowledge Check

Five realistic scenarios. For each, decide which module's framework applies, and what specific check you'd run. No answers are provided here. **Solutions**: [Section 2 Solutions](/learning-paths/database-testing/section-2-solutions).

**Scenario 1**: A "merge two customer profiles" feature needs to confirm every account was re-pointed to the surviving profile, and none were accidentally left attached to the deleted one.

**Scenario 2**: AtlasBank's `Loans.interest_rate` column has a documented constraint that it must stay between 0 and 100.

**Scenario 3**: A customer reports their account balance looks wrong on the mobile app, but correct on the web app.

**Scenario 4**: A "transfer between own accounts" feature needs its debit-and-credit amounts verified as exactly equal, including when the transfer is interrupted partway through.

**Scenario 5**: A bulk "deactivate inactive customers" job needs to confirm it deactivated exactly the intended set of customers, and left every other customer record untouched.

## Continue to Section 3

**Advanced Database Testing**, starting with Stored Procedures, Views, and Triggers — where this section's verification toolkit extends to business logic that lives inside the database itself.
