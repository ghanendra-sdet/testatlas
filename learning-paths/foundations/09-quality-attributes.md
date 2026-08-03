---
title: "Quality Attributes"
description: "Why 'does it work' is only one dimension of quality, and how to weigh functionality, performance, security, usability, reliability, and maintainability for a given feature."
keywords: ["quality attributes", "non-functional requirements", "reliability", "usability", "maintainability"]
difficulty: "beginner"
time_to_read: "8 min"
last_reviewed: "2026-08-03"
---

# Quality Attributes

A feature can pass every functional test — every button works, every calculation is correct, every workflow completes — and still be a bad product. An app that's functionally flawless but takes twelve seconds to load loses users before they ever discover how correct it is. This chapter is about the dimensions of quality beyond "does it work," and why testing has to consider all of them, not just the one that's easiest to verify with a pass/fail test case.

## Why This Matters

**A functionally perfect, unusably slow app.** A logistics company ships a route-planning tool. Every calculation is exactly right — QA verified it thoroughly. But the tool takes twelve seconds to recalculate a route after any change, because nobody treated performance as something to test deliberately; it was assumed to follow naturally from correct code. Dispatchers, who make dozens of route adjustments per shift, quietly go back to their old spreadsheet. The tool is retired within a quarter — not because it was wrong, but because it was too slow to actually use.

**A fast, secure app that's still a failure.** A different team ships a fast, well-secured internal tool — but the workflow to submit a request requires nine screens and remembering an internal code that's never displayed anywhere in the interface. Nobody adopts it voluntarily; new hires need a colleague to walk them through it every time. Fast and secure, but unusable, is still a failed product.

Both teams tested functionality carefully. Neither treated the *other* dimensions of quality as something that needed deliberate testing attention — and each failure happened in a dimension nobody was explicitly watching.

## What Quality Attributes Are

Quality attributes are the dimensions a product needs to succeed on beyond raw functional correctness. Six matter most for the majority of products:

| Attribute | The Question It Answers |
|---|---|
| **Functionality** | Does it do what it's supposed to do? |
| **Performance** | Is it fast and scalable enough for how it's actually used? |
| **Security** | Is data and access protected against misuse? |
| **Usability** | Can a real user actually accomplish their goal with it? |
| **Reliability** | Does it keep working correctly under real conditions, over time? |
| **Maintainability** | Can the team safely change it later without breaking it? |

