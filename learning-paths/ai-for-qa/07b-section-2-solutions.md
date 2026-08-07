---
title: "AI for QA — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — applying BVA review, test data evaluation, automation-quality review, and defect-hypothesis verification to five realistic scenarios."
keywords: ["AI for QA solutions", "AI test case knowledge check", "AI automation review answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/ai-for-qa/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Missing Boundary Values for a $25 Minimum

**Correct answer**: [AI-Assisted Test Case Generation](/learning-paths/ai-for-qa/ai-assisted-test-case-generation)'s systematic BVA review — this draft is missing the actual boundary values, $24.99 and $25.00.

**Explanation**: $10 and $50 cover the requirement's obvious "under" and "over" shape, exactly the module's own opening scenario's gap — the real boundary-adjacent values are what a systematic BVA check adds, not what an AI draft produces by default.

**Alternative approaches considered**: Accepting this draft as sufficient because it covers both sides of the rule repeats the exact mistake the module's $15,000 transfer-limit example describes.

**Real-world reasoning**: A direct, near-identical restatement of the module's own central example, confirming the specific missing values were identified correctly.

## Scenario 2: Suspiciously Similar Account-Creation Dates

**Correct answer**: [AI-Assisted Test Data Creation](/learning-paths/ai-for-qa/ai-assisted-test-data-creation)'s distribution check — this is the artificial-uniformity default the module warns about; realistic distribution needs to be explicitly requested.

**Explanation**: 300 records with suspiciously similar dates is exactly the "individually plausible, collectively unrealistic" pattern the module's opening scenario describes — the batch needs re-generation with explicit distribution requirements, not just visual inspection of a few sample records.

**Alternative approaches considered**: Accepting the batch because each individual date looks plausible on its own misses the batch-level distribution problem entirely.

**Real-world reasoning**: Tests whether the distribution criterion specifically (not just volume or shape) was understood as something AI generation needs explicit direction toward.

## Scenario 3: Hardcoded `sleep(5)` in Generated Automation

**Correct answer**: [AI-Assisted API and Automation Authoring](/learning-paths/ai-for-qa/ai-assisted-api-and-automation-authoring)'s automation-quality review — this is the exact hardcoded-pause anti-pattern the module identifies; replace with an explicit wait per [Synchronization and Wait Strategies](/learning-paths/automation/synchronization-and-wait-strategies).

**Explanation**: This is the module's own opening scenario's defect, restated with a slightly different sleep duration — a hardcoded pause is fragile regardless of the specific number of seconds used.

**Alternative approaches considered**: Accepting the script because it currently passes ignores that the fragility risk is about future timing variance, not current behavior — exactly the module's own stated concern.

**Real-world reasoning**: A near-verbatim test of the module's most emphasized specific anti-pattern, confirming it's recognized even with a different numeric detail.

## Scenario 4: Confident "Timezone Conversion Bug" Explanation

**Correct answer**: [AI-Assisted Defect Analysis and Exploratory Testing](/learning-paths/ai-for-qa/ai-assisted-defect-analysis-and-exploratory-testing)'s hypothesis-not-diagnosis principle — verify this claim directly against the actual logs/code before accepting or escalating it.

**Explanation**: A confident, technically-specific explanation is exactly the pattern the module (and [Reviewing AI Output and Recognizing Hallucinations](/learning-paths/ai-for-qa/reviewing-ai-output-and-recognizing-hallucinations) before it) warns provides no real evidence of correctness on its own.

**Alternative approaches considered**: Escalating this explanation directly to a development team without verification risks repeating the module's own two-day-misdirected-investigation example.

**Real-world reasoning**: Tests whether "confidence is not evidence" was understood as applying specifically to root-cause suggestions, not just to test case or code-review contexts.

## Scenario 5: Exploratory Session "Complete" After the AI-Generated Charter List

**Correct answer**: [AI-Assisted Defect Analysis and Exploratory Testing](/learning-paths/ai-for-qa/ai-assisted-defect-analysis-and-exploratory-testing)'s starting-point-not-ceiling principle — the session isn't necessarily complete just because every listed charter was tried.

**Explanation**: This is the exact mistake the module's own Mistake 2 names — treating an AI-generated charter list as a complete session plan, when its real value is as a starting point, with genuine discovery expected to extend beyond it.

**Alternative approaches considered**: Considering the session "done" after the list is exhausted mirrors exactly what the AtlasBank duplicate-application example shows would have missed a real defect.

**Real-world reasoning**: Directly tests whether the "starting point, not a substitute for discovery" distinction was understood as a real constraint on how session completeness should be judged.

## Section 2 Complete

Across four modules, this section applied Section 1's foundational judgment and hallucination-recognition skill to test case generation, test data creation, API/automation authoring, and defect analysis/exploratory testing. From here, continue to Section 3 — Testing AI-Driven Features, starting with Testing LLM-Generated Content, where this path shifts from using AI to accelerate testing work, to testing AI itself as a product feature.
