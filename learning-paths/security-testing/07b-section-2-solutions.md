---
title: "Security Testing — Section 2 Solutions"
slug: section-2-solutions
sidebar_label: "Section 2 — Solutions"
description: "Answers and reasoning for Section 2's Knowledge Check — applying OWASP categorization, authentication, session management, and access-control testing to five realistic scenarios."
keywords: ["security testing solutions", "authentication testing answers", "access control knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-06"
---

# Section 2 Solutions

These are the answers to the [Section 2 Review](/learning-paths/security-testing/section-2-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: The Category Name

**Correct answer**: Broken Access Control, combined with an injection-adjacent input-trust failure — the server is trusting client-supplied data (the price) it should be independently validating.

**Explanation**: This mirrors [OWASP Top 10 for Testers](/learning-paths/security-testing/owasp-top-10-for-testers)'s own worked example directly — naming the category immediately signals the finding's shape and severity to anyone reviewing the report, rather than requiring a full explanation first.

**Alternative approaches considered**: Reporting this only as "a bug in checkout" loses the immediate context and urgency the category name communicates.

**Real-world reasoning**: Tests whether the module's central lesson — that OWASP category names are a communication tool, not just a memorized list — was actually understood.

## Scenario 2: Testing Beyond the First Try

**Correct answer**: Testing repeated, sustained failed login attempts against the same account — confirming lockout or rate limiting exists — per [Authentication Testing](/learning-paths/security-testing/authentication-testing)'s own central lesson. It's often skipped because functional testing typically stops once a single pass/fail case is confirmed.

**Explanation**: This is the module's own opening scenario restated — a single correct rejection says nothing about behavior under many repeated attempts.

**Alternative approaches considered**: Considering authentication "tested" once one failed attempt is correctly rejected misses exactly this module's highest-value test.

**Real-world reasoning**: Tests whether "repeated attempts, not just one" was understood as the actual missing test, not a vague sense that "more testing is always better."

## Scenario 3: Same Session, New Login

**Correct answer**: Session fixation — anyone who obtained that pre-login session identifier (a realistic risk on a shared or public device) becomes silently logged in as the real user once that user authenticates, without ever knowing their credentials.

**Explanation**: This is [Session Management, Cookies, and JWT](/learning-paths/security-testing/session-management-cookies-and-jwt)'s own opening scenario restated — the session identifier should change at the moment of login, and testing only "does the session persist" misses this entirely.

**Alternative approaches considered**: Describing this only as "a minor session bug" undersells the real risk — a pre-obtained session ID becoming valid is a serious confidentiality and integrity failure.

**Real-world reasoning**: Tests whether session fixation was understood as a distinct, specific risk, not a vague session-related concern.

## Scenario 4: The Hidden Button

**Correct answer**: Constructing the underlying "cancel order" request directly, using a regular staff account's own session, and sending it without going through the UI at all — per [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing)'s own central lesson.

**Explanation**: This is the module's own opening scenario restated — a hidden UI element is not evidence the server actually enforces the restriction; only testing the request directly confirms it.

**Alternative approaches considered**: Confirming the button doesn't appear for regular staff in the UI and considering the feature "tested" is exactly Mistake 1 the module names directly.

**Real-world reasoning**: Tests whether "test the request, not the interface" was understood as the actual verification method.

## Scenario 5: Two Directions

**Correct answer**: Not necessarily — this is a vertical-escalation fix (preventing a lower-privilege role from reaching a boundary of their own assigned scope isn't the same as preventing a *different, lower* role like a regular customer from reaching the function at all). The horizontal and vertical directions need to be tested and confirmed separately.

**Explanation**: This is the module's own real-project example directly — fixing one direction of an access-control defect doesn't guarantee the other direction was addressed, since they check genuinely different boundaries.

**Alternative approaches considered**: Assuming a fix "for access control" broadly closes every related risk is exactly Mistake 3 the module names directly.

**Real-world reasoning**: Tests whether horizontal and vertical privilege escalation were understood as independent properties requiring independent verification, not two names for the same thing.

## Section 2 Complete

Across four modules, this section covered the core application-security testing surfaces in their natural dependency order: an orientation map for the rest of the path, then authentication, then the session that follows it, then the authorization checks that depend on that session being valid. From here, continue to Section 3 — Security Test Design and Verification, starting with Input Validation and Output Encoding.
