---
title: "Test Design Interviews"
sidebar_label: "04 Test Design Interviews"
description: "Live, timed test-case-design exercises applying Boundary Value Analysis, Equivalence Partitioning, and Decision Table Testing directly, under the specific constraints an interview setting adds."
keywords: ["test design interview questions", "design test cases interview", "BVA interview", "equivalence partitioning interview"]
difficulty: "intermediate"
time_to_read: "10 min"
last_reviewed: "2026-08-06"
---

# Test Design Interviews

**Prerequisites**: You should already have completed [Section 1 Review](/learning-paths/interview-preparation/section-1-review) and Section 1 in full.
**Leads to**: After this, you'll be ready for [Defect and Bug-Handling Interviews](/learning-paths/interview-preparation/defect-and-bug-handling-interviews).

"Design test cases for this feature" is the single most common technical exercise in a QA interview, and it's not actually asking what test cases you'd write — it's asking whether you have a *method*. This module applies [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis), [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning), and [Decision Table Testing](/learning-paths/manual-testing/decision-table-testing) directly to this exact interview moment.

## Why This Matters

**A candidate who lists cases without a method.** Asked to design test cases for a password field accepting 8–20 characters, a candidate lists: "test a valid password, test an empty password, test a really long password, test special characters." The list touches on real ideas, but with no visible method behind it — the interviewer can't tell whether the candidate would reliably find the same gaps on a feature they haven't seen a hundred times before, or whether this particular list happened to work out.

**A candidate who visibly applies a technique.** A different candidate, given the identical prompt, states their method first: "I'll apply boundary value analysis around the 8 and 20 character limits, then equivalence partition the character types." They then generate cases *from* that stated method — 7, 8, 9, 19, 20, and 21 characters specifically, plus one representative case from each character-type partition (letters only, numbers only, mixed, special characters). The final list of cases might not look dramatically different from the first candidate's — but the interviewer now has direct evidence of a repeatable method, not a one-off list.

Both candidates produced a reasonable set of test cases. Only one of them demonstrated a method the interviewer could trust on a feature they'd never think to test manually.

## Applying Existing Technique Under Interview Conditions

**State your method before generating cases**: naming Boundary Value Analysis or Equivalence Partitioning explicitly, before listing any specific case, is what turns a list into visible evidence of technique — exactly the gap this module's opening scenario demonstrates.

**Think aloud, don't work silently**: an interviewer evaluating test design wants to hear your reasoning, not just receive a final list — narrate why a boundary matters, not just that you tested one.

**Ask about scope before designing**: per [How QA Interviews Are Structured](/learning-paths/interview-preparation/how-qa-interviews-are-structured)'s own scenario-round guidance, confirm what's actually in scope (client-side validation only, or the full flow including the server) before generating cases against the wrong assumption.

### Scenario-Based Example

**Interview prompt**: "Design test cases for a discount-code field at checkout that accepts codes between 5 and 10 characters."

**Weak Answer**: "I'd test a valid code, an invalid code, a really short code, and a really long code. I'd also check what happens with special characters." *(No stated method, no specific boundary values, no reasoning narrated — a plausible-sounding list with nothing underneath it.)*

**Strong Answer**: "I'll apply Boundary Value Analysis around the 5–10 character limit, so I'm testing 4, 5, 6, 9, 10, and 11 characters specifically — the values right at and just past each edge, since that's where off-by-one defects concentrate. Then I'll apply Equivalence Partitioning to the code's *content* separately from its length: one valid, existing code; one well-formed but non-existent code; and one malformed code, like one containing spaces. Before I finalize this, I'd want to confirm — is code validation happening client-side, server-side, or both, since that changes what I'd prioritize testing first." *(Names the technique, generates cases directly from it, and asks a scope-clarifying question.)*

## What the Interviewer Is Really Evaluating

- **Method, not just outcome**: is there a visible, repeatable technique behind the case list, or does it look improvised
- **Boundary precision**: are the exact boundary values named (4, 5, 6, not "a short one and a long one")
- **Depth vs. breadth judgment**: does the candidate prioritize the highest-risk cases first, or produce an unprioritized flat list

## Common Mistakes

**Mistake 1: Listing plausible-sounding test cases without naming the underlying technique.**
This module's opening scenario's entire gap traces to exactly this — a reasonable list with no visible, repeatable method behind it.

**Mistake 2: Naming approximate boundaries ("a really short one") instead of exact values (4, 5, 6).**
Precision at the boundary is the entire point of Boundary Value Analysis — vague boundaries signal the technique isn't actually being applied, just referenced.

**Mistake 3: Working silently and presenting only a final list.**
An interviewer evaluating test design wants your reasoning process, not just its output.

## Interviewer Expectations

A strong candidate states their method before generating any specific case, narrates their reasoning aloud throughout, and asks at least one scope-clarifying question before treating their case list as complete.

:::note From the Field
A candidate asked to design test cases for a file-upload feature accepting files up to 10MB immediately started naming file sizes without ever stating a method. When the interviewer asked "what's your approach here?" mid-answer, the candidate paused, then explicitly named Boundary Value Analysis and restated their cases around the exact 10MB limit — the interviewer's own notes specifically credited this recovery, noting the candidate clearly *had* the right method, but hadn't led with it, costing valuable time and initial impression.
:::

:::tip Senior QA Insight
A newer candidate treats "design test cases for X" as a request for a list. A senior candidate treats it as a request to demonstrate a method — and leads every answer by naming that method explicitly, before a single specific case is mentioned, because the method is what actually transfers to features the interviewer will never get to ask about directly.
:::

## Mini Challenge

**Scenario**: You're asked to design test cases for an age field that must accept values between 18 and 65.

**Your task**: Write a strong-answer-style response, explicitly naming your technique before listing any specific boundary values.

## Key Takeaways

- Test-design interview prompts evaluate method, not just the final list of cases produced.
- Naming your technique (Boundary Value Analysis, Equivalence Partitioning) before generating cases is what makes that method visible to the interviewer.
- Exact boundary values ("4, 5, 6"), not approximate ones ("a short one"), signal the technique is genuinely being applied.
- Ask a scope-clarifying question before treating your case list as complete.

---

## What You Just Learned

- Why "design test cases for X" evaluates method, not just the resulting list
- How to apply Boundary Value Analysis and Equivalence Partitioning visibly, stating the technique before generating cases
- The difference between a weak answer (a plausible list) and a strong one (a stated method, exact boundaries, and a scope question)
- Why thinking aloud matters as much as the final answer in a live test-design exercise

**Next:** [Defect and Bug-Handling Interviews](/learning-paths/interview-preparation/defect-and-bug-handling-interviews)

## Related Topics

- [Boundary Value Analysis](/learning-paths/manual-testing/boundary-value-analysis) — The technique this module's strong answer applies directly and visibly
- [Equivalence Partitioning](/learning-paths/manual-testing/equivalence-partitioning) — The complementary technique applied to the discount-code's content in this module's scenario
- [How QA Interviews Are Structured](/learning-paths/interview-preparation/how-qa-interviews-are-structured) — The scope-clarifying-question habit this module applies to a live technical exercise specifically

## Glossary

No new terms are introduced in this module — every technique used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Test-design interview prompts evaluate method, not just the resulting case list.

✓ State your technique (BVA, Equivalence Partitioning) before generating any specific case.

✓ Name exact boundary values, never approximate ones.

✓ Think aloud — narrate your reasoning, don't work silently toward a final list.

✓ Ask a scope-clarifying question before treating your answer as complete.
