---
title: "Manual Testing — Section 4 Review"
slug: section-4-review
sidebar_label: "Section 4 — Review"
description: "A recap of Exploratory and Ad Hoc Testing — exploratory fundamentals, session-based management, and choosing between structured and exploratory approaches — plus a Knowledge Check."
keywords: ["exploratory testing review", "session-based test management", "structured vs exploratory testing"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-04"
---

# Section 4 Review

You've finished **Exploratory and Ad Hoc Testing**, the fourth section of Manual Testing. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **Exploratory Testing Fundamentals** — simultaneous test design, execution, and learning, structured around a charter rather than a fixed script; catches what scripted technique structurally can't anticipate
✔ **Session-Based Test Management** — scaling exploratory testing from an individual skill into a schedulable, accountable team practice, via charters, time-boxing, debriefs, and session reports
✔ **When to Use Structured vs. Exploratory Testing** — deciding between the two (or combining them) based on risk, time, product maturity, and compliance

**How they build on each other**: Module 14 established what exploratory testing actually is, correcting the "unstructured clicking around" misconception. Module 15 turned that individual discipline into something a team can plan, track, and hold accountable. Module 16 closed the section by answering the question the whole path has been implicitly building toward since Section 2: given both a full structured toolkit and a disciplined exploratory practice, how do you actually choose between them for a real situation?

## Exploratory Testing Decision Matrix

A quick reference for when each approach fits:

| Situation | Favor | Why |
|---|---|---|
| Well-defined business rule or numeric limit | Structured (Section 2 techniques) | Guaranteed, systematic coverage of a known risk shape |
| Compliance or regulatory requirement | Structured (Section 2 techniques) | Provable, exhaustive coverage is a real requirement, not optional |
| Brand-new feature, no usage history yet | Exploratory | Risk shape is unknown — discovery matters more than guaranteed coverage of anticipated cases |
| Recently redesigned UI or flow | Exploratory | Scripted coverage hasn't caught up yet; unscripted sequences are where defects concentrate |
| Mature, stable feature, periodically revisited | Light exploratory session | "Well-understood" has a shelf life — worth occasional fresh attention even on stable features |
| High risk AND genuinely novel | Both, applied to different parts | Neither approach alone covers what the other is specifically suited to catch |

## Section 4 Knowledge Check

Five realistic scenarios. For each, decide whether structured technique, exploratory testing, or both apply — and if both, which parts of the scenario go to which approach. No answers are provided here. **Solutions**: [Section 4 Solutions](/learning-paths/manual-testing/section-4-solutions).

**Scenario 1**: AtlasBank is adding a new "spending insights" dashboard to the Mobile App — an entirely new feature category for the product, with no prior design or usage history to draw on.

**Scenario 2**: A healthcare platform's insurance-eligibility calculation (a well-documented, stable set of business rules unchanged for two years) needs a full pre-release test pass.

**Scenario 3**: A team has one day left before a compliance deadline and a large set of untested regulatory disclosure rules.

**Scenario 4**: A previously stable checkout flow, untouched for over a year, is due for its quarterly test cycle with no known recent changes.

**Scenario 5**: AtlasBank is launching a new feature combining a well-defined loan-eligibility rule set with a brand-new conversational chat interface for applying.

## Continue to Section 5

**Reporting and Communication**, starting with [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports) — where everything found through both structured and exploratory testing gets communicated clearly enough for someone else to act on.
