---
title: "Decision Table Testing"
sidebar_label: "06 Decision Table Testing"
description: "How to design test cases for a feature whose behavior depends on multiple business rules combined, using a table that makes every rule combination visible."
keywords: ["decision table testing", "decision table", "business rules", "condition combinations", "test design technique"]
difficulty: "beginner"
time_to_read: "9 min"
last_reviewed: "2026-08-04"
---

# Decision Table Testing

**Prerequisites**: You should already understand [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning).
**Leads to**: After this, you'll be ready for [State Transition Testing](/learning-paths/manual-testing/state-transition-testing).

Equivalence Partitioning and Boundary Value Analysis both work brilliantly on a single input at a time. Real features rarely have just one input driving behavior — a loan approval doesn't depend only on credit score, it depends on credit score *and* income *and* existing debt, combined. Decision Table Testing is the technique for exactly this situation: multiple conditions, combining to produce different outcomes, where testing each condition in isolation would miss the defects that only show up in combination.

## Why This Matters

**A tester who tests conditions in isolation.** An insurance underwriting feature approves or denies applications based on age, health status, and coverage amount. A tester confirms each factor works independently: a young applicant with good health and low coverage is approved; a very old applicant is denied; an applicant with a serious health condition is denied. Each test passes. The feature ships. Weeks later, an edge case surfaces: an older applicant with a serious health condition but a *very low* coverage amount should qualify for a simplified approval path with relaxed health requirements — a genuine business rule nobody tested, because the tester validated each condition separately and never tried the specific combination where age, health, and coverage amount all interact.

**A tester who tests condition combinations deliberately.** A different tester, before writing any test cases, builds a table listing every condition (age bracket, health status, coverage amount) and every rule the business actually applies to combinations of them — including the low-coverage relaxed-approval path buried in the underwriting guidelines but easy to miss in a plain-language requirement. Testing against that table catches the exact combination the first tester never thought to try, because it was built into the test design from the start, not discovered by chance.

The underlying feature and its real complexity were identical in both cases. The difference was whether test design accounted for how conditions combine, or tested each one as if it existed in isolation.

## What Decision Table Testing Is

A decision table lists every relevant **condition** (an input or factor that affects the outcome) down the rows, and every distinct combination of those conditions as columns — each column is one **rule**. For each rule, the table states the resulting **action** (what the system should do).

**Worked example — a simplified loan approval decision table**:

| Condition | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---|---|---|---|
| Credit score ≥ 650? | Yes | Yes | No | No |
| Income ≥ $50,000? | Yes | No | Yes | No |
| **Action: Approve loan?** | Yes | No | No | No |

Two conditions, each with two possible states, produce four rules — every possible combination is represented as its own column, and each column gets its own test case. This is the core discipline: instead of testing "credit score" and "income" as if they were independent, the table forces every real combination onto the table, so nothing gets silently skipped.

Real decision tables often have more conditions and more nuanced actions than a simple yes/no — the insurance example in this module's opening has three conditions (age, health, coverage amount) and at least three distinct actions (standard approval, simplified approval, denial), which produces more rules but follows exactly the same structure.

:::tip Senior QA Insight
A beginner tests conditions one at a time and assumes the combinations will "just work" if each piece works alone. A senior tester assumes the opposite by default — that the most likely place for a defect to hide is exactly in how two or more conditions interact — and builds the decision table before writing a single test case, specifically to make sure no real combination gets skipped by accident.
:::

## When to Apply Decision Table Testing

Decision Table Testing applies specifically when a feature's outcome depends on multiple conditions combined — not to every feature, and not to a single-input field, where Equivalence Partitioning and BVA already do the job:

