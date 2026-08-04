---
title: "Manual Testing — Section 5 Review"
slug: section-5-review
sidebar_label: "Section 5 — Review"
description: "A recap of Reporting and Communication — writing bug reports, execution reporting, and reviewing test cases — plus a Knowledge Check."
keywords: ["bug reports", "test execution reporting", "test case review", "QA communication"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-04"
---

# Section 5 Review

You've finished **Reporting and Communication**, the fifth section of Manual Testing. This page is a dedicated recap — bookmark it as a fast reference.

## Section Summary

✔ **Writing Effective Bug Reports** — a defect written up precisely enough that someone else can reproduce and fix it without follow-up questions
✔ **Test Execution and Reporting Results** — tracking Pass/Fail/Blocked status and communicating results, including an explicit exit-criteria evaluation
✔ **Reviewing Test Cases** — auditing someone else's test cases for what's missing, not just confirming what's present looks correct

**How they build on each other**: Module 17 taught how to communicate a single defect clearly. Module 18 extended that same precision discipline to communicating an entire test cycle's results, connecting directly back to Foundations' exit-criteria concept. Module 19 closed the section with a different kind of communication skill entirely — not producing an artifact, but critically evaluating one someone else produced, a skill used constantly in a real QA role.

## Reporting Workflow

How these pieces connect during a real test cycle:

1. Test cases are reviewed (Module 19) before execution begins, catching gaps while they're still cheap to fix
2. Execution proceeds, with each test case tracked as Pass, Fail, or Blocked (Module 18)
3. Every failure is written up as a precise, reproducible bug report (Module 17)
4. Daily reports surface progress and risk to exit criteria in real time (Module 18)
5. A final test summary report gives an explicit, checkable answer to whether exit criteria were met (Module 18)

## Communication Workflow

The same underlying facts, adapted to different readers:

| Audience | What They Need |
|---|---|
| A developer fixing a defect | Precise reproduction steps, environment, expected vs. actual (Module 17) |
| A team tracking daily progress | Brief, specific status: executed today, blockers, on-track assessment (Module 18) |
| A product owner deciding whether to ship | A direct, explicit exit-criteria evaluation (Module 18) |
| A peer whose test cases you're reviewing | Specific, actionable gap-finding feedback, not general impressions (Module 19) |

## Section 5 Knowledge Check

Five realistic scenarios. For each, decide which skill or artifact from this section applies, and why. No answers are provided here. **Solutions**: [Section 5 Solutions](/learning-paths/manual-testing/section-5-solutions).

**Scenario 1**: A tester finds a defect during exploratory testing but the developer can't reproduce it from the initial report.

**Scenario 2**: Three days into a five-day test cycle, a Critical defect is still open and exit criteria require zero open Critical defects.

**Scenario 3**: A colleague submits five test cases for review, two of which are nearly identical to each other.

**Scenario 4**: A product owner asks "are we ready to ship" and the QA lead's honest answer depends on specific, checkable facts, not a general impression.

**Scenario 5**: A reviewer approves a set of test cases quickly because they "look professional," without checking them against the actual requirements.

## Continue to Section 6

**Applying Test Design Across Domains**, starting with [Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce) — where every technique and artifact from Sections 2 through 5 gets applied together, in one integrated exercise per domain.
