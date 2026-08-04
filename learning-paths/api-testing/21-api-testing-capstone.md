---
title: "API Testing Capstone: International Money Transfer API"
sidebar_label: "21 Capstone: International Money Transfer API"
description: "The complete API testing lifecycle applied to one realistic, compliance-critical AtlasBank feature — the same International Money Transfer feature Manual Testing's own capstone tested at the UI layer, now tested at the API layer."
keywords: ["api testing capstone", "end-to-end api testing", "atlasbank api", "api testing lifecycle"]
difficulty: "intermediate"
time_to_read: "11 min"
last_reviewed: "2026-08-04"
---

# API Testing Capstone: International Money Transfer API

**Prerequisites**: The entire API Testing path — every module in Sections 1 through 7.
**Leads to**: This completes API Testing v1.0.

Manual Testing's own capstone tested AtlasBank's International Money Transfer feature at the UI layer — clicking through the transfer form, confirming the success screen, catching a compliance-aggregation defect through requirement analysis and technique selection. This capstone tests the *same underlying feature*, but at the API layer directly — the surface this entire path has been building toward. Nothing here is new; it's every module in this path, moved through in the order a real API testing assignment actually requires.

## The Feature: AtlasBank International Transfer API

The same business rules as Manual Testing's capstone: a customer sends money internationally, converted at the current exchange rate, subject to a $10,000 daily limit and a $3,000 compliance-verification threshold, with same-day transfers aggregated to prevent a customer splitting one large transfer into several smaller ones specifically to evade compliance review. The API contract:

```json
POST /api/v1/transfers/international
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Idempotency-Key: 9c4e7a12-3f8b-4d5e-b1a2-7f9c3e6d8a41

{
  "beneficiaryId": "BEN-88213",
  "amount": 2750.00,
  "sourceCurrency": "USD",
  "targetCurrency": "GBP"
}
```

## Phase 1: API Contract Review

Applying [REST Architecture and API Design Principles](/learning-paths/api-testing/rest-architecture-and-api-design-principles)' conventions and [HTTP Fundamentals](/learning-paths/api-testing/http-fundamentals)' status-code precision, the documented contract is reviewed before any test execution begins: does the response distinguish a completed transfer from one requiring compliance review, and from one rejected outright? The documentation states three possible `status` values — `completed`, `pending_compliance_review`, `rejected` — each requiring different downstream handling by any caller, exactly the kind of distinction [API Requests and Responses](/learning-paths/api-testing/api-requests-and-responses)' response-pattern literacy trained you to expect and verify explicitly, not assume.

## Phase 2: Technique Selection Across Sections 1–6

With the contract understood, technique selection follows [Applying API Testing: AtlasBank Loan and KYC Flow](/learning-paths/api-testing/applying-api-testing-loan-kyc-flow)'s lesson directly: let the feature's actual risk shape choose which sections' concerns dominate, rather than applying a fixed checklist uniformly.

**Data validation** ([Data Validation and Response Verification](/learning-paths/api-testing/data-validation-and-response-verification)) targets the two numeric thresholds directly: $2,999.99/$3,000.00 (compliance boundary) and $9,999.99/$10,000.00 (daily-limit boundary), using [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis)'s standard set, plus a deliberately non-round exchange-rate calculation to probe for a rounding-direction defect, exactly as Module 6's own exchange-rate example demonstrated.

**Authentication and authorization** ([API Authentication](/learning-paths/api-testing/api-authentication), [Authorization and Access Control](/learning-paths/api-testing/authorization-and-access-control)) confirm the endpoint's expired-token and BOLA checks specifically — not assumed to generalize from any other endpoint's already-passing result, per this path's own [Common Mistakes in API Testing](/learning-paths/api-testing/common-mistakes-in-api-testing) Pattern 6.

**Idempotency** ([Idempotency, Retry Logic, and Duplicate Request Prevention](/learning-paths/api-testing/idempotency-retry-logic-and-duplicate-request-prevention)) is tested with particular weight here, given the module's own emphasis that financial transactions are the clearest, highest-stakes idempotency case: a retried request with the same key, and a near-simultaneous pair with the same key, both confirmed to produce exactly one transfer.

**Integration behavior** ([Testing Service Integrations](/learning-paths/api-testing/testing-service-integrations), [Cascading Failures, Error Handling, and Fault Tolerance](/learning-paths/api-testing/cascading-failures-error-handling-and-fault-tolerance)) tests the exchange-rate service's documented error response, confirming the transfer fails cleanly rather than silently using a stale cached rate.

**The compliance-aggregation rule itself** — same-day transfers combining to exceed $3,000 should trigger compliance review even if no single transfer does — is the feature's genuinely distinctive risk, requiring a test sequence rather than a single request: two separate $1,800 transfers, sent roughly forty minutes apart, should combine to trigger `pending_compliance_review` on the second transfer, even though neither individually crosses the $3,000 threshold.

## Phase 3: Execution and a Real Defect

Executing the aggregation test sequence reveals a real defect: the two $1,800 transfers, sent forty minutes apart, do **not** trigger compliance review — the API's aggregation logic checks only transfers within the same rolling *hour*, not the same calendar day as the documented business rule specifies. This is precisely the defect Manual Testing's own capstone found through UI-layer testing — found again here, independently, through direct API-layer testing, confirming the underlying implementation gap (not just a UI-layer symptom of it) is real and specifically located in the transfer API's own aggregation-window logic.

Testing further, using the near-simultaneous idempotency check from Phase 2, reveals a second, distinct defect: two identical, near-simultaneous transfer requests sharing the same `Idempotency-Key` are both processed as separate transfers under specific timing — the same class of race condition [Idempotency, Retry Logic, and Duplicate Request Prevention](/learning-paths/api-testing/idempotency-retry-logic-and-duplicate-request-prevention)'s merchant-payment example found, now confirmed present on this endpoint too, independently, exactly per [Common Mistakes in API Testing](/learning-paths/api-testing/common-mistakes-in-api-testing) Pattern 6's warning against assuming one endpoint's correctness generalizes to another.

