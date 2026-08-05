---
title: "Database Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — applying CRUD validation, constraint testing, and cross-row consistency checks to five realistic scenarios."
keywords: ["database testing solutions", "CRUD validation answers", "data integrity knowledge check"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/database-testing/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Merge Two Customer Profiles

**Correct answer**: [Relational Database Fundamentals](/learning-paths/database-testing/relational-database-fundamentals)'s foreign-key reasoning, verified with a `JOIN` or a direct `COUNT`.

```sql
SELECT COUNT(*) FROM Accounts WHERE customer_id = 4471; -- the deleted profile's ID
-- Expected: 0, if every account was correctly re-pointed
```

**Explanation**: This is the merge-defect pattern from [Relational Database Fundamentals](/learning-paths/database-testing/relational-database-fundamentals) directly — confirm nothing still references the deleted profile's ID, the same check that caught the KYC merge defect in that module's worked example.

**Alternative approaches considered**: Checking the UI for "does the surviving profile show all accounts" would miss an account left silently orphaned on the deleted profile's ID, since a UI test only shows what's attached to the profile it's currently viewing.

**Real-world reasoning**: A direct restatement of Module 2's own worked example, confirming the foreign-key check transfers to a fresh scenario without needing new technique.

## Scenario 2: Interest Rate Constraint Boundary

**Correct answer**: [Constraints, Keys, and Relationships](/learning-paths/database-testing/constraints-keys-and-relationships)'s Boundary Value Analysis approach — test at 0, at 100, just outside each (-1 and 101), and one comfortable mid-range value.

```sql
INSERT INTO Loans (account_id, interest_rate) VALUES (4471, -1);
-- Expected: rejected
INSERT INTO Loans (account_id, interest_rate) VALUES (4471, 101);
-- Expected: rejected
```

**Explanation**: This is Module 5's own Mini Challenge, restated — a `BETWEEN 0 AND 100` constraint has four boundary values worth testing (0, 100, and one step outside each), not just one arbitrary "valid" and one arbitrary "invalid" value.

**Alternative approaches considered**: Testing only one clearly-invalid value (like -1000) would confirm the constraint rejects *something*, but wouldn't confirm the exact boundary (0 vs. -1, 100 vs. 101) is where the constraint actually draws the line.

**Real-world reasoning**: Directly tests whether Boundary Value Analysis's precision — exact edges, not just "some valid, some invalid" — was understood as the actual technique, not a looser approximation of it.

## Scenario 3: Balance Looks Wrong on Mobile, Correct on Web

**Correct answer**: [Data Integrity and Consistency](/learning-paths/database-testing/data-integrity-and-consistency)'s UI-bug-vs-data-bug diagnostic — one direct query against the actual stored balance.

```sql
SELECT balance FROM Accounts WHERE account_id = 4471;
```

**Explanation**: Since the web app shows one value and the mobile app shows another, at least one of them is wrong — comparing the direct query result to both tells you which. If the query matches the web app's value, the mobile app has a UI/caching bug. If it matches neither, something else (a sync issue between two different read replicas, for instance) is worth investigating further — but the first diagnostic step is always the same direct query.

**Alternative approaches considered**: Escalating straight to "fix the mobile app's display" without checking the actual data first risks fixing the wrong layer if the underlying data itself turns out to be the actual source of disagreement.

**Real-world reasoning**: A close variant of Module 6's own UI-bug-vs-data-bug framing, adapted to a scenario with two *different* displayed values instead of one displayed value versus the database.

## Scenario 4: Interrupted Own-Account Transfer

**Correct answer**: [Data Integrity and Consistency](/learning-paths/database-testing/data-integrity-and-consistency)'s cross-row consistency check, deliberately tested under interruption.

```sql
SELECT SUM(amount) FROM Transactions WHERE reference_id = 'TXN-XXXX';
-- Expected: debit and credit entries sum to zero (equal and opposite)
```

**Explanation**: This is the module's own fund-transfer example, restated with "own accounts" instead of two different customers — the invariant (debit equals credit) and the failure window (interrupted mid-operation) are identical in structure.

**Alternative approaches considered**: Checking only the final balances on a clean, uninterrupted run would miss the exact defect class this scenario is testing for — the interruption window has to be deliberately exercised, not assumed away.

**Real-world reasoning**: Confirms the interruption-testing principle transfers to a same-customer transfer, not just the two-different-customers case the module's own example used.

## Scenario 5: Bulk Deactivate Inactive Customers

**Correct answer**: [CRUD Validation](/learning-paths/database-testing/crud-validation)'s Update-validation framework — confirm the intended set changed, and confirm every other customer is provably untouched.

```sql
-- Confirm the intended set changed
SELECT COUNT(*) FROM Customers WHERE is_active = false AND last_login < '2026-01-01';

-- Confirm nothing else changed
SELECT COUNT(*) FROM Customers WHERE is_active = false AND last_login >= '2026-01-01';
-- Expected: 0
```

**Explanation**: This is Module 4's "the right row changed, and only the right row" principle applied to a bulk operation instead of a single-row update — the second query is the one most likely to be skipped, and the one most likely to catch a scoping bug in the bulk job's `WHERE` clause.

**Alternative approaches considered**: Spot-checking a handful of individual customer records would be far less reliable than a `COUNT`-based query covering the entire table — a scoping bug affecting a small subset could easily be missed by manual spot-checking.

**Real-world reasoning**: Extends Module 4's single-row Update framework to a bulk operation, testing whether the underlying principle (verify the untouched set, not just the touched one) was understood as general, not tied to single-row examples specifically.

## Section 2 Complete

Across three modules, this section built a systematic framework for CRUD operations, constraint verification (with Boundary Value Analysis and Equivalence Partitioning applied directly), and cross-row consistency under interruption. From here, continue to Section 3 — Advanced Database Testing, where this toolkit extends to business logic living inside the database itself: stored procedures, views, triggers, and concurrent-access defects.
