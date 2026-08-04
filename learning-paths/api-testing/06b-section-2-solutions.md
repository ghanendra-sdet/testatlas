---
title: "API Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — request verification, invalid query parameters, format validation, non-round test data, and error-path header consistency."
keywords: ["api testing knowledge check", "data validation solutions", "response verification answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/api-testing/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: Leftover Field in Copied Test Data

**Correct answer**: Verify the request itself before trusting the response — `"memo": ""` is an empty string, not an absent field, so this test doesn't actually exercise the no-memo scenario it was written for.

**Explanation**: This is [API Requests and Responses](/learning-paths/api-testing/api-requests-and-responses)' opening example directly — a request that looks close enough to correct can silently fail to test what it was intended to test, making any response "pass" meaningless for the scenario actually intended.

**Alternative approaches considered**: Trusting the response because it came back successfully would treat the test as valid when it never actually exercised the no-memo case at all — the request needs fixing (remove the field entirely) before the response is meaningful evidence of anything.

**Real-world reasoning**: A near-exact restatement of the module's own worked example, testing whether the lesson (verify the request, not just the response) was internalized.

## Scenario 2: Invalid Query Parameter Silently Ignored

**Correct answer**: This should return `400 Bad Request` for the invalid `status` value, not silently fall back to returning all beneficiaries with `200 OK`.

**Explanation**: This is [Headers, Parameters, and Payload Validation](/learning-paths/api-testing/headers-parameters-and-payload-validation)'s `status=archived` example with the value changed — a caller who provides an invalid filter value gets no signal that it was ignored, and reasonably (but wrongly) assumes the filter was applied.

**Alternative approaches considered**: Treating this as acceptable because "a result was returned" misses that the result is silently wrong for what the caller actually asked for — the defect is specifically that an invalid value produces the same response as no value at all, no different than passing.

**Real-world reasoning**: Directly mirrors AtlasBank's beneficiary-list example — testing whether the specific lesson (test invalid values, not just presence/absence) was internalized.

## Scenario 3: Invalid Date Format in a Nested-Feeling Field

**Correct answer**: `"expiryDate": "2027-13"` fails format validation — month `13` doesn't exist; this is a real data defect even though the field is correctly typed as a string.

**Explanation**: This is [Data Validation and Response Verification](/learning-paths/api-testing/data-validation-and-response-verification)'s type-vs-format distinction directly — a correctly-typed string can still contain an invalid value, and a type check alone would never catch this.

**Alternative approaches considered**: Confirming the field is present and is a string (type validation) is necessary but not sufficient — format validation, checking the actual date value is a real, valid month, is the layer that catches this specific defect.

**Real-world reasoning**: Applies the module's decimal-precision lesson to a different field type (dates instead of currency), testing whether the underlying principle — type validation isn't format validation — transfers to a new example, not just the original one.

## Scenario 4: Round-Number Test Data on a Calculation

**Correct answer**: This test case alone is insufficient — a second, deliberately non-round test case (e.g., `principalAmount: 10000.00`, a less clean rate or term producing a non-round expected payment) is needed to check for a rounding-direction defect.

**Explanation**: This is [Data Validation and Response Verification](/learning-paths/api-testing/data-validation-and-response-verification)'s exchange-rate example directly — a round-number test case can produce a correct-looking result while a rounding-direction bug remains completely hidden, only surfacing with realistic, messier values.

**Alternative approaches considered**: Accepting this one test case as sufficient coverage of the calculation would repeat the exact mistake the module's exchange-rate example was built to illustrate — clean data hiding a real defect.

**Real-world reasoning**: A direct application of [Test Data Design](/learning-paths/manual-testing/test-data-design)'s realistic-data principle, now specifically to a loan-payment calculation instead of a currency-conversion one — reinforcing that the principle generalizes across any calculated financial field.

## Scenario 5: Error-Path Content-Type Inconsistency

**Correct answer**: This is a real defect — the `Content-Type` claim should hold on every response, including error responses; returning `text/plain` with a raw stack trace on a `500` breaks that consistency.

**Explanation**: [Headers, Parameters, and Payload Validation](/learning-paths/api-testing/headers-parameters-and-payload-validation) named this directly — response headers deserve the same verification as request headers, and error paths are especially prone to diverging from a documented contract since they're often implemented separately from the success path.

**Alternative approaches considered**: Dismissing this because "it's just an error response" misses that anything parsing the response programmatically (a UI, another service) likely expects JSON consistently and will fail unpredictably when it unexpectedly gets plain text with a raw stack trace — itself a second, related defect (leaking internal implementation detail to a caller).

**Real-world reasoning**: This exact scenario was flagged as a specific, common pattern worth testing back in [Section 1's Knowledge Check](/learning-paths/api-testing/section-1-solutions) — carried forward here to confirm the lesson holds across both sections.

## Section 2 Complete

Across three modules, this section covered the full request/response lifecycle and its recurring patterns, the three independent request-validation surfaces (headers, parameters, payload), and the layered structure of response data validation down to cross-field business rules. From here, continue to Section 3 — Auth and Access Control, starting with [API Authentication](/learning-paths/api-testing/api-authentication), where this literacy gets applied to authentication, authorization, and rate-limiting behavior.
