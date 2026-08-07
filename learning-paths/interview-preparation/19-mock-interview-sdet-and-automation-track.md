---
title: "Mock Interview Simulation: SDET and Automation Track"
sidebar_label: "19 Mock Interview: SDET and Automation Track"
description: "A full, timed, simulated interview covering API, database, automation, live-debugging, and rapid cross-domain rounds spanning performance, security, mobile, and AI for QA."
keywords: ["SDET mock interview", "automation interview simulation", "API testing mock interview", "QA technical interview practice"]
difficulty: "intermediate"
time_to_read: "22 min"
last_reviewed: "2026-08-08"
---

# Mock Interview Simulation: SDET and Automation Track

**Prerequisites**: You should already have completed [Mock Interview Simulation: Manual and Test-Design Track](/learning-paths/interview-preparation/mock-interview-manual-and-test-design-track).
**Leads to**: After this, you'll be ready for [Interview Feedback and Improvement Checklist](/learning-paths/interview-preparation/interview-feedback-and-improvement-checklist).

Same rules as the previous track: set a timer, answer each round before reading the model answer, and compare honestly afterward. This track covers the technical rounds most SDET and automation-focused interviews weight heavily — API, database, automation, live debugging — plus a rapid round spanning every specialized TestAtlas domain.

## How to Use This Simulation

Give yourself roughly 30–35 minutes. Same discipline as the previous track: read each prompt once, pause the way [Communicating Under Pressure](/learning-paths/interview-preparation/communicating-under-pressure) describes, answer fully, then compare.

---

## Round 1 — API Testing (6 minutes)

**Interviewer**: "How would you test a `POST /refunds` endpoint that issues a refund to a customer's original payment method?"

*Pause. Answer fully before continuing.*

**Model Strong Answer**: "Beyond the happy path — a valid refund request returning success and the amount actually crediting back — I'd test the boundary and business-logic cases specifically: attempting to refund more than the original charge, attempting to refund the same transaction twice, and refunding a transaction that's already been fully refunded. For auth, I'd separately test that a customer can't refund someone else's transaction by guessing or modifying a transaction ID, and that the endpoint requires appropriate elevated permissions if it's meant to be staff-only. Given this moves money, I'd also ask about idempotency — if the same refund request is sent twice due to a network retry, does it refund twice?"

**Evaluator Notes**: per [API Testing Interviews](/learning-paths/interview-preparation/api-testing-interviews), this goes beyond the happy path immediately, separates authentication from authorization explicitly, and raises duplicate-request safety unprompted — exactly the depth a financially consequential endpoint warrants.

---

## Round 2 — SQL, Live (6 minutes)

**Interviewer**: "Write a query to find customers who placed an order in each of the last three consecutive months."

*Pause. State your query plan in plain English before writing anything.*

**Model Strong Answer**: "I'll need orders grouped by customer and by month, then filtered to customers who have a distinct order in all three of the most recent months — this is a 'group and count distinct months' problem, not a simple filter. My plan: extract the month from each order date, group by customer and month to get one row per customer-month combination, then group again by customer, counting distinct months, and filter to a count of three. I'd verify by checking that a customer who ordered in months 1 and 3 but not 2 is correctly excluded, since that's the edge case this query needs to handle correctly."

**Evaluator Notes**: per [SQL and Database Interview Scenarios](/learning-paths/interview-preparation/sql-and-database-interview-scenarios), the plan is stated before any SQL, and the candidate names the specific edge case (a gap month) their own query needs to handle — demonstrating verification instinct, not just query-writing ability.

---

## Round 3 — Automation Framework (6 minutes)

**Interviewer**: "Your framework currently hardcodes test data directly in each test file. Would you change that, and why?"

*Pause. Ground your answer in a specific problem, not a general best-practice statement.*

**Model Strong Answer**: "Yes — the specific problem hardcoded data creates is that a single, real-world change to test data (like a pricing update) requires finding and editing every file that happens to reference that value, and it's easy to miss one, which produces a silent, false failure later rather than an immediate, obvious one. Separating test data into external files means that same change happens in exactly one place. The tradeoff is a small amount of added indirection — a new team member has to learn to look in two places instead of one — but for a suite of any real size, the maintenance savings outweigh that cost."

**Evaluator Notes**: per [Automation Framework Interviews](/learning-paths/interview-preparation/automation-framework-interviews), the answer names the specific problem being solved, not just the pattern's name, and explicitly acknowledges a real tradeoff rather than presenting the change as costless.

---

## Round 4 — Live Debugging (7 minutes)

**Interviewer**: "Here's a test that passes locally but fails in CI. How would you approach this?"

*Pause. State your first diagnostic question before proposing any fix.*

**Model Strong Answer**: "First question: does it fail every time in CI, or intermittently? If it's consistent, that points to an actual environment difference — different data, different configuration, different browser version. If it's intermittent even in CI, that points more toward a timing issue that CI's typically slower, more loaded environment simply exposes more often than a fast local machine does. I'd also ask whether CI runs at a different screen resolution or with network throttling, since those specifically tend to expose timing assumptions that happen to hold locally by coincidence."

