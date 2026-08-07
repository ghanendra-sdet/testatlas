---
title: "Security Testing — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — applying environment-level, business logic, data protection, and logging testing to five realistic scenarios."
keywords: ["security testing solutions", "business logic security answers", "logging testing knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-06"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/security-testing/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Every Page Works Fine

**Correct answer**: Environment-level testing, specifically a security-headers check — per [Configuration, Secrets, and Transport Security](/learning-paths/security-testing/configuration-secrets-and-transport-security), a missing framing-protection header is an environment-level gap independent of any individual page's own correctness. Feature testing didn't catch it because every page genuinely does work correctly; the gap exists entirely outside any single feature.

**Explanation**: This is the module's own opening scenario restated — environment-level testing is a distinct surface from feature-level testing, and this is exactly the kind of gap only a deliberate, separate check would find.

**Alternative approaches considered**: Assuming thorough feature testing implicitly covers environment configuration is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether the environment-versus-feature distinction was understood as functionally, not just conceptually, different.

## Scenario 2: Nothing Technically Broken

**Correct answer**: A workflow-step bypass — per [Business Logic Security Testing](/learning-paths/security-testing/business-logic-security-testing), the individual steps are all technically correct; the defect exists only in the missing enforcement of the sequence connecting them. A scanner wouldn't find it because there's no technically incorrect code to match a pattern against.

**Explanation**: This is the module's own opening scenario restated — business logic defects have no technical vulnerability signature, only found through deliberate test design against the workflow as a whole.

**Alternative approaches considered**: Searching for this using automated scanning tools is exactly Mistake 4 the module names directly — there's no pattern for a scanner to detect.

**Real-world reasoning**: Tests whether "no technical vulnerability, still exploitable" was understood as this defect class's defining, distinguishing property.

## Scenario 3: The Screen Shows Very Little

**Correct answer**: The underlying data response might contain more personal data than the screen actually displays or uses — per [Data Protection, PII, and Compliance Awareness](/learning-paths/security-testing/data-protection-pii-and-compliance-awareness), what a screen renders and what the underlying response contains are separate, independently-testable properties.

**Explanation**: This is the module's own opening scenario restated — judging data exposure by what's visible on screen misses real, present-in-the-response personal data.

**Alternative approaches considered**: Assuming a minimal-looking screen means minimal data exposure is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether "inspect the raw response, not the rendered screen" was understood as the actual testing method.

## Scenario 4: Deactivated, Not Deleted

**Correct answer**: Verify the customer's personal data is actually removed or irreversibly anonymized across every system it was stored in — not just that the primary account record shows as deactivated — per the module's own deletion-completeness discipline.

**Explanation**: This is the module's own real-project example restated — an account can appear closed while personal data persists, fully identifiable, in secondary systems like reporting or analytics.

**Alternative approaches considered**: Accepting "deactivated" as equivalent to "deleted" without checking further is exactly Mistake 3 the module names directly.

**Real-world reasoning**: Tests whether deletion completeness was understood as requiring verification across every system, not just the most visible one.

## Scenario 5: The Log Exists

**Correct answer**: The logging may not cover security-relevant event categories specifically — like administrative permission changes — even though general customer-facing activity is captured. Per [Logging, Audit Trails, and Security Observability](/learning-paths/security-testing/logging-audit-trails-and-security-observability), general-purpose activity logging can look complete while missing exactly these categories.

**Explanation**: This is the module's own opening scenario restated — a visible, working log existed, and it simply never captured the specific event category that mattered most from a security standpoint.

**Alternative approaches considered**: Assuming any visible activity log constitutes adequate security logging is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether "test coverage by specific event category" was understood as necessary, rather than trusting a general-purpose log's existence.

## Section 4 Complete

Across four modules, this section widened this path's scope beyond individual features: the environment those features run inside, the workflows connecting otherwise-correct individual steps, the data itself as it moves through and beyond a feature, and the record of what happened when something goes wrong. From here, continue to Section 5 — Security Across the Organization and Delivery Pipeline, starting with Security Testing Across API, Database, Mobile, AI, and Cloud.
