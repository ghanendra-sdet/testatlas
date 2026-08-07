---
title: "Working with DevOps and Stakeholder Management"
sidebar_label: "26 Working with DevOps and Stakeholder Management"
description: "Coordinating quality ownership with DevOps on shared infrastructure and pipeline risk, and managing stakeholders more broadly — identifying who actually needs what, and when."
keywords: ["QA and DevOps collaboration", "stakeholder management QA", "shared infrastructure risk", "pipeline ownership QA"]
difficulty: "intermediate"
time_to_read: "8 min"
last_reviewed: "2026-08-08"
---

# Working with DevOps and Stakeholder Management

**Prerequisites**: [Working with Product and Developers](/learning-paths/career-leadership/working-with-product-and-developers)
**Leads to**: After this, you'll be ready for [Executive Communication](/learning-paths/career-leadership/executive-communication).

## Why This Matters

**A QA Lead who treats CI/CD pipeline ownership as someone else's problem.** A QA Lead notices testing stages in the CI/CD pipeline frequently fail for infrastructure reasons unrelated to real defects — flaky environment provisioning, unreliable test-data setup — but treats this as a DevOps problem to wait on, since the pipeline itself isn't formally QA's responsibility. Months pass with no resolution, developers grow increasingly frustrated with an unreliable pipeline, and testing's credibility suffers by association even though the underlying cause isn't testing logic at all.

**A QA Lead who treats pipeline reliability as shared, cross-functional territory.** A peer facing the same problem instead proactively partners with DevOps, bringing testing-specific expertise (which failures are environment-related versus genuine) to a joint diagnosis effort, rather than waiting for DevOps to solve it alone or treating it as entirely outside QA's concern. The pipeline's reliability improves faster because two groups with complementary expertise — testing logic and infrastructure — are working the problem together rather than each assuming it's the other's job.

Both leads faced the same technical problem. Only one recognized that shared infrastructure, exactly the kind of cross-cutting concern from [Organization-Wide Quality Strategy](/learning-paths/career-leadership/organization-wide-quality-strategy), needs genuine cross-functional ownership rather than being assigned entirely to one side.

## Working with DevOps

The CI/CD pipeline is genuinely shared territory between QA and DevOps: DevOps typically owns the infrastructure and tooling, while QA typically owns the testing logic and quality gates running within it. Effective collaboration recognizes this overlap explicitly rather than assuming a clean division:

- **Distinguish infrastructure problems from testing-logic problems explicitly**, since a pipeline failure could be either, and misattributing one to the other wastes both groups' time.
- **Involve QA in decisions about pipeline gates and thresholds**, since those decisions directly reflect risk tolerance — a QA perspective on what should block a merge is directly relevant, not purely a DevOps or engineering-process decision.
- **Involve DevOps in decisions about test environment and data strategy**, since the reliability of test infrastructure directly affects whether QA's own testing produces trustworthy results.

## Stakeholder Management More Broadly

Beyond DevOps specifically, effective stakeholder management starts with identifying who actually has a genuine interest in quality outcomes and what they specifically need:

- **Map stakeholders to their actual interest, not a generic list.** A support team cares about defect volume reaching customers; a sales team cares about release timing and reliability commitments made to prospects; legal or compliance cares about specific regulatory testing evidence — each needs different information, not a single generic quality update.
- **Match communication frequency and detail to genuine need, not a uniform default.** A stakeholder who only needs a quarterly high-level trend shouldn't receive the same detailed weekly updates as one actively making a release decision.
- **Proactively surface information stakeholders need before they have to ask.** Waiting for a stakeholder to request information, rather than anticipating what they'll need, creates the impression of a black box rather than genuine partnership.

## Common Mistakes

**Mistake 1: Treating CI/CD pipeline problems as entirely someone else's responsibility.**
This module's opening scenario — shared infrastructure genuinely needs cross-functional ownership, and waiting for the other side to solve it alone delays resolution and damages both groups' credibility.

**Mistake 2: Applying the same generic stakeholder communication to everyone, regardless of their actual interest.**
Different stakeholders need genuinely different information — a uniform update either overwhelms some with irrelevant detail or underserves others who need more.

**Mistake 3: Waiting for stakeholders to ask for information rather than proactively anticipating their needs.**
Reactive-only communication creates the impression that quality information is being withheld or is hard to access, even when that's not the intent.

**Mistake 4: Excluding QA from pipeline gate and threshold decisions, treating them as purely a DevOps or engineering-process concern.**
These decisions directly encode risk tolerance — a QA perspective on what should block a release is directly relevant expertise, not an intrusion into DevOps's domain.

## Best Practices

**Practice 1: Proactively partner with DevOps on pipeline reliability, treating it as genuinely shared territory.**
Bring testing-specific diagnostic expertise to pipeline problems rather than waiting for DevOps to solve infrastructure issues alone, especially when the root cause is ambiguous between infrastructure and test logic.

