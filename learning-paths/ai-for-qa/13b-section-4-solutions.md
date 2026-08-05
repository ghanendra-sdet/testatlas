---
title: "AI for QA — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — applying governance policy structure, data safety, and the unified review workflow to five realistic scenarios."
keywords: ["AI for QA solutions", "AI governance knowledge check", "AI security awareness answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-05"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/ai-for-qa/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Good Individual Habits, No Written Policy

**Correct answer**: [AI Governance for QA](/learning-paths/ai-for-qa/ai-governance-for-qa)'s core lesson — good individual habits don't provide team-wide accountability or traceability; a written policy naming all four elements is still needed.

**Explanation**: This is the module's own opening scenario directly — individual good practice is real and valuable, but it doesn't substitute for a policy that makes the whole team's practice consistent and traceable.

**Alternative approaches considered**: Assuming good individual habits are "good enough" without formal policy repeats the exact gap the module's opening scenario shows has real consequences once something needs tracing.

**Real-world reasoning**: A direct restatement of the module's own central distinction, confirming individual habit and team policy were understood as different things.

## Scenario 2: Debugging With Real Customer Account Data

**Correct answer**: [AI Security and Privacy Awareness](/learning-paths/ai-for-qa/ai-security-and-privacy-awareness)'s data-safety framework — use synthetic or sanitized data instead of the real customer record.

**Explanation**: This is the module's own opening scenario directly — real customer account data is exactly the PII category that shouldn't be sent to an external AI tool, and synthetic data typically provides equivalent debugging value.

**Alternative approaches considered**: Proceeding with the real data because it's "just for debugging" repeats the exact rationalization the module's opening scenario shows leads to a genuine data-exposure incident.

**Real-world reasoning**: A near-identical restatement of the module's own central example, confirming the safer-alternative principle was understood as the correct response, not just a described risk.

## Scenario 3: Summarizing Real Support Tickets

**Correct answer**: [AI Security and Privacy Awareness](/learning-paths/ai-for-qa/ai-security-and-privacy-awareness)'s prompt injection awareness — sanitize the tickets and check for embedded instruction-like content before AI-assisted processing.

**Explanation**: This is the module's own named QA-specific risk — real user-generated content processed by an AI tool needs both customer-data sanitization and a check for potential prompt injection, not just one or the other.

**Alternative approaches considered**: Sanitizing customer identifiers alone without checking for embedded prompt-injection content addresses only half of what this specific scenario requires.

**Real-world reasoning**: Tests whether both parts of the module's ticket/log-processing guidance (data sanitization and injection awareness) were understood as jointly necessary, not just one or the other.

## Scenario 4: Known Standards, Inconsistent Application

**Correct answer**: [Human Review Workflows and AI Quality Assurance](/learning-paths/ai-for-qa/human-review-workflows-and-ai-quality-assurance)'s unified workflow — build one consistent routing process rather than relying on individual memory.

**Explanation**: This is the module's own opening scenario directly — the standards are already known; the actual gap is a consistent, structural process for applying them reliably, which is exactly what this module's four-step workflow provides.

**Alternative approaches considered**: Retraining the team on the individual standards they already know wouldn't address the actual gap, which is application consistency, not knowledge.

**Real-world reasoning**: A direct test of the module's own central distinction between knowing standards and having them reliably applied.

## Scenario 5: A Passing Review, Never Recorded

**Correct answer**: [Human Review Workflows and AI Quality Assurance](/learning-paths/ai-for-qa/human-review-workflows-and-ai-quality-assurance)'s logging requirement — an unlogged review is indistinguishable, later, from no review at all.

**Explanation**: This is the module's own explicitly named principle — logging every outcome, not just problem findings, is what preserves the ability to later confirm review coverage was actually complete.

**Alternative approaches considered**: Treating this as acceptable because the review "did happen" misses the module's own point — without a record, that fact isn't verifiable later, which defeats the actual purpose of an audit trail.

**Real-world reasoning**: Directly tests whether "log every outcome, not just problems" was understood as a hard requirement, not an optional nicety.

## Section 4 Complete

Across three modules, this section covered AI governance policy structure, data safety and prompt injection awareness, and the unified workflow that operationalizes every review standard from this path. From here, continue to Section 5 — Application Modules & Capstone, starting with AtlasBank AI Support Assistant Validation, where this entire toolkit is applied together against a real, integrated feature, closing with a capstone centered on TestAtlas's first AI-native feature.
