---
title: "Manual Testing Interview Questions"
sidebar_label: "01 Manual Testing"
description: "Comprehensive bank of 100 manual testing, test design, metrics, defect lifecycle, and Agile testing interview questions with detailed answers."
keywords: ["manual testing interview questions", "software testing QA interview", "defect lifecycle", "black-box testing techniques", "test plan vs test strategy"]
difficulty: "beginner"
time_to_read: "25 min"
last_reviewed: "2026-08-12"
---

# Manual Testing Interview Questions

Welcome to the Manual Testing Interview Q&A bank. This module provides 100 comprehensive questions and answers designed to test your core testing knowledge, scenario reasoning, and defect management expertise.

Use the interactive toggles below to expand and study the answer to each question.

---

## Category 1 – Basics of Software Testing

```mermaid
%% VIS-001 — Software Testing Lifecycle (STLC) Phases
flowchart LR
    accTitle: Software Testing Lifecycle
    accDescr: Sequential flow of the six phases of the software testing lifecycle.
    A[Req Analysis] --> B[Test Planning]
    B --> C[Test Case Dev]
    C --> D[Env Setup]
    D --> E[Execution]
    E --> F[Cycle Closure]
```

<details>
<summary><b>Q1: What is Software Testing?</b></summary>

Software Testing is the process of evaluating and verifying that a software application or system meets the specified requirements and works as intended.
It involves executing the software to identify defects, ensuring it is free from critical bugs, and confirming that it delivers the expected business value.

The main goals are:
- **Verification**: Does the software meet the design specifications?
- **Validation**: Does the software meet the customer’s actual needs?

Testing is not only about finding defects; it is also about preventing defects and improving overall product quality.
</details>

<details>
<summary><b>Q2: Difference between Verification and Validation.</b></summary>

- **Verification** ensures the product is built according to the requirements and design specifications. It answers, "Are we building the product right?" Example: Reviewing documents, inspecting code, and walkthroughs.
- **Validation** ensures the product meets the actual needs and expectations of the user. It answers, "Are we building the right product?" Example: Executing the application with real-world scenarios.

Verification is a static process (no code execution), while Validation is a dynamic process (involves running the code).
</details>

<details>
<summary><b>Q3: What is the Software Development Life Cycle (SDLC)?</b></summary>

The SDLC is the process of planning, creating, testing, deploying, and maintaining software. It defines the stages a software project goes through from conception to retirement.

Phases include:
1. Requirement Gathering
2. Design
3. Development
4. Testing
5. Deployment
6. Maintenance

For example, in an e-commerce project, SDLC starts from collecting requirements (shopping cart, payment gateway) to designing the UI, developing the code, testing, deploying, and fixing post-release issues.
</details>

<details>
<summary><b>Q4: What is the Software Testing Life Cycle (STLC)?</b></summary>

STLC is the sequence of specific activities conducted during the testing process to ensure software quality.

Phases include:
1. Requirement Analysis
2. Test Planning
3. Test Case Development
4. Test Environment Setup
5. Test Execution
6. Test Cycle Closure

Each stage has its deliverables. For example, during Test Planning, we produce the Test Plan Document; during Test Execution, we produce Defect Reports and execution logs.
</details>

<details>
<summary><b>Q5: What are the different levels of testing?</b></summary>

1. **Unit Testing**: Testing individual components or functions (done by developers).
2. **Integration Testing**: Ensuring different modules work together correctly.
3. **System Testing**: Testing the complete system as a whole.
4. **Acceptance Testing**: Ensuring the system meets business needs and user expectations (UAT).

For example, in an ATM project, first test the PIN verification function (unit test), then combine it with balance checking (integration test), then test the whole ATM workflow (system test), and finally let users test before go-live (acceptance test).
</details>

<details>
<summary><b>Q6: What are the types of testing?</b></summary>

