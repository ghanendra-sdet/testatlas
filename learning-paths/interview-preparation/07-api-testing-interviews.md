---
title: "API Testing Interviews"
sidebar_label: "07 API Testing Interviews"
description: "REST concepts, status codes, and auth-flow questions discussed conversationally, reusing What is API Testing? and API Security Fundamentals directly rather than re-teaching either."
keywords: ["API testing interview questions", "REST API interview", "status codes interview question", "API auth interview"]
difficulty: "intermediate"
time_to_read: "9 min"
last_reviewed: "2026-08-08"
---

# API Testing Interviews

**Prerequisites**: You should already have completed [Section 2 Review](/learning-paths/interview-preparation/section-2-review) and Section 2 in full. Familiarity with [API Testing](/learning-paths/api-testing/what-is-api-testing) is recommended.
**Leads to**: After this, you'll be ready for [SQL and Database Interview Scenarios](/learning-paths/interview-preparation/sql-and-database-interview-scenarios).

"Walk me through how you'd test this endpoint" is where API knowledge either sounds memorized or sounds like real, applied judgment. This module doesn't re-teach [What is API Testing?](/learning-paths/api-testing/what-is-api-testing) or [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals) — it applies both directly to how that knowledge actually gets discussed in an interview.

## Why This Matters

**A candidate who recites status codes.** Asked "what's the difference between a 401 and a 403," a candidate answers correctly: "401 means unauthorized, 403 means forbidden." Asked the natural follow-up — "when would an API return one instead of the other for the same request?" — they hesitate, because the definitions were memorized independently of any real request/response reasoning.

**A candidate who reasons through the distinction.** A different candidate, given the same follow-up, answers immediately: "401 means the request has no valid credentials at all — the server doesn't know who you are. 403 means it does know who you are, and you're authenticated correctly, but you're not allowed to do this specific thing — like a regular user hitting an admin-only endpoint." The definitions are identical to the first candidate's; the difference is the second candidate has clearly reasoned through *when* each applies, not just memorized what each means.

Both candidates knew the correct definitions. Only one of them could apply the distinction to a concrete case immediately.

## Applying API Testing Knowledge Conversationally

**Explain codes through a scenario, not a lookup table**: the strongest answers to "what does status code X mean" always attach a concrete example — reusing [What is API Testing?](/learning-paths/api-testing/what-is-api-testing)'s own request/response framing rather than reciting a memorized list.

**Auth questions reward the same distinction this module's opening scenario shows**: authentication (who are you) versus authorization (what are you allowed to do) is the single most commonly probed API concept in interviews — know it well enough to give an example on the spot, reusing [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals) directly.

**"How would you test this endpoint" is a scenario round, not a checklist round**: per [How QA Interviews Are Structured](/learning-paths/interview-preparation/how-qa-interviews-are-structured), treat this as an invitation to reason aloud — request validation, expected response, error cases, auth boundaries — not a list to recite from memory.

### Scenario-Based Example

**Interview prompt**: "How would you test a `POST /transfers` endpoint that moves money between two accounts?"

