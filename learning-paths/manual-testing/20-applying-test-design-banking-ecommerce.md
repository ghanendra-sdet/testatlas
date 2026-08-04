---
title: "Applying Test Design Across Domains: Banking and E-Commerce"
sidebar_label: "20 Applying Test Design: Banking and E-Commerce"
description: "Applying the full test design toolkit from Sections 2-5 to two contrasting real domains in one integrated exercise each — financial-accuracy-driven banking, state- and inventory-driven e-commerce."
keywords: ["banking test design", "e-commerce test design", "financial testing", "inventory testing", "applied test design"]
difficulty: "intermediate"
time_to_read: "10 min"
last_reviewed: "2026-08-04"
---

# Applying Test Design Across Domains: Banking and E-Commerce

**Prerequisites**: You should already understand every module in Sections 2–5 of this path.
**Leads to**: After this, you'll be ready for [Applying Test Design Across Domains: Healthcare and Insurance](/learning-paths/manual-testing/applying-test-design-healthcare-insurance).

Every module so far taught one technique or artifact at a time. Real features never arrive that way — they need several techniques combined, judgment about which applies where, and the reporting discipline to communicate what was found. This module and the next apply everything from Sections 2 through 5 together, against two domains each, closing the gap between "I know the techniques" and "I can use them on a real feature."

## Banking: AtlasBank Interest-Calculation Engine

AtlasBank is rebuilding the savings-account interest-calculation engine: interest accrues daily based on account balance and a tiered rate structure (0.5% for balances under $10,000; 1.2% for $10,000–$100,000; 1.8% above $100,000), compounds monthly, and must comply with regulatory disclosure requirements showing the exact calculation method to account holders on request.

**Thinking Like a Tester first**: before any technique, the mindset habits from Section 1 apply — business mindset asks what the bank actually needs guaranteed (accurate compounding, correct tier application); adversarial mindset asks how a balance right at a tier boundary might be exploited or miscalculated; negative thinking asks what happens with a negative balance (an overdraft) or an account closed mid-cycle.

**Boundary Value Analysis** targets the tier boundaries directly: $9,999.99 and $10,000.00 (first tier boundary), $99,999.99 and $100,000.00 (second tier boundary) — exactly the values most likely to reveal a rate misapplied to the wrong tier, the same off-by-one risk pattern from this path's own BVA module.

**Equivalence Partitioning** confirms the middle of each tier needs only one representative balance tested, not many — $5,000 for the first tier, $50,000 for the second, $500,000 for the third — since BVA already covers the boundaries where defects concentrate.

**Decision Table Testing** applies to the compounding-and-disclosure logic together: does the account have a full month of activity, was the balance altered mid-cycle, is a disclosure request pending — each combination potentially producing different calculation behavior, exactly the multi-condition situation Decision Tables exist for.

**State Transition Testing** applies to the account lifecycle itself: an account moving from Active to Closed mid-cycle needs interest calculated correctly up to the closure date, not for a full period — a transition, not a static condition, requiring the state-machine thinking from that module.

**Test Data Design** demands production-like realism specifically here: real interest calculations involve amounts with more decimal precision than round test numbers typically have — directly echoing this path's own currency-rounding "From the Field" story. Test data should include balances with realistic cent-level precision, not just clean round numbers.

**Applying this integrated design surfaces a real defect**: an account balance of exactly $10,000.00 (the first tier boundary) is calculated using the lower 0.5% rate instead of the 1.2% rate the tier structure specifies — an off-by-one BVA would catch and representative mid-tier testing alone would have missed entirely, since $5,000 and $50,000 both sit safely away from the boundary where the actual defect lives.

**Reporting it**: the defect gets written up following [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports)' full structure — exact balance, exact date, expected versus actual rate applied, environment, and reproducibility (100%, at the exact boundary value). Severity is High (financial miscalculation); Priority is High (affects real account balances). This single defect, caught through disciplined technique combination, is exactly the kind of gap [Reviewing Test Cases](/learning-paths/manual-testing/reviewing-test-cases)' review process should also catch if it somehow shipped in the original test case set — a second, independent check on top of the design process itself.

## E-Commerce: AtlasBank Marketplace Checkout and Inventory

A related AtlasBank initiative launches a marketplace feature where third-party sellers list products, customers purchase them, and inventory must accurately reflect what's actually available — a state- and inventory-driven problem quite different in shape from the banking engine's financial-accuracy focus.

**Thinking Like a Tester first**: user mindset asks what a real, impatient customer does — refreshing during checkout, opening two tabs, abandoning a cart mid-purchase; adversarial mindset asks whether a customer could exploit a timing gap to buy more of an item than actually exists in inventory.

**State Transition Testing** is the dominant technique here, more than in the banking example: an inventory item moves through states (Available, Reserved during checkout, Sold, Restocked), and a product listing moves through its own states (Active, Out of Stock, Delisted) — with real risk concentrated specifically in the transitions, exactly as this path's State Transition module taught. What happens when two customers reach checkout simultaneously for the last unit of an item is a transition question, not a simple valid/invalid input question.

