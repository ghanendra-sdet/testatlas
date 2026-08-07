---
title: "Security Testing — Section 2 Review"
slug: section-2-review
sidebar_label: "Section 2 — Review"
description: "Knowledge Check for Section 2 — OWASP Top 10 for Testers, Authentication Testing, Session Management/Cookies/JWT, and Authorization and Access Control Testing."
keywords: ["security testing review", "authentication testing knowledge check", "access control review"]
difficulty: "beginner"
time_to_read: "5 min"
last_reviewed: "2026-08-06"
---

# Section 2 Review

Section 2 covered the four core application-security testing surfaces, in deliberate order: an orientation map (OWASP Top 10), then authentication, then session management, then authorization — each assuming the one before it as a foundation.

## Knowledge Check

Work through these five scenarios before checking the [Section 2 Solutions](/learning-paths/security-testing/section-2-solutions).

**Scenario 1: The Category Name**

A tester finds that AtlasShop's checkout page accepts a modified price field from the client without re-validating it server-side. Which OWASP Top 10 category does this most directly belong to, and why does naming it matter?

**Scenario 2: Testing Beyond the First Try**

A login form correctly rejects a single incorrect password. What's the next, higher-value test to run, and why is it often skipped?

**Scenario 3: Same Session, New Login**

A tester finds that logging in doesn't change the session identifier that was already active before login. What specific risk does this create?

**Scenario 4: The Hidden Button**

A "cancel any customer's order" function isn't shown in the UI for regular staff accounts, only for managers. What single test would actually confirm this restriction is real, not just cosmetic?

**Scenario 5: Two Directions**

A fix correctly prevents a support agent from adjusting accounts outside their assigned portfolio. Does this fix necessarily also prevent a regular customer from reaching the same balance-adjustment function directly? Why or why not?

**Next:** Check your answers against the [Section 2 Solutions](/learning-paths/security-testing/section-2-solutions), then continue to Section 3 — Security Test Design and Verification.