Functionality is usually the easiest to test — it has clear pass/fail criteria (the calculation is either correct or it isn't). The other five are often skipped not because they matter less, but because they're harder to reduce to a simple pass/fail check and easier to assume will "just happen" if the functional tests pass. They won't.

## When Each Attribute Matters Most

Not every attribute deserves equal weight on every feature — which ones matter most depends on what the product actually is and who depends on it:

| Product Context | Attributes That Matter Most |
|---|---|
| Banking or payments | Security and Reliability — money and trust are on the line |
| Real-time trading or bidding | Performance — milliseconds have direct financial consequences |
| Internal tool used by five people | Usability polish matters less; Functionality and Maintainability matter more |
| Healthcare records | Security and Reliability — both patient privacy and patient safety depend on them |
| Consumer app competing for attention | Usability and Performance — a slow or confusing app loses users to a competitor immediately |

This is the same weighting logic from risk-based testing, applied to *which quality dimension* deserves the deepest attention, not just which feature does.

## How This Works on a Real Project

A healthcare company is planning a new patient self-scheduling feature — patients booking their own appointments online instead of calling in. During planning, the QA engineer runs the team through all six attributes deliberately, not just functionality:

- **Functionality**: Can a patient successfully book, reschedule, and cancel an appointment? (The obvious baseline — everyone already assumed this needed testing.)
- **Reliability**: What happens if the scheduling service is briefly unavailable when a patient tries to book? Does the patient see a clear error, or does the request silently fail? The team decides failed requests must show an explicit retry message — silent failure is unacceptable for something this time-sensitive.
- **Security**: Can a patient see or modify another patient's appointment by guessing or manipulating a URL? This becomes a specific, planned test — not an assumption that "the login system handles it."
- **Usability**: Can a patient with no technical background complete a booking without confusion? The team schedules a short usability check with a few non-technical testers, not just an internal walkthrough by people who already know the interface.
- **Performance**: How does the booking flow behave when 200 patients try to book appointments in the same five-minute window, right after a clinic sends an email blast? This becomes a specific load-testing scenario.
- **Maintainability**: Is the booking logic written so that adding a new appointment type next quarter doesn't require rewriting the whole flow?

Two things came out of this that functional testing alone would have missed entirely: the silent-failure risk in Reliability, and the same-patient-can-see-another-patient's-appointment risk in Security. Neither is a "the button doesn't work" bug — both are quality attribute gaps that only surfaced because someone deliberately asked the question.

## Common Mistakes

**Mistake 1: Testing only functionality and calling that "done."**
A feature can be 100% functionally correct and still fail in production because it's too slow, insecure, or confusing. Functional testing answers one question out of six.

**Mistake 2: Assuming quality attributes matter equally for every feature.**
Applying banking-level security rigor to a low-stakes internal tool wastes effort; applying an internal tool's casual security posture to a payments feature is a real risk. Weight attributes by context, not by habit.

**Mistake 3: Not assigning ownership for non-functional attributes.**
If nobody's job is to explicitly ask "how does this perform under load," it usually doesn't get asked until performance is already a production incident.

**Mistake 4: Treating non-functional testing as "if we have time."**
Performance and security testing are the first things cut under deadline pressure, precisely because skipping them doesn't produce an obviously broken demo — the cost shows up later, in production, when it's much more expensive to fix.

## Best Practices

**Practice 1: Walk through all six attributes during planning, not just functionality.**
A five-minute checklist during sprint planning — "what about performance, security, reliability, usability, and maintainability here?" — catches gaps a purely functional review never will.

**Practice 2: Weight attributes by product context.**
Ask which attributes matter most for *this* feature, in *this* product, before deciding how much testing depth each one deserves.

**Practice 3: Make non-functional testing plannable work, not an afterthought.**
Performance and security testing need their own time in the schedule, the same way functional testing does — not "we'll get to it if there's time left."

**Practice 4: Test usability with people who didn't build the feature.**
Anyone who built or reviewed a feature already knows how to use it. Real usability problems only surface when someone unfamiliar with the interface tries to accomplish a real task with it.

## Key Takeaways

- Functional correctness is one of six quality dimensions, not the whole picture — performance, security, usability, reliability, and maintainability each need deliberate attention.
- Which attributes matter most depends on the product's context: banking weighs security and reliability heavily; a consumer app weighs usability and performance heavily.
- Non-functional gaps (a silent failure, a data-isolation hole) often only surface when someone explicitly asks about that attribute — they rarely show up in a purely functional test pass.
- Non-functional testing needs its own planned time, or it becomes the first thing cut under deadline pressure.

---

## What You Just Learned

- What the six quality attributes are, and the question each one answers
- How to weigh which attributes matter most for a given product
- How a real team surfaced reliability and security gaps that functional testing alone would have missed
- Why non-functional testing needs to be planned, not assumed

**Next:** [Shift-Left & Shift-Right Testing](/learning-paths/foundations/shift-left-and-shift-right-testing)

## Related Topics

- [What Is Software Testing?](/learning-paths/foundations/what-is-software-testing) — Where the idea that testing serves the user, not just the spec, was first introduced
- [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals) — Weighing effort by impact, applied here to *which attribute* deserves depth
- [Performance Testing](#) — The dedicated learning path for testing the Performance attribute in depth
- [Security Testing](#) — The dedicated learning path for testing the Security attribute in depth

## Interview Questions

**Q1: A feature passes every functional test. What else would you want to know before calling it done?**

*What to look for*: A candidate who immediately reaches for performance, security, usability, reliability, or maintainability — not someone who treats "all tests pass" as equivalent to "ready to ship."

**Q2: How do you decide which quality attributes matter most for a given feature?**

*What to look for*: Context-driven reasoning (what's the product, who uses it, what's the cost of failure in each dimension) rather than a one-size-fits-all checklist applied identically to every feature.

**Q3: Tell me about a time a feature was functionally correct but still failed for a different reason.**

*What to look for*: A concrete example tied to a specific attribute (too slow, confusing, insecure, unreliable under load) — evidence the candidate has actually seen this happen, not just knows the theory.

---

## Glossary

**Quality Attribute**: A dimension a product needs to succeed on beyond functional correctness — performance, security, usability, reliability, or maintainability.

**Non-Functional Requirement**: A requirement describing *how well* a system should perform a function (e.g., "search results return in under 500ms") rather than *what* it should do.

**Reliability**: A system's ability to keep working correctly under real conditions and over time, including graceful handling of failures rather than silent breakage.

**Maintainability**: How safely and easily a system can be changed later without introducing new defects.