**Practice 2: Explicitly map each stakeholder group to their specific, genuine interest in quality outcomes.**
A brief, deliberate exercise identifying who actually needs what informs far more effective communication than a single generic update sent to everyone.

**Practice 3: Match update frequency and detail level to each stakeholder's actual role in decisions.**
Someone actively deciding on a release needs more, and more current, information than someone who benefits from an occasional high-level trend.

**Practice 4: Build a habit of proactively sharing relevant information before stakeholders have to ask.**
This single habit does more to build genuine stakeholder trust than reactive responsiveness alone, since it signals genuine partnership rather than a service relationship.

:::note From the Field
At AtlasBank, the Mobile App team's CI/CD pipeline had a persistent, unresolved reputation for unreliability — tests failed intermittently, and both the QA and DevOps teams had informally assumed the other was primarily responsible for fixing it, resulting in months of accumulated frustration with no real progress. A newly appointed Quality Engineering Lead proposed a joint diagnostic effort: QA engineers reviewed failure patterns to distinguish genuine test-logic issues from environment-related ones, while DevOps engineers investigated the environment-related failures QA identified. Within a single sprint, this collaboration identified that roughly 70% of "flaky" failures traced to a shared test-database provisioning race condition — a fix genuinely requiring both groups' expertise (QA to identify the pattern, DevOps to fix the underlying infrastructure) that neither side would likely have found as quickly working in isolation.
:::

## Mini Challenge

**Scenario**: Your organization's CI/CD pipeline has a reputation for unreliable test failures, and QA and DevOps have each been informally assuming the other is responsible for fixing it.

**Your task**: Describe the specific joint approach you'd propose to diagnose the problem, naming what expertise each team would contribute.

## Key Takeaways

- CI/CD pipeline reliability is genuinely shared territory between QA and DevOps, needing explicit cross-functional ownership rather than assumed division.
- Stakeholder management starts with mapping each group to their actual, specific interest, not a generic, uniform update.
- Communication frequency and detail should match genuine need, not a one-size-fits-all default.
- Proactively surfacing information before stakeholders ask builds more trust than purely reactive responsiveness.

## What You Just Learned

- Why CI/CD pipeline reliability needs genuine cross-functional ownership between QA and DevOps
- A practical approach to stakeholder mapping based on each group's actual interest
- Why proactive, differentiated communication beats a uniform, reactive default
- The AtlasBank Mobile App example of a joint QA-DevOps diagnostic effort resolving a long-standing pipeline reliability issue

## Related Topics

- [Working with Product and Developers](/learning-paths/career-leadership/working-with-product-and-developers) — The same interest-based relationship-building principle, applied here to DevOps and broader stakeholders
- [Organization-Wide Quality Strategy](/learning-paths/career-leadership/organization-wide-quality-strategy) — The cross-cutting risk ownership principle this module applies specifically to shared pipeline infrastructure
- [CI/CD Integration](/learning-paths/automation/cicd-integration) — The technical pipeline mechanics this module's collaboration model applies to

## Interview Questions

**Q1: How do you handle a situation where a CI/CD pipeline problem sits at the boundary between QA and DevOps responsibility?**

*What to look for*: A description of proactive, joint diagnosis rather than waiting for the other team to claim ownership — a candidate who describes escalation or waiting as the default likely hasn't led genuine cross-functional collaboration on shared infrastructure.

**Q2: How do you manage communication with stakeholders who have very different needs — executives, developers, support teams?**

*What to look for*: A description of mapping each stakeholder to their actual interest and adjusting content and frequency accordingly, not a single communication approach applied uniformly.

:::note Common Interview Mistake
Some candidates describe stakeholder management purely as "keeping everyone informed," without distinguishing what different stakeholders actually need. A strong answer names specific stakeholder groups and how their information needs genuinely differ.
:::

**Q3: Tell me about a time you proactively surfaced a quality risk to a stakeholder before they asked about it.**

*What to look for*: A real, specific example showing genuine proactive communication, not just prompt responsiveness to a request — strong answers show the candidate anticipated a genuine information need.

---

## Glossary

**Shared Infrastructure Ownership**: A cross-functional model where CI/CD pipeline reliability is treated as joint QA and DevOps responsibility, rather than assigned entirely to one side.

**Stakeholder Mapping**: Explicitly identifying each stakeholder group's specific, genuine interest in quality outcomes, used to tailor communication content and frequency.

## Quick Revision

Remember these five points:

✓ CI/CD pipeline reliability is genuinely shared territory between QA and DevOps, needing explicit joint ownership.

✓ Stakeholder management starts with mapping each group to their actual, specific interest, not a generic update.

✓ Communication frequency and detail should match genuine need, not a uniform default applied to everyone.

✓ Proactively surfacing information before stakeholders ask builds more trust than reactive responsiveness alone.

✓ QA input on pipeline gates and thresholds is directly relevant expertise, not an intrusion into DevOps's domain.