- **Functional Testing**: Validates the business logic, features, and user interface actions against requirements.
- **Non-Functional Testing**: Checks usability, performance under load, security, and reliability attributes.
- **Maintenance Testing**: Done after production changes or updates to ensure existing features still work (Regression Testing).

For example, testing a login form for valid/invalid credentials is functional testing, while testing the load speed of that login page is non-functional performance testing.
</details>

<details>
<summary><b>Q7: Difference between Manual Testing and Automation Testing.</b></summary>

- **Manual Testing**: Human testers execute test cases manually without tools or scripts. It is flexible, exploratory, and suitable for usability testing.
- **Automation Testing**: Uses scripts, test runs, and automation frameworks to run tests automatically. It is suitable for regression suites, performance runs, and repetitive validation tasks.
</details>

<details>
<summary><b>Q8: What is a Test Case?</b></summary>

A Test Case is a set of conditions, inputs, and steps that determine whether a software feature works as expected.

Includes:
- Test Case ID and Description
- Preconditions
- Steps to execute
- Expected Result
- Actual Result and Status (Pass/Fail)

For example, to test the "Forgot Password" feature: steps include entering an email, checking if a reset link is received, and validating the redirection.
</details>

<details>
<summary><b>Q9: What is a Test Plan?</b></summary>

A Test Plan is a detailed document outlining the testing strategy, scope, schedule, resources, tools, and objectives.

Key sections:
- Objective and Scope (In-Scope/Out-of-Scope)
- Test Strategy and levels
- Entry and Exit criteria
- Risks and Mitigation
- Schedule and Resource allocation
</details>

<details>
<summary><b>Q10: What is the difference between Severity and Priority?</b></summary>

- **Severity**: The technical impact of a defect on the system's functionality. A crash in the payment gateway is Critical Severity.
- **Priority**: The urgency of fixing the defect from a business or release standpoint. A spelling mistake on the homepage has low severity but high priority if it affects branding.
</details>

---

## Category 2 – Test Documentation & Defect Management

```mermaid
%% VIS-002 — Defect Lifecycle
stateDiagram-v2
    accTitle: Defect Lifecycle
    accDescr: Transitions of a defect from New through Assigned, Open, Fixed, Retest, to Closed or Reopened.
    [*] --> New : Logged
    New --> Assigned : Triaged
    Assigned --> Open : In Progress
    Open --> Fixed : Code Change
    Fixed --> Retest : Deployed
    Retest --> Closed : Verification Pass
    Retest --> Reopened : Verification Fail
    Reopened --> Assigned
```

<details>
<summary><b>Q11: What is the purpose of Test Documentation?</b></summary>

Test documentation serves as a knowledge base for the testing process, ensuring that testing is structured, traceable, and repeatable.

Its main purposes are:
- To communicate testing scope, approach, and progress to stakeholders.
- To provide audit evidence that testing was carried out.
- To help in knowledge transfer to new team members.
- To track coverage and ensure all requirements are tested.
</details>

<details>
<summary><b>Q12: What is a Test Scenario?</b></summary>

A Test Scenario is a high-level description of what to test. It outlines what functionality or feature needs to be validated without going into detailed steps.

It focuses on user journeys rather than step-by-step execution. For an e-commerce site:
`Scenario: Verify that a user can place an order successfully.`
This scenario covers login, searching, adding to cart, payment, and order confirmation.
</details>

<details>
<summary><b>Q13: What is a Test Case? How is it different from a Test Scenario?</b></summary>

- **Test Scenario** is broad and defines *what* to test (e.g., Verify login functionality).
- **Test Case** is detailed and defines *how* to test step-by-step.

For example, a test case for login includes entering valid credentials, clicking submit, and expecting redirection to the dashboard.
</details>

<details>
<summary><b>Q14: What is a Traceability Matrix (RTM) and why is it important?</b></summary>

The Requirement Traceability Matrix (RTM) is a document that maps requirements to test cases.

