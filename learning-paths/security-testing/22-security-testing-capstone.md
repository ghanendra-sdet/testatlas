---
title: "Security Testing Capstone: AtlasBank International Transfer, Under Security Scrutiny"
sidebar_label: "22 Capstone: AtlasBank International Transfer Under Security Scrutiny"
description: "The complete security-testing lifecycle applied to AtlasBank's International Money Transfer feature — a seventh layer of verification confirming business-logic bypass resistance and finding a genuine audit-trail integrity gap no prior certified layer tested for."
keywords: ["security testing capstone", "atlasbank security capstone", "business logic security capstone", "audit trail integrity testing"]
difficulty: "intermediate"
time_to_read: "13 min"
last_reviewed: "2026-08-06"
---

# Security Testing Capstone: AtlasBank International Transfer, Under Security Scrutiny

**Prerequisites**: The entire Security Testing path — every module in Sections 1 through 5.
**Leads to**: This completes Security Testing v1.0.

Six certified TestAtlas paths have already verified AtlasBank's International Money Transfer feature, each answering a different question about the exact same, already-correct implementation: Manual Testing found the original compliance-aggregation business-rule defect. API Testing verified the fix at the service-contract layer. Database Testing traced it to its precise root cause. Automation Testing keeps that fix durably protected against regression. Performance Testing quantified what correct behavior costs at scale. Mobile Testing confirmed it survives real device and connectivity conditions. This capstone asks a seventh, genuinely different question: **does this same, six-times-verified feature also resist deliberate business-logic security bypass, and does it leave a trustworthy, tamper-resistant record of what happened?**

## Realistic Business Scenario

A customer initiates an international transfer through AtlasBank's app. The transfer is subject to a $10,000 daily limit and a $3,000 compliance-verification threshold, aggregated across a full calendar day — the exact business rule this feature's own history, across five other certified paths, already centers on. This capstone doesn't re-test whether that rule is implemented correctly; it tests whether the rule can be *circumvented* through means other than a technical flaw, and whether the record of every transfer attempt is itself trustworthy.

## Requirements

**Functional** (already established, unchanged): a $10,000 daily transfer limit; transfers at or above $3,000, aggregated per calendar day, require compliance verification.

**Security, written per [Secure SDLC and Security Requirements](/learning-paths/security-testing/secure-sdlc-and-security-requirements)'s own testable format**: the compliance-verification threshold must not be circumvented by splitting a transfer into multiple smaller submissions, by submitting transfers concurrently, or by manipulating request parameters; every transfer attempt — successful, failed, or flagged — must generate an audit log entry with attributable detail (who, what, when); no party involved in submitting or processing a transfer, including the customer or a support agent acting on their behalf, may modify or delete that transfer's own audit log entry.

## Architecture Overview

