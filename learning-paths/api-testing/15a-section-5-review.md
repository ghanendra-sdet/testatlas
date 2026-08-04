---
title: "API Testing — Section 5 Review"
slug: section-5-review
sidebar_label: "Section 5 — Review"
description: "A recap of API Security Testing — security fundamentals, injection symptom recognition, and transport/CORS testing — plus a Knowledge Check."
keywords: ["api security testing review", "injection testing review", "cors testing review"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-04"
---

# Section 5 Review

You've finished **API Security Testing**, the fifth section of API Testing. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **API Security Fundamentals** — the CIA Triad, the OWASP API Security Top 10 at a functional level, and the two categories (BOLA, excessive data exposure) a functional tester is best positioned to catch using skills already built earlier in this path
✔ **Injection and Input-Based Attacks** — recognizing symptoms of input-handling weaknesses (mass assignment, unhandled special characters) and reporting them responsibly, explicitly not building or running exploits
✔ **Transport Security, CORS, and Secure Communication** — testing whether data is actually protected in transit and which origins can call an API, including the severity-changing distinction between a permissive CORS policy on a public endpoint versus a credentialed one

**How they build on each other**: Module 13 established that security testing, at a functional level, is largely the same precise-reading and boundary-testing discipline this path already taught, now aimed at security-relevant questions. Module 14 extended that discipline to hostile or malformed input, with an explicit scope boundary around symptom recognition versus exploitation. Module 15 closed the section with transport and cross-origin concerns, testable without deep cryptography or infrastructure expertise.

## Security Finding Severity Reference

A quick reference for how this section's findings tend to rank in severity:

| Finding | Typical Severity Driver |
|---|---|
| BOLA (wrong resource owner) | Direct, unauthorized access to another identity's real data — typically severe |
| Excessive Data Exposure | Depends on field sensitivity — an internal risk score is more severe than a redundant but non-sensitive field |
| Mass Assignment | Depends on what field was exposed — a caller-settable verification or tier field is typically severe |
| Permissive CORS (public, unauthenticated endpoint) | Typically low severity |
| Permissive CORS (credentialed, sensitive endpoint) | Typically severe — can let a malicious site act on a victim's behalf |

## Section 5 Knowledge Check

Five realistic scenarios. For each, identify the finding category and its typical severity driver. No answers are provided here. **Solutions**: [Section 5 Solutions](/learning-paths/api-testing/section-5-solutions).

**Scenario 1**: AtlasBank's transaction-detail response, for a transaction the requesting customer genuinely owns, includes an internal `fraudRiskScore` field never displayed anywhere in the UI.

**Scenario 2**: A tester submits a beneficiary nickname containing an apostrophe (`O'Brien`) and receives a `500 Internal Server Error` with a raw database error message in the response body.

**Scenario 3**: AtlasBank's customer address-update endpoint accepts and applies an undocumented `isVerifiedMerchant` field included in the request body, alongside the documented address fields.

**Scenario 4**: AtlasBank's public, unauthenticated exchange-rate-lookup endpoint has `Access-Control-Allow-Origin: *`.

**Scenario 5**: AtlasBank's authenticated account-balance endpoint, which uses cookie-based sessions, dynamically reflects any requesting origin back as an allowed CORS origin.

## Continue to Section 6

**Performance and Tooling**, starting with [Performance Testing APIs](/learning-paths/api-testing/performance-testing-apis) — where this section's precise, evidence-based testing discipline extends into measuring an API's behavior under load and choosing the right tool for a given testing context.