Purpose:
- Ensure complete coverage (no missed requirements).
- Helps in impact analysis when requirements change.

If a requirement ID `REQ-101` is "User should reset password," the RTM links it to all test cases covering reset functionality.
</details>

<details>
<summary><b>Q15: What is a Bug/Defect in Software Testing?</b></summary>

A defect (or bug) is a deviation of the software from its expected behavior or requirement.

Key points:
- **Error**: Human mistake in code or requirements.
- **Defect**: Deviation found during testing.
- **Failure**: When the defect shows up in production.

Example: Expected: Clicking "Add to Cart" should increase count. Actual: Clicking does nothing. This is a defect.
</details>

<details>
<summary><b>Q16: Explain the Defect Life Cycle.</b></summary>

The Defect Life Cycle describes the stages a defect goes through from discovery to closure:
1. **New**: Tester logs the defect.
2. **Assigned**: Defect is assigned to a developer.
3. **Open**: Developer starts working on it.
4. **Fixed**: Developer fixes the defect.
5. **Retest**: Tester retests to verify the fix.
6. **Closed**: Defect is confirmed fixed.
7. **Reopened**: If the defect reappears.
</details>

<details>
<summary><b>Q17: What is Defect Severity vs. Priority? Give examples.</b></summary>

- **Severity**: Technical impact on system functionality.
- **Priority**: Urgency of fixing the defect.

Examples:
- Spelling mistake in company name: Low severity, High priority (branding issue).
- System crash when clicking "Checkout": High severity, High priority.
- Minor color mismatch in footer: Low severity, Low priority.
</details>

<details>
<summary><b>Q18: How do you write a good Bug Report?</b></summary>

A good bug report should be clear, concise, and complete.

Include:
- Bug ID & Title
- Steps to Reproduce
- Expected Result
- Actual Result
- Screenshots, video, or logs
- Environment details, severity, and priority
</details>

<details>
<summary><b>Q19: What are Entry and Exit Criteria in Testing?</b></summary>

- **Entry Criteria**: Conditions that must be met before testing begins (e.g., test environment ready, test data prepared, build deployed).
- **Exit Criteria**: Conditions that must be met before ending testing (e.g., all planned tests executed, critical defects fixed, test summary report prepared).
</details>

<details>
<summary><b>Q20: What is a Test Summary Report?</b></summary>

A Test Summary Report (TSR) is prepared at the end of the testing phase to summarize:
- Scope of testing completed.
- Test execution results (Pass/Fail stats).
- Defect details and their current status.
- Coverage analysis and risks.
- Recommendations for release.
</details>

---

## Category 3 – Test Design Techniques

<details>
<summary><b>Q21: What are Test Design Techniques?</b></summary>

Test Design Techniques are systematic approaches to creating test cases that ensure maximum coverage with minimum effort.

They are divided into:
1. **Black-Box Techniques**: Based on requirements, without looking at code structure.
2. **White-Box Techniques**: Based on internal code structure.
3. **Experience-Based Techniques**: Based on tester's knowledge.
</details>

<details>
<summary><b>Q22: What is Equivalence Partitioning (EP)? Give an example.</b></summary>

Equivalence Partitioning divides test data into groups (partitions) that are expected to be treated the same by the system. If one value in a group works, all should work.

Example: If a field accepts numbers from 1 to 100.
Partitions:
- Valid: 1 to 100 (e.g., test with 50).
- Invalid: < 1 (e.g., 0) and > 100 (e.g., 101).

Benefit: Reduces the number of test cases without losing coverage.
</details>

<details>
<summary><b>Q23: What is Boundary Value Analysis (BVA)? Give an example.</b></summary>

BVA focuses on testing at the edges of input ranges, as defects often occur at boundaries.

Example: If the valid input is 18–60 for age.
Test values: 17 (just below), 18 (minimum), 60 (maximum), 61 (just above).

This ensures that both lower and upper limits are tested, along with values just outside.
</details>