At a level consistent with this feature's treatment in every other certified path: a customer submits a transfer through the web or mobile client; a transfer service validates the request and calls a compliance-aggregation check before authorizing the transfer; the aggregation check queries the customer's same-day transfer history (the calendar-day window Database Testing's own capstone confirmed as the fix); an audit log records the outcome of every attempt, independent of the transfer service itself.

## Risk Areas

Business-logic bypass of the compliance threshold ([Business Logic Security Testing](/learning-paths/security-testing/business-logic-security-testing)); audit-trail completeness and tamper-resistance ([Logging, Audit Trails, and Security Observability](/learning-paths/security-testing/logging-audit-trails-and-security-observability)); access control on who can view or act on transfer records ([Authorization and Access Control Testing](/learning-paths/security-testing/authorization-and-access-control-testing)); data exposure in transfer confirmation responses ([Data Protection, PII, and Compliance Awareness](/learning-paths/security-testing/data-protection-pii-and-compliance-awareness)).

## Security Objectives

Confirm the compliance-verification threshold holds under split-transfer and concurrent-submission conditions, not just under the single-transfer conditions five other certified paths already tested. Confirm every transfer-related action produces a complete, attributable, tamper-resistant audit log entry.

## Threat Model Summary

**Actors**: the account holder, directly; a support agent processing a transfer on a customer's behalf, per AtlasBank's existing support-escalation path.

**Abuse case 1** (the canonical example this path introduced in [Threat Modeling, Risk Assessment, and Abuse Cases](/learning-paths/security-testing/threat-modeling-risk-assessment-and-abuse-cases), now tested at capstone scale): a customer splits a transfer intended to exceed $3,000 into several smaller submissions within the same calendar day, specifically to avoid triggering compliance verification.

**Abuse case 2** (new to this capstone): a customer, or a complicit support agent, attempts to remove or alter the audit log entry for a transfer that was flagged or later disputed.

## Functional Context

This capstone builds on, and does not repeat, five other certified paths' own verification of this feature: [Manual Testing Capstone](/learning-paths/manual-testing/manual-testing-capstone), [API Testing Capstone](/learning-paths/api-testing/api-testing-capstone), [Database Testing Capstone](/learning-paths/database-testing/database-testing-capstone), [Automation Testing Capstone](/learning-paths/automation/automation-testing-capstone), [Performance Testing Capstone](/learning-paths/performance-testing/performance-testing-capstone), and [Mobile Testing Capstone](/learning-paths/mobile-testing/mobile-testing-capstone).

## Suggested Testing Scope

**In scope**: business-logic bypass testing of the compliance threshold via split-transfer and near-simultaneous submission; audit-log coverage and integrity testing on transfer records; access-control testing on transfer-history retrieval and modification endpoints — all using only legitimate, already-authenticated access, per this path's scope discipline from Module 1.

**Out of scope**: exploit construction, actual unauthorized fund movement, and any technique beyond legitimate, authenticated access — consistent with every module in this path.

## Security Test Strategy

Apply [Business Logic Security Testing](/learning-paths/security-testing/business-logic-security-testing)'s workflow and race-condition technique directly to the compliance-verification check: submit several transfers just under the threshold within a single calendar day, both sequentially and near-simultaneously. Apply [Logging, Audit Trails, and Security Observability](/learning-paths/security-testing/logging-audit-trails-and-security-observability)'s coverage-and-integrity framework to the resulting audit trail: confirm each attempt is logged, and confirm neither the customer's session nor a support agent's session can modify or delete the resulting entries.

## Sample Test Cases

**Test Case 1 — Split-Transfer Compliance Check**
*Steps*: submit three transfers of $2,500 each, from the same account, within a 24-hour calendar-day window.
*Data*: three transfers, same account, combined total $7,500, each individually below the $3,000 threshold.
*Expected Result*: the system flags the combined total for compliance review.
*Traces to*: the compliance-aggregation security requirement above.

**Test Case 2 — Concurrent-Submission Compliance Check**
*Steps*: submit two transfers of $2,000 each within the same second, from the same account, with a same-day prior transfer of $1,500 already on record.
*Data*: combined same-day total $5,500, submitted with overlapping timing.
*Expected Result*: the aggregation check correctly accounts for both concurrent transfers; the combined total is flagged.
*Traces to*: the compliance-aggregation security requirement, specifically its concurrency clause.

**Test Case 3 — Audit Log Tamper Resistance**
*Steps*: as a support agent account with transfer-processing access, attempt to delete or edit the audit log entry for a specific, already-completed transfer.
*Data*: a support agent session; a target transfer's audit log entry ID.
*Expected Result*: the deletion or modification attempt is rejected; the log entry remains unchanged.
*Traces to*: the audit-log integrity security requirement above.

## Expected Findings

**Test Cases 1 and 2 pass**: the compliance-verification threshold correctly holds under both split-transfer and concurrent-submission conditions. This is a **confirmation**, not a new defect — it validates, at security-testing scale, that Database Testing's own certified fix (the calendar-day aggregation window) is robust against the exact abuse case this path's own Module 2 introduced as its canonical example. Per this path's own scope discipline, and matching the framing every prior capstone in this narrative established for its own layer, this finding complements the five prior certified layers rather than contradicting any of them.

**Test Case 3 fails**: a support agent's session, while correctly unable to alter the *transfer* itself, is able to delete the audit log entry describing their own processing of a flagged transfer — a genuine, previously-uncovered integrity gap. This is a finding **no prior certified layer had any structural way to produce**: Manual, API, Database, and Automation Testing all verified correctness using small numbers of test transactions with no reason to test log-deletion permissions specifically; Performance Testing tested operational cost, not access control; Mobile Testing tested device and connectivity behavior, not administrative log integrity. Only this path's own Module 15 framework — testing coverage *and* integrity as two separate questions — was positioned to find it.

## Reporting Guidance

Following [Security Reporting, Bug Reporting, and Risk Communication](/learning-paths/security-testing/security-reporting-bug-reporting-and-risk-communication)'s dual-audience format: the technical report states the exact reproduction (support-agent session, target log entry, deletion succeeds), the affected component, and its OWASP-adjacent category (a Broken Access Control failure specific to audit infrastructure). The risk summary states plainly: *a support agent can currently erase the record of their own handling of a flagged international transfer, which undermines the entire purpose of compliance-related audit logging and should be fixed before the next release, not queued behind unrelated work.*

## Regression Guidance

Following [Vulnerability Validation and Security Regression Testing](/learning-paths/security-testing/vulnerability-validation-and-security-regression-testing)'s discipline: once fixed, Test Case 3 becomes a standing regression test, and — following [Security Automation and Security in CI/CD](/learning-paths/security-testing/security-automation-and-security-in-cicd)'s own principle — is verified to actually block the pipeline on failure, not merely run and report.

## Lessons Learned

Every phase above used a module you already know. What the capstone adds isn't new content — it's the experience of asking a seventh, genuinely distinct question about a feature six other certified paths had already answered from their own angle, without contradicting or undermining any of them. Manual Testing asked "is the business rule correct?" API Testing asked "does the service contract behave correctly?" Database Testing asked "is the implementation correct at its source?" Automation Testing asked "does it stay correct?" Performance Testing asked "what does correct cost, at scale?" Mobile Testing asked "does it survive real device conditions?" This capstone asked "does it resist deliberate business-logic bypass, and can its own record of events be trusted?" — a question that could only be asked once a real, correct, already-verified implementation existed to test, and one whose answer (a robust compliance check, paired with a genuine audit-integrity gap) makes the whole system's implementation more completely verified, not differently graded.

## Security Testing v1.0 Complete

This is the final module in Security Testing v1.0. Across twenty-two modules, this path covered the CIA Triad and the scope boundary separating QA-level security testing from penetration testing, threat modeling and abuse cases, secure SDLC and testable security requirements, the four core application-security surfaces (OWASP orientation, authentication, session management, authorization), security test design and verification (traceable test cases, static and dynamic testing, vulnerability validation and regression), data/configuration/business-logic/logging security, this path's own relationship to the security testing already taught inside API, Database, Mobile, and AI for QA Testing plus a genuinely new cloud surface, security automation and CI/CD gating, dual-audience reporting, and — in this closing section — applying all of it to realistic AtlasBank and AtlasShop features, including the same compliance-critical transfer feature six other certified paths already verified at their own layer.

## Key Takeaways

- A real security-verification effort moves through threat modeling, requirement-writing, test design, execution, and dual-audience reporting as one connected process, applied here to a feature already confirmed correct, contract-compliant, durable, performant, and mobile-safe by six other certified paths.
- This capstone's business-logic findings are a genuine confirmation, not a defect, in the already-certified compliance-aggregation fix — exactly parallel to how Performance Testing's and Mobile Testing's own capstones each framed their own layer's finding.
- This capstone's audit-integrity finding was invisible to all six prior certified layers structurally, not by oversight — none of them tested log-deletion permissions specifically, because none of their own questions had any reason to.
- Security Testing's distinctive contribution to TestAtlas's seven-layer AtlasBank narrative is asking whether correct, verified behavior also resists deliberate bypass and leaves a trustworthy record — a question that could only be asked once the other six layers had already answered whether it was correct, contract-compliant, durable, performant, and device-safe at all.

---

## What You Just Learned

- How to move a real security-verification effort through its complete lifecycle: threat modeling, requirements, test design, execution, and dual-audience reporting
- Why a confirmed, robust business-logic defense is a genuine, valuable finding, not merely the absence of a finding
- How this capstone found a real, previously-uncovered audit-log integrity gap no prior certified layer had any structural way to produce
- Why Security Testing's question — does correct, verified behavior also resist deliberate bypass, and can its record be trusted — closes TestAtlas's seven-layer AtlasBank narrative without contradicting any of the other six

## Related Topics

- [Applying Security Testing: AtlasBank Security Validation](/learning-paths/security-testing/applying-security-testing-atlasbank-validation) — The integrated-feature module this capstone's technique combination builds on directly
- [Common Mistakes in Security Testing](/learning-paths/security-testing/common-mistakes-in-security-testing) — The recurring patterns this capstone's every phase deliberately avoided
- [Manual Testing Capstone](/learning-paths/manual-testing/manual-testing-capstone), [API Testing Capstone](/learning-paths/api-testing/api-testing-capstone), [Database Testing Capstone](/learning-paths/database-testing/database-testing-capstone), [Automation Testing Capstone](/learning-paths/automation/automation-testing-capstone), [Performance Testing Capstone](/learning-paths/performance-testing/performance-testing-capstone), and [Mobile Testing Capstone](/learning-paths/mobile-testing/mobile-testing-capstone) — The same feature, verified at six other layers, each answering a different question about the same correct implementation

## Interview Questions

**Q1: A feature has already been verified correct, contract-compliant, durably regression-protected, performant, and mobile-safe. Why might it still be worth dedicated security testing?**

*What to look for*: A candidate who explains that none of those prior verification methods specifically tested deliberate business-logic bypass or audit-trail integrity, and that security testing is a structurally necessary, not redundant, additional layer — able to answer a question the others never asked.

:::note Common Interview Mistake
Many candidates, on hearing a feature was "already tested six ways," would call further security testing redundant. A strong answer explicitly distinguishes what each prior layer verified from what security testing verifies — deliberate bypass resistance and audit-trail trustworthiness — recognizing these as different, both-necessary questions.
:::

**Q2: Why might an audit log integrity gap be considered just as serious as the underlying business-logic defect it's meant to catch?**

*What to look for*: A candidate who explains that a tamperable audit log undermines accountability and evidence for any related defect, meaning a gap here can mask or obscure exactly the kind of misuse the log exists to detect — making it a security-relevant finding in its own right, not a lesser, secondary concern.

---

## Glossary

No new terms are introduced in this capstone — every term used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ A real security-verification effort moves through threat modeling, requirements, test design, execution, and dual-audience reporting as one connected process.

✓ This capstone's business-logic finding is a genuine confirmation, not a defect, in an already-certified fix.

✓ This capstone's audit-integrity finding was structurally invisible to all six prior certified layers — none had reason to test log-deletion permissions specifically.

✓ Security Testing's distinctive question — does correct behavior resist deliberate bypass, and can its record be trusted — closes TestAtlas's seven-layer AtlasBank narrative without contradicting any of the other six.

✓ Test business-logic bypass under both split-submission and concurrent-submission conditions, and always test audit-log integrity as its own, separate question.
