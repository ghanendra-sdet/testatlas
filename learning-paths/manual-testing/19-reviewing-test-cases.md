---
title: "Reviewing Test Cases"
sidebar_label: "19 Reviewing Test Cases"
description: "How to review someone else's test cases and find real gaps — completeness, ambiguity, duplication, and coverage — a skill real QA engineers use more than writing test cases themselves."
keywords: ["test case review", "peer review", "test coverage review", "ambiguity detection", "review checklist"]
difficulty: "beginner"
time_to_read: "9 min"
last_reviewed: "2026-08-04"
---

# Reviewing Test Cases

**Prerequisites**: You should already understand [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases), [Test Case Organization and Naming](/learning-paths/manual-testing/test-case-organization-and-naming), and [Requirement Traceability Matrix (RTM)](/learning-paths/manual-testing/requirement-traceability-matrix).
**Leads to**: After this, you'll be ready for [Applying Test Design Across Domains: Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce).

Every module so far has taught you to produce something — test ideas, test cases, an RTM, execution reports. This module teaches a different, less obvious skill: reviewing what someone *else* produced, and finding real gaps in it. In a real QA job, this is a skill used constantly, often more than writing test cases from scratch — and it's a genuinely different capability from writing well, not a byproduct of it.

## Why This Matters

**A superficial review.** At AtlasBank, a junior tester writes a set of test cases for a new statement-download feature and shares them for review before execution begins. A reviewer skims them, notices the formatting is clean and the steps are readable, and approves them quickly with a comment: "Looks good." During execution, a real gap surfaces: no test case covers what happens if a user requests a statement for a date range with zero transactions — an edge case the review never caught, because the review focused on how the test cases *read*, not on what they *didn't cover*.

**A substantive review.** A different reviewer, given the same test cases, deliberately checks for what's missing before approving anything: cross-references the test cases against the feature's requirements (similar to an RTM check), specifically looks for edge cases like empty results, and asks whether any two test cases are effectively duplicates. The zero-transaction gap is caught before execution even starts, added as a new test case, at a fraction of the cost it would have taken to discover during execution or, worse, after release.

Both reviewers looked at the same set of test cases. Only one of them was actually reviewing for gaps, rather than reviewing for readability.

## What a Real Test Case Review Checks

A substantive review goes beyond "does this read clearly" and actively checks for several distinct kinds of problem:

**Completeness**: does the set of test cases actually cover what the feature requires? This is close to an informal RTM check — cross-referencing test cases against requirements to spot anything with no corresponding coverage.

**Ambiguity**: are the steps, data, and expected results specific enough that two different executors would perform the identical sequence and reach the same verdict? This directly applies [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases)' own standard, from the reviewer's side rather than the author's.

**Duplicates**: do two or more test cases effectively verify the same thing, wasting future execution time without adding real coverage? This connects directly to [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning)'s core lesson — redundant test cases from the same equivalence class don't add value.

**Coverage**: beyond simple completeness against requirements, does the set include the edge cases, boundaries, and negative scenarios a technique-driven approach (Section 2) would have generated? A review is often where a missing boundary value or an untested invalid partition gets caught before execution.

**Maintainability**: will these test cases survive small, unrelated changes without becoming inaccurate, per [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases)' own maintainability standard?

## Poor vs. Good Review: A Direct Comparison

| | Poor Review | Good Review |
|---|---|---|
| **Focus** | Formatting, spelling, general readability | Completeness, ambiguity, duplicates, coverage, maintainability |
| **Feedback given** | "Looks good" | "Missing coverage for zero-result date ranges; TC-014 and TC-019 appear to be duplicates; TC-022's expected result doesn't specify the exact error message" |
| **Outcome** | Real gaps discovered during execution or after release | Real gaps caught before execution begins |

:::tip Senior QA Insight
A beginner reviews test cases the way they'd proofread an essay — checking that it reads well. A senior tester reviews test cases the way an auditor checks a financial statement — actively looking for what's *not there*, not just confirming what is there looks correct. The habit of asking "what's missing" rather than just "is this accurate" is what makes a review actually valuable.
:::

## The Feedback Process

