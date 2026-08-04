---
title: "API Testing — Section 5 Solutions"
slug: section-5-solutions
sidebar_label: "Section 5 — Solutions"
description: "Answers and reasoning for Section 5's Knowledge Check — excessive data exposure, injection symptoms, mass assignment, and CORS severity depending on endpoint sensitivity."
keywords: ["api security knowledge check", "injection testing solutions", "cors severity"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 5 Solutions

These are the answers to the [Section 5 Review](/learning-paths/api-testing/section-5-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: An Internal Risk Score in an Owned Transaction's Response

**Correct answer**: Excessive Data Exposure, not BOLA — the customer genuinely owns this transaction, but the response still includes a sensitive internal field the UI never uses.

**Explanation**: This is [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals)'s core distinction directly — BOLA is about wrong ownership; this scenario has correct ownership but too many fields, exactly matching the module's loan-status `creditRiskTier` example.

**Alternative approaches considered**: Calling this BOLA would be a category error — no ownership boundary was crossed here at all; the defect is purely about field-level over-sharing.

**Real-world reasoning**: A near-restatement of the module's own worked example with a different field name, testing whether the BOLA/excessive-data-exposure distinction transfers to a new instance, not just the original one.

## Scenario 2: An Apostrophe Triggering a Raw Database Error

**Correct answer**: This is a suspicious symptom worth an immediate, responsible report — a strong signal of an underlying input-handling weakness, potentially injection-related. The correct next step is reporting with full reproduction detail, not attempting to probe further independently.

**Explanation**: This is [Injection and Input-Based Attacks](/learning-paths/api-testing/injection-and-input-based-attacks)'s opening beneficiary-nickname example directly — realistic input (an apostrophe in a real name) revealing unsafe handling via a raw error message.

**Alternative approaches considered**: Attempting to craft a follow-up input to confirm or exploit the underlying vulnerability would cross the module's explicit scope boundary — symptom recognition and reporting, not exploit construction.

**Real-world reasoning**: A close restatement of the module's own worked example, testing whether the specific scope boundary (report immediately, don't probe further) was understood as clearly as the technical symptom itself.

## Scenario 3: An Undocumented Field Applied From a Request Body

**Correct answer**: Mass Assignment — the API is applying a field (`isVerifiedMerchant`) that was never part of the documented, intended request schema, exactly the defect class this represents.

**Explanation**: This is [Injection and Input-Based Attacks](/learning-paths/api-testing/injection-and-input-based-attacks)'s `kycVerified` mass-assignment example directly — an endpoint accepting and applying any field present in the request body, rather than restricting to its documented, intended fields.

**Alternative approaches considered**: Treating this as merely an input-validation gap would understate it — the defect isn't that the field's *value* is wrong, it's that the field should never have been settable by this caller at all, a distinct, more severe category.

**Real-world reasoning**: A direct application of the module's own technique (test fields outside the documented schema) to a new field name, confirming the underlying method — not just the specific `kycVerified` example — was understood.

## Scenario 4: Wildcard CORS on a Public, Unauthenticated Endpoint

**Correct answer**: Low severity — a wildcard CORS origin on a genuinely public, unauthenticated endpoint has little real consequence, since there's no session or credential being exposed to a cross-origin caller.

**Explanation**: This is [Transport Security, CORS, and Secure Communication](/learning-paths/api-testing/transport-security-cors-and-secure-communication)'s severity-depends-on-context lesson directly — the same configuration's risk is driven entirely by what the endpoint actually exposes, not by the CORS header alone.

**Alternative approaches considered**: Flagging this as a severe finding regardless of context would repeat the "wildcard CORS is always bad" oversimplification the module explicitly warns against.

**Real-world reasoning**: Deliberately paired with Scenario 5 to test whether the severity-depends-on-endpoint-sensitivity distinction was understood, not just the mechanics of what CORS headers do.

## Scenario 5: Dynamically-Reflected Origin on a Credentialed Endpoint

**Correct answer**: Severe — this is the module's specific, higher-risk pattern: a dynamically-reflected origin achieving wildcard-like behavior on an authenticated, credentialed endpoint, which can defeat the browser's own credentialed-request protection and let a malicious site act on a logged-in customer's behalf.

**Explanation**: This is [Transport Security, CORS, and Secure Communication](/learning-paths/api-testing/transport-security-cors-and-secure-communication)'s real-project balance-endpoint example directly — the same underlying mechanism (any origin effectively allowed) but on a sensitive, credentialed endpoint, where the consequence is a real account-data exposure to an arbitrary malicious website.

**Alternative approaches considered**: Assuming this is safe because it's not a literal `Access-Control-Allow-Origin: *` would miss the module's specific warning that dynamic origin reflection achieves the same dangerous effect without ever sending a literal wildcard.

**Real-world reasoning**: A near-exact restatement of the module's own real-project example, testing whether the specific, subtler risk (reflected origin, not just literal wildcard) was understood as clearly as the more obvious Scenario 4 case.

## Section 5 Complete

Across three modules, this section covered security testing from a functional QA engineer's vantage point: recognizing BOLA and excessive data exposure using skills already built earlier in this path, identifying symptoms of input-handling weaknesses without crossing into exploit construction, and testing transport security and CORS configuration for severity that depends heavily on what an endpoint actually exposes. From here, continue to Section 6 — Performance and Tooling, starting with [Performance Testing APIs](/learning-paths/api-testing/performance-testing-apis), where this precise, evidence-based testing discipline extends into measuring API behavior under load and choosing the right tool for a given context.