**Combinatorial and Pairwise Testing** applies to the checkout configuration space: payment method (card, digital wallet, buy-now-pay-later), shipping destination (domestic, international), and product category (physical, digital, mixed cart) combine to produce a combination space too large to test exhaustively within a realistic timeline — a textbook pairwise-reduction situation, following this path's own e-commerce example from that module directly.

**Decision Table Testing** applies to discount and promotion logic: order total, membership status, and an active promo code combine to determine the final price — the same shape as this path's own free-shipping Mini Challenge from earlier in the section.

**Error Guessing**, informed by this domain's known risk patterns, specifically targets the inventory-reservation timing gap: does adding an item to a cart actually reserve it, or only reserve it at checkout confirmation — and what happens to an abandoned cart's reservation, a pattern this path's own Error Guessing module named directly as a common, transferable defect class.

**Applying this integrated design surfaces a real defect**: two customers simultaneously complete checkout for the last unit of a limited-stock item, and both transactions succeed — the inventory-decrement logic doesn't actually lock the item during the brief window between availability check and purchase confirmation, a state-transition and timing defect that testing each customer's checkout in isolation, one at a time, would never reveal.

**Reporting it**: this defect's reproducibility is more nuanced than the banking example's — it depends on timing, not a single deterministic value, so the bug report's Reproducibility field should state this explicitly ("reproducible under simultaneous checkout timing; not reliably reproducible with sequential, non-overlapping attempts"), exactly the kind of detail [Writing Effective Bug Reports](/learning-paths/manual-testing/writing-effective-bug-reports) emphasized isn't optional to omit.

## What These Two Domains Show Together

Banking's dominant risk is financial-accuracy — boundary values and decision-table combinations, where a defect is a deterministic, reproducible calculation error. E-commerce's dominant risk is state- and inventory-accuracy — state transitions and timing, where a defect can be genuinely intermittent and timing-dependent. Neither domain uses only one technique; both use several combined, weighted differently based on where each domain's real risk actually concentrates — directly reusing the risk-based judgment this entire path has built toward since Foundations.

## Key Takeaways

- Real features require combining multiple techniques from Sections 2–5, not applying one in isolation — banking needed BVA, Equivalence Partitioning, Decision Tables, and State Transitions together; e-commerce needed State Transitions, Pairwise Testing, Decision Tables, and Error Guessing together.
- Which techniques dominate depends on where a domain's real risk concentrates — deterministic, boundary-driven risk (banking) versus timing- and state-driven risk (e-commerce).
- A defect's reproducibility can be deterministic (a specific boundary value) or timing-dependent (simultaneous actions) — the bug report should state which, explicitly.
- The same disciplined design process that finds a defect (integrated technique application) is reinforced by an independent review pass, not replaced by it.

---

## What You Just Learned

- How to combine multiple Section 2–5 techniques deliberately on one real feature, rather than applying them in isolation
- Why banking's dominant risk (financial accuracy) and e-commerce's dominant risk (state and timing) call for different technique weightings
- How a boundary-value defect in an interest calculation and a state-transition timing defect in inventory both required integrated, not single-technique, test design to catch
- Why reproducibility framing differs between deterministic and timing-dependent defects, and why the bug report should say so explicitly

**Next:** [Applying Test Design Across Domains: Healthcare and Insurance](/learning-paths/manual-testing/applying-test-design-healthcare-insurance)

## Related Topics

- [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) — The tier-boundary technique central to the banking example
- [State Transition Testing](/learning-paths/manual-testing/state-transition-testing) — The dominant technique in the e-commerce inventory example
- [Combinatorial and Pairwise Testing](/learning-paths/manual-testing/combinatorial-and-pairwise-testing) — Applied to the checkout configuration space

## Interview Questions

**Q1: Walk me through how you'd test a financial calculation feature with tiered rates.**

*What to look for*: A candidate who combines Boundary Value Analysis at tier edges with Equivalence Partitioning for the middle of each tier, rather than naming only one technique — evidence of integrated, not single-technique, thinking.

**Q2: How would you test an e-commerce checkout feature for inventory accuracy under concurrent purchases?**

*What to look for*: A candidate who identifies this as a state-transition and timing problem, not a simple input-validation problem — ideally mentioning the specific risk of two simultaneous purchases both succeeding for the same limited-stock item.

---

## Glossary

**Integrated Test Design**: Applying multiple test design techniques deliberately in combination on one real feature, based on where that feature's actual risk concentrates, rather than applying a single technique uniformly.

**Timing-Dependent Defect**: A defect that reproduces only under specific timing conditions (such as simultaneous or near-simultaneous actions), requiring reproducibility to be stated as a condition rather than a guarantee.

## Quick Revision

Remember these five points:

✓ Real features need multiple techniques combined, weighted by where the domain's actual risk concentrates.
✓ Banking's dominant risk is deterministic and boundary-driven; e-commerce's is state- and timing-driven.
✓ BVA and Equivalence Partitioning caught a tier-boundary rate defect no representative mid-tier value would have found.
✓ State Transition and Pairwise Testing caught a concurrent-checkout inventory defect isolated testing would have missed.
✓ State reproducibility explicitly — deterministic (a specific value) versus timing-dependent (concurrent actions) — in every bug report.
