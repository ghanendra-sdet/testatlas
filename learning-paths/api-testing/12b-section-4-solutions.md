---
title: "API Testing — Section 4 Solutions"
slug: section-4-solutions
sidebar_label: "Section 4 — Solutions"
description: "Answers and reasoning for Section 4's Knowledge Check — blocking vs. non-blocking dependencies, undisclosed fallback behavior, cascading failure, and idempotency under sequential and near-simultaneous retries."
keywords: ["api integration knowledge check", "cascading failure solutions", "idempotency testing answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 4 Solutions

These are the answers to the [Section 4 Review](/learning-paths/api-testing/section-4-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: A Blocking Dependency and a Non-Blocking Dependency, Both Tested

**Correct answer**: The KYC provider's unavailability should correctly block account opening entirely (it's a blocking dependency); the email provider's unavailability should correctly allow account opening to complete, with the welcome message delayed or retried later (it's non-blocking).

**Explanation**: This is [Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations)'s dependency-mapping table directly — confirming each dependency's failure produces the behavior appropriate to its actual classification, not treating every dependency failure identically.

**Alternative approaches considered**: Expecting account opening to fail because *any* dependency is unavailable would incorrectly treat a non-blocking dependency as blocking — missing the whole point of the blocking/non-blocking distinction.

**Real-world reasoning**: A direct restatement of the module's own account-opening dependency table, testing whether the classification concept — not just the specific KYC/email example — was understood.

## Scenario 2: Silent Fallback with No Disclosure

**Correct answer**: This is a real defect — even if using a cached rate is an accepted design decision, completing the transfer with no disclosure to the customer that a stale rate was used is the actual gap worth reporting.

**Explanation**: This is [Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations)'s exchange-rate fallback example directly — the defect isn't necessarily the fallback itself, but the lack of disclosure, caught specifically by deliberately triggering the dependency's documented error response rather than only testing the happy path.

**Alternative approaches considered**: Accepting this as correct because the transfer technically completed misses that a customer relying on a live rate has no way to know a stale one was actually used — a real gap regardless of whether the fallback logic itself was intentional.

**Real-world reasoning**: A near-exact restatement of the module's own worked example, testing whether the lesson (deliberately trigger documented dependency errors, then evaluate the resulting behavior against customer-facing correctness, not just "did it complete") was internalized.

## Scenario 3: Unrelated Feature Failing During a Dependency Slowdown

**Correct answer**: This is a cascading failure, almost certainly caused by a shared resource (a connection pool or thread pool) being exhausted by the many slow, pending payment-gateway calls, starving the unrelated balance-check requests of the same shared resource.

**Explanation**: This is [Cascading Failures, Error Handling, and Fault Tolerance](/learning-paths/api-testing/cascading-failures-error-handling-and-fault-tolerance)'s opening example directly — a failure spreading to a component with no direct dependency on the original failing one, through a shared resource.

**Alternative approaches considered**: Investigating the balance-check feature's own code for a bug would miss the actual mechanism — the defect isn't in the balance-check logic at all, it's in the payment-gateway call's lack of a circuit breaker or timeout, consuming a resource the balance-check feature also depends on.

**Real-world reasoning**: A close restatement of the module's own opening and real-project examples, testing whether the shared-resource mechanism (not just "cascading failures are bad") was understood.

## Scenario 4: Same Idempotency Key, Several Seconds Apart

**Correct answer**: Correct behavior — only one transfer should result, and this is the expected, successful case of testing sequential retry safety.

**Explanation**: This is [Idempotency, Retry Logic, and Duplicate Request Prevention](/learning-paths/api-testing/idempotency-retry-logic-and-duplicate-request-prevention)'s core idempotency-key mechanism working as intended — a sequential retry with the same key should be recognized and return the original result, not reprocess.

**Alternative approaches considered**: If this scenario had resulted in two transfers, that would be the module's central defect class (the opening fund-transfer double-charge example) — but as stated, this scenario describes the correct, working case, useful as a contrast to Scenario 5.

**Real-world reasoning**: Deliberately paired with Scenario 5 to test whether the distinction between sequential retry safety (usually caught by basic idempotency-key logic) and near-simultaneous race-condition risk (requiring atomic check-and-reserve logic) was understood as two different risk levels.

## Scenario 5: Same Idempotency Key, Near-Simultaneous

**Correct answer**: This specifically tests for the race-condition risk — even with idempotency keys present, this scenario can reveal a defect if the server's key-check-and-reserve isn't atomic, exactly as the merchant-payment real-project example found.

**Explanation**: This is [Idempotency, Retry Logic, and Duplicate Request Prevention](/learning-paths/api-testing/idempotency-retry-logic-and-duplicate-request-prevention)'s merchant-payment race-condition example directly — near-simultaneous requests can slip past a non-atomic duplication check that would correctly catch a sequential retry (as in Scenario 4).

**Alternative approaches considered**: Assuming this scenario is automatically safe because Scenario 4's sequential case was safe would miss that the two scenarios test genuinely different failure mechanisms — sequential correctness says nothing about race-condition safety.

**Real-world reasoning**: A near-exact restatement of the module's own merchant-payment example, testing whether the specific insight (near-simultaneous timing reveals a defect sequential testing cannot) was internalized, not just the general concept of idempotency.

## Section 4 Complete

Across three modules, this section moved from testing a single dependency's failure, to testing whether that failure stays contained under real concurrent load, to testing whether a client's retry after that failure is actually safe. From here, continue to Section 5 — API Security Testing, starting with [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals), where this fault-tolerance and integration literacy extends into testing an API's defenses against injection, transport security gaps, and the broader OWASP API Top 10 risk areas.