<details>
<summary><b>Q24: Explain Decision Table Testing with an example.</b></summary>

Decision Table Testing is used for systems with complex business rules. It helps ensure all possible combinations of inputs and outcomes are tested.

Example: Loan approval:
Conditions: Credit score > 700 AND Income > $30,000.
- Case 1: Credit > 700 (Y), Income > 30k (Y) -> Action: Approve.
- Case 2: Credit > 700 (Y), Income > 30k (N) -> Action: Reject.
- Case 3: Credit > 700 (N), Income > 30k (Y) -> Action: Reject.
</details>

<details>
<summary><b>Q25: What is State Transition Testing? Give an example.</b></summary>

State Transition Testing checks how the system behaves when changing from one state to another based on events or inputs.

Example: ATM machine:
- State: Card inserted -> Enter PIN -> Valid PIN -> Access account.
- Test: Enter invalid PIN thrice -> State changes to "Card blocked."
</details>

<details>
<summary><b>Q26: What is Use Case Testing?</b></summary>

Use Case Testing is based on user scenarios describing how the system will be used in real life.

- Focuses on end-to-end workflows.
- Helps find gaps in integration points.

Example: E-commerce "Place Order" use case includes login, product selection, adding to cart, payment, and confirmation.
</details>

<details>
<summary><b>Q27: What is Error Guessing?</b></summary>

Error Guessing relies on the experience, intuition, and historical knowledge of the tester to guess where defects are likely to be.

- Not a formal technique.
- Often used alongside other methods.

Example: A tester may guess that an email field might accept invalid formats like `test@.com` and try those inputs.
</details>

<details>
<summary><b>Q28: What is Exploratory Testing?</b></summary>

Exploratory Testing is simultaneous learning, test design, and execution without predefined test cases.

- Useful when time is short or documentation is incomplete.
- Requires skilled testers with domain knowledge.

Example: Testing a new chat application without test scripts—exploring features, sending random messages, trying special characters, etc.
</details>

<details>
<summary><b>Q29: What is Pairwise Testing?</b></summary>

Pairwise Testing is a combinatorial technique where testers create test cases covering all possible pairs of input parameters.

It reduces the total number of test cases while covering important interactions. For example, testing 3 browsers x 3 operating systems normally requires 9 combinations, but pairwise covers each pair in fewer runs.
</details>

<details>
<summary><b>Q30: What is White-Box Testing? How is it different from Black-Box Testing?</b></summary>

- **White-Box Testing**: Based on internal code structure, checking paths, branches, and loops (done by developers).
- **Black-Box Testing**: Based on requirements without looking at code structure.

White-box asks "How is it built?", whereas Black-box asks "Does it work as expected?"
</details>

---

## Category 4 – Functional Testing Types

<details>
<summary><b>Q31: What is Functional Testing?</b></summary>

Functional Testing verifies that the software’s features work according to the specified requirements. It focuses on what the system does rather than how it does it.

- Done using black-box techniques.
- Ensures business logic works correctly.

Example: For a banking app, functional testing ensures that money transfers, balance checks, and account statements work as expected.
</details>

<details>
<summary><b>Q32: What is Smoke Testing? Why is it called so?</b></summary>

Smoke Testing is a preliminary check to verify that the most critical functionalities of an application work before conducting more detailed testing.

- Also known as Build Verification Testing (BVT).
- Ensures the application is stable enough for further testing.

Why called "Smoke Testing"? In hardware testing, if a device smoked after powering on, it failed the initial test. The software analogy means, "If the build fails basic tests, it's not worth continuing."
</details>

<details>
<summary><b>Q33: What is Sanity Testing? How is it different from Smoke Testing?</b></summary>

Sanity Testing is a narrow, focused testing to verify specific bug fixes or minor changes in functionality.

- **Smoke Testing**: Broad, shallow, early build check.
- **Sanity Testing**: Narrow, deep check after bug fixes.