## Phase 4: Reporting Both Defects

Following [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports)'s full structure, applied to API-level reproduction: for the aggregation defect, precise steps (exact amounts, exact timing gap, request payloads), environment, expected result (combined total across the calendar day should trigger `pending_compliance_review`), actual result (`status: "completed"` on both), Severity: Critical (real, ongoing compliance and regulatory exposure), Priority: Critical (every day this ships, real transfers may evade compliance review), Reproducibility: 100%, confirmed at multiple timing gaps up to 23 hours apart. For the idempotency race condition, similarly precise steps with exact timing detail, Severity: Critical (a real financial duplication risk), Priority: Critical, with Reproducibility noted as timing-dependent rather than deterministic, per [Applying Test Design Across Domains: Banking and E-Commerce](/learning-paths/manual-testing/applying-test-design-banking-ecommerce)'s own lesson that a timing-dependent defect's reproducibility should be stated as a condition, not a flat guarantee.

## Phase 5: Verification

After both fixes ship (the aggregation window corrected to a full calendar day; the idempotency check-and-reserve logic made atomic), verification doesn't simply re-run the original two test sequences — it specifically re-tests the aggregation window's own boundary (a transfer exactly 24 hours and 1 minute apart, confirming it correctly falls *outside* the aggregation window, a detail the original fix verification could miss without a deliberate boundary check) and re-runs the near-simultaneous idempotency test at several different timing gaps, not just the one that originally revealed the defect, to confirm the fix holds generally rather than only for that one specific timing.

## What This Capstone Reinforces

Every phase above used a module you already know. What the capstone adds isn't new content — it's the experience of moving between phases the way a real API testing assignment actually requires: a contract reviewed before execution begins, technique selection driven by the feature's actual risk shape rather than a fixed checklist, two independent real defects found through deliberate, specific test sequences (not general poking), both reported with the precision this path's foundation in Manual Testing already taught, and a verification pass that checks the fix's actual boundary, not just the original failing case.

## API Testing v1.0 Complete

This is the final module in API Testing v1.0. Across twenty-one modules, this path covered HTTP and REST literacy, request and response validation at every layer, authentication and authorization, integration resilience and idempotency, security testing from a functional tester's vantage point, performance awareness, tool selection, and integrated application across two realistic AtlasBank features before this capstone. Built throughout on Manual Testing's test-design foundation — reused and applied to a new surface, never re-taught from scratch.

## Key Takeaways

- A real API testing assignment moves from contract review, to risk-driven technique selection, to precise execution, to clear defect reporting, to boundary-aware verification — not a checklist run in isolation.
- The same underlying business defect (compliance-aggregation window) can be found independently at both the UI layer (Manual Testing's capstone) and the API layer (this capstone) — confirming a real implementation gap, not a layer-specific symptom.
- Testing one endpoint's idempotency correctness doesn't confirm another endpoint's — this capstone's second defect was only found by re-testing a known race-condition pattern against a new endpoint, not assuming Module 12's earlier fix generalized.
- Verification after a fix should test the fix's actual boundary and hold across varied conditions, not just re-run the original failing case once.

---

## What You Just Learned

- How to move a real API feature through the complete testing lifecycle: contract review, risk-driven technique selection, execution, defect reporting, and boundary-aware verification
- How the same real compliance-aggregation defect was found independently at both the UI layer and the API layer, confirming a genuine implementation gap
- Why idempotency and other per-endpoint concerns need re-testing on each new endpoint, never assumed from a prior endpoint's passing result
- That professional API testing is one continuous, connected process — not a sequence of disconnected module-by-module exercises

## Related Topics

- [Applying API Testing: AtlasBank Cross-Border Payment Flow](/learning-paths/api-testing/applying-api-testing-cross-border-payment-flow) — The first integrated-feature module this capstone's technique-combination approach builds on directly
- [Common Mistakes in API Testing](/learning-paths/api-testing/common-mistakes-in-api-testing) — The recurring patterns this capstone's Phase 2 and Phase 3 both deliberately avoided
- [Manual Testing Capstone: International Money Transfer](/learning-paths/manual-testing/manual-testing-capstone) — The same feature, same underlying defect, tested at the UI layer

## Interview Questions

**Q1: Walk me through how you'd test a complex, compliance-critical API feature from contract to release.**

*What to look for*: A candidate who describes a real, connected sequence — contract review, risk-driven technique selection, precise execution of specifically-designed test sequences (not general exploration), clear defect reporting, and boundary-aware verification — not a list of isolated skills with no sense of how they connect.

**Q2: If the same defect is found independently at both the UI layer and the API layer, what does that tell you?**

*What to look for*: A candidate who recognizes this confirms a genuine underlying implementation gap rather than a layer-specific symptom — and who understands why testing at both layers, per this path's own opening module, catches different things and reinforces confidence when both independently agree.

---

## Glossary

No new terms are introduced in this capstone — every term used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ A real API testing assignment moves continuously from contract review to risk-driven technique selection to execution to reporting to boundary-aware verification.
✓ Technique selection should be driven by a feature's actual risk shape, not a fixed, uniformly-applied checklist.
✓ The same real defect found independently at two different layers (UI and API) confirms a genuine implementation gap, not a layer-specific artifact.
✓ Idempotency and similar per-endpoint concerns need re-testing on every new endpoint — never assumed from another endpoint's result.
✓ Verification after a fix should test the fix's actual boundary and hold across varied conditions, not just re-run the original failing case once.
