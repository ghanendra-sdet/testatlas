---
title: "Common QA Terminology"
description: "A consolidated glossary of every term introduced across the Foundations path — organized by category, meant to be bookmarked and searched, not read start to finish."
keywords: ["QA glossary", "testing terminology", "QA vocabulary", "software testing terms"]
difficulty: "beginner"
time_to_read: "6 min"
last_reviewed: "2026-08-03"
---

# Common QA Terminology

**Prerequisites**: This module consolidates terms from every prior module in this path — it's most useful after completing Modules 1–14, though it also works as a standalone reference.
**Leads to**: After this, you'll be ready for [QA Career Roadmap](/learning-paths/foundations/qa-career-roadmap).

**A note on structure**: every other module in this path follows the Why-What-When-How framework, because it's teaching a new concept. This one is different, deliberately — by this point in the path, a learner has already encountered nearly every term below in real context. Re-explaining them from scratch would just repeat the earlier modules. Instead, this page exists to be *found* — bookmarked, searched, and referenced back to whenever a term needs a quick reminder, with a link back to the module where it was actually taught in depth.

## How to Use This Page

Each term below has a one-sentence definition and a link to the module where it's covered in full, with real examples and context. If a definition here feels thin, that's intentional — the linked module is where the actual teaching happens.

## Core Testing Concepts

**Testing**: The process of evaluating software to find defects and assess whether it meets requirements and user needs. See [What Is Software Testing?](/learning-paths/foundations/what-is-software-testing).

**Checking**: Confirming known, predefined expected outcomes — distinct from testing, which also involves judgment and exploration. See [What Is Software Testing?](/learning-paths/foundations/what-is-software-testing).

**Exhaustive Testing**: Testing every possible input, state, and path — theoretically ideal, practically impossible for nearly all real software. See [Software Testing Principles](/learning-paths/foundations/software-testing-principles).

**Defect Clustering**: The tendency for a disproportionate share of defects to concentrate in a small number of modules. See [Software Testing Principles](/learning-paths/foundations/software-testing-principles).

**Pesticide Paradox**: The phenomenon where repeatedly running the same tests eventually stops finding new defects, because those specific tests have exhausted what they can catch. See [Software Testing Principles](/learning-paths/foundations/software-testing-principles).

**Absence-of-Errors Fallacy**: The mistaken belief that a product with few known defects is necessarily ready to ship, even if it solves the wrong problem. See [Software Testing Principles](/learning-paths/foundations/software-testing-principles).

## Process and Lifecycle

**SDLC (Software Development Lifecycle)**: The overall sequence a product moves through, from requirements to maintenance. See [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc).

**STLC (Software Testing Life Cycle)**: Testing's own repeatable sub-cycle — requirement analysis through closure — that runs inside the SDLC. See [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc).

**V-Model**: An SDLC model pairing each development phase with a corresponding test-planning phase, executed in parallel. See [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc).

**Water-Scrum-Fall**: A failure pattern where a team adopts Agile sprints but still concentrates testing at the end of each sprint, recreating Waterfall's late-feedback problem at smaller scale. See [Testing Across the SDLC](/learning-paths/foundations/testing-across-the-sdlc).

**Sprint**: A fixed-length iteration, commonly one or two weeks, during which a Scrum team builds a shippable increment. See [Agile & Scrum Basics for QA](/learning-paths/foundations/agile-and-scrum-basics-for-qa).

**Backlog Refinement**: An ongoing activity clarifying and estimating upcoming stories before they enter a sprint — QA's earliest opportunity to catch ambiguity. See [Agile & Scrum Basics for QA](/learning-paths/foundations/agile-and-scrum-basics-for-qa).

**Definition of Done (DoD)**: A team's shared, explicit, consistently applied checklist for when any story is considered complete. See [Agile & Scrum Basics for QA](/learning-paths/foundations/agile-and-scrum-basics-for-qa).

## Verification, Validation, and Testing Technique

**Verification**: Confirming that each development stage is internally consistent with the stage before it — done through review, not execution. See [Verification vs. Validation](/learning-paths/foundations/verification-vs-validation).

**Validation**: Confirming that a finished, running product satisfies the real user's need, by executing the software. See [Verification vs. Validation](/learning-paths/foundations/verification-vs-validation).

**Static Testing**: Examining an artifact — requirements, design, or code — without executing it. See [Static vs. Dynamic Testing](/learning-paths/foundations/static-vs-dynamic-testing).

**Dynamic Testing**: Examining a system's actual behavior by executing it with real or simulated inputs. See [Static vs. Dynamic Testing](/learning-paths/foundations/static-vs-dynamic-testing).

**Shift-Left Testing**: Moving testing and quality activities earlier in the timeline, toward requirements and design. See [Shift-Left & Shift-Right Testing](/learning-paths/foundations/shift-left-and-shift-right-testing).

**Shift-Right Testing**: Extending testing and quality practices past release, into production monitoring and real-traffic validation. See [Shift-Left & Shift-Right Testing](/learning-paths/foundations/shift-left-and-shift-right-testing).

**Canary Release**: A deployment strategy exposing a change to a small percentage of real users first, limiting exposure to any issue that only appears under real traffic. See [Shift-Left & Shift-Right Testing](/learning-paths/foundations/shift-left-and-shift-right-testing).

## Risk and Quality

**Risk-Based Testing**: Prioritizing test effort using probability of failure and impact if it fails, rather than testing everything equally. See [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals).

