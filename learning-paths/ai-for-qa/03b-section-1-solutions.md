---
title: "AI for QA — Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — applying the drafting-vs-judgment distinction, genuine review, and hallucination recognition to five realistic scenarios."
keywords: ["AI for QA solutions", "human in the loop answers", "hallucination recognition knowledge check"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/ai-for-qa/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: AI Deciding a Rare, Ambiguous Edge Case

**Correct answer**: [AI in Software Testing](/learning-paths/ai-for-qa/ai-in-software-testing)'s drafting-vs-judgment distinction — this is a judgment call requiring business context, and should stay human-owned, not delegated to AI.

**Explanation**: Deciding whether a rare, ambiguous case matters for a specific customer segment requires exactly the kind of business context the module identifies as outside AI's reach — this isn't a drafting task, it's a judgment call.

**Alternative approaches considered**: AI could offer a plausible-sounding opinion, but per the module's own reasoning, that opinion carries no real accountability or guaranteed grounding in the actual business context — treating it as a decision rather than a discussion input would be a mistake.

**Real-world reasoning**: Directly tests whether the drafting-vs-judgment distinction was understood as a real decision framework, not just descriptive background.

## Scenario 2: Vague Review Policy

**Correct answer**: [Responsible AI Usage and Human-in-the-Loop QA](/learning-paths/ai-for-qa/responsible-ai-usage-and-human-in-the-loop-qa)'s verification-target principle — this policy needs a specific, defined target to check against, or it's a formality.

**Explanation**: "Someone reads it" with no defined verification target is exactly the module's own opening scenario's failure mode — a review step that exists procedurally but doesn't structurally catch anything.

**Alternative approaches considered**: Trusting this policy as sufficient because a human is technically "in the loop" would repeat the module's own central warning — presence in the process isn't the same as genuine verification.

**Real-world reasoning**: A near-restatement of the module's own opening scenario, confirming the formality-vs-genuine distinction was understood as broadly applicable, not tied to one specific example.

## Scenario 3: A Rule That "Sounds Exactly Like" the Requirements

**Correct answer**: [Reviewing AI Output and Recognizing Hallucinations](/learning-paths/ai-for-qa/reviewing-ai-output-and-recognizing-hallucinations)'s core habit — verify the specific claim directly against the actual requirements document, don't trust that it "sounds like" something real.

**Explanation**: This is the module's own central warning — a hallucination is specifically good at sounding plausible and matching real conventions; "sounds exactly right" is precisely the situation where direct verification matters most, not less.

**Alternative approaches considered**: Accepting the rule because it sounds authentic would repeat the exact mistake both the module's KYC-related example and its field-name example describe.

**Real-world reasoning**: Tests whether "plausibility is not evidence" was understood as an active principle to apply, especially when a claim sounds unusually convincing.

## Scenario 4: A Confidently-Stated Root Cause

**Correct answer**: [Reviewing AI Output and Recognizing Hallucinations](/learning-paths/ai-for-qa/reviewing-ai-output-and-recognizing-hallucinations)'s core habit — verify the claim directly against the actual logs/code, regardless of how confidently or technically it's stated.

**Explanation**: This is the module's own "confidently wrong root-cause claims" hallucination type, named directly — confidence and technical detail are exactly the surface features a hallucination can convincingly display.

**Alternative approaches considered**: Accepting a technically-detailed explanation without checking it against real logs risks sending an investigation in a wrong direction, exactly as the module warns.

**Real-world reasoning**: Directly tests recognition of one of the module's four named hallucination types in a fresh scenario.

## Scenario 5: Test Data Drafting vs. Resolving Conflicting Requirements

**Correct answer**: [AI in Software Testing](/learning-paths/ai-for-qa/ai-in-software-testing)'s distinction — test data drafting is a strong AI candidate; resolving which of two conflicting requirements is correct is a judgment call requiring business context, and should stay human-owned.

**Explanation**: This scenario deliberately pairs one task from each side of the module's own distinction, testing whether both halves — not just one — were understood clearly.

**Alternative approaches considered**: Treating both tasks the same way (either both AI-delegated or both human-only) would miss the real, meaningful distinction between drafting and judgment this module establishes.

**Real-world reasoning**: A direct, paired test of the module's central framework, requiring correctly classifying two contrasting tasks rather than just one.

## Section 1 Complete

Across three modules, this section established why AI needs deliberate, judgment-informed use, what a genuine human-in-the-loop review requires, and the practiced skill of recognizing a hallucination. From here, continue to Section 2 — AI-Assisted Testing Techniques, starting with AI-Assisted Test Case Generation, where this section's foundational judgment and hallucination-recognition skill get applied directly to real QA productivity work.
