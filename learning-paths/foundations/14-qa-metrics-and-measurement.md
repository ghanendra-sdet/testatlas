---
title: "QA Metrics & Measurement"
description: "How QA work actually gets evaluated — the metrics that prove testing effectiveness, and the vanity numbers that only look like progress."
keywords: ["QA metrics", "defect density", "test coverage", "MTTR", "escape rate"]
difficulty: "beginner"
time_to_read: "8 min"
last_reviewed: "2026-08-03"
---

# QA Metrics & Measurement

**Prerequisites**: You should already understand [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle), [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority), and [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan).
**Leads to**: After this, you'll be ready for Common QA Terminology (coming soon) and QA Career Roadmap (coming soon).

A test plan defines exit criteria; metrics are how a team knows whether it's actually meeting them, this release and over time. But not every number that looks like progress actually measures it — some popular QA metrics reward exactly the wrong behavior if a team optimizes for the number instead of what it's supposed to represent.

## Why This Matters

**A team optimizing the wrong number.** A team decides to track "number of test cases written" as its main quality metric, and celebrates when the count climbs every sprint. Testers respond to the incentive exactly as designed: they write more test cases — many of them trivial, overlapping, or checking things already covered elsewhere. The count goes up every sprint. Defects reaching production do not go down. The metric technically improved every cycle while the thing it was supposed to indicate — actual quality — never moved.

**A team measuring what actually matters.** A different team tracks defect escape rate — how many defects are found in production versus caught before release — alongside test coverage on high-risk areas specifically, not everywhere equally. When escape rate creeps up one quarter, it's a real, actionable signal: something in the process let more than the usual number of defects through. The team investigates, finds a gap in a specific area's test coverage, and closes it. The metric moved because the underlying thing it measures actually changed, in a direction the team could act on directly.

Both teams tracked "a QA metric." Only one of them tracked something connected to an outcome anyone actually cares about.

## What QA Metrics Are

QA metrics are measurements used to evaluate testing effectiveness and product quality — not to keep testers busy, but to answer real questions: is quality improving, where are the risks, is the team's testing effort actually working.

| Metric | What It Measures | What It Doesn't Prove |
|---|---|---|
| **Defect Density** | Number of defects per unit of code (e.g., per 1,000 lines, or per feature) | High density isn't automatically bad — it can mean thorough testing found more, not that the code is worse |
| **Defect Escape Rate** | Percentage of defects found in production versus caught before release | A single low-traffic release can look artificially good — needs to be tracked over time, not one release |
| **Test Coverage** | Percentage of code or requirements exercised by tests | Coverage measures what ran, not whether the right things were actually checked — 100% coverage with weak assertions still misses real defects |
| **Mean Time to Resolution (MTTR)** | Average time from a defect being reported to being resolved | A short MTTR on trivial defects while critical ones linger tells a misleading average — needs to be broken down by severity |
| **Test Case Pass Rate** | Percentage of executed test cases that passed | A high pass rate on a stale or shallow test suite proves the suite isn't finding anything — not that the product is solid (this is the pesticide paradox, applied to a number) |
| **Requirements Coverage** | Percentage of documented requirements with at least one associated test | Doesn't confirm the test actually validates the requirement correctly, only that one exists |

Every metric in this table has a version of the same trap: it measures an activity that's *correlated* with quality, not quality itself. A metric moving in the "right" direction is a signal worth investigating, never proof on its own — this is the same discipline from [Software Testing Principles](/learning-paths/foundations/software-testing-principles): testing (and its metrics) show evidence, not guarantees.

## When Metrics Are Useful, and When They Mislead

**Metrics are useful when:**
- Tracked over time, showing trends rather than judged as single snapshots — one release's numbers rarely mean much alone
- Broken down by severity or risk area, rather than reported as one flat average that hides where the real problems are
- Used to trigger investigation, not as an automatic pass/fail gate applied without judgment
- Chosen because they connect to a real outcome (fewer production incidents, faster resolution of serious issues) rather than because they're easy to count

**Metrics mislead when:**
- A single metric becomes a target people optimize directly, rather than a signal they respond to (Goodhart's Law: when a measure becomes a target, it stops being a good measure) — the "number of test cases written" example above is exactly this failure
- They're reported without context — "95% test coverage" sounds strong until it's clear that coverage is concentrated in simple, low-risk code and absent from the riskiest 5%
- They're compared across teams or projects with very different risk profiles, as if the same number means the same thing everywhere
- A metric that's actually a *proxy* (test case count, lines of test code) gets treated as if it were the *outcome* itself (actual defects prevented)

## How This Works on a Real Project

A subscription-billing team wants to understand whether its testing process is actually working, not just whether it feels busy.

They start by rejecting "number of test cases" as a headline metric, having seen a version of the trivial-test-inflation problem at a previous job. Instead, they track three things together, deliberately chosen to connect to real outcomes: **defect escape rate**, **MTTR broken down by severity**, and **test coverage specifically on billing-calculation code** — the highest-risk area identified back in [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals), rather than an undifferentiated coverage number across the whole codebase.

Over two quarters, escape rate trends downward — a real signal, since it's tracked consistently release over release, not judged from one data point. MTTR for Critical severity defects sits consistently under 24 hours, while MTTR for Low severity defects averages several days — and the team is fine with that gap, because it reflects correct prioritization (matching [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority)'s reasoning), not a process failure. A single blended MTTR average would have hidden this entirely, making it look like defects take a mediocre-but-consistent time to fix, when actually the team is correctly fast on what matters most.