**Smoke Test**: A shallow test confirming a feature's basic functionality works at all, used to quickly rule out major breakage. See [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals).

**Regression Test**: A test re-run to confirm previously working functionality still works after a change elsewhere in the system. See [Risk-Based Testing Fundamentals](/learning-paths/foundations/risk-based-testing-fundamentals).

**Quality Attribute**: A dimension a product needs to succeed on beyond functional correctness — performance, security, usability, reliability, maintainability. See [Quality Attributes](/learning-paths/foundations/quality-attributes).

**Non-Functional Requirement**: A requirement describing *how well* a system should perform a function, rather than *what* it should do. See [Quality Attributes](/learning-paths/foundations/quality-attributes).

## Defect Management

**Defect Life Cycle**: The sequence of states a logged defect moves through, from discovery to verified closure. See [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle).

**Triage**: The activity of reviewing newly logged defects to assign severity, priority, and ownership. See [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle).

**Reopened**: A defect returned to an active state after verification found the original issue still occurs, or that the fix introduced a new one. See [Defect Life Cycle](/learning-paths/foundations/defect-life-cycle).

**Severity**: A measure of a defect's technical impact on the system, assessed independent of business context. See [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority).

**Priority**: A measure of how urgently a defect needs fixing relative to other work, factoring in business impact and timing. See [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority).

**Workaround**: A way for users to avoid a defect's impact without it being fixed, often a factor that lowers priority even for a severe issue. See [Severity vs. Priority](/learning-paths/foundations/severity-vs-priority).

## Planning and Measurement

**Test Strategy**: A stable, high-level document describing how a team approaches testing in general. See [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan).

**Test Plan**: A specific, release-scoped document describing how testing will be executed for a particular piece of work. See [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan).

**Entry Criteria**: The conditions that must be true before a specific round of testing can begin. See [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan).

**Exit Criteria**: The objective conditions that must be true before testing can be considered complete. See [Test Strategy vs. Test Plan](/learning-paths/foundations/test-strategy-vs-test-plan).

**Defect Density**: The number of defects found per unit of code or feature, used as a relative risk indicator. See [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement).

**Defect Escape Rate**: The percentage of defects found in production rather than caught before release. See [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement).

**Mean Time to Resolution (MTTR)**: The average time between a defect being reported and resolved, most useful broken down by severity. See [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement).

**Goodhart's Law**: The observation that when a measure becomes a target, it tends to stop being a reliable measure. See [QA Metrics & Measurement](/learning-paths/foundations/qa-metrics-and-measurement).

## Roles

**SDET (Software Development Engineer in Test)**: A QA role emphasizing writing code — test automation, tooling, infrastructure — as much as, or more than, manual execution. See [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery).

**Embedded QA**: A QA engineer assigned permanently to one product team, involved from planning through release rather than shared across many teams. See [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery).

**Gatekeeping (testing anti-pattern)**: When QA is positioned as a checkpoint developers must get past, rather than a collaborator involved throughout delivery. See [The Role of QA in Product Delivery](/learning-paths/foundations/role-of-qa-in-product-delivery).

## Common Mistakes

**Mistake 1: Using two different terms for the same concept within one team.**
Alternating between "bug," "defect," and "issue" without a shared convention creates confusion in reports and conversations — pick one term per concept and use it consistently, as `STYLE_GUIDE.md` specifies for this site's own content.

**Mistake 2: Assuming a term means the same thing in every company.**
Some organizations use "priority" where this path uses "severity," or vice versa — the concepts in this glossary are the standard distinctions, but always confirm a specific team's actual usage rather than assuming.

**Mistake 3: Using precise terminology to sound experienced rather than to communicate clearly.**
Jargon should clarify, not perform expertise — a report a teammate has to decode is worse than a plain-language one, regardless of how correct the vocabulary is.

## Best Practices

**Practice 1: Bookmark this page rather than trying to memorize it.**
The point of a reference page is to be looked up when needed, not recited from memory.

**Practice 2: When a term feels unclear, follow its link back to the source module.**
The one-sentence definitions here are intentionally thin — full context, examples, and nuance live in the linked module.

**Practice 3: Agree on terminology explicitly with a new team, don't assume it matches this glossary exactly.**
Confirming shared vocabulary early (does "priority" mean what this path says it means, here?) avoids miscommunication later.

---

## What You Just Learned

- A consolidated, categorized reference to every term introduced across Modules 1–14
- Where to go for the full explanation behind any term that still feels unclear
- Why consistent terminology — not necessarily "correct" terminology — is what actually matters for team communication

**Next:** [QA Career Roadmap](/learning-paths/foundations/qa-career-roadmap)

## Related Topics

- [What Is Software Testing?](/learning-paths/foundations/what-is-software-testing) — Where this path, and this vocabulary, begins
- [Testing Myths & Misconceptions](/learning-paths/foundations/testing-myths-and-misconceptions) — The capstone module that revisits many of these same terms through common misunderstandings

## Interview Questions

**Q1: How would you handle joining a team that uses "priority" where you're used to "severity," or vice versa?**

*What to look for*: A candidate who prioritizes confirming actual team usage over insisting on "correct" terminology — communication over pedantry.

**Q2: Why might consistent terminology matter more than technically precise terminology?**

*What to look for*: Recognition that miscommunication from inconsistent terms (two people using "bug" and "defect" to mean different things) causes more real problems than a technically imprecise but consistently used term.

---

## Glossary

This entire page is the glossary — see the categorized sections above.