- **Business rules with multiple qualifying factors**: loan approval, insurance underwriting, discount eligibility — anywhere a business rule genuinely says "if A and B, then X, but if A and not B, then Y"
- **Features where a requirement uses "and," "or," or "unless" between conditions**: this phrasing is a direct signal that conditions combine, not just coexist
- **Situations where testing conditions independently already missed something**: if a defect like the insurance example's low-coverage relaxed-approval path has happened before, that's a strong argument for building a decision table proactively next time
- **Systems with more than two or three interacting conditions**: below that, the combinations may be simple enough to reason about directly; above it, a table becomes the only reliable way to guarantee nothing was skipped

Decision Table Testing doesn't apply to a single input's own valid/invalid range — that's Equivalence Partitioning and BVA's job. It applies once multiple *different* inputs start interacting to determine one outcome.

## How This Works on Two Real Projects

**Banking**: A wire-transfer feature applies different fraud-review requirements based on three conditions: transfer amount (above or below $10,000), whether the recipient account is new (added within the last 30 days), and whether the sender's account has a fraud flag from a prior incident. A tester builds a decision table before designing any test cases:

| Condition | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---|---|---|---|
| Amount ≥ $10,000? | Yes | Yes | No | No |
| New recipient (< 30 days)? | Yes | No | Yes | No |
| **Action** | Manual review required | Manual review required | Manual review required | Auto-approved |

(The fraud-flag condition is omitted from this simplified table for space — a real table would include it as a fourth condition, doubling the rule count.) Testing directly against this table reveals that Rule 3 — a smaller transfer, but to a brand-new recipient — is incorrectly auto-approved in the actual system, when the business rule clearly requires manual review for any new recipient regardless of amount. This is exactly the kind of defect that testing "amount" and "recipient age" independently would miss, since each condition in isolation behaves correctly; only the combination reveals the gap.

**Insurance**: Returning to this module's opening scenario, the underwriting decision table has three conditions (age bracket, health status, coverage amount) and needs enough rules to cover every real combination the business actually defines — including the low-coverage relaxed-approval path. Building the table explicitly, with input from whoever owns the underwriting rules, surfaces that exact path before any code is tested against it, turning a rule that was easy to miss in prose into something impossible to skip once it's a labeled column in a table everyone can see.

## Common Mistakes

**Mistake 1: Testing each condition independently and assuming combinations will behave correctly.**
As both examples show, real defects concentrate specifically in how conditions interact — testing them in isolation, as the opening scenario's first tester did, structurally cannot catch this class of defect.

**Mistake 2: Building an incomplete decision table that misses a real rule.**
A table is only as good as the rules it captures — the insurance example's low-coverage relaxed-approval path had to be actively sought out from the underwriting guidelines, not assumed to be already covered by the obvious three-way split.

**Mistake 3: Testing only the "obvious" rules and skipping ones that seem unlikely.**
Every column in a properly built decision table represents a real, distinct combination the business rules address — skipping one because it "probably doesn't come up much" is exactly how the wire-transfer example's Rule 3 defect would ship.

**Mistake 4: Building a decision table without a domain expert's input.**
A table built purely from a vague requirement risks missing rules the business actually applies but never wrote down explicitly — the same requirement-ambiguity risk covered earlier in this path, now applied specifically to multi-condition business rules.

## Best Practices

**Practice 1: Build the decision table before designing any test cases.**
The table itself is the test-idea-generation step — skipping straight to test cases risks missing combinations the table would have surfaced.

**Practice 2: Involve whoever owns the actual business rules while building the table.**
As in the insurance example, real business rules often live in a domain expert's head or a guidelines document, not fully captured in the feature requirement — building the table collaboratively catches this early.

**Practice 3: Test every rule in the table, not just the ones that seem most likely.**
A decision table's entire value comes from making every combination visible and testable — selectively skipping "unlikely" rules defeats the purpose.

**Practice 4: Look for "and," "or," and "unless" in requirements as a direct signal a decision table is needed.**
This phrasing reliably marks where conditions combine to produce different outcomes — a strong, simple heuristic for recognizing when this technique applies.

