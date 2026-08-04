---
title: "API Testing — Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — per-endpoint authentication enforcement, IDOR, over-permissive roles, rate-limit scope, and server-side session revocation."
keywords: ["api authentication knowledge check", "authorization solutions", "rate limiting solutions"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 3 Solutions

These are the answers to the [Section 3 Review](/learning-paths/api-testing/section-3-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: One Endpoint Correctly Rejects an Expired Token

**Correct answer**: This is insufficient coverage — the same expired-token test needs to run against every other protected endpoint individually, not assumed consistent from one passing result.

**Explanation**: This is [API Authentication](/learning-paths/api-testing/api-authentication)'s opening balance-endpoint example directly — expiration enforcement is implemented per-endpoint and can be inconsistent even when one endpoint correctly enforces it.

**Alternative approaches considered**: Treating one passing endpoint as representative of the whole API would repeat exactly the mistake the module's opening example was built to illustrate.

**Real-world reasoning**: A near-restatement of the module's own example, testing whether the specific lesson (test every endpoint, not just one) was internalized.

## Scenario 2: Changing the Account ID in the URL

**Correct answer**: This is a direct IDOR test. The correct expectation is `403 Forbidden` (or `404`, per the API's chosen convention for not revealing whether the resource exists) — the response should not return the other customer's data.

**Explanation**: This is [Authorization and Access Control](/learning-paths/api-testing/authorization-and-access-control)'s opening horizontal-escalation example directly — an authenticated, valid caller substituting a resource ID belonging to someone else, testing whether ownership is actually verified.

**Alternative approaches considered**: If the response returns `200 OK` with the other customer's data, that's the module's severe, real defect class — a missing ownership check, not a minor issue.

**Real-world reasoning**: A close restatement of the module's own worked example, confirming the specific test pattern (substitute an ID belonging to a different real identity) was understood, not just the definition of IDOR.

## Scenario 3: A Read-Only Role, Only Tested for Reading

**Correct answer**: Insufficient — the tester also needs to explicitly test that write actions (e.g., modifying account settings) are rejected for this role, not just that read actions succeed.

**Explanation**: This is [Authorization and Access Control](/learning-paths/api-testing/authorization-and-access-control)'s support-agent write-access example directly — confirming a role *can* do what it should says nothing about whether it's also prevented from doing what it shouldn't.

**Alternative approaches considered**: Assuming the write restriction holds because the read path is correctly scoped would repeat the module's real-project defect exactly — the write-path check was implemented separately, and separately missing.

**Real-world reasoning**: Directly mirrors the module's own AtlasBank support-agent scenario, testing whether the negative-case testing habit was internalized, not just the read-case success pattern.

## Scenario 4: Rate Limit Triggers Correctly Against One Username

**Correct answer**: Insufficient — the tester also needs to test the limit's actual scope, specifically whether rotating across several different usernames from the same source bypasses the protection entirely.

**Explanation**: This is [Rate Limiting, Throttling, and Session Management](/learning-paths/api-testing/rate-limiting-throttling-and-session-management)'s login-endpoint example directly — a limit that correctly triggers under one narrow test pattern (same username, repeated) can still be scoped too narrowly to stop the realistic broader attack (credential stuffing across many usernames).

**Alternative approaches considered**: Treating the passing same-username test as sufficient confirmation the protection works would miss exactly the gap the module's real-project example demonstrates.

**Real-world reasoning**: A near-exact restatement of the module's own login-endpoint example, testing whether "confirm it triggers" versus "confirm it's scoped correctly" was understood as two different, both-necessary tests.

## Scenario 5: Client-Side Logout Only

**Correct answer**: Insufficient — the tester needs to replay the previously-valid token against a protected endpoint after logout and confirm the server itself rejects it, not just observe that the client no longer sends it.

**Explanation**: [Rate Limiting, Throttling, and Session Management](/learning-paths/api-testing/rate-limiting-throttling-and-session-management) named this directly — client-side token deletion proves nothing about server-side enforcement; only replaying the token and confirming rejection verifies real revocation.

**Alternative approaches considered**: Accepting "the app cleared the token" as sufficient verification would miss a scenario where the token, if somehow retained or intercepted before deletion, would still work indefinitely against the server.

**Real-world reasoning**: A direct application of the module's own core lesson on session revocation testing, applied to the exact logout scenario the module used to introduce it.

## Section 3 Complete

Across three modules, this section covered the full gate an API puts between a request and what it's asking for: proving identity, enforcing what that identity is permitted to do, and defending against abuse or improperly-ended sessions. From here, continue to Section 4 — Integration and Resilience, starting with [Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations), where this literacy extends into testing how AtlasBank's APIs behave under real integration failure — slow dependencies, timeouts, and cascading failures.