Example: If a bug in "password reset" is fixed, sanity testing will focus only on that functionality.
</details>

<details>
<summary><b>Q34: What is Regression Testing? Why is it important?</b></summary>

Regression Testing ensures that new changes (code updates, bug fixes, enhancements) have not broken existing features.

- It’s repeated after every change in the application.
- Often automated for efficiency.

Example: If a payment gateway's UI is updated, regression testing ensures that login, search, cart, and other existing features still work.
</details>

<details>
<summary><b>Q35: What is User Acceptance Testing (UAT)?</b></summary>

UAT is the final phase of testing where end users or clients verify that the software meets their business needs.

- Usually done in a staging environment.
- If UAT passes, the software is approved for production.

Example: For an HR payroll system, HR managers check if salary slips, tax deductions, and leave calculations match actual requirements.
</details>

<details>
<summary><b>Q36: What is Integration Testing? What are its types?</b></summary>

Integration Testing verifies that different modules or systems work together correctly.

Types:
1. **Big Bang**: All modules integrated at once.
2. **Incremental**: Modules integrated step-by-step.
   - *Top-Down*: Higher-level modules tested first.
   - *Bottom-Up*: Lower-level modules tested first.

Example: In a travel booking site, integrating the flight search module with the payment and ticket generation modules.
</details>

<details>
<summary><b>Q37: What is System Testing?</b></summary>

System Testing validates the entire application as a whole in a complete, integrated environment.

- Ensures the software meets both functional and non-functional requirements.
- Usually the last step before UAT.

Example: For an e-learning platform, system testing would check login, course enrollment, video streaming, payment, and certificate generation in a single end-to-end flow.
</details>

<details>
<summary><b>Q38: What is End-to-End (E2E) Testing? How is it different from System Testing?</b></summary>

E2E Testing checks the complete workflow of an application from start to finish, including interactions with external systems.

Difference:
- **System Testing**: Focuses on the application in isolation.
- **E2E Testing**: Includes external dependencies (e.g., third-party APIs).

Example: Booking a movie ticket—includes selecting a movie, seat booking, payment via a third-party gateway, receiving a confirmation email.
</details>

<details>
<summary><b>Q39: What is Exploratory Testing? How is it different from Ad-hoc Testing?</b></summary>

- **Exploratory Testing**: Structured with a charter or goal. Done by experienced testers to uncover unexpected defects.
- **Ad-hoc Testing**: Completely unstructured and random.

Example: While exploring a social media app, a tester tries unusual profile names or long status updates to see if the system handles them.
</details>

<details>
<summary><b>Q40: What is Usability Testing? Why is it important?</b></summary>

Usability Testing evaluates how easy and intuitive the application is for end users.

- Focuses on UI design, navigation, and user satisfaction.
- Often involves real users providing feedback.

Example: In a food delivery app, testers check if users can easily search for a restaurant, apply filters, and place an order without confusion.
</details>

---

## Category 5 – Non-Functional Testing Types

<details>
<summary><b>Q41: What is Non-Functional Testing? How is it different from Functional Testing?</b></summary>

Non-functional testing checks *how well* a system performs under specific conditions, rather than *what* it does.

- Functional -> "Does the login work?"
- Non-functional -> "Does the login happen within 2 seconds under 1,000 concurrent users?"
</details>

<details>
<summary><b>Q42: What is Performance Testing?</b></summary>

Performance Testing checks the speed, responsiveness, and stability of a system under expected workloads.

It identifies bottlenecks and ensures performance goals are met. Example: Testing if a banking site loads the account summary within 3 seconds for 500 concurrent users.
</details>

<details>
<summary><b>Q43: What is Load Testing?</b></summary>

Load Testing measures system performance under expected user load to ensure it can handle the planned usage.

Example: Simulating 1,000 users logging in simultaneously to see if the application slows down or triggers errors.
</details>