Giving review feedback well is its own skill, distinct from finding the gaps in the first place. Feedback should be specific and actionable — "missing coverage for X" rather than "needs more coverage," and "TC-014 and TC-019 look like duplicates, verify and merge if so" rather than "some of these might be redundant." Feedback delivered as a collaborative question ("did we consider what happens with a zero-result date range?") often lands better than a flat correction, especially with someone newer to the technique — the goal is a better test suite and a reviewer relationship that improves over time, not a demonstration of the reviewer's own thoroughness.

## Workplace Deliverables

This module teaches the skill behind a real, recurring workplace activity:

✓ **Test Case Review Feedback** — specific, actionable comments on a colleague's test case set, following this module's checklist

*(A structured review feedback template is planned — tracked in `NOT_NOW.md`.)*

## Reviewer Checklist

Before approving a set of test cases, verify:

☐ Every requirement has at least one corresponding test case (an informal RTM cross-check)
☐ No two test cases are effective duplicates of each other
☐ Steps, data, and expected results are specific enough for someone else to execute identically
☐ Boundary values, invalid partitions, and negative scenarios are represented, not just the happy path
☐ Elements are described by function, not appearance, for maintainability

## When NOT to Use Full Formal Review

- **A single tester's own throwaway, one-off exploratory notes**, never entering a shared suite, don't need a peer review process — review exists to catch gaps before they affect someone else or a shared, lasting artifact
- **Extremely time-critical hotfix verification**, where a single, narrow test case confirms one specific fix and nothing else, may reasonably skip a full review pass — the trade-off between review rigor and response time is a real, deliberate choice in a genuine emergency, not a shortcut to default to
- **Test cases already covered by an established, well-reviewed pattern** (a new test case that's a near-identical variant of a pattern the team reviews rigorously elsewhere) may reasonably get a lighter review pass, provided the underlying pattern itself was reviewed properly once

## How This Works on a Real Project

At an AtlasBank sprint review meeting, a set of test cases for a new international wire-transfer feature is reviewed collaboratively, not just by one reviewer alone. The team works through the Reviewer Checklist together: completeness reveals no test case covers what happens when the recipient country requires additional compliance documentation — a real requirement buried in a compliance addendum, not the main feature requirement, and easy to miss without a deliberate completeness check against every relevant source. Ambiguity review flags that one test case's expected result says "transfer should be handled appropriately" — a phrase specific enough to sound complete but too vague to actually verify, caught and rewritten to state the exact expected behavior. Duplicate review finds two test cases that both verify "valid transfer succeeds" using functionally identical data, differing only in superficial details — merged into one.

None of these three gaps would have been caught by a review focused only on whether the test cases "looked complete and professional" — each required actively checking for a specific kind of problem this module's framework targets directly.

## Common Mistakes

**Mistake 1: Reviewing for readability and formatting instead of gaps.**
As the opening scenario shows, clean-looking test cases can still have real, substantive gaps a surface-level review won't catch.

**Mistake 2: Giving vague feedback like "needs more coverage" instead of naming the specific gap.**
Specific, actionable feedback ("missing coverage for X") is what actually gets acted on efficiently — vague feedback creates more back-and-forth, not less.

**Mistake 3: Reviewing test cases in isolation from the actual requirements.**
The compliance-documentation gap in the worked example was only caught by cross-referencing against a requirement source the test cases themselves didn't obviously reference — reviewing test cases purely on their own terms misses this class of gap.

**Mistake 4: Treating review as a formality to complete quickly rather than a genuine gap-finding activity.**
A rubber-stamp "looks good" review provides the appearance of quality assurance without its actual substance.

## Best Practices

**Practice 1: Actively check for what's missing, not just whether what's present looks correct.**
This is the single most important mindset shift this module teaches — auditing for absence, not just confirming presence.

**Practice 2: Cross-reference test cases against requirements from every relevant source, not just the primary requirement document.**
The compliance-addendum example shows why a real requirement can hide outside the obvious, primary document.

**Practice 3: Give specific, actionable feedback, named directly.**
"Missing coverage for X" and "TC-014 and TC-019 appear to be duplicates" get acted on far more efficiently than general impressions.

**Practice 4: Deliver feedback collaboratively where possible, especially with less experienced authors.**
A question framed as genuine curiosity often surfaces the same gap as a flat correction, while also building the author's own gap-finding skill for next time.

:::note From the Field
On a healthcare platform, a test case review process existed on paper but was consistently rubber-stamped in practice — reviewers were busy, test cases generally looked professional, and approvals took seconds. A real gap (no test case covering what happens when two patient records with matching names but different dates of birth are searched simultaneously) shipped and caused a real near-miss incident before being caught. The post-incident review found the gap had actually been mentioned informally in a team chat weeks earlier, but never made it into a formal test case because the review process that should have caught the omission had stopped meaningfully checking for anything beyond surface readability. Restoring real review rigor — specifically reintroducing the completeness and coverage checks, not just re-approving faster — was what prevented a repeat.
:::

## Mini Challenge

**Scenario**: A colleague shares five test cases for a new "export to PDF" feature at AtlasBank: (1) export succeeds with valid data, (2) export succeeds with valid data (nearly identical to test 1, different account), (3) export fails gracefully with no data, (4) PDF opens correctly in a standard reader, (5) export button is visible on the page.

**Your task**: Using this module's Reviewer Checklist, identify at least two real problems with this set (consider duplicates, missing coverage, and ambiguity) and write specific, actionable feedback for each.

## Key Takeaways

- Reviewing test cases is a genuinely different skill from writing them well — it requires actively checking for what's missing, not just confirming what's present looks correct.
- A substantive review checks completeness, ambiguity, duplicates, coverage, and maintainability — not just readability and formatting.
- Cross-referencing against every relevant requirement source, not just the primary document, is what catches gaps like requirements buried in addenda or compliance documents.
- Specific, actionable feedback gets acted on far more efficiently than vague impressions like "needs more coverage."

---

## What You Just Learned

- The five dimensions a substantive test case review checks: completeness, ambiguity, duplicates, coverage, maintainability
- Why a review focused only on readability misses the gaps that actually matter
- How an AtlasBank team's collaborative review caught a compliance-documentation gap, a vague expected result, and a duplicate test case in one review session
- How to give specific, actionable review feedback that actually gets acted on

**Next:** [Applying Test Design Across Domains: Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce)

## Related Topics

- [Writing Clear Test Cases](/learning-paths/manual-testing/writing-clear-test-cases) — The authoring standard this module's ambiguity and maintainability checks apply from the reviewer's side
- [Requirement Traceability Matrix (RTM)](/learning-paths/manual-testing/requirement-traceability-matrix) — The formal version of the completeness cross-check this module applies informally during review
- [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) — The reasoning behind why duplicate test cases from the same class don't add real coverage

## Interview Questions

**Q1: What do you look for when reviewing someone else's test cases?**

*What to look for*: A candidate who names specific dimensions (completeness, ambiguity, duplicates, coverage, maintainability) rather than a vague "I check if they look good" — evidence of an actual framework, not just general diligence.

**Q2: How do you give review feedback that actually gets acted on?**

*What to look for*: A candidate who emphasizes specificity ("missing coverage for X" rather than "needs more coverage") and, ideally, mentions framing feedback collaboratively, especially with less experienced authors.

:::note Common Interview Mistake
Many candidates describe test case review as primarily checking for clarity and correct formatting. That's incomplete — the highest-value part of a real review is actively checking for what's *missing*: coverage gaps, duplicates, and requirements buried in a source the test cases don't obviously reference. A strong answer explicitly names this "auditing for absence" mindset, not just confirming what's present is well-written.
:::

**Q3: Tell me about a real gap you caught while reviewing someone else's test cases.**

*What to look for*: A specific, real example (ideally naming which dimension — completeness, duplication, ambiguity — the gap fell under) rather than a generic claim of having reviewed test cases before.

---

## Glossary

**Test Case Review**: The practice of examining someone else's test cases to find real gaps — completeness, ambiguity, duplication, coverage, maintainability — before execution begins.

**Completeness (in review)**: Whether a set of test cases actually covers what a feature's requirements demand, checked by cross-referencing against every relevant requirement source.

**Duplicate Test Case**: Two or more test cases that effectively verify the same thing, adding execution cost without adding real coverage.

## Quick Revision

Remember these five points:

✓ Reviewing test cases is a genuinely different skill from writing them — it requires actively checking for what's missing.

✓ A substantive review checks completeness, ambiguity, duplicates, coverage, and maintainability, not just readability.

✓ Cross-reference against every relevant requirement source, not just the primary document — real gaps often hide in addenda or side documents.

✓ Give specific, actionable feedback ("missing coverage for X") rather than vague impressions.

✓ A rubber-stamped review provides the appearance of quality assurance without its actual substance.
