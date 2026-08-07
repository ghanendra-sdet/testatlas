---
title: "Applying API Testing: AtlasBank Loan and KYC Flow"
sidebar_label: "19 Applying API Testing: Loan and KYC Flow"
description: "Combining data validation, contract expectations, and security testing from Sections 2 and 5 against a realistic AtlasBank loan-application and KYC-verification feature."
keywords: ["kyc api testing", "loan application testing", "applied api testing", "atlasbank loan api"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-04"
---

# Applying API Testing: AtlasBank Loan and KYC Flow

**Prerequisites**: You should already understand [Applying API Testing: AtlasBank Cross-Border Payment Flow](/learning-paths/api-testing/applying-api-testing-cross-border-payment-flow).
**Leads to**: After this, you'll be ready for [Common Mistakes in API Testing](/learning-paths/api-testing/common-mistakes-in-api-testing).


The previous module combined authentication, resilience, and idempotency. This module combines a different set — data validation, integration behavior, and security — against a feature with a genuinely different risk shape: a multi-step process involving a blocking external dependency (KYC verification) and sensitive personal and financial data throughout.

## The Feature: AtlasBank Loan Application with KYC Verification

A customer applies for a personal loan: submitting income, employment, and requested-amount details, triggering an external KYC provider check and an internal underwriting decision-table evaluation (per [Decision Table Testing](/learning-paths/manual-testing/decision-table-testing), applied here to loan eligibility), before returning an approval, rejection, or manual-review status.

```json
POST /api/v1/loans/applications
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

{
  "requestedAmount": 15000.00,
  "annualIncome": 68000.00,
  "employmentStatus": "employed",
  "termMonths": 36
}
```

## Data Validation Applied to a Multi-Field Decision (Section 2)

Applying [Data Validation and Response Verification](/learning-paths/api-testing/data-validation-and-response-verification)'s layered approach: type and format validation on every field, then the cross-field check specific to this feature — does the response's `monthlyPayment` figure actually reconcile with `requestedAmount`, the applicable interest rate, and `termMonths`, tested with a deliberately non-round `requestedAmount` ($14,750.00, not $15,000.00) to surface any rounding-direction defect a clean number would hide.

**A real defect surfaces here**: for a small number of specific `termMonths` values (48 months specifically), the calculated `monthlyPayment` is consistently off by a few cents from the mathematically correct figure — not a rounding-direction issue like Module 6's exchange-rate example, but a genuine calculation defect isolated to one specific term length, only found because term length wasn't treated as a single representative value but tested across its full realistic range, applying [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) and [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) to the `termMonths` field directly.

## Integration Behavior with a Blocking Dependency (Section 4)

Per [Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations)'s dependency-mapping approach, the KYC provider is a blocking dependency here — a loan application cannot be approved without it. Testing the KYC provider's documented "verification inconclusive" response (distinct from a clean pass or fail) confirms the application correctly moves to a manual-review state rather than being silently treated as either an automatic pass or an automatic rejection — the specific, correct three-way handling this integration's contract requires, not just the two-way pass/fail handling a less careful implementation might default to.

**A second real defect surfaces here**: when the KYC provider itself times out (distinct from returning an inconclusive verification), the loan application is left in a `processing` state indefinitely, with no automatic transition to manual review and no customer-facing indication that anything requires attention — a gap between "the dependency returned an ambiguous result" (handled correctly) and "the dependency didn't respond at all" (not handled), exactly the kind of distinction [Cascading Failures, Error Handling, and Fault Tolerance](/learning-paths/api-testing/cascading-failures-error-handling-and-fault-tolerance) named as a real, common gap between different failure modes of the same dependency.

## Security Validation on Sensitive Data (Section 5)

Per [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals)'s excessive-data-exposure check, the loan-status response is compared field by field against what the status screen actually displays — a check that, applied to this feature specifically (rather than repeating Module 13's own worked loan-status example), confirms the response is now correctly scoped after that earlier defect's fix, with no `annualIncome` or internal risk fields present. Per [Injection and Input-Based Attacks](/learning-paths/api-testing/injection-and-input-based-attacks)'s mass-assignment technique, the request is tested with an undocumented `preApproved: true` field included — confirming the API correctly ignores it rather than applying it.

## What This Feature Shows