<details>
<summary><b>Q44: What is Stress Testing?</b></summary>

Stress Testing evaluates how the system behaves beyond its normal capacity until it breaks.

Example: Sending 5x expected traffic to see how the system fails and recovers.
</details>

<details>
<summary><b>Q45: What is Scalability Testing?</b></summary>

Scalability Testing checks whether the system can scale up or down to handle increased or decreased workloads.

Example: Increasing the number of transactions in a payment system from 100/sec to 1,000/sec and checking if it scales properly.
</details>

<details>
<summary><b>Q46: What is Stability Testing?</b></summary>

Stability Testing (soak testing) checks if the system runs without failure for a long period under a certain load.

Example: Running a live video stream for 72 hours to ensure no memory leaks or crashes occur.
</details>

<details>
<summary><b>Q47: What is Security Testing?</b></summary>

Security Testing ensures the system is protected against unauthorized access, vulnerabilities, and attacks.

Example: Testing if an e-commerce site prevents SQL Injection and Cross-Site Scripting (XSS).
</details>

<details>
<summary><b>Q48: What is Compatibility Testing?</b></summary>

Compatibility Testing ensures the application works across different devices, browsers, operating systems, and network environments.

Example: Checking if a travel booking site works on Chrome, Firefox, Safari, and Edge on both Windows and Mac.
</details>

<details>
<summary><b>Q49: What is Localization Testing?</b></summary>

Localization Testing verifies that the application is adapted for a specific region or language.

Example: Checking if the date format is DD/MM/YYYY in India and MM/DD/YYYY in the US.
</details>

<details>
<summary><b>Q50: What is Accessibility Testing?</b></summary>

Accessibility Testing ensures the application can be used by people with disabilities.

Example: Checking if a website supports screen readers and has proper alt text for images.
</details>

---

## Category 6 – Defect Management & Bug Reporting

<details>
<summary><b>Q51: What is Defect Leakage?</b></summary>

Defect Leakage happens when a bug escapes from one testing phase and is found in a later stage.

Example: A bug missed during system testing but found during UAT or by end users in production.
</details>

<details>
<summary><b>Q52: What is Defect Density?</b></summary>

Defect Density = Number of confirmed defects / Size of the software module. It helps measure the quality of code.

Example: 10 defects found in 500 lines of code -> Density = 0.02 defects per LOC.
</details>

<details>
<summary><b>Q53: What is Defect Clustering?</b></summary>

Defect Clustering means that most defects are found in a small number of modules due to high complexity or poor design (follows the 80-20 rule).

Example: 80% of bugs being in the payment gateway module.
</details>

<details>
<summary><b>Q54: What is a Bug Triage?</b></summary>

Bug Triage is a meeting to prioritize and assign defects based on severity, priority, resource availability, and business impact.
</details>

<details>
<summary><b>Q55: What is a Showstopper Defect?</b></summary>

A showstopper is a critical defect that blocks testing progress.

Example: Application crashes immediately after login.
</details>

<details>
<summary><b>Q56: What is a Latent Defect?</b></summary>

A defect that exists but is not detected during testing and appears later under specific conditions.

Example: A bug in a tax calculation system that only appears at year-end.
</details>

<details>
<summary><b>Q57: What is a Masked Defect?</b></summary>

A defect hidden by another defect.

Example: A crash in the payment page hides a bug in the discount calculation.
</details>

<details>
<summary><b>Q58: What is Root Cause Analysis (RCA)?</b></summary>

RCA identifies the underlying cause of a defect to prevent recurrence.

Example: Investigating why a login bug occurred -> Found incorrect password hashing logic.
</details>

<details>
<summary><b>Q59: What is a Bug Life Cycle Tool? Give examples.</b></summary>

Bug Life Cycle tools manage defects from logging to closure.

Examples: Jira, Bugzilla, Mantis, Azure DevOps.
</details>