**Weak Answer**: "I'd send a valid request and check I get a 200 back. I'd also test with missing fields and check for a 400. And I'd test with a bad auth token for a 401." *(Technically correct, but stops at the surface — no reasoning about the endpoint's actual purpose or risk.)*

**Strong Answer**: "First, I'd confirm the happy path — a valid transfer between two accounts I control returns the expected success response and the balances actually update correctly, not just that the response looks right. Then I'd test the boundary and validation cases — a missing or malformed amount, a negative amount, a transfer exceeding the account balance. For auth, I'd specifically test both authentication (no token at all) and authorization (a valid token for a different account trying to move someone else's money) as separate cases, since those fail differently. And since this moves real money, I'd also ask whether resubmitting the same request twice is safe — is there idempotency protection against a duplicate transfer." *(Reasons about the endpoint's actual purpose, separates authentication from authorization explicitly, and raises a real risk — duplicate submission — unprompted.)*

## What the Interviewer Is Really Evaluating

- **Depth beyond the happy path**: does the candidate go straight to edge cases and risk, or stop at "send a request, check the response"
- **Precise auth reasoning**: is authentication clearly distinguished from authorization, with a concrete example
- **Unprompted risk awareness**: does the candidate raise a real concern (like duplicate-request safety) without being asked directly

## Common Mistakes

**Mistake 1: Reciting status code definitions without a concrete example ready.**
This module's opening scenario's entire gap traces to exactly this — accurate definitions with no demonstrated reasoning behind them.

**Mistake 2: Treating authentication and authorization as interchangeable or vaguely related concepts.**
This is one of the most frequently probed distinctions in API interviews — being unable to give a clean, concrete example of each signals a real gap, not just imprecise vocabulary.

**Mistake 3: Stopping at the happy path and basic error codes without reasoning about the endpoint's actual business risk.**
The strong answer above specifically raises duplicate-submission risk on a money-moving endpoint — a financially-consequential feature deserves that level of reasoning, unprompted.

## Best Practices

**Practice 1: Always attach a concrete example when explaining a status code or auth concept, never just the definition.**
This is what separates a memorized answer from a demonstrated one.

**Practice 2: Explicitly separate authentication and authorization in any answer touching API security, with one clear example of each.**
This distinction is tested constantly, and precision here reads as real depth.

**Practice 3: Reason about the specific endpoint's actual purpose and risk, not a generic testing checklist.**
A payment endpoint and a read-only search endpoint deserve genuinely different depth of scrutiny — showing that judgment matters more than a fixed list.

:::note From the Field
A candidate asked to test a `DELETE /users/{id}` endpoint immediately asked, before designing any test cases: "is this a hard delete or a soft delete, and can a user delete another user's account if they guess the ID?" Both questions came before a single test case was proposed — the interviewer's own notes specifically flagged this as demonstrating real API-security instinct, since both questions targeted exactly the kind of defect a generic test-case list would have missed entirely.
:::

:::tip Senior QA Insight
A newer candidate answers API questions the way a reference document would — accurate, complete, and generic. A senior candidate answers the way a person who has actually broken something in production would — leading with the specific risk a request type actually carries, before any generic checklist item.
:::

## Mini Challenge

**Scenario**: You're asked, "How would you test a `PUT /profile` endpoint that updates a user's email address?"

**Your task**: Write a strong-answer-style response that goes beyond the happy path and explicitly separates an authentication concern from an authorization concern.

## Key Takeaways

- Status code and auth questions reward a concrete, reasoned example over a memorized definition.
- Authentication and authorization are one of the most frequently probed distinctions in API interviews — always have a clean example of each ready.
- "How would you test this endpoint" rewards reasoning about the endpoint's specific business risk, not a generic checklist.
- Raising a real risk (like duplicate-submission safety) unprompted signals genuine depth.

---

## What You Just Learned

- How to answer status code and auth questions with reasoning and a concrete example, not just a definition
- Why authentication and authorization need to be kept explicitly distinct, with a ready example of each
- How to reason about an endpoint's specific business risk rather than reciting a generic testing checklist
- How raising an unprompted risk (like idempotency on a payment endpoint) demonstrates real applied judgment

**Next:** [SQL and Database Interview Scenarios](/learning-paths/interview-preparation/sql-and-database-interview-scenarios)

## Related Topics

- [What is API Testing?](/learning-paths/api-testing/what-is-api-testing) — The foundational API-testing knowledge this module applies conversationally
- [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals) — The authentication/authorization distinction this module's strongest answers rely on
- [Test Design Interviews](/learning-paths/interview-preparation/test-design-interviews) — The technique-application discipline this module extends to the API domain specifically

## Glossary

No new terms are introduced in this module — every concept used above is defined in its linked source module.

## Quick Revision

Remember these five points:

✓ Attach a concrete example to any status code or auth explanation — never just the definition.

✓ Keep authentication (who you are) and authorization (what you're allowed to do) explicitly distinct, with an example of each.

✓ Reason about the specific endpoint's business risk, not a generic checklist.

✓ Raise real risks (like duplicate-submission safety) unprompted when the endpoint's purpose calls for it.

✓ "How would you test this endpoint" is a reasoning invitation, not a recall question.
