---
title: "Applying Security Testing: AtlasBank Security Validation"
sidebar_label: "19 Applying Security Testing: AtlasBank Validation"
description: "Combining threat modeling, access control, business logic, data protection, and logging technique from Sections 1-5 against a realistic, integrated AtlasBank Add a Payee feature."
keywords: ["atlasbank security testing", "applied security testing", "payee management security", "integrated security testing"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-06"
---

# Applying Security Testing: AtlasBank Security Validation

**Prerequisites**: You should already understand every module in Sections 1–5 of this path.
**Leads to**: After this, you'll be ready for [Applying Security Testing: AtlasShop Security Validation](/learning-paths/security-testing/applying-security-testing-atlasshop-validation).

Every module so far taught one concern at a time — the CIA Triad, authentication, access control, business logic, data protection, logging. This module combines several against one realistic, integrated feature: AtlasBank's "Add a New Payee" function, the way a real security-testing effort actually has to.

## The Feature: AtlasBank Add a New Payee

Verifying that adding, viewing, and removing a saved payee — a feature that touches authentication context, authorization, business logic, data handling, and audit logging all at once — holds up correctly when tested with this path's complete toolkit rather than any single technique in isolation.

## Threat Modeling and Access Control (Sections 1–2)

Applying [Threat Modeling, Risk Assessment, and Abuse Cases](/learning-paths/security-testing/threat-modeling-risk-assessment-and-abuse-cases): the attack surface includes the account holder directly and, since AtlasBank supports shared account access, a secondary user on the same account — both actors get a deliberate abuse case. Applying [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing): the horizontal check — can one customer's session add or view a payee on a different customer's account by modifying the account identifier in the request — is tested directly against the underlying request, not judged by what the UI displays.

**A real finding surfaces here**: the horizontal check succeeds — a customer's own session, with the account identifier in the "view saved payees" request changed to a different, arbitrary account number, returns that account's full payee list, including saved account numbers. This is the exact confidentiality failure [What is Security Testing?](/learning-paths/security-testing/what-is-security-testing) opened this path with, now found on a feature no single earlier module specifically tested.

## Business Logic and Data Protection (Sections 3–4)

Applying [Business Logic Security Testing](/learning-paths/security-testing/business-logic-security-testing): the "add payee" action is tested for a race condition, submitting two near-simultaneous requests to add the same payee, checking whether the business rule (each payee should appear only once per account) actually holds under concurrent timing. Applying [Data Protection, PII, and Compliance Awareness](/learning-paths/security-testing/data-protection-pii-and-compliance-awareness): the raw response for the "view saved payees" screen is inspected directly, not just what the screen renders.

**A second real finding surfaces here**: the race-condition test passes cleanly — the duplicate-payee business rule holds even under concurrent requests, confirming this specific concern is already handled correctly. The data-protection inspection, however, finds the raw response includes each payee's full bank routing details, even though the screen displays only a masked, partial account number — an over-exposure finding distinct from the access-control issue above, since this data is present even in a legitimate, correctly-authorized request for the account holder's own payees.

## Logging and Reporting (Section 5)

Applying [Logging, Audit Trails, and Security Observability](/learning-paths/security-testing/logging-audit-trails-and-security-observability): whether adding or removing a payee — a security-relevant action, since a compromised account could use it to redirect funds — is actually captured in an audit log with attributable detail. Applying [Security Reporting, Bug Reporting, and Risk Communication](/learning-paths/security-testing/security-reporting-bug-reporting-and-risk-communication): both findings above are written up as coordinated technical reports and risk summaries.

**A third real finding surfaces here**: payee additions and removals are not logged at all — a genuine coverage gap per Module 15's own framework, meaning a fraudulently added payee, if later disputed, would have no audit trail showing when it was added or from which session.

## What This Application Module Shows

Three real, genuinely distinct findings — a horizontal access-control failure, a data over-exposure issue independent of it, and a missing audit-log category — were found by combining Sections 1–5's individual techniques against one realistic, integrated feature, not by any single technique alone. The race-condition test, run with equal rigor, found nothing wrong — a legitimate, useful result confirming that business rule specifically holds, not every test in a combined effort needs to surface a defect to have been worth running.

## Common Mistakes

**Mistake 1: Testing each Section's technique in isolation on a simple feature, never combining them against a realistic, integrated one.**
The access-control and data-protection findings above are genuinely independent — isolated single-technique testing would still have found each, but combined testing against one feature is what a real security effort actually looks like.

**Mistake 2: Treating a clean result (the race-condition test) as evidence the whole feature is secure.**
One passing test confirms one specific concern; it says nothing about the two real findings the other techniques surfaced on the same feature.

**Mistake 3: Skipping the logging check because the feature "isn't obviously security-critical."**
Payee management is exactly the kind of feature that looks routine but carries real fraud risk, per this module's own third finding.

## Best Practices

**Practice 1: Combine access control, business logic, data protection, and logging technique against one realistic, integrated feature, not isolated single-technique checks.**
This is what surfaced all three of this module's real findings.

**Practice 2: Report a clean result as explicitly as a defect, so the specific concern tested is documented as verified, not silently assumed.**
The race-condition test's clean result is genuine, useful evidence — record it as such.

**Practice 3: Apply logging coverage checks to features that carry real risk even when they don't look "security-critical" at first glance.**
Payee management's fraud-relevance was easy to overlook precisely because it's a routine, familiar banking feature.

## Key Takeaways

- Combining Sections 1–5's individual techniques against one realistic, integrated feature finds defects no single technique, tested alone, would connect together.
- A horizontal access-control failure, a data over-exposure issue, and a missing audit-log category were all found on the same feature, independently of one another.
- A clean test result (the race-condition check) is genuine, valuable evidence and should be documented with the same rigor as a defect finding.

---

## What You Just Learned

- How to combine threat modeling, access control, business logic, data protection, and logging technique against one realistic, integrated feature
- How a horizontal access-control failure and a data over-exposure issue were found as two independent findings on the same feature
- How a routine-looking feature (payee management) turned out to carry a real, previously-uncovered audit-logging gap
- Why a clean test result is worth documenting explicitly, not just defects

**Next:** [Applying Security Testing: AtlasShop Security Validation](/learning-paths/security-testing/applying-security-testing-atlasshop-validation)

## Related Topics

- [Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing) — The horizontal-escalation technique that found this module's first finding
- [Data Protection, PII, and Compliance Awareness](/learning-paths/security-testing/data-protection-pii-and-compliance-awareness) — The raw-response inspection technique that found this module's second, independent finding
- [Logging, Audit Trails, and Security Observability](/learning-paths/security-testing/logging-audit-trails-and-security-observability) — The coverage framework that found this module's third finding

## Interview Questions

**Q1: How would you approach a full security review of a feature like "manage saved payees" on a banking app?**

*What to look for*: A candidate who describes combining multiple techniques — access control, business logic, data exposure, audit logging — against the integrated feature, rather than describing any single technique alone.

**Q2: Why might a feature pass one security test cleanly and still have real, unrelated security defects?**

*What to look for*: A candidate who explains that different security properties (access control, data exposure, logging coverage) are independent, and that a clean result on one says nothing about the others — each needs its own deliberate test.

---

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Combine Sections 1–5's individual techniques against one realistic, integrated feature — don't just re-confirm each technique in isolation.

✓ A horizontal access-control failure and a data over-exposure issue can exist independently on the same feature.

✓ A clean test result is genuine, valuable evidence — document it as explicitly as a defect.

✓ Apply logging coverage checks even to routine-looking features that carry real fraud or business risk.

✓ Combined, realistic testing is what a genuine security-testing effort actually looks like, not isolated single-technique checks.