<details>
<summary><b>Q60: What is the purpose of logging defects early?</b></summary>

Catching bugs early reduces the cost of fixing them, as the cost of a defect increases in later stages of the SDLC.
</details>

---

## Category 7 – Agile Testing Concepts

<details>
<summary><b>Q61: What is Agile Testing?</b></summary>

Agile Testing is testing that follows Agile principles, where testing and development happen simultaneously and iteratively.
</details>

<details>
<summary><b>Q62: What are User Stories?</b></summary>

User Stories describe features from the end-user perspective.

Example: "As a user, I want to reset my password so that I can regain access to my account."
</details>

<details>
<summary><b>Q63: What is Acceptance Criteria in Agile?</b></summary>

Conditions that a user story must meet to be considered complete and working.
</details>

<details>
<summary><b>Q64: What is Sprint Testing?</b></summary>

Sprint Testing is testing within a sprint cycle, including functional and regression tests on incremental features.
</details>

<details>
<summary><b>Q65: What is Continuous Integration in Agile?</b></summary>

Continuous Integration means developers frequently merge code changes into a shared repository, followed by automated builds and tests.
</details>

<details>
<summary><b>Q66: What is Shift-Left Testing?</b></summary>

Shift-Left means starting testing earlier in the SDLC to find bugs sooner and reduce correction costs.
</details>

<details>
<summary><b>Q67: What is a Product Backlog?</b></summary>

A prioritized list of all desired features, enhancements, and fixes for a project.
</details>

<details>
<summary><b>Q68: What is a Sprint Retrospective?</b></summary>

A meeting at the end of a sprint to discuss what went well and what to improve in the next iteration.
</details>

<details>
<summary><b>Q69: What is a Definition of Done (DoD)?</b></summary>

A checklist of requirements (e.g., code reviewed, tests passed, docs updated) that a product increment must meet to be considered complete.
</details>

<details>
<summary><b>Q70: What is Pair Testing?</b></summary>

Two testers (or a tester and a developer) work together on the same feature to increase coverage and find bugs faster.
</details>

---

## Category 8 – Test Metrics & Measurement

<details>
<summary><b>Q71: What are Test Metrics?</b></summary>

Test metrics are measurements that track the progress, quality, and effectiveness of testing.

Examples: Test coverage, defect density, test execution rate.
</details>

<details>
<summary><b>Q72: What is Test Coverage?</b></summary>

Test coverage measures how much of the application’s functionality is exercised by tests.
</details>

<details>
<summary><b>Q73: What is Requirement Coverage?</b></summary>

Requirement coverage ensures that all requirements have at least one test case linked.
</details>

<details>
<summary><b>Q74: What is Code Coverage?</b></summary>

Code coverage measures the percentage of source code executed during testing.
</details>

<details>
<summary><b>Q75: What is Test Execution Status?</b></summary>

It shows the percentage of planned tests that are executed and their pass/fail rates.
</details>

<details>
<summary><b>Q76: What is Test Case Effectiveness?</b></summary>

Measures the ability of test cases to detect defects in the system.
</details>

<details>
<summary><b>Q77: What is Defect Removal Efficiency (DRE)?</b></summary>

DRE = (Defects found in testing / Total defects) × 100.
</details>

<details>
<summary><b>Q78: What is Test Productivity?</b></summary>

Number of test cases created or executed per tester per day.
</details>

<details>
<summary><b>Q79: What is Mean Time to Detect (MTTD)?</b></summary>

Average time taken to detect a defect after it is introduced.
</details>

<details>
<summary><b>Q80: What is Mean Time to Repair (MTTR)?</b></summary>

Average time taken to fix a defect after it is reported.
</details>

---

## Category 9 – Common Testing Challenges

<details>
<summary><b>Q81: What challenges do you face in Manual Testing?</b></summary>

- Unclear or changing requirements.
- Limited time for regression runs.
- Incomplete test data.
- Handling complex dynamic UI changes.
</details>

