---
title: "Security Testing — Section 4 Review"
slug: section-4-review
sidebar_label: "Section 4 — Review"
description: "Knowledge Check for Section 4 — Configuration/Secrets/Transport Security, Business Logic Security Testing, Data Protection/PII/Compliance Awareness, and Logging/Audit Trails/Security Observability."
keywords: ["security testing review", "business logic security knowledge check", "data protection review"]
difficulty: "beginner"
time_to_read: "5 min"
last_reviewed: "2026-08-06"
---

# Section 4 Review

Section 4 widened this path's scope beyond individual features to the environment, the workflow, the data itself, and the record of what happened — configuration and secrets, business logic, data protection, and logging integrity.

## Knowledge Check

Work through these five scenarios before checking the [Section 4 Solutions](/learning-paths/security-testing/section-4-solutions).

**Scenario 1: Every Page Works Fine**

A site's individual pages all render and function correctly, but the entire site can be loaded inside an invisible frame on an unrelated, malicious-looking page. What category of testing would have caught this, and why didn't feature testing?

**Scenario 2: Nothing Technically Broken**

A checkout process's four steps each work perfectly on their own. A customer can still complete an order by sending the final "confirm" request directly, without ever submitting payment. What defect class is this, and why wouldn't a security scanner find it?

**Scenario 3: The Screen Shows Very Little**

A "nearby branches" feature's screen only shows a distance and address. Why might this still be a real data-protection concern worth testing?

**Scenario 4: Deactivated, Not Deleted**

A "delete my account" feature marks an account as deactivated. What additional, specific test would confirm whether this actually satisfies a reasonable data-deletion expectation?

**Scenario 5: The Log Exists**

A system logs customer-facing actions like transfers and profile changes. Why might this still leave a real security-logging gap?

**Next:** Check your answers against the [Section 4 Solutions](/learning-paths/security-testing/section-4-solutions), then continue to Section 5 — Security Across the Organization and Delivery Pipeline.
