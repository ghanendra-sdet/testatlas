---
title: "Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — what to check on a response, an error path, related routes, and a documented header contract."
keywords: ["api testing knowledge check", "http status code testing", "rest convention testing"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/api-testing/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: A Balance Endpoint That Always Looks Correct

**Correct answer**: Check the status code explicitly, not just whether the balance value looks plausible.

**Explanation**: A response "looking correct" only tells you the body is plausible — it says nothing about whether the status code itself is the right one for a successful read. This is the exact shape of [HTTP Fundamentals](/learning-paths/api-testing/http-fundamentals)' balance-endpoint example: a `GET` request incorrectly returning `201 Created` instead of `200 OK` would pass a body-only check every time.

**Alternative approaches considered**: Checking only that the balance value is numerically correct is necessary but not sufficient — it verifies the business logic, not the API's contract with its callers.

**Real-world reasoning**: This scenario is deliberately close to the module's own example — a case designed to test whether a learner checks the full response, or stops at "the number looks right."

## Scenario 2: A Generic Success Message Regardless of Response Content

**Correct answer**: Test the API response directly, independent of the UI — the UI's generic success message provides no evidence about the transfer's actual outcome.

**Explanation**: This is [What Is API Testing?](/learning-paths/api-testing/what-is-api-testing)'s core lesson applied directly: a UI that shows success for any 200-range response can mask a response body containing something meaningfully different, like a `status: "pending_review"` field the UI never displays.

**Alternative approaches considered**: Relying on the UI test alone would be Mistake 2 from that module — assuming a passing UI test means the API is correct, when a passing UI test actually provides no evidence about response-body correctness at all.

**Real-world reasoning**: Directly mirrors the module's own AtlasBank fund-transfer example, where a real defect (an incomplete transfer reported as a success) was only visible by reading the raw API response.

## Scenario 3: Identical Empty Responses for Two Different Real Scenarios

**Correct answer**: The nonexistent-account case should return a different status code (`404`) than the zero-transactions case (`200` with an empty array) — the two currently indistinguishable responses are a real defect.

**Explanation**: This is [HTTP Fundamentals](/learning-paths/api-testing/http-fundamentals)' transaction-history example directly: a genuinely empty, valid result and a request against a resource that doesn't exist at all are meaningfully different scenarios that deserve different status codes, even though their bodies look identical.

**Alternative approaches considered**: Treating both cases as acceptable because "the array is empty either way" misses that a caller (a UI, another service) has no way to distinguish "nothing here" from "this doesn't exist" without the status code doing that work.

**Real-world reasoning**: A near-exact restatement of the module's own worked example, testing whether the specific lesson (status code distinguishes what an identical-looking body cannot) was internalized.

## Scenario 4: Two Routes That Might Mean the Same Thing

**Correct answer**: Test whether `suspend` and `DELETE` actually produce different, name-appropriate behavior — specifically, whether `suspend` is reversible (as its name implies) rather than silently performing the same irreversible action as `DELETE`.

**Explanation**: This is [REST Architecture and API Design Principles](/learning-paths/api-testing/rest-architecture-and-api-design-principles)'s `deactivate`/`DELETE` example with the name changed — a route whose name implies a lesser, reversible action needs to actually behave that way, not silently alias a hard delete.

**Alternative approaches considered**: Testing each route in isolation (confirming `suspend` "does something" and `DELETE` "does something") would miss the actual defect, which is only visible when comparing the two routes' behavior against each other and against what their names promise.

**Real-world reasoning**: Directly mirrors AtlasBank's beneficiary API example, where a misleadingly-named route was wired to the same destructive logic as the properly-named deletion endpoint.

## Scenario 5: A Documented Header Contract

**Correct answer**: Explicitly test that `Content-Type: application/json` holds on error responses, not just successful ones — a documented header claim is a real, testable part of the API's contract.

**Explanation**: [HTTP Fundamentals](/learning-paths/api-testing/http-fundamentals) named this directly: headers are frequently under-tested compared to the body, but wherever documentation makes a specific header claim, that claim is checkable and worth checking — especially on error paths, which are often implemented separately from the success path and can easily diverge from a documented contract.

**Alternative approaches considered**: Assuming the header contract holds because it's documented, without testing it on error responses specifically, is exactly Mistake 4 from that module — skipping headers and testing only the body.

**Real-world reasoning**: Error-path header divergence (returning `text/plain` on a `500` when the API otherwise always returns JSON) is a common, real inconsistency in APIs where success and error handling were built or modified at different times.

## Section 1 Complete

Across three modules, this section covered why API testing catches defects a UI-only pass cannot, how to read an HTTP response with a tester's precision, and the REST conventions that turn an inconsistency into a specific, testable finding. From here, continue to Section 2 — Data, Contracts, and Test Cases, starting with [API Requests and Responses](/learning-paths/api-testing/api-requests-and-responses), where this literacy gets applied to reading and validating full request/response payloads.
