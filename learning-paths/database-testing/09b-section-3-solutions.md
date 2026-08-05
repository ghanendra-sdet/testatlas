---
title: "Database Testing — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — applying stored procedure, trigger, concurrency, and defect-investigation techniques to five realistic scenarios."
keywords: ["database testing solutions", "concurrency testing answers", "defect investigation knowledge check"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/database-testing/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Stored Procedure's Correct Return Value

**Correct answer**: Not fully tested yet — verify the procedure's side effects independently of its return value.

```sql
SELECT * FROM Transactions WHERE account_id = 4471 AND transaction_type = 'INTEREST_CREDIT'
ORDER BY created_at DESC LIMIT 1;
```

**Explanation**: This is [Stored Procedures, Views, and Triggers](/learning-paths/database-testing/stored-procedures-views-and-triggers)'s core lesson — a procedure's direct output and its side effects are two independent things, and a correct return value says nothing about whether the rows it wrote are also correct.

**Alternative approaches considered**: Trusting the return value alone would miss any defect purely in the procedure's write logic, since a wrong side effect wouldn't necessarily change what the procedure reports back as its result.

**Real-world reasoning**: A direct restatement of the module's own monthly-interest example, testing whether "output and side effects are separate checks" was understood as a rule, not a one-off observation.

## Scenario 2: Concurrent Credit Limit Edits

**Correct answer**: [Transactions, Locks, and Concurrency](/learning-paths/database-testing/transactions-locks-and-concurrency)'s deliberate concurrent test — trigger two near-simultaneous credit-limit updates against the same customer and check the final result.

**Explanation**: This is a lost-update risk shaped exactly like the module's joint-account and loyalty-points examples — two operations reading the same starting value before either writes, with the second write potentially overwriting the first silently.

**Alternative approaches considered**: Testing each agent's edit in a separate session would never expose this risk — the defect only exists when the two edits genuinely overlap in time.

**Real-world reasoning**: Applies the module's core technique to a new but structurally identical scenario — shared, contested data edited by two independent actors.

## Scenario 3: Transaction History "Looks Incomplete"

**Correct answer**: [Database Defect Investigation](/learning-paths/database-testing/database-defect-investigation)'s trace chain, starting with the fastest check — compare the app's displayed history against a direct query.

```sql
SELECT * FROM Transactions WHERE account_id = 4471 ORDER BY created_at DESC;
```

**Explanation**: A vague "looks incomplete" symptom needs the outside-in trace this module teaches — starting with the cheapest check (does the direct query already show everything the statement does) before assuming the underlying data itself is missing anything.

**Alternative approaches considered**: Escalating straight to "the database is missing transactions" without first comparing against a direct query risks investigating the wrong layer, the same mistake this module's opening scenario described costing two days.

**Real-world reasoning**: Tests whether the trace chain's outside-in discipline was understood as a general investigation method, not just a device to explain one specific example.

## Scenario 4: Compliance Dashboard View Excluding Under-Review Accounts

**Correct answer**: [Stored Procedures, Views, and Triggers](/learning-paths/database-testing/stored-procedures-views-and-triggers)'s view-testing approach — confirm the restriction is structural, not just absent from one observed query, and confirm the view stays live against a status change.

**Explanation**: This is the module's own `ActiveLoanSummary` Mini Challenge pattern, restated — a view's restriction needs to be tested by actively trying to retrieve the excluded data through a differently-shaped query, not just trusting that one query happened not to return it.

**Alternative approaches considered**: Confirming the restriction works today doesn't confirm it stays correct after an account's KYC status changes — the liveness check (update the status, re-query the view) is a separate, necessary test.

**Real-world reasoning**: Directly extends the module's Mini Challenge to a slightly different (compliance-focused) scenario, testing whether the two-part view-testing approach (liveness plus structural restriction) transfers.

## Scenario 5: Hanging Operation — Deadlock or Just Slow?

**Correct answer**: [Transactions, Locks, and Concurrency](/learning-paths/database-testing/transactions-locks-and-concurrency)'s distinction — check for a specific, reproducible database deadlock error rather than assuming either possibility.

**Explanation**: The module explicitly warns against confusing a deadlock (a specific, detectable error the database itself raises) with a feature that's simply slow under load — the two require completely different fixes, and only checking for the actual error confirms which one you're looking at.

**Alternative approaches considered**: Assuming it's "just slow" and tuning for performance would fail to fix a genuine deadlock, since a deadlock isn't a performance problem — the operation isn't slow, it's stuck.

**Real-world reasoning**: Tests whether Mistake 3 from the module (confusing a deadlock with slowness) was understood as a real, distinct diagnostic step, not just a definitional footnote.

## Section 3 Complete

Across three modules, this section extended database testing beyond application-triggered writes into database-resident logic, genuine concurrent access, and a systematic method for tracing any vague symptom back to a specific cause. From here, continue to Section 4 — Performance and Security, where this section's concurrency awareness extends into recognizing slow queries, lock contention under real load, and basic security and audit validation.