:::note From the Field
On a fintech project, a fee-waiver feature had three conditions in the requirements doc, but testing against the documented conditions alone passed cleanly while a real customer complaint later revealed a fourth, undocumented condition: fee waivers were also supposed to apply automatically to any account flagged as a "VIP" tier, regardless of the other three conditions. It wasn't in the written requirement at all — it existed only as an unwritten policy the support team enforced manually when customers called in. The decision table rebuilt after that incident explicitly included a VIP-override rule, and building it required a conversation with support, not just product and engineering — a reminder that the people who actually apply a business rule day to day sometimes know it better than the document that's supposed to describe it.
:::

## Mini Challenge

**Scenario**: An e-commerce checkout applies free shipping based on two conditions: whether the order total is $50 or more, and whether the customer has an active membership subscription. The actual business rule is: orders of $50+ always get free shipping regardless of membership; orders under $50 get free shipping only if the customer has an active membership.

**Your task**: Build the full decision table for this rule — list both conditions, all four combinations, and the correct action for each. Then identify: does this rule genuinely need all four rules tested, or does one combination behave identically to another in a way that could reduce the test set?

## Key Takeaways

- Decision Table Testing addresses features whose outcome depends on multiple conditions combined — a gap Equivalence Partitioning and Boundary Value Analysis, both single-input techniques, don't cover.
- A decision table lists every condition as a row and every real combination as a column (a rule), with the resulting action stated for each.
- Real defects concentrate in how conditions interact, which testing conditions independently cannot catch by design.
- Building the table requires the actual business rules, not just the written requirement — domain experts often know rules that never made it into the requirement document.

---

## What You Just Learned

- Why testing conditions independently misses defects that only appear in combination
- How to build a decision table: conditions as rows, rule combinations as columns, actions as results
- How a banking wire-transfer feature's real defect only appeared in one specific condition combination
- Why involving domain experts (not just the written requirement) is essential to building a complete table

**Next:** [State Transition Testing](/learning-paths/manual-testing/state-transition-testing)

## Related Topics

- [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) — The single-input technique this module extends to multiple, combined inputs
- [From Requirements to Test Ideas](/learning-paths/manual-testing/from-requirements-to-test-ideas) — Where the ambiguity that hides undocumented business rules first gets surfaced
- [Thinking Like a Tester](/learning-paths/manual-testing/thinking-like-a-tester) — Business mindset, directly applied here to uncovering real rules a requirement doesn't fully state

## Interview Questions

**Q1: When would you use Decision Table Testing instead of Equivalence Partitioning?**

*What to look for*: A clear distinction — Equivalence Partitioning handles a single input's valid/invalid classes; Decision Table Testing handles multiple conditions combining to produce different outcomes. A candidate who treats them as interchangeable hasn't grasped the difference.

**Q2: Walk me through how you'd build a decision table for a feature with three conditions.**

*What to look for*: A candidate who correctly identifies that three binary conditions produce up to eight rule combinations, and who mentions involving whoever owns the actual business logic, not just working from the written requirement alone.

:::note Common Interview Mistake
Many candidates describe a decision table as simply "a table of test cases." That undersells the technique — its real value is *systematically generating every condition combination* so none get silently skipped, not just organizing tests that were already planned. A strong answer emphasizes that the table is built before test cases are designed, specifically to surface combinations a tester might not otherwise think to try.
:::

**Q3: How do you handle a decision table that would produce dozens of rule combinations?**

*What to look for*: Awareness that not all theoretical combinations need a dedicated test case — some can be safely collapsed if they produce identical actions and there's no reason to suspect different underlying logic — while still being cautious about assuming two rules are equivalent without evidence.

---

## Glossary

**Decision Table**: A table listing every condition affecting a feature's behavior as rows, every distinct combination of those conditions as columns (rules), and the resulting action for each rule.

**Condition**: An input or factor that affects a feature's outcome, used as a row in a decision table.

**Rule**: One specific combination of condition values, represented as a column in a decision table, along with its resulting action.

**Action**: The system's expected behavior or outcome for a given rule.
