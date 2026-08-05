---
title: "Database Testing — Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — applying COUNT, SUM, IS NULL, JOIN, and EXISTS to five realistic database verification scenarios."
keywords: ["database testing knowledge check", "SQL verification solutions", "SQL for testers answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/database-testing/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Possible Duplicate Beneficiary

**Correct answer**: `COUNT(*)` with `GROUP BY`, filtered to the specific beneficiary.

```sql
SELECT account_id, beneficiary_name, COUNT(*) AS entry_count
FROM Beneficiaries
WHERE account_id = 4471 AND beneficiary_name = 'John Mehta'
GROUP BY account_id, beneficiary_name;
```

**Explanation**: This is [SQL for Testers](/learning-paths/database-testing/sql-for-testers)'s opening example directly — a count greater than 1 confirms a real duplicate row, distinct from a UI rendering issue that only *displays* the same entry twice.

**Alternative approaches considered**: Checking the UI repeatedly would never distinguish a genuine duplicate row from a display glitch — only a direct query resolves the ambiguity.

**Real-world reasoning**: A near-restatement of the module's own scenario, confirming the pattern transfers directly to a near-identical real report.

## Scenario 2: Cancelled Scheduled Payments After Account Closure

**Correct answer**: `COUNT(*)` filtered to `PROCESSING` status, scoped to the closed account.

```sql
SELECT COUNT(*) AS stuck_payments
FROM Payments
WHERE account_id = 4471 AND status = 'PROCESSING';
```

**Explanation**: This is [What is Database Testing?](/learning-paths/database-testing/what-is-database-testing)'s scheduled-payment defect, verified directly — a result greater than 0 means a payment is stuck rather than correctly cancelled, exactly the kind of orphaned state that never reaches the UI.

**Alternative approaches considered**: An `EXISTS` check would answer the same yes/no question slightly faster if the exact count isn't needed — both are valid; `COUNT` is preferable when you also want to know how many.

**Real-world reasoning**: Directly connects Module 1's motivating scenario to Module 3's actual query toolkit — the same defect class, now with a concrete way to check for it.

## Scenario 3: Reconciling Total Debits Against Balance Change

**Correct answer**: `SUM(amount)` filtered to `SUCCESS`-status debits for the account.

```sql
SELECT SUM(amount) AS total_debited
FROM Transactions
WHERE account_id = 4471
  AND transaction_type = 'DEBIT'
  AND status = 'SUCCESS';
```

**Explanation**: This is the reconciliation pattern from [SQL for Testers](/learning-paths/database-testing/sql-for-testers) — filtering to `SUCCESS` first is essential, since including `FAILED` or `PENDING` transactions would produce a total that doesn't actually match a real balance change.

**Alternative approaches considered**: Summing without the `status = 'SUCCESS'` filter is a common mistake (Mistake 3 in the module) that produces a number that looks plausible but answers the wrong question.

**Real-world reasoning**: Tests whether "filter before aggregating" was understood as a rule, not just a suggestion — an unfiltered version of this exact query is a realistic, tempting shortcut.

## Scenario 4: Confirming a Field Is Correctly Empty vs. Set

**Correct answer**: `IS NOT NULL` to confirm it was set; `IS NULL` to confirm it's still empty — never `= NULL` for either direction.

```sql
SELECT account_id, closed_date
FROM Accounts
WHERE account_id = 4471 AND closed_date IS NOT NULL;
```

**Explanation**: This is Module 3's most commonly-missed mistake, tested directly — `closed_date = NULL` would return zero rows regardless of whether the field is actually set or not, giving a false "nothing found" result either way.

**Alternative approaches considered**: None — this is a hard rule in SQL, not a stylistic preference; `= NULL` is simply incorrect for this comparison in standard SQL.

**Real-world reasoning**: Directly tests the module's single most emphasized pitfall, since it's the one most likely to produce a silent false negative in real testing.

## Scenario 5: Verified Customers and Their Account Balances Together

**Correct answer**: A `JOIN` between `Customers` and `Accounts` on `customer_id`, filtered to verified KYC status.

```sql
SELECT c.name, a.account_id, a.balance
FROM Customers c
JOIN Accounts a ON c.customer_id = a.customer_id
WHERE c.kyc_status = 'VERIFIED';
```

**Explanation**: This is [SQL for Testers](/learning-paths/database-testing/sql-for-testers)'s own worked `JOIN` example, restated as a scenario — a single query spanning both tables' relationship, rather than two separate queries a tester would have to manually cross-reference.

**Alternative approaches considered**: Querying `Customers` and `Accounts` separately and manually matching IDs would work but is slower and more error-prone than letting the `JOIN`'s `ON` clause do the matching directly.

**Real-world reasoning**: Confirms the `JOIN` pattern was understood as "combine related tables in one query," not just memorized syntax disconnected from when to reach for it.

## Section 1 Complete

Across three modules, this section covered why direct data verification matters, the relational vocabulary needed to reason about structure, and the core SQL toolkit for actually checking data state. From here, continue to Section 2 — Data Validation, starting with [CRUD Validation](/learning-paths/database-testing/crud-validation), where this toolkit becomes a systematic framework for verifying Create, Read, Update, and Delete operations.
