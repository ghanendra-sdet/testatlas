---
title: "Manual Testing Capstone: International Money Transfer"
sidebar_label: "23 Capstone: International Money Transfer"
description: "The complete Manual Testing lifecycle applied to one realistic feature end to end — planning, test design, execution, defect reporting, and review, combined the way a real QA engineer actually works."
keywords: ["manual testing capstone", "end-to-end testing project", "QA lifecycle", "test planning to execution"]
difficulty: "intermediate"
time_to_read: "11 min"
last_reviewed: "2026-08-04"
---

# Manual Testing Capstone: International Money Transfer

**Prerequisites**: The entire Manual Testing path — every module in Sections 1 through 7.
**Leads to**: This completes Manual Testing v1.0. From here, continue to API Testing (coming soon).

Every module in this path taught one piece of the QA lifecycle. This capstone introduces nothing new — it walks one realistic feature through every phase, in order, the way a real QA engineer actually works a real assignment: from an ambiguous requirement to a shipped, verified fix. If any step below feels unfamiliar, that's a signal to revisit the linked module — everything here should already be familiar territory.

## The Feature: AtlasBank International Money Transfer

AtlasBank is launching international money transfers: a customer sends money from their AtlasBank account to a recipient's account at a foreign bank, in a foreign currency, subject to a daily transfer limit, currency conversion, and anti-money-laundering (AML) compliance checks above a certain transaction size. The requirement document states:

> "Customers can send money internationally. The system converts currency at the current exchange rate and applies a daily limit of $10,000 USD equivalent. Transfers above $3,000 USD equivalent require additional compliance verification."

This is deliberately underspecified, the same way most real requirements are — the capstone begins exactly where [From Requirements to Test Ideas](/learning-paths/manual-testing/from-requirements-to-test-ideas) taught you to begin.

## Phase 1: Requirement Analysis and Thinking Like a Tester

Applying [From Requirements to Test Ideas](/learning-paths/manual-testing/from-requirements-to-test-ideas)' ambiguity categories directly: the requirement doesn't state what happens if the exchange rate changes between when a transfer is initiated and confirmed. It doesn't state whether the $10,000 daily limit resets at midnight in the customer's timezone, AtlasBank's timezone, or UTC. It doesn't state what happens if a customer attempts two transfers that individually stay under $3,000 but combine to exceed it within the same day — a real AML-evasion pattern regulators specifically watch for.

Applying [Thinking Like a Tester](/learning-paths/manual-testing/thinking-like-a-tester)'s habits: business mindset asks what AtlasBank actually needs guaranteed here — accurate compliance enforcement, not just accurate math. Adversarial mindset asks the exact question the previous paragraph raised: could someone deliberately split a transfer to stay under the compliance threshold? This question, raised now, during analysis, is exactly the kind of question this path's Module 3 taught you to ask before writing a single test case — and it turns out to matter more here than almost anything else about this feature.

These four gaps get raised with the product owner before test design begins, per [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports)' broader lesson that clear, specific communication saves real time — here applied to a requirements conversation, not a defect report. Three get resolved (limit resets at UTC midnight; exchange rate is locked at confirmation, not initiation; split transfers within 24 hours are aggregated for the $3,000 compliance check specifically to close the evasion pattern). The exchange-rate-change question turns out to be already handled by locking the rate — a genuine ambiguity that, once asked, revealed the requirement was actually more complete than it first appeared.

## Phase 2: Test Design — Combining Techniques

With the requirement now fully specified, technique selection follows [Applying Test Design Across Domains](/learning-paths/manual-testing/applying-test-design-banking-ecommerce)' domain-risk-shape reasoning directly — this feature combines banking's deterministic risk with compliance's rule-driven risk, so multiple techniques apply together, not one alone:

**Boundary Value Analysis** targets the two numeric thresholds: $2,999.99 / $3,000.00 (compliance verification boundary) and $9,999.99 / $10,000.00 (daily limit boundary) — six values per boundary, twelve total, following [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis)'s standard set exactly.