**Evaluator Notes**: per [Live Coding and Debugging Interviews](/learning-paths/interview-preparation/live-coding-and-debugging-interviews), the consistent-versus-intermittent question comes first, before any proposed fix, and the follow-up questions narrow specifically toward environment-driven timing exposure rather than guessing at a single cause.

---

## Round 5 — Rapid Cross-Domain (8 minutes, four short questions)

*Answer each briefly — these evaluate calibrated scope, not deep specialist knowledge. Pause after each before reading its note.*

**Interviewer**: "How would you performance-test a search feature?"
**Model Answer**: "I'd distinguish correctness from performance first — does search return the right results, separately from how fast it returns them. For performance specifically, I'd test response time under realistic query volume and data size, watching for the kind of scaling issue that only appears under load, not in a small test dataset."
*(Reuses [What is Performance Testing?](/learning-paths/performance-testing/what-is-performance-testing)'s own correctness-vs-performance distinction.)*

**Interviewer**: "What would you check for security on a public search endpoint?"
**Model Answer**: "I'd check whether it exposes more data than intended — for example, whether search results ever leak content that should be access-restricted — and I'd verify this using only legitimate, authenticated access, not by attempting to breach anything."
*(Reuses [What is Security Testing?](/learning-paths/security-testing/what-is-security-testing)'s own identification-not-exploitation scope.)*

**Interviewer**: "What's different about testing this feature on mobile?"
**Model Answer**: "Device and screen-size fragmentation for the results layout, and connectivity — does a search that's interrupted mid-request recover cleanly, or does the app end up in a broken state."
*(Reuses [What is Mobile Testing?](/learning-paths/mobile-testing/what-is-mobile-testing)'s own fragmentation and connectivity framing.)*

**Interviewer**: "If this search feature used an AI model to rank results, what would change about your testing?"
**Model Answer**: "I'd separate deterministic defects — like a crash or an incorrect data field — from AI-quality issues like relevance or consistency, which need a different, more rubric-based evaluation than a simple pass/fail check."
*(Reuses [AI in Software Testing](/learning-paths/ai-for-qa/ai-in-software-testing)'s own deterministic-vs-AI-quality distinction.)*

**Evaluator Notes for the Full Round**: per [Cross-Domain Interview Scenarios](/learning-paths/interview-preparation/cross-domain-interview-scenarios), every answer here is intentionally brief and correctly scoped — none attempts deep specialist depth, and each names the right high-level framework from its own TestAtlas curriculum.

---

## Self-Assessment

Compare your five rounds against the evaluator notes. The rapid cross-domain round specifically tests something the earlier four rounds don't: whether you can shift between deep, specialist-level reasoning (Rounds 1–4) and brief, correctly-scoped generalist answers (Round 5) within the same interview. If Round 5 felt harder than expected, revisit [Cross-Domain Interview Scenarios](/learning-paths/interview-preparation/cross-domain-interview-scenarios) specifically.

## Key Takeaways

- This track combines Section 3's deep technical rounds with Section 4's cross-domain calibration in one simulation.
- The rapid cross-domain round specifically tests shifting between deep and brief answers within the same interview.
- Every model answer in this track reuses an existing TestAtlas curriculum directly, never introducing new technical content.
- Comparing your own performance across both mock-interview tracks reveals whether your gaps are technical-depth gaps or cross-domain-calibration gaps.

---

## What You Just Learned

- How to run a self-administered, timed technical mock interview spanning API, database, automation, and live debugging
- How a rapid cross-domain round tests calibrated depth across four specialized TestAtlas curricula in a few minutes
- How to compare your own performance against evaluator notes honestly, round by round
- Why shifting between deep and brief answers within one interview is itself a distinct, evaluated skill

**Next:** [Interview Feedback and Improvement Checklist](/learning-paths/interview-preparation/interview-feedback-and-improvement-checklist)

## Related Topics

- [Mock Interview Simulation: Manual and Test-Design Track](/learning-paths/interview-preparation/mock-interview-manual-and-test-design-track) — The companion simulation this track continues from
- [Cross-Domain Interview Scenarios](/learning-paths/interview-preparation/cross-domain-interview-scenarios) — The depth-calibration skill this simulation's Round 5 evaluates directly
- [Live Coding and Debugging Interviews](/learning-paths/interview-preparation/live-coding-and-debugging-interviews) — The diagnose-before-fixing discipline this simulation's Round 4 evaluates directly

## Quick Revision

Remember these five points:

✓ Answer each round before reading the model answer.

✓ Rounds 1–4 evaluate deep technical reasoning; Round 5 evaluates calibrated, brief, cross-domain scoping.

✓ State your plan or diagnostic question before proposing a solution, in every round.

✓ Compare your own performance across both mock-interview tracks to find whether your gaps are technical or cross-domain.

✓ Every model answer reuses an existing TestAtlas curriculum directly — none introduces new technical content.
