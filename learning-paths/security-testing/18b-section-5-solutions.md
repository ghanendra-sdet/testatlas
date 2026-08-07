---
title: "Security Testing — Section 5 Solutions"
slug: section-5-solutions
sidebar_label: "Section 5 — Solutions"
description: "Answers and reasoning for Section 5's Knowledge Check — applying cross-domain security discipline, CI/CD gating, and dual-audience reporting to five realistic scenarios."
keywords: ["security testing solutions", "cloud security testing answers", "security reporting knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-06"
---

# Section 5 Solutions

These are the answers to the [Section 5 Review](/learning-paths/security-testing/section-5-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Three "Different" Skills

**Correct answer**: The flaw is treating each surface as requiring an entirely new mental model, when — per [Security Testing Across API, Database, Mobile, AI, and Cloud](/learning-paths/security-testing/security-testing-across-api-database-mobile-ai-and-cloud) — the same underlying discipline (CIA Triad, access control, identification scope) applies across all of them; only the surface-specific mechanics differ.

**Explanation**: This is the module's own opening scenario restated — one discipline, learned once, applies across every surface this path connects to.

**Alternative approaches considered**: Learning each surface's security concerns as an unrelated topic wastes effort re-deriving principles this path already establishes once.

**Real-world reasoning**: Tests whether the "same discipline, different mechanics" framing was understood as the module's actual point, not just a list of related topics.

## Scenario 2: The Publicly Readable Bucket

**Correct answer**: This violates the confidentiality property from the CIA Triad, and the shared responsibility model — the cloud provider secures the underlying infrastructure, but the storage permission configuration is the team's own responsibility. Test for it by attempting unauthenticated access to a known resource's URL directly.

**Explanation**: This is the module's own AtlasBank document-upload example restated — the same confidentiality question this path opened with in Module 1, now applied to infrastructure.

**Alternative approaches considered**: Assuming the cloud platform itself is responsible for this misconfiguration misunderstands the shared responsibility model directly.

**Real-world reasoning**: Tests whether cloud misconfiguration was recognized as a configuration choice the team makes, not a platform-level flaw.

## Scenario 3: Failing Quietly

**Correct answer**: The test is very likely configured as a non-blocking check — per [Security Automation and Security in CI/CD](/learning-paths/security-testing/security-automation-and-security-in-cicd), it's genuinely running and genuinely failing, but was never actually wired to stop the pipeline on failure.

**Explanation**: This is the module's own opening scenario restated — a real, correctly-functioning test provides no protection if its failure can't actually block anything.

**Alternative approaches considered**: Assuming the test itself must be broken or misconfigured overlooks the more likely explanation — the test works fine; the gate configuration around it doesn't.

**Real-world reasoning**: Tests whether "presence versus effectiveness" was understood as the module's actual distinction.

## Scenario 4: Old and New

**Correct answer**: It's a real improvement only if the scan's findings are configured to actually block the pipeline (or otherwise force action) on a real, validated finding — otherwise it's security theater, producing reports with no actual enforcement behind them, per this section's own real-gate-versus-optional-step principle.

**Explanation**: This directly applies Module 17's central lesson to a new context — adding a tool is not the same as adding real protection.

**Alternative approaches considered**: Assuming any new scanning tool is automatically a genuine improvement ignores the configuration question that actually determines its real-world effect.

**Real-world reasoning**: Tests whether "does it actually block something" was understood as the deciding factor, not the mere presence of a new tool.

## Scenario 5: Technically Perfect, Still Ignored

**Correct answer**: A plain-language risk summary for the non-technical stakeholder deciding on prioritization — per [Security Reporting, Bug Reporting, and Risk Communication](/learning-paths/security-testing/security-reporting-bug-reporting-and-risk-communication), technical accuracy and communicated urgency are separate properties, and a purely technical report often fails to communicate urgency to the audience actually controlling prioritization.

**Explanation**: This is the module's own opening scenario restated — a technically flawless report sitting unprioritized because it never answered "why does this matter" for the right audience.

**Alternative approaches considered**: Assuming the finding needs more technical detail or a re-investigation is exactly the mistake this module's own examples show doesn't solve the actual problem.

**Real-world reasoning**: Tests whether the dual-audience distinction was understood as the actual missing piece, not a need for more technical precision.

## Section 5 Complete

Across three modules, this section zoomed out from individual defect classes to the bigger picture: recognizing this path's own discipline already at work across API, Database, Mobile, and AI for QA's own security modules, extending it to a genuinely new cloud surface, making security checks real and enforced through the delivery pipeline, and communicating findings in a way that actually gets them fixed. From here, continue to Section 6 — Application Modules and Capstone, applying everything from this path to AtlasBank and AtlasShop directly.
