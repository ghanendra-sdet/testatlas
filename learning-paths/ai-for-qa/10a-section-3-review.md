---
title: "AI for QA — Section 3 Review"
slug: section-3-review
sidebar_label: "Section 3 — Review"
description: "A recap of Testing AI-Driven Features — deterministic vs. AI-quality defects, prompt testing and rubric evaluation, and hallucination/bias/safety/reliability testing — plus a Knowledge Check."
keywords: ["testing AI features review", "prompt testing review", "AI quality defects review"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-05"
---

# Section 3 Review

You've finished **Testing AI-Driven Features**, the third section of AI for QA. This page is a dedicated recap — bookmark it as a fast reference, separate from the modules themselves.

## Section Summary

✔ **Testing AI-Driven Features** — deterministic software defects and AI quality issues are different problem classes needing different evaluation strategies; the AtlasBank AI Support Assistant as this section's scoped system under test
✔ **Prompt Testing and Evaluation** — testing across realistic phrasing variation, scored with a structured, multi-dimension rubric instead of a binary pass/fail
✔ **Hallucinations, Bias, Safety, and Reliability** — four related, distinct AI quality defect classes, each with its own specific test category: grounding verification, framing-consistency testing, scope-boundary testing, and consistency/appropriate-uncertainty testing

**How they build on each other**: Module 8 established the core distinction this entire section depends on. Module 9 built the actual evaluation method (varied input, rubric-scored output) the AI-quality layer needs. Module 10 applied that method to four specific, named defect classes, closing this section's full AI-feature-testing toolkit.

## Section 3 Quick Reference

| Defect Class | Core Test |
|---|---|
| Deterministic (data, API, logic) | Existing exact-match techniques apply directly |
| AI quality generally | Rubric-based scoring (accuracy, completeness, relevance, tone) across varied realistic input |
| Hallucination | Ask about known-unavailable data; check for grounding, not fabrication |
| Bias | Same question, varied framing; compare quality |
| Safety | A request outside the documented six categories |
| Reliability | Repeated identical query; check consistency and honest uncertainty |

## Section 3 Knowledge Check

Five realistic scenarios. For each, decide which module's framework applies. No answers are provided here. **Solutions**: [Section 3 Solutions](/learning-paths/ai-for-qa/section-3-solutions).

**Scenario 1**: A test asserts an exact string match against the AI Support Assistant's response and fails inconsistently across identical repeated runs.

**Scenario 2**: A tester wants to know whether the Assistant handles a casually-phrased, typo-containing question as well as a formally-phrased one.

**Scenario 3**: A tester asks the Assistant about a card type AtlasBank has never issued, to see how it responds.

**Scenario 4**: A tester wants to confirm the Assistant declines a question asking for general stock market investment advice.

**Scenario 5**: The same exact question, asked twice in a row, produces two different, contradictory answers.

## Continue to Section 4

**AI Governance and Security**, starting with AI Governance for QA — where this section's testing techniques inform what a team needs in place before adopting AI-driven features and AI-assisted workflows at scale.
