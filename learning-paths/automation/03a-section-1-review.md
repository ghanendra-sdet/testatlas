---
title: "Automation Testing — Section 1 Review"
slug: section-1-review
sidebar_label: "Section 1 — Review"
description: "A recap of Automation Foundations — what automation is for, how it compares to manual testing, and selecting the right candidates — plus a Knowledge Check."
keywords: ["test automation review", "automation candidate selection review", "automation vs manual review"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-05"
---

# Section 1 Review

You've finished **Automation Foundations**, the first section of Test Automation. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **Introduction to Automation Testing** — what automation actually is (executing an already-designed test, not designing it), and why "automate everything at once" produces a suite nobody trusts
✔ **Automation vs. Manual Testing** — why the two are complementary, not competing, and what each structurally catches that the other cannot
✔ **Selecting the Right Test Cases for Automation** — a concrete, multi-criteria framework (frequency, stability, determinism, business risk) plus specific anti-criteria for deciding what actually deserves automation

**How they build on each other**: Module 1 established the core distinction (execution vs. design) and the basic automation-candidate filter. Module 2 widened the frame — automation isn't a replacement for manual testing, each covers real risk the other can't. Module 3 closed the section by turning "good candidate" into an actual, applicable framework you can run against a real test case.

## Automation Candidate Quick Reference

| Signal | Favors Automation | Favors Manual/Exploratory |
|---|---|---|
| Frequency | Run on every release | Run once, or rarely |
| Stability | Feature isn't changing soon | Actively being redesigned |
| Result type | Deterministic pass/fail | Requires human judgment |
| Business risk | High if it breaks | Low if it breaks |
| Novelty | Well-understood, established | Brand-new, no usage history yet |

## Section 1 Knowledge Check

Five realistic scenarios. For each, decide whether it's a strong automation candidate, a weak one, or a manual/exploratory case — and why. No answers are provided here. **Solutions**: [Section 1 Solutions](/learning-paths/automation/section-1-solutions).

**Scenario 1**: AtlasBank's "forgot password" flow is run by a meaningful fraction of users every day, has a fully deterministic outcome (reset email sent or not), and hasn't changed in over a year.

**Scenario 2**: A brand-new "AI spending assistant" chat feature just launched internally for the first time, with no existing usage patterns or known edge cases yet.

**Scenario 3**: AtlasBank's marketing team wants automated checks confirming the homepage's promotional banner "looks appealing" before every release.

**Scenario 4**: A compliance-mandated audit-log export feature is run roughly twice a year, by two internal compliance staff, with a fully deterministic expected output.

**Scenario 5**: AtlasBank's account-balance display is run on effectively every session, has a fully deterministic correct value, and the underlying screen has been stable for two years.

## Continue to Section 2

**Framework and Design Patterns**, starting with [Automation Framework Fundamentals](/learning-paths/automation/automation-framework-fundamentals) — where this section's selected candidates start becoming real, maintainable automated tests.
