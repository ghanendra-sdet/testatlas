---
title: "Applying Database Testing: AtlasBank Loan Disbursement Validation"
sidebar_label: "13 Applying Database Testing: AtlasBank Validation"
description: "Combining SQL verification, constraint testing, concurrency, and audit validation from Sections 1-4 against a realistic, integrated AtlasBank loan disbursement and repayment feature."
keywords: ["loan disbursement testing", "applied database testing", "atlasbank database validation", "integrated database testing"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-05"
---

# Applying Database Testing: AtlasBank Loan Disbursement Validation

**Prerequisites**: You should already understand every module in Sections 1–4 of this path.
**Leads to**: After this, you'll be ready for [Applying Database Testing: AtlasShop Database Validation](/learning-paths/database-testing/applying-database-testing-atlasshop-validation).

Every module so far taught one concern at a time — SQL verification, constraint testing, cross-row consistency, concurrency, audit coverage. This module combines several against one realistic, integrated feature: AtlasBank's loan disbursement and early-repayment flow, the way a real database-testing effort actually has to.

## The Feature: AtlasBank Loan Disbursement and Early Repayment

Verifying a loan's full lifecycle at the data layer: a `Loans` record is created and an `Accounts` deposit is made together when a loan is disbursed, and a customer can later make an early repayment that reduces the outstanding `Loans` balance and debits their `Accounts` balance correspondingly — the same `Loans`/`Accounts` relationship this path has referenced since [Relational Database Fundamentals](/learning-paths/database-testing/relational-database-fundamentals), now verified as one coherent, realistic feature.

## Foundations and Validation (Sections 1–2)

Applying [SQL for Testers](/learning-paths/database-testing/sql-for-testers) and [CRUD Validation](/learning-paths/database-testing/crud-validation) directly: after a disbursement, a `JOIN` between `Loans` and `Accounts` confirms the disbursed amount matches the account credit exactly, and a `COUNT` confirms no duplicate `Loans` row was created from a retried disbursement request. Applying [Constraints, Keys, and Relationships](/learning-paths/database-testing/constraints-keys-and-relationships)'s boundary testing: a disbursement request for exactly $0 and one exceeding the approved loan amount are both tested directly against the database, confirming the `CHECK` constraint on `Loans.disbursed_amount` actually rejects both, not just the application-layer form.

**A real defect surfaces here**: the boundary test reveals the `CHECK` constraint only validates the disbursement isn't negative — it doesn't cap it at the approved loan amount, meaning a bug elsewhere in the disbursement logic could theoretically disburse more than was ever approved, with nothing at the database layer to stop it. The application-layer form correctly limits this today, but per [Constraints, Keys, and Relationships](/learning-paths/database-testing/constraints-keys-and-relationships)'s own lesson, a documented safeguard that only exists in application code, not the database, is a gap worth flagging.

## Advanced Mechanics (Section 3)

Applying [Transactions, Locks, and Concurrency](/learning-paths/database-testing/transactions-locks-and-concurrency): two near-simultaneous early-repayment requests are deliberately triggered against the same loan — a customer submitting a repayment from both the mobile app and web app within the same second. Applying [Database Defect Investigation](/learning-paths/database-testing/database-defect-investigation)'s trace chain to the result: the `Loans.outstanding_balance` after both requests is compared against what it should be if both repayments were correctly applied.

**A second real defect surfaces here**: this is a lost update, in the exact shape [Transactions, Locks, and Concurrency](/learning-paths/database-testing/transactions-locks-and-concurrency) described — both repayment requests read the same starting outstanding balance before either wrote, and the second write overwrote the first's effect. Only one of the two repayments is reflected in the final balance, while both `Accounts` debits were applied — the customer's account was correctly debited twice, but the loan only shows credit for one payment, a direct financial discrepancy invisible to any single-session test.

## Performance and Compliance (Section 4)

Applying [Stored Procedures, Views, and Triggers](/learning-paths/database-testing/stored-procedures-views-and-triggers)'s trigger-coverage framework, extended per [Backup, Recovery, and Audit Validation](/learning-paths/database-testing/backup-recovery-and-audit-validation): every distinct way a repayment can occur — manual repayment via the app, an automated scheduled auto-debit, and a support-agent manual adjustment — is tested independently against the `Audit Logs` trigger that's supposed to record every change to `Loans.outstanding_balance`.

**A third real defect surfaces here**: the manual and support-agent paths both correctly produce an audit entry, but the automated auto-debit path — which updates the balance via a different internal stored procedure than the other two paths — doesn't fire the trigger at all, an audit gap directly analogous to the KYC and compliance-flag trigger gaps found earlier in this path, now confirmed in a genuinely new context.

## What This Application Module Shows

Three real, distinct defects — an under-scoped constraint, a lost-update financial discrepancy, and an audit-trail gap on an automated path — were each found by applying a different section's toolkit to the same integrated feature, not by any single technique alone. None of them required a new technique this path hadn't already taught; each was caught by carrying a specific, already-learned check through into a realistic, multi-part feature rather than testing it only against the simpler examples each module originally used to teach it.

## Common Mistakes

**Mistake 1: Assuming a constraint tested once, in isolation, covers every boundary a real feature needs.**
The disbursement-cap gap was only found by testing the *specific* boundary (the approved loan amount) relevant to this feature, not just the generic "is it negative" check most features share.

**Mistake 2: Testing concurrency and audit coverage as separate, unrelated concerns instead of against the same integrated feature together.**
Testing them together here is what revealed that the lost-update defect and the audit-gap defect both trace back to gaps in how the same feature's write paths were designed — a connection isolated, single-concern testing wouldn't have surfaced.

**Mistake 3: Trusting that a safeguard visible in the application layer also exists at the database layer.**
The disbursement-cap gap is a direct instance of [Constraints, Keys, and Relationships](/learning-paths/database-testing/constraints-keys-and-relationships)'s central lesson — a documented or apparent safeguard is a claim until verified directly against the database itself.

## Best Practices

**Practice 1: Combine multiple sections' techniques deliberately against one integrated, realistic feature.**
All three of this module's defects required combining at least two prior modules' techniques against the same feature — none would have surfaced from any single module's own isolated teaching example.

**Practice 2: Test every distinct write path a feature has, not just its primary one, for every concern — constraints, concurrency, and audit coverage alike.**
The auto-debit audit gap specifically required testing a secondary, automated path most manual testing naturally overlooks in favor of the primary user-facing flow.

**Practice 3: Treat a defect found in one dimension (concurrency) as a prompt to check adjacent dimensions (audit coverage) on the same feature.**
Both the lost-update and audit-gap defects trace back to the same underlying gap in how the feature's multiple write paths were designed — finding one is a strong signal to deliberately check the others.

## Key Takeaways

- Combining multiple sections' techniques against one integrated, realistic feature finds defects no single technique, tested alone, would surface.
- A constraint that's visibly enforced in the application layer still needs direct database-level verification — the two aren't guaranteed to match.
- Testing every distinct write path a feature has (not just the primary, most obvious one) applies across every concern this path has taught — constraints, concurrency, and audit coverage alike.

---

## What You Just Learned

- How to combine SQL verification, constraint boundary testing, concurrency testing, and audit-coverage testing against one realistic, integrated feature
- How an under-scoped database constraint was found by testing the specific boundary relevant to a real feature, not just a generic check
- How a genuine lost-update financial discrepancy was caught by deliberately testing concurrent repayment requests
- How an audit-trail gap on an automated write path was found by extending trigger-coverage testing to every distinct way a feature's data can change

**Next:** [Applying Database Testing: AtlasShop Database Validation](/learning-paths/database-testing/applying-database-testing-atlasshop-validation)

## Related Topics

- [Constraints, Keys, and Relationships](/learning-paths/database-testing/constraints-keys-and-relationships) — The boundary-testing technique that found this module's constraint gap
- [Transactions, Locks, and Concurrency](/learning-paths/database-testing/transactions-locks-and-concurrency) — The concurrent-testing technique that found this module's lost-update defect
- [Applying Database Testing: AtlasShop Database Validation](/learning-paths/database-testing/applying-database-testing-atlasshop-validation) — The next integrated feature, against a genuinely different schema

## Interview Questions

**Q1: How would you approach testing a complex, multi-part database feature like a loan disbursement and repayment system?**

*What to look for*: A candidate who describes combining several techniques deliberately — constraint boundary testing, concurrency testing, audit-coverage testing — against the same realistic feature, not naming just one technique in isolation.

**Q2: Why might a defect only appear when a feature is tested as a whole, rather than each of its parts individually?**

*What to look for*: A candidate who explains that some defects (like this module's lost-update and audit-gap findings) emerge from how a feature's multiple write paths or concerns interact, not from any single part tested alone — recognizing that integrated testing serves a genuinely different purpose than isolated unit-style testing.

---

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Combine multiple sections' techniques against one integrated, realistic feature — don't just re-confirm each technique in isolation.
✓ A constraint visible in the application layer still needs direct database-level verification.
✓ Test every distinct write path a feature has (primary and secondary/automated) for every concern, not just the obvious one.
✓ A defect found in one dimension (concurrency) is a signal to deliberately check adjacent dimensions (audit coverage) on the same feature.
✓ Integrated testing finds defects no single technique, tested alone, would surface.
