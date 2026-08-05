---
title: "AI for QA — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — applying the deterministic-vs-AI-quality distinction, prompt testing, and hallucination/bias/safety/reliability testing to five realistic scenarios."
keywords: ["AI for QA solutions", "testing AI features knowledge check", "AI quality defects answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/ai-for-qa/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Exact-Match Assertion Failing Inconsistently

**Correct answer**: [Testing AI-Driven Features](/learning-paths/ai-for-qa/testing-ai-driven-features)'s core distinction — this is very likely the wrong test method (exact-match against a non-deterministic AI-generated layer), not necessarily a real defect.

**Explanation**: This is the module's own opening scenario directly — an exact-match assertion against AI-generated output produces exactly this confusing, inconsistent-failure pattern, and the first diagnostic step is checking whether the underlying deterministic layer is actually consistent before assuming the feature itself is broken.

**Alternative approaches considered**: Continuing to "fix" the test by adjusting the expected string would repeat the module's own described mistake — the fundamental issue is the test method, not the specific expected value.

**Real-world reasoning**: A direct restatement of the module's own central scenario, confirming the deterministic-vs-AI-quality diagnostic order was understood.

## Scenario 2: Casual, Typo-Containing Phrasing vs. Formal Phrasing

**Correct answer**: [Prompt Testing and Evaluation](/learning-paths/ai-for-qa/prompt-testing-and-evaluation)'s realistic variation testing — generate both phrasing styles and compare rubric scores.

**Explanation**: This is exactly the module's own opening scenario's gap — a single clean phrasing test says nothing about how the feature performs against real, informally-phrased input, which needs to be tested deliberately.

**Alternative approaches considered**: Assuming the Assistant handles all phrasing equally well without testing informal variation specifically repeats the exact assumption the module's opening scenario shows to be wrong.

**Real-world reasoning**: Directly tests whether realistic phrasing variation was understood as a deliberate, necessary test category, not an edge case.

## Scenario 3: Asking About a Never-Issued Card Type

**Correct answer**: [Hallucinations, Bias, Safety, and Reliability](/learning-paths/ai-for-qa/hallucinations-bias-safety-and-reliability)'s grounding verification — this is exactly the "known-unavailable data" test category the module describes.

**Explanation**: Asking about a card type that was never issued is structurally identical to the module's own discontinued-loan-product example — testing whether the Assistant honestly acknowledges the gap or confidently fabricates an answer.

**Alternative approaches considered**: Only testing with real, currently-issued card types would miss exactly this defect class, per the module's own core warning.

**Real-world reasoning**: A close variant of the module's central worked example, applied to a different but structurally identical "unavailable data" scenario.

## Scenario 4: Declining General Investment Advice

**Correct answer**: [Hallucinations, Bias, Safety, and Reliability](/learning-paths/ai-for-qa/hallucinations-bias-safety-and-reliability)'s safety testing — this is a scope-boundary test, confirming the Assistant correctly declines an out-of-scope request.

**Explanation**: General investment advice falls outside the Assistant's six documented categories — this is precisely the kind of active scope-boundary verification the module names as safety testing for a narrowly-scoped feature.

**Alternative approaches considered**: Assuming the documented scope alone prevents the Assistant from attempting an answer would repeat the module's own named mistake — scope has to be actively tested, not just trusted because it's written down.

**Real-world reasoning**: Tests recognition of the safety category specifically, distinct from the other three defect classes in the same module.

## Scenario 5: Identical Query, Contradictory Answers

**Correct answer**: [Hallucinations, Bias, Safety, and Reliability](/learning-paths/ai-for-qa/hallucinations-bias-safety-and-reliability)'s reliability testing — this is the consistency check the module describes.

**Explanation**: Contradictory answers to the exact same repeated query is the module's own named reliability concern — distinct from hallucination (a single fabricated claim) in that the specific problem here is inconsistency between two answers, not necessarily that either one is wrong.

**Alternative approaches considered**: Treating this only as a hallucination issue would miss the more precise diagnosis — the core problem is that the two answers disagree, which is what reliability testing specifically targets.

**Real-world reasoning**: Tests whether reliability was understood as a distinct defect class from hallucination, even though both can involve incorrect content.

## Section 3 Complete

Across three modules, this section established the deterministic-vs-AI-quality distinction, built a rubric-based evaluation method using realistic prompt variation, and applied that method to four specific, named AI quality defect classes. From here, continue to Section 4 — AI Governance and Security, starting with AI Governance for QA, where this section's testing techniques inform what a team needs in place before adopting AI-driven features and AI-assisted workflows at scale.
