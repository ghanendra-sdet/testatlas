---
title: "Manual Testing — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — when to apply structured technique, exploratory testing, or both."
keywords: ["structured vs exploratory testing", "exploratory testing decisions", "test approach selection"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/manual-testing/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: AtlasBank's New "Spending Insights" Dashboard (No Prior History)

**Correct answer**: Exploratory testing, primarily.

**Explanation**: A brand-new feature category with no usage history has an unknown risk shape — there's no established set of business rules or edge cases yet to build structured technique around. Exploratory testing is specifically suited to discovering what nobody has anticipated yet.

**Alternative approaches considered**: Structured technique isn't absent forever here — once specific calculations or thresholds within the dashboard are defined (e.g., "spending category totals," "month-over-month comparison logic"), those specific, well-defined pieces would get Section 2 techniques applied. But at the feature's initial stage, with no such specifics yet established, exploratory testing is the right first move.

**Real-world reasoning**: This scenario is deliberately close to the module's own Mobile App dashboard example — a new-feature-category situation where discovery genuinely has to come before structured coverage can even be designed.

## Scenario 2: Healthcare Insurance-Eligibility Calculation (Stable, Two Years Unchanged)

**Correct answer**: Structured technique — likely Decision Table Testing, given multiple business-rule conditions.

**Explanation**: A stable, well-documented, unchanged business rule is exactly what structured technique is suited to cover with guaranteed, systematic coverage. There's no discovery need here — the risk shape is already well understood.

**Alternative approaches considered**: A light exploratory session isn't wrong to include occasionally (per the Decision Matrix's "mature, stable feature" row), but it shouldn't be the primary approach for a full pre-release pass on rules this well-defined — that would under-serve a risk area structured technique can cover more reliably and completely.

**Real-world reasoning**: "Well-documented, unchanged for two years" is the direct signal pointing toward structured technique — stability and clarity are exactly the conditions structured technique is built for.

## Scenario 3: One Day Left, Compliance Deadline, Untested Regulatory Rules

**Correct answer**: Structured technique — not exploratory testing, despite the time pressure.

**Explanation**: This is deliberately the scenario testing whether a learner internalized the module's central warning: compliance risk specifically demands structured technique's guaranteed coverage, and time pressure is exactly the situation that tempts (wrongly) reaching for exploratory testing's speed instead.

**Alternative approaches considered**: Exploratory testing might feel faster under pressure, but it cannot provide the exhaustive, provable coverage a compliance deadline actually requires — using it here doesn't solve the time problem, it just produces an unprovable, incomplete result that still fails the actual requirement.

**Real-world reasoning**: This scenario mirrors the module's own insurance "From the Field" story directly — the tempting shortcut under pressure is exactly the mistake that story shows going wrong.

## Scenario 4: Stable Checkout Flow, Quarterly Cycle, No Recent Changes

**Correct answer**: A light exploratory session, alongside whatever existing structured regression coverage already exists.

**Explanation**: This is the Decision Matrix's "mature, stable feature, periodically revisited" row directly — structured regression likely already exists and continues to run, but a periodic light exploratory pass is worth scheduling specifically because "well-understood" has a shelf life, and real systems evolve in ways that can quietly undermine old assumptions.

**Alternative approaches considered**: Skipping exploratory attention entirely because the feature is stable is the specific mistake this module's Best Practices section warns against — stability doesn't mean permanently fully understood.

**Real-world reasoning**: The "quarterly test cycle" detail signals this is routine maintenance testing, not a high-pressure or novel situation — exactly where a light exploratory addition, not a full session, is the proportionate choice.

## Scenario 5: AtlasBank Loan Eligibility (Well-Defined) + New Chat Interface (Brand New)

**Correct answer**: Both, applied to different parts — structured technique for the loan-eligibility rule set, exploratory testing for the chat interface.

**Explanation**: This is deliberately built to require splitting one feature into two parts with genuinely different risk profiles, exactly like both of the module's own worked examples (AtlasBank's interest-calculation-vs-dashboard split, and the healthcare scheduling-vs-chatbot split).

**Alternative approaches considered**: Picking one approach for the whole feature — either applying Decision Tables to the unpredictable chat interface (which would require guessing at a risk shape nobody yet knows) or exploring the well-defined eligibility rules without structured guarantees (leaving real compliance-adjacent risk uncovered) — both under-serve one half of the feature.

**Real-world reasoning**: This is the scenario most directly testing the module's central lesson: the decision is per risk area, not once per feature.

---

## What This Confirms

Scenario 3 is the one most learners get wrong on a first pass — the pull toward exploratory testing under time pressure is real and understandable, which is exactly why the module spends real attention warning against it specifically for compliance risk. If you got this one right, that's a strong sign the section's central lesson landed.

**Continue to Section 5**: [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports), where structured and exploratory testing's findings both get communicated clearly enough for someone else to act on.
