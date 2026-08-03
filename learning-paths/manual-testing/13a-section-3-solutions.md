---
title: "Section 3 Solutions"
slug: section-3-solutions
sidebar_label: "Section 3 — Solutions"
description: "Answers and reasoning for Section 3's Knowledge Check — which artifact or practice fits each scenario, and why."
keywords: ["test case writing", "test case organization", "requirement traceability matrix", "test data design"]
difficulty: "beginner"
time_to_read: "7 min"
last_reviewed: "2026-08-04"
---

# Section 3 Solutions

These are the answers to [Test Data Design](/learning-paths/manual-testing/test-data-design)'s Section 3 Knowledge Check. If you haven't attempted the five scenarios yet, do that first — the value of a Knowledge Check comes from making your own decision before checking it against reasoning here.

## Scenario 1: Turning Test Ideas Into Something a Teammate Can Execute

**Correct answer**: Writing Clear Test Cases.

**Why it's correct**: This scenario is exactly the gap between a test idea (Section 2's output) and a test case someone else can execute — the module's whole purpose. Full test case fields (ID, title, preconditions, steps, data, expected result) are what make a test idea usable by someone besides the person who designed it.

**Why the alternatives are less appropriate**: Organization (Module 11) matters once there are many test cases to manage, not for the initial step of writing one clearly. RTM and Test Data Design both assume test cases already exist in some written form to map or supply data to.

**Real-world reasoning**: This is the most direct, single-technique scenario in the set — a clean example of Module 10's core purpose.

## Scenario 2: 2,000+ Test Cases, No Consistent Naming, New Hire Can't Find Coverage

**Correct answer**: Test Case Organization and Naming.

**Why it's correct**: This is close to this module's own opening scenario — a large, disorganized suite where individual test case quality isn't the problem; findability at scale is. Feature-based folder hierarchy and a consistent naming convention directly address this.

**Why the alternatives are less appropriate**: Writing Clear Test Cases addresses individual test case quality, not suite-wide findability — the 2,000 test cases might individually be well-written and still be unfindable, which is exactly this module's opening point. RTM and Test Data Design don't address organization at all.

**Real-world reasoning**: The detail "no consistent naming" is the direct signal pointing to this module specifically, distinguishing it from a scenario about individual test case quality.

## Scenario 3: Auditor Requires Proof of Regulatory Testing Across Three Releases

**Correct answer**: Requirement Traceability Matrix (RTM).

**Why it's correct**: This is almost identical to the RTM module's own banking audit example — an external party asking for checkable proof of coverage, not an internal confidence check. An RTM is specifically the artifact built to answer this exact kind of question quickly and reliably.

**Why the alternatives are less appropriate**: Well-written, well-organized test cases are necessary groundwork but don't themselves prove requirement coverage without an explicit mapping — that mapping is the RTM's specific job, not a byproduct of the other three practices.

**Real-world reasoning**: "Prove" is the key word — this scenario specifically needs a checkable claim, which is exactly what distinguishes an RTM from confidence built on other practices alone.

## Scenario 4: Currency-Conversion Test Only Ever Run With Clean, Round Amounts

**Correct answer**: Test Data Design — specifically, production-like data.

**Why it's correct**: This scenario is deliberately close to this module's own "From the Field" story — clean, round test amounts are exactly the kind of convenient-but-unrealistic data that misses rounding defects real, messier amounts would catch.

**Why the alternatives are less appropriate**: This isn't a test case writing, organization, or coverage-proving problem — the test case itself may be perfectly well-written and correctly mapped in an RTM, and still miss the defect, because the *data* behind it was never designed deliberately.

**Real-world reasoning**: This scenario is built to test whether a learner recognizes that a well-structured test case with poorly chosen data can still miss real defects — the two are genuinely separate concerns.

## Scenario 5: Requirement Changes Mid-Project — Which Test Cases Are Now Outdated?

**Correct answer**: Requirement Traceability Matrix (RTM) — specifically, its change impact analysis use.

**Why it's correct**: This is directly the RTM module's password-reset expiration scenario — a requirement change needs to immediately surface which mapped test cases require review, which is only possible if a requirement-to-test-case mapping already exists.

**Why the alternatives are less appropriate**: Without an RTM's explicit mapping, a tester would have to manually search the entire suite (unreliable, slow) or rely on memory (risky) to figure out what's affected — organization (Module 11) helps locate test cases once you know what to search for, but doesn't itself identify *which* ones are impacted by a specific requirement change.

**Real-world reasoning**: This scenario and Scenario 3 both point to the RTM, but for its two distinct uses — proving coverage exists (Scenario 3) versus tracking the impact of change (Scenario 5) — worth noticing both are real, separate reasons to maintain one.

---

## What This Confirms

Scenarios 3 and 5 both pointed to the RTM but for different reasons — if you answered one correctly and not the other, that's a useful signal to revisit the RTM module's distinction between its coverage-proving and change-impact uses specifically, not a sign the whole module needs a reread.

**Continue to Section 4**: [Exploratory Testing Fundamentals](/learning-paths/manual-testing/exploratory-testing-fundamentals), where structured, scripted testing gets deliberately contrasted against simultaneous, discovery-driven testing.