This feature's dominant risk shape is different from the previous module's: less about authentication edge cases and idempotent retries, more about a multi-field calculation's correctness across a real input range, and a blocking dependency's *distinct* failure modes (inconclusive versus unresponsive) needing genuinely different handling. Both modules combined multiple sections' concerns, but which concerns dominated depended on the feature's actual shape — directly echoing [Applying Test Design Across Domains: Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce)'s own lesson that a feature's real risk, not a fixed checklist, should drive which techniques get weighted most heavily.

## Common Mistakes

**Mistake 1: Testing a calculation with only one representative value instead of across its realistic range.**
This module's term-length defect was isolated to one specific value — invisible to a test plan using only one "typical" term length, exactly the coverage gap Equivalence Partitioning and Boundary Value Analysis exist to close.

**Mistake 2: Treating a dependency's "inconclusive" and "unresponsive" failure modes as the same case.**
This module's second defect shows these need genuinely distinct handling — testing only one of the two leaves the other completely unverified.

**Mistake 3: Assuming a previously-fixed defect (excessive data exposure) stays fixed without re-verification on a related, new feature.**
This module deliberately re-checked the loan-status response rather than assuming Module 13's earlier fix generalized automatically — confirmed correct here, but not assumed.

## Best Practices

**Practice 1: Test a multi-field calculation across its realistic input range, not just one representative value.**
Applying Equivalence Partitioning and Boundary Value Analysis to *every* relevant field, not just the obviously numeric ones, is what caught this module's term-length defect.

**Practice 2: Explicitly distinguish a dependency's different failure modes and test each separately.**
"Inconclusive" and "unresponsive" are different scenarios with different correct handling — testing only one doesn't verify the other.

**Practice 3: Re-verify a previously-fixed defect class on a new, related feature rather than assuming the fix generalized.**
This module's excessive-data-exposure re-check is a deliberate, low-cost verification, not a redundant one.

## Key Takeaways

- A feature's dominant testing concerns depend on its actual risk shape — this module's loan/KYC feature leaned toward calculation-range coverage and dependency-failure-mode distinction, differently from the previous module's auth/idempotency emphasis.
- A calculation defect can be isolated to one specific input value within a realistic range — testing only one representative value can miss it entirely.
- A dependency's different failure modes (an ambiguous result versus no response at all) often need genuinely different handling, and each needs its own dedicated test.
- A previously-fixed defect class is worth re-verifying on a new, related feature, not assumed to generalize automatically.

---

## What You Just Learned

- How to combine data validation, dependency-integration, and security testing against a feature with a different risk shape than the previous module's
- Why testing a calculation across its realistic input range, not just one representative value, is necessary to catch a value-specific defect
- Why a dependency's distinct failure modes (inconclusive versus unresponsive) need separate, dedicated test cases
- That a feature's actual risk shape, not a fixed checklist, should determine which testing concerns get weighted most heavily

**Next:** [Common Mistakes in API Testing](/learning-paths/api-testing/common-mistakes-in-api-testing)

## Related Topics

- [Applying API Testing: AtlasBank Cross-Border Payment Flow](/learning-paths/api-testing/applying-api-testing-cross-border-payment-flow) — The previous integrated feature, with a contrasting risk shape emphasizing auth and idempotency
- [Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations) — The blocking-dependency and failure-mode distinction this module applies to a new integration
- [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) — The technique this module applies to catch a term-length-specific calculation defect

## Interview Questions

**Q1: How would you test a feature that calculates a result (like a loan payment) based on several numeric inputs?**

*What to look for*: A candidate who describes testing the calculation across a realistic range of each input, using Boundary Value Analysis and Equivalence Partitioning, rather than confirming correctness with only one or two representative values — ideally recognizing that a defect can be isolated to one specific value within an otherwise-correct range.

**Q2: A dependency your API calls can return either an ambiguous result or simply not respond at all. Why would you test these as two separate scenarios?**

*What to look for*: A candidate who explains that each failure mode may require genuinely different handling — an ambiguous result might correctly route to manual review, while no response at all requires its own timeout and fallback logic — and that testing only one doesn't verify the other.

---

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ A feature's actual risk shape, not a fixed checklist, should determine which testing concerns get weighted most heavily.

✓ Test a calculation across its realistic input range — a defect can be isolated to one specific value.

✓ Distinguish a dependency's different failure modes (ambiguous result vs. no response) and test each separately.

✓ Re-verify a previously-fixed defect class on a new, related feature rather than assuming it generalized.

✓ Combining multiple sections' concerns against a real feature surfaces defects no single concern, tested alone, would catch.