<details>
<summary><b>Q82: How do you handle requirement changes during testing?</b></summary>

By performing impact analysis, updating test cases, and communicating testing scope changes with stakeholders.
</details>

<details>
<summary><b>Q83: How do you test when requirements are unclear?</b></summary>

By using exploratory testing, involving business analysts, and validating requirements against early prototypes.
</details>

<details>
<summary><b>Q84: How do you prioritize test cases?</b></summary>

Based on risk, business impact, usage frequency, and criticality.
</details>

<details>
<summary><b>Q85: How do you ensure maximum coverage in less time?</b></summary>

By using risk-based testing, prioritizing core features, and automation for regression suites.
</details>

<details>
<summary><b>Q86: What do you do when a developer disagrees with a bug?</b></summary>

Provide clear reproduction steps, screenshots/logs, and reference requirements to prove the defect.
</details>

<details>
<summary><b>Q87: How do you manage testing under tight deadlines?</b></summary>

Focus on critical features, run smoke tests first, and parallelize manual testing execution.
</details>

<details>
<summary><b>Q88: How do you test with limited test data?</b></summary>

Use data generation tools or create synthetic test data using equivalence partitioning.
</details>

<details>
<summary><b>Q89: How do you report testing progress to management?</b></summary>

Through daily status reports, test dashboards, and defect trend charts.
</details>

<details>
<summary><b>Q90: How do you ensure quality when there’s pressure to release?</b></summary>

Run smoke tests, critical regression tests, and communicate risks clearly to stakeholders.
</details>

---

## Category 10 – Miscellaneous Manual Testing Topics

<details>
<summary><b>Q91: What is Ad-hoc Testing?</b></summary>

Unstructured, informal testing without documented test cases or planning.
</details>

<details>
<summary><b>Q92: What is Monkey Testing?</b></summary>

Providing random inputs to the system without rules to check stability.
</details>

<details>
<summary><b>Q93: What is Alpha Testing?</b></summary>

Testing done by internal teams in a controlled environment before releasing to users.
</details>

<details>
<summary><b>Q94: What is Beta Testing?</b></summary>

Testing by a limited set of real end users in their actual environment before full release.
</details>

<details>
<summary><b>Q95: What is Installation Testing?</b></summary>

Verifying that the software installs, updates, and uninstalls correctly.
</details>

<details>
<summary><b>Q96: What is Recovery Testing?</b></summary>

Checking if the system recovers gracefully after a crash or hardware failure.
</details>

<details>
<summary><b>Q97: What is Compliance Testing?</b></summary>

Ensuring the software meets regulatory standards, laws, and policies.
</details>

<details>
<summary><b>Q98: What is Internationalization Testing?</b></summary>

Testing if the application supports multiple languages, locales, and cultural formats.
</details>

<details>
<summary><b>Q99: What is Configuration Testing?</b></summary>

Verifying the system works with different configurations (hardware, OS, browsers).
</details>

<details>
<summary><b>Q100: What is the difference between Static Testing and Dynamic Testing?</b></summary>

- **Static Testing**: Reviews, walkthroughs, inspections (no code execution).
- **Dynamic Testing**: Executing code to find defects under runtime conditions.
</details>

---

## Knowledge Check: Boundary Value Analysis

<TesterChallenge
  id="quiz_manual_bva"
  title="TEST DESIGN RECALL CHALLENGE"
  question="For an input field accepting ages between 18 and 60 (inclusive), which set represents the 2-point Boundary Value Analysis (BVA) test values?"
  options={[
    "17, 18, 60, 61",
    "1, 18, 30, 60, 99",
    "0, 18, 60, 100",
    "19, 20, 58, 59"
  ]}
  correctIndex={0}
  explanation="In 2-point Boundary Value Analysis, tests are chosen at the exact boundary edges (18, 60) and just outside the valid boundary limits (17, 61)."
/>