**Equivalence Partitioning** confirms the space between boundaries needs only representative values — a transfer of $1,500 (below compliance threshold) and $6,000 (above compliance threshold, below daily limit) each need testing once, not repeatedly, per [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning).

**Decision Table Testing** applies to the compliance-and-limit interaction: transfer amount, cumulative daily total, and compliance-verification status combine to determine whether a transfer proceeds, requires additional verification, or is rejected — a genuine multi-condition business rule, following [Decision Table Testing](/learning-paths/manual-testing/decision-table-testing)'s structure.

**State Transition Testing** applies to the transfer's own lifecycle: Initiated → Rate Locked → Compliance Check (if applicable) → Confirmed → Processing → Completed, with a Canceled or Failed state reachable from several points — following [State Transition Testing](/learning-paths/manual-testing/state-transition-testing) directly, and specifically testing the invalid transition of attempting to confirm a transfer after its locked rate has expired.

**Error Guessing**, informed by this path's own domain-transfer "From the Field" pattern (inventory reservations not releasing on abandonment), specifically probes whether an abandoned transfer (rate locked, never confirmed) correctly releases its hold on the daily limit — a pattern-recognized risk, not something any of the above techniques would have generated on their own.

## Phase 3: Test Case Writing and Data Design

Each test idea generated above gets written up following [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases)' full structure — precise steps, specific test data, and a complete expected result. For the $3,000 boundary test specifically: **Test Data**, per [Test Data Design](/learning-paths/manual-testing/test-data-design), uses a realistic, non-round exchange rate (not a clean 1:1 or round number), since currency conversion's rounding risk, named directly in that module, is exactly the kind of defect clean test data would hide. The expected result states not just "transfer processes" but the complete outcome: exact converted amount, compliance flag status, and updated daily-limit total — per that module's own senior-tester standard of stating everything worth checking, not just the headline outcome.

## Phase 4: Organization and Traceability

Following [Test Case Organization and Naming](/learning-paths/manual-testing/test-case-organization-and-naming), test cases are named `TC-TRANSFER-INTL-0XX` and grouped under the international-transfer feature area. Following [Requirement Traceability Matrix (RTM)](/learning-paths/manual-testing/requirement-traceability-matrix), each requirement — including the three ambiguities resolved during Phase 1 — gets a requirement ID mapped to its test cases, specifically so the split-transfer AML-evasion requirement (easy to lose track of, since it wasn't in the original written requirement) has explicit, checkable coverage, not just verbal agreement that it was tested.

## Phase 5: Execution and Reporting

Execution proceeds with Pass/Fail/Blocked tracked per test case, per [Test Execution and Reporting Results](/learning-paths/manual-testing/test-execution-and-reporting-results). A real defect surfaces: two transfers of $1,800 each, sent by the same customer forty minutes apart, don't trigger the compliance check despite combining to $3,600 — the aggregation logic resolved during Phase 1's requirements conversation was never actually implemented correctly; it only aggregates transfers within the same *hour*, not the same day.

This gets written up following [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports)' full structure: precise reproduction steps (exact amounts, exact timing gap), environment, expected result (combined total across the day should trigger compliance review), actual result (no compliance flag triggered), Severity: Critical (a real compliance and regulatory exposure, not just a UX issue), Priority: Critical (every day this ships, real transfers may evade compliance review), Reproducibility: 100%, confirmed with multiple timing gaps up to 23 hours apart.

## Phase 6: Review

Before the fix ships, the updated test case set (now including a new test case specifically targeting the 24-hour aggregation window) goes through [Reviewing Test Cases](/learning-paths/manual-testing/reviewing-test-cases)' full checklist: completeness (does every AML-relevant scenario now have coverage — yes, including the corrected aggregation window), ambiguity (are the new test case's steps and data specific enough — yes, exact amounts and exact timing stated), duplicates (none found), coverage (the review specifically confirms a transfer exactly 24 hours and 1 minute apart is tested as a boundary of the aggregation window itself — a detail the original fix verification might have missed without a deliberate review pass).

