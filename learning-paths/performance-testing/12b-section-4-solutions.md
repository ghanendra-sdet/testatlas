---
title: "Performance Testing — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — applying dual-audience reporting, capacity forecasting, and systematic defect investigation to five realistic scenarios."
keywords: ["performance testing solutions", "capacity planning answers", "defect investigation knowledge check"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/performance-testing/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Two Different Audiences, One Finding

**Correct answer**: [Result Analysis and Reporting](/learning-paths/performance-testing/result-analysis-and-reporting)'s dual-audience principle — produce a technical report for engineering and a separate, plain-language business-impact summary for the product manager.

**Explanation**: This is the module's own central lesson — a single report trying to serve both audiences at once tends to underserve at least one of them; two coordinated documents from the same finding serve both properly.

**Alternative approaches considered**: Sending only the technical report risks the product manager being unable to make the launch-date decision they actually need to make, exactly as this module's opening scenario described.

**Real-world reasoning**: A direct, general restatement of the module's own core principle, applied to a fresh but structurally identical scenario.

## Scenario 2: Steady Organic Growth Approaching a Ceiling

**Correct answer**: [Capacity Planning](/learning-paths/performance-testing/capacity-planning)'s forecasting framework — combine the confirmed ceiling with the real, observed growth rate to project a specific crossing date, then recommend action with a safety margin.

**Explanation**: This is the module's own central scenario — a ceiling approached by ordinary growth (not a single scheduled event) still needs a forecast date and a proactive recommendation, the same way AtlasBank's own routine planning cycle example handled it.

**Alternative approaches considered**: Waiting for a specific triggering event before acting would miss this scenario's actual shape — there is no single event, just steady growth, which is exactly why an ongoing forecast (not a one-time check) is needed.

**Real-world reasoning**: Tests whether the module's growth-trend framework was understood as applicable to ordinary organic growth, not just single dated events like the promotional campaign used in the module's own worked example.

## Scenario 3: Slower After a Long Session

**Correct answer**: [Performance Defect Investigation](/learning-paths/performance-testing/performance-defect-investigation)'s trace — the phrase "after a long session" points toward soak testing specifically.

**Explanation**: This is the module's own explicit language-to-test-type mapping — "after a while" / duration-dependent language suggests soak testing, the only test type with the extended duration needed to reproduce a session-length-dependent degradation.

**Alternative approaches considered**: Attempting to reproduce this with a spike or load test would very likely fail, since neither runs long enough to reproduce a defect that specifically depends on sustained session duration.

**Real-world reasoning**: Directly tests whether the report-language-to-test-type mapping was understood as a general diagnostic tool, not just background detail in the module's own worked example.

## Scenario 4: Consistently Near Capacity, No Headroom

**Correct answer**: [Performance Defect Investigation](/learning-paths/performance-testing/performance-defect-investigation)'s Step 5 — this pattern (no headroom, regardless of when tested) points toward a genuine capacity limit, not a code-level defect.

**Explanation**: The module explicitly distinguishes these two cases by exactly this signal — a defect typically has headroom outside the specific reported condition, while a system consistently near its ceiling regardless of timing suggests a real capacity constraint, which routes to [Capacity Planning](/learning-paths/performance-testing/capacity-planning)'s framework instead of a code fix.

**Alternative approaches considered**: Treating this as a code defect and searching for a fixable root cause might waste investigation time on a problem that's actually a scale issue, not a logic issue.

**Real-world reasoning**: Tests whether the defect-vs-capacity distinction was understood as a real, checkable signal (presence or absence of headroom), not just an abstract category difference.

## Scenario 5: "The Checkout Flow Was Slow" — No Other Detail

**Correct answer**: [Result Analysis and Reporting](/learning-paths/performance-testing/result-analysis-and-reporting)'s completeness requirement — this report is missing pass/fail against an SLO, the correlated cause, reproducibility, and a recommendation.

**Explanation**: This is a near-restatement of the module's own opening scenario's failure mode — a bare symptom statement, with none of the four required elements, leaves the reader unable to act on it.

**Alternative approaches considered**: Passing this report along as-is would repeat the same costly gap the module's own fintech-company example described, where a vague report delayed appropriate escalation.

**Real-world reasoning**: Tests whether the four required report elements were memorized specifically enough to recognize their complete absence in a minimal example.

## Section 4 Complete

Across three modules, this section covered dual-audience reporting, forward-looking capacity forecasting, and a systematic trace for diagnosing any vague performance complaint — closing this path's full instruction-module content. From here, continue to Section 5 — Application Modules & Capstone, where this entire toolkit is applied together against realistic AtlasBank and AtlasShop scenarios, closing with a capstone that evaluates the operational cost of an already-correct implementation — the fifth and final layer in TestAtlas's cross-curriculum narrative.
