---
title: "Security Testing — Section 1 Review"
slug: section-1-review
sidebar_label: "Section 1 — Review"
description: "Knowledge Check for Section 1 — What is Security Testing?, Threat Modeling/Risk Assessment/Abuse Cases, and Secure SDLC and Security Requirements."
keywords: ["security testing review", "threat modeling knowledge check", "secure sdlc review"]
difficulty: "beginner"
time_to_read: "5 min"
last_reviewed: "2026-08-06"
---

# Section 1 Review

Section 1 set this path's entire scope: the CIA Triad as a testing frame, the boundary between QA-level security testing and penetration testing, how to turn threat modeling into concrete abuse cases, and how to turn abuse cases into testable requirements before a feature is built.

## Knowledge Check

Work through these five scenarios before checking the [Section 1 Solutions](/learning-paths/security-testing/section-1-solutions).

**Scenario 1: The Parameter Edit**

A tester, logged into their own AtlasShop account, changes an order ID in a request URL to a number that isn't theirs, and the response returns someone else's order details. Is this security testing or penetration testing, and why?

**Scenario 2: Passes One, Fails Another**

A feature correctly prevents any customer from viewing another customer's data. The same feature allows a customer to modify a field in a request that lets them apply a discount code twice. What CIA property does each finding represent, and why are they separate findings?

**Scenario 3: The Overlooked Actor**

A team threat-models AtlasBank's transfer feature by considering only the directly authenticated customer. What's missing from this threat model, and what kind of misuse might it fail to catch?

**Scenario 4: Turning a Finding Into a Requirement**

A threat-modeling session produces the abuse case: "a customer could repeatedly request a password reset to lock another user out of their account." What should happen to this abuse case next, and what would a testable requirement derived from it look like?

**Scenario 5: The Vague Goal**

A feature's written requirement includes the line "authentication must be implemented securely." What's wrong with this as a security requirement, and how would you rewrite it?

**Next:** Check your answers against the [Section 1 Solutions](/learning-paths/security-testing/section-1-solutions), then continue to Section 2 — Core Application Security Testing.
