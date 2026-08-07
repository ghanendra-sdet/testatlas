---
title: "Applying Security Testing: AtlasShop Security Validation"
sidebar_label: "20 Applying Security Testing: AtlasShop Validation"
description: "Combining access control, cloud storage, and configuration technique from Sections 1-5 against a realistic, integrated AtlasShop seller dashboard feature, contrasting with AtlasBank's payee-management findings."
keywords: ["atlasshop security testing", "applied security testing marketplace", "seller dashboard security", "cloud storage security testing"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-06"
---

# Applying Security Testing: AtlasShop Security Validation

**Prerequisites**: You should already understand every module in Sections 1–5 of this path, and [Applying Security Testing: AtlasBank Security Validation](/learning-paths/security-testing/applying-security-testing-atlasbank-validation).
**Leads to**: After this, you'll be ready for [Common Mistakes in Security Testing](/learning-paths/security-testing/common-mistakes-in-security-testing).

The previous module combined this path's techniques against AtlasBank's payee-management feature, where the real risk concentrated in access control, data exposure, and logging. AtlasShop's seller dashboard presents a genuinely different shape of risk: a multi-tenant marketplace where sellers, customers, and staff each need different, carefully bounded access — the same techniques, applied to a feature where the findings concentrate somewhere else entirely.

## The Feature: AtlasShop Seller Dashboard

Verifying that the dashboard sellers use to view their own sales data, manage listings, and access payout documents correctly enforces the access boundaries a multi-tenant marketplace requires, and that the infrastructure behind it is configured correctly.

## Access Control, Vertical and Horizontal (Sections 1–2)

Applying [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing): both directions get tested. Horizontal — can Seller A's session view Seller B's sales data by changing a seller identifier in the request. Vertical — can a regular customer account reach seller-dashboard endpoints directly, despite the UI never exposing them to a customer role.

**A real finding surfaces here**: the horizontal check passes cleanly — sellers cannot view each other's data. The vertical check does not: a regular customer's session, given the correct seller-dashboard endpoint URL, successfully retrieves sales summary data, since the endpoint checks only that a session is authenticated, never that it belongs to a seller role specifically. This is the exact hidden-button-versus-enforced-restriction gap [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing) warned against directly.

## Cloud Storage and Configuration (Sections 4–5)

Applying [Security Testing Across API, Database, Mobile, AI, and Cloud](/learning-paths/security-testing/security-testing-across-api-database-mobile-ai-and-cloud): the cloud storage location holding sellers' uploaded tax and payout documents is tested for public-access misconfiguration, attempting to reach a known document's storage URL directly, without authentication. Applying [Configuration, Secrets, and Transport Security](/learning-paths/security-testing/configuration-secrets-and-transport-security): the dashboard's response headers are checked for expected security protections.

**A second real finding surfaces here**: the storage location itself correctly requires authentication — the cloud check passes. The header check does not: the dashboard pages are missing the same framing-protection header [Configuration, Secrets, and Transport Security](/learning-paths/security-testing/configuration-secrets-and-transport-security) discussed, meaning a seller could be tricked into interacting with an invisible, overlaid version of their own dashboard embedded in a malicious page — a distinct environment-level gap, unrelated to the access-control finding above.

## Reporting Both Findings

Applying [Security Reporting, Bug Reporting, and Risk Communication](/learning-paths/security-testing/security-reporting-bug-reporting-and-risk-communication): both findings get separate technical reports and risk summaries, since they carry genuinely different urgency and audiences — the vertical-escalation finding affects data confidentiality directly and gets escalated immediately; the missing header is a real but lower-immediate-severity environment gap, still worth fixing promptly but through the standard process rather than as an emergency.

## What This Application Module Shows

Two real, genuinely distinct findings — a vertical privilege escalation and a missing security header — were found by applying the same Sections 1–5 techniques from the previous module to a feature with a structurally different risk shape: a multi-tenant marketplace with three distinct roles (customer, seller, staff), rather than AtlasBank's single-account-holder-plus-shared-access model. The cloud storage and horizontal-access checks, both run with equal rigor, found nothing wrong — genuine, useful confirmation that those specific concerns are correctly handled here, even while a different check on the same feature found a real gap.

## Common Mistakes

**Mistake 1: Assuming the AtlasBank module's own findings (horizontal access control, data exposure, logging) are the only risk categories this path's techniques can surface.**
This module's vertical-escalation and header findings are different risk categories entirely, specific to a multi-tenant feature shape AtlasBank's own example didn't have.

**Mistake 2: Testing only horizontal access control on a multi-tenant feature and skipping the vertical direction because "sellers are all the same role."**
The real finding in this module was specifically vertical — a different role (customer) reaching seller-only functionality — which a horizontal-only test plan would have missed entirely.

**Mistake 3: Treating environment-level findings (the missing header) as less worth testing than feature-level ones, on a feature that otherwise looks correctly access-controlled.**
The header gap was independent of, and just as real as, the access-control finding — a feature can be correctly built at the access-control layer and still have a genuine environment-level gap.

## Best Practices

**Practice 1: Test both horizontal and vertical access control on any multi-tenant feature, since a different actor entirely — not just a peer at the same level — can be the real risk.**
This is what caught AtlasShop's real, serious vertical-escalation finding.

**Practice 2: Apply environment-level checks (headers, cloud storage configuration) to every feature, not just the ones that look most access-control-sensitive.**
The header gap and the access-control gap were entirely independent findings on the same feature.

**Practice 3: Report findings with different urgency separately, rather than bundling them into one report with a single priority.**
The vertical-escalation finding and the header gap warranted genuinely different response speed, and separate reporting made that clear.

## Key Takeaways

- The same Sections 1–5 techniques, applied to a structurally different, multi-tenant feature, surface a structurally different set of real findings.
- Vertical privilege escalation needs its own deliberate test on multi-tenant features, distinct from horizontal access control.
- Environment-level findings (missing headers) can exist independently of feature-level access-control correctness.
- Report findings with genuinely different urgency separately, rather than bundling them together.

---

## What You Just Learned

- How the same Sections 1–5 techniques surface different real findings when applied to a multi-tenant marketplace feature
- Why vertical privilege escalation needed its own dedicated test, distinct from the horizontal check that passed cleanly
- How a missing security header was found as a genuine, independent finding on an otherwise correctly access-controlled feature
- Why findings with different urgency should be reported separately, not bundled together

**Next:** [Common Mistakes in Security Testing](/learning-paths/security-testing/common-mistakes-in-security-testing)

## Related Topics

- [Applying Security Testing: AtlasBank Security Validation](/learning-paths/security-testing/applying-security-testing-atlasbank-validation) — The contrasting integrated feature this module's findings differ from
- [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing) — The vertical-escalation technique that found this module's primary finding
- [Security Testing Across API, Database, Mobile, AI, and Cloud](/learning-paths/security-testing/security-testing-across-api-database-mobile-ai-and-cloud) — The cloud storage testing technique applied to this module's document-storage check

## Interview Questions

**Q1: Why might the same testing techniques applied to two different features find completely different types of defects?**

*What to look for*: A candidate who explains that a feature's structural shape — a single-account model versus a multi-tenant, multi-role model — determines where real risk concentrates, and that the same technique applied to each surfaces genuinely different findings.

**Q2: On a multi-tenant marketplace feature, why isn't testing horizontal access control (seller versus seller) sufficient on its own?**

*What to look for*: A candidate who explains that vertical escalation (a different role entirely, like a customer, reaching seller-only functionality) is a separate risk direction, and that this module's own real finding was specifically vertical, not horizontal.

---

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ The same Sections 1–5 techniques surface different real findings depending on a feature's structural shape.
✓ Test both horizontal and vertical access control on multi-tenant features — a different role can be the real risk.
✓ Environment-level findings (headers, cloud storage) can exist independently of feature-level access-control correctness.
✓ Report findings with genuinely different urgency separately, not bundled into one.
✓ A clean result on one check doesn't predict the result of a different, independent check on the same feature.
