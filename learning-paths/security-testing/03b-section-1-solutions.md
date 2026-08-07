---
title: "Security Testing — Section 1 Solutions"
slug: section-1-solutions
sidebar_label: "Section 1 — Solutions"
description: "Answers and reasoning for Section 1's Knowledge Check — applying the CIA Triad, the security-testing scope boundary, threat modeling, and testable security requirements to five realistic scenarios."
keywords: ["security testing solutions", "cia triad answers", "threat modeling knowledge check answers"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-06"
---

# Section 1 Solutions

These are the answers to the [Section 1 Review](/learning-paths/security-testing/section-1-review)'s Knowledge Check. If you haven't attempted the five scenarios yet, do that first.

## Scenario 1: The Parameter Edit

**Correct answer**: Security testing — specifically, [What is Security Testing?](/learning-paths/security-testing/what-is-security-testing)'s own scope boundary. The tester used only access they already legitimately had (their own authenticated session) and changed a parameter the application itself allowed them to edit, without bypassing authentication or breaching any defense.

**Explanation**: This is the module's own opening scenario restated — identification using legitimate access is exactly this path's scope, distinct from penetration testing's active-breach approach.

**Alternative approaches considered**: Calling this "penetration testing" or "hacking" would be a real misunderstanding of the scope boundary — nothing was bypassed or breached.

**Real-world reasoning**: Tests whether the identification-versus-breach distinction was understood as the defining line, not just a vague sense that "security testing sounds technical."

## Scenario 2: Passes One, Fails Another

**Correct answer**: The first finding (blocked data access) confirms confidentiality is intact; the second finding (discount applied twice via a modified field) is an integrity failure — data was changed in a way that shouldn't have been possible. They're separate findings because CIA properties are independently testable, and passing one says nothing about the others.

**Explanation**: This is the module's own central point about the CIA Triad — a feature can pass confidentiality and still fail integrity, since they're genuinely different questions.

**Alternative approaches considered**: Treating the feature as "secure" once confidentiality passed would have missed the integrity defect entirely.

**Real-world reasoning**: Tests whether the three CIA properties were understood as independently failable, not as one combined "is it secure" judgment.

## Scenario 3: The Overlooked Actor

**Correct answer**: The threat model is missing secondary actors — a customer with shared or delegated account access, and an internal support agent with elevated permissions. It might fail to catch misuse specific to those actors, such as a support agent's override being used inappropriately, or a shared-access user acting against the primary account holder's interest.

**Explanation**: This is the module's own point about mapping the full attack surface — every actor who can reach a feature, not just the primary user.

**Alternative approaches considered**: Assuming the directly authenticated customer is the only relevant actor misses exactly the kind of secondary-actor misuse this module's attack-surface mapping step exists to catch.

**Real-world reasoning**: Tests recognition that attack-surface mapping must be comprehensive across actors, not focused on only the most obvious one.

## Scenario 4: Turning a Finding Into a Requirement

**Correct answer**: The abuse case should be translated into a written, testable security requirement — for example: "the password-reset function must apply rate limiting per account, such that repeated reset requests do not lock out or otherwise deny the legitimate account holder's access."

**Explanation**: This is [Secure SDLC and Security Requirements](/learning-paths/security-testing/secure-sdlc-and-security-requirements)'s own central lesson — an abuse case only shapes what gets built once it becomes a specific, testable requirement, not just a discussion.

**Alternative approaches considered**: Leaving the abuse case as a verbal note without writing it into the requirement risks it never actually influencing the shipped design.

**Real-world reasoning**: Tests whether the abuse-case-to-requirement translation step was understood as necessary, not optional.

## Scenario 5: The Vague Goal

**Correct answer**: "Authentication must be implemented securely" isn't specific or verifiable — there's no concrete pass/fail condition a test case could check. A testable rewrite: "the login endpoint must lock the account after 5 consecutive failed attempts within 10 minutes, and must not reveal whether a failed attempt was due to an incorrect username or an incorrect password."

**Explanation**: This is the module's own central distinction between a vague security goal and a testable security requirement — the rewrite states a specific, checkable condition.

**Alternative approaches considered**: Accepting the vague requirement as sufficient because it "mentions security" misses that it gives QA nothing concrete to test against.

**Real-world reasoning**: Tests whether "testable" was understood as meaning "has a specific, checkable pass/fail condition," not just "related to security."

## Section 1 Complete

Across three modules, this section established this path's entire scope: the CIA Triad as three independently-testable questions, the identification-not-exploitation boundary separating QA-level security testing from penetration testing, threat modeling as a structured technique for producing concrete abuse cases, and shift-left security as writing those abuse cases into testable requirements and planned tests before a feature is built. From here, continue to Section 2 — Core Application Security Testing, starting with OWASP Top 10 for Testers.