## What This Capstone Reinforces

Every phase above used a module you already know. What the capstone adds isn't new content — it's the experience of moving between phases the way a real assignment actually requires: an ambiguous requirement generates real questions before any technique gets applied; technique selection follows the feature's actual risk shape, combining several methods rather than picking one; a defect discovered during execution gets written up precisely enough to act on; and the fix gets verified through a real review pass, not just re-running the original tests. This is the actual shape of professional QA work — not a sequence of isolated exercises, but one continuous, connected process.

## Manual Testing Complete

This is the final module in Manual Testing v1.0. Across twenty-three modules, this path covered the mindset behind test design, six core techniques for generating and reducing test ideas, the artifacts that make testing maintainable and provable (clear test cases, organization, an RTM, deliberate test data), exploratory testing as a disciplined practice, the judgment to choose between structured and exploratory approaches, precise communication of defects and results, the skill of reviewing someone else's work, integrated application across four real domains, and the recurring mistake patterns worth watching for in your own practice. From here, continue to API Testing (coming soon), where these same foundations — test design, technique selection, precise communication — get applied to a different surface: testing through an API instead of through a user interface.

## Key Takeaways

- A real QA assignment moves continuously between requirement analysis, technique selection, test case writing, organization, execution, defect reporting, and review — not as isolated exercises, but as one connected process.
- Technique selection should combine multiple methods based on the feature's actual risk shape, as this capstone's transfer feature required Boundary Value Analysis, Decision Tables, State Transitions, and Error Guessing together.
- A real defect (the aggregation-window gap) surfaced specifically because Phase 1's requirement analysis raised the right question early, and Phase 6's review caught a related boundary the fix verification alone might have missed.
- Nothing in this capstone was new — the skill it exercises is moving fluently between everything this path already taught.

---

## What You Just Learned

- How to move an ambiguous requirement through the complete Manual Testing lifecycle: analysis, technique selection, test design, organization, execution, defect reporting, and review
- Why combining multiple techniques, chosen by the feature's actual risk shape, produces better coverage than any single technique applied alone
- How a real compliance-aggregation defect was caught specifically because early requirement analysis and late-stage review both did their job
- That professional QA work is one continuous process, not a sequence of disconnected exercises

## Related Topics

- [Test Design Fundamentals](/learning-paths/manual-testing/test-design-fundamentals) — Where this path, and this capstone's discipline, began
- [Applying Test Design Across Domains: Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce) — The domain-risk-shape reasoning this capstone's technique selection follows directly
- [Common Mistakes in Test Design](/learning-paths/manual-testing/common-mistakes-in-test-design) — The recurring patterns this capstone's Phase 1 and Phase 6 both deliberately avoided

## Interview Questions

**Q1: Walk me through how you'd test a complex feature from requirement to release.**

*What to look for*: A candidate who describes a real, connected sequence — requirement analysis, technique selection based on the feature's actual shape, test case writing, execution, defect reporting, and review — not a list of isolated skills with no sense of how they connect.

**Q2: Tell me about a time multiple test design techniques were needed for the same feature.**

*What to look for*: A specific, real example combining at least two techniques for genuinely different parts of the same feature's risk, similar to this capstone's combination of boundary, decision-table, and state-transition techniques on one transfer feature.

---

## Glossary

No new terms are introduced in this capstone — every term used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ A real QA assignment moves continuously between analysis, design, execution, reporting, and review — not as isolated steps.
✓ Technique selection should combine multiple methods based on the feature's actual risk shape.
✓ Requirement ambiguities raised early (Phase 1) prevent real defects later — the aggregation-window gap traced back to a question asked, then not fully implemented.
✓ A review pass after a fix can catch a related boundary the original fix verification alone might miss.
✓ Nothing in this capstone was new — professional QA skill is moving fluently between everything already learned.