Billing-calculation coverage sits at 60% — lower than the codebase's overall 85% coverage. Rather than treating the higher overall number as reassuring, the team recognizes the real risk sits specifically where coverage is thinner, and prioritizes closing that gap over chasing the already-comfortable overall percentage upward. Six weeks later, coverage on billing-calculation code reaches 90%, and two real edge-case defects are caught by the newly added tests before ever reaching production — the metric moved because real work happened, and that work paid off in an outcome the team can point to directly.

## Common Mistakes

**Mistake 1: Choosing metrics because they're easy to count, not because they connect to a real outcome.**
Test case count and lines of test code are trivially countable and easy to game; they rarely correlate cleanly with actual defect prevention.

**Mistake 2: Reporting a single blended average that hides the real story.**
An overall MTTR or overall coverage number can look fine while masking a specific, serious gap — the billing-calculation example above is exactly this pattern.

**Mistake 3: Treating a metric as a hard pass/fail gate without investigating context.**
A coverage threshold enforced blindly can block a legitimate release over trivial, low-risk uncovered code, while a genuinely risky gap elsewhere goes unnoticed because the aggregate number cleared the bar.

**Mistake 4: Comparing metrics across teams or projects with very different risk profiles.**
A payments team's defect density isn't meaningfully comparable to an internal tool's — different context, different acceptable baseline, same underlying reasoning as [Quality Attributes](/learning-paths/foundations/quality-attributes)' point that context changes what "good" even means.

## Best Practices

**Practice 1: Track trends over time, not single-release snapshots.**
One data point rarely means much on its own; a consistent trend across several releases is what actually reveals whether something changed.

**Practice 2: Break metrics down by severity or risk area before reporting them.**
A blended average is often the single most common way a real problem hides inside a metric that otherwise "looks fine."

**Practice 3: Choose metrics that connect to an outcome the team actually cares about.**
Defect escape rate and severity-weighted MTTR connect to real production impact; test case count connects to nothing but effort spent.

**Practice 4: Use metrics to trigger a conversation, not as an automatic verdict.**
A metric moving in the wrong direction should prompt "let's find out why," not an automatic block — the number is a starting point for investigation, not the final word.

## Key Takeaways

- QA metrics measure activities correlated with quality, not quality itself directly — they're evidence to investigate, not proof on their own.
- Metrics chosen because they're easy to count (test case number, lines of test code) are the easiest to game and the least connected to real outcomes.
- Blended averages routinely hide the real story — breaking metrics down by severity or risk area is what surfaces it.
- Goodhart's Law applies directly to QA: a metric turned into a hard target stops reliably measuring what it was meant to.
- The right metrics are chosen for their connection to a real outcome, not their ease of measurement.

---

## What You Just Learned

- Six common QA metrics, what each actually measures, and what each one doesn't prove
- When metrics are genuinely useful (trends, broken down by risk) versus when they mislead (single snapshots, blended averages, gamed targets)
- How a billing team chose outcome-connected metrics deliberately and used a severity breakdown to correctly interpret an MTTR number that would have looked mediocre as a blended average
- Why "number of test cases written" is a trap metric, and what a better alternative looks like

**Next:** [Common QA Terminology](/learning-paths/foundations/common-qa-terminology)

## Related Topics

- [Software Testing Principles](/learning-paths/foundations/software-testing-principles) — Testing shows evidence, not guarantees — the same discipline applied here to metrics
- [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority) — Why breaking metrics down by severity reveals what a blended average hides
- [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan) — Where objective exit criteria, often metric-based, get defined
- [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals) — Why coverage on high-risk areas matters more than an undifferentiated overall percentage

## Interview Questions

**Q1: What's wrong with using "number of test cases written" as a quality metric?**

*What to look for*: Recognition that it's trivially gameable and doesn't connect to actual defect prevention — bonus if the candidate references Goodhart's Law or a similar concept by reasoning, even without naming it.

**Q2: A team's test coverage is 95%, but production defects keep increasing. What would you investigate?**

*What to look for*: A candidate who questions where that coverage actually sits (is it concentrated in low-risk code?) and what the coverage tool actually measures (execution, not assertion quality) — not someone who takes the 95% number at face value.

**Q3: How would you report MTTR in a way that's actually useful to the team?**

*What to look for*: Recognition that a single blended MTTR average can hide a real problem, and that breaking it down by severity gives a much more actionable picture.

---

## Glossary

**Defect Density**: The number of defects found per unit of code or feature, used as a relative indicator of where quality risk concentrates.

**Defect Escape Rate**: The percentage of defects found in production rather than caught before release — a core indicator of how well a team's pre-release testing is working.

**Mean Time to Resolution (MTTR)**: The average time between a defect being reported and being resolved, most useful when broken down by severity rather than reported as a single blended average.

**Goodhart's Law**: The observation that when a measure becomes a target, it tends to stop being a reliable measure — people optimize the number rather than the underlying thing it was meant to represent.
