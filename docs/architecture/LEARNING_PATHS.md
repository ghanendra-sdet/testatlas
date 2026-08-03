# Learning Paths

This document defines the 10 learning paths in TestAtlas, their learning objectives, target audience, and progression strategy.

## Design Principle

Learning paths are role-based progressions: a junior QA takes a different path than an SDET, but both start at Foundations and may converge in Interview Prep. Each path is self-contained (learners can start and stop) and feeds into others (learners can specialize).

## Path 1: Foundations of Software Testing

**Directory**: `/learning-paths/foundations/`  
**Position**: 1 (gateway to all other paths)  
**Prerequisites**: None  
**Target Audience**: Anyone starting QA, developers wanting to understand testing, students  
**Estimated Duration**: 2–4 weeks  

**Curriculum version**: Foundations v1.0 (17 modules). Later additions to this path (new topics, not fixes) increment this — e.g. "Foundations v1.1 added AI-Assisted Exploratory Testing" — so structural growth is a visible, named event rather than a silent module-count change. See **Curriculum Versioning** below.

**Learning Outcomes** — when finished, a learner should be able to:
- Explain the purpose of software testing and why it's risk-based thinking, not test-case execution
- Describe how the SDLC and STLC relate, how testing maps onto Waterfall, V-Model, Agile, and continuous delivery, and participate meaningfully in Agile/Scrum ceremonies as a QA voice
- State the core principles of testing (e.g. exhaustive testing is impossible, defects cluster, pesticide paradox) and use them to justify testing decisions
- Distinguish testing from checking, and verification from validation
- Distinguish static testing from dynamic testing, and know when each applies
- Design basic test scenarios using risk-based prioritization
- Describe the six quality attributes and weigh which matter most for a given product
- Explain shift-left and shift-right testing, and why catching a defect earlier is cheaper
- Report a defect correctly and track it through its lifecycle, including severity vs. priority
- Distinguish a test strategy from a test plan
- Read basic QA metrics and know what they do and don't prove
- Describe the QA role, its boundaries with other functions, and the career paths within it
- Use core QA terminology correctly and consistently
- Recognize and correct common misconceptions about what QA does and doesn't guarantee

**Modules** (planned for v0.1–v1.0), grouped into six sections that tell a single story — understand testing, understand development, understand testing concepts, understand quality, understand defects, become a professional QA:

**Section 1 — Introduction**
1. What Is Software Testing? (✓ done)
2. The Role of QA in Product Delivery (✓ done)

**Section 2 — Software Development Context**
3. Software Testing Principles
4. Testing Across the SDLC — includes the STLC and SDLC models (✓ done)
5. Agile & Scrum Basics for QA

**Section 3 — Testing Fundamentals**
6. Verification vs. Validation (✓ done)
7. Static vs. Dynamic Testing (✓ done)

**Section 4 — Quality Mindset**
8. Risk-Based Testing Fundamentals (✓ done)
9. Quality Attributes (Functionality, Performance, Security, Usability, Reliability, Maintainability) (✓ done)
10. Shift-Left & Shift-Right Testing

**Section 5 — Defect Management**
11. Defect Life Cycle
12. Severity vs. Priority

**Section 6 — Professional QA**
13. Test Strategy vs. Test Plan
14. Metrics and Measurement (Coverage, Defect Density, MTTR)
15. QA Career Roadmap (types of roles, growth opportunities)
16. Common QA Terminology (glossary capstone)
17. Testing Myths & Misconceptions (myth / reality / real story / lesson / interview angle format — the closing module)

**Sequencing note**: Docusaurus derives each page's route from its slug, not its numeric filename prefix — the prefix only controls sidebar order. That means reordering modules, even already-published ones, does not break any existing link, so this section replaces the file numbering used during initial drafting with the sequence below.

Modules 3 and 5 (Software Testing Principles, Agile & Scrum Basics) are newly identified gaps, not yet written. Everything else already published keeps its content; only its position in the sequence changed. Section-by-section reasoning:

- **Section 1 (1–2)**: unchanged — what testing is, then who does it, before anything else can make sense.
- **Section 2 (3–5)**: Software Testing Principles moves ahead of the SDLC material deliberately — the principles (exhaustive testing is impossible, defects cluster, pesticide paradox, etc.) shape *how a learner should think* about everything that follows, so teaching them before process detail means the process modules land as applications of a mindset, not a disconnected list of process trivia. Testing Across the SDLC follows, and Agile & Scrum Basics is placed directly after it because Agile is one of the SDLC models already introduced there — going straight from the general SDLC landscape to the one model most learners will actually work under day-to-day.
- **Section 3 (6–7)**: Verification vs. Validation and Static vs. Dynamic Testing stay paired, as already established — same underlying distinction (purpose vs. mechanism) taught from two angles.
- **Section 4 (8–10)**: Risk-Based Testing and Quality Attributes now follow Section 3 rather than precede it, because "what to prioritize" (risk) and "what to weigh" (quality attributes) are easier to reason about once a learner already has verification/validation and static/dynamic as tools for thinking about testing depth. Shift-Left & Shift-Right closes the section because it depends on Module 4 (SDLC/STLC, to know what "left" and "right" mean in a timeline) and previews Section 5's defect lifecycle — the point of shifting left is catching a defect before it needs a full lifecycle.
- **Section 5 (11–12)**: hard dependency, unchanged — severity and priority are properties of a logged defect, so the lifecycle comes first.
- **Section 6 (13–17)**: Test Strategy vs. Test Plan is a synthesis module depending on Section 4 (risk-based thinking, quality attributes) as inputs to what a real strategy or plan contains. Metrics and Measurement follows because defect density and MTTR are metrics *about* Section 5's defects, and because metrics are how a strategy's success gets evaluated. QA Career Roadmap comes next — a learner can only meaningfully evaluate specialization paths after seeing the discipline's full breadth, and it follows directly from Module 2's role definitions. Common QA Terminology is a reference capstone, meant to be bookmarked rather than read start-to-front. Testing Myths & Misconceptions closes the entire path deliberately: a myth like "verification and validation are the same thing" is only meaningful — and only debunkable by the learner themselves — once every concept it references has already been taught.

**Per-module Prerequisites block**: every module should open with a short block naming the specific prior modules it assumes and the modules it unlocks next (e.g. "You should already understand: Module 6, Module 7 → After this you'll be ready for: Module 11, Module 12"), making the dependency graph visible on the page itself, not just in this document. This is now part of the Definition of Done in `CONTENT_MODEL.md`. Modules 1–2 and 6–9 predate this requirement and should get it retrofitted as a small housekeeping pass, separate from new-module writing.

**Success Criteria**:
- Learner explains why testing matters beyond "finding bugs"
- Learner maps where testing happens in a product release
- Learner articulates risk-based thinking in simple terms
- Learner can correctly use verification/validation, static/dynamic, and severity/priority in a sentence without mixing them up
- Learner can name at least one testing myth they used to believe and explain why it's wrong
- Learner can describe their own eventual QA specialization path and why it fits them

### Curriculum Versioning

Once a path's module list stabilizes (as Foundations' has now, after this review), track it as a versioned curriculum, separate from the site's own `VERSIONING_STRATEGY.md` release versioning:

- **Foundations v1.0** — the 17-module structure defined above.
- A version bumps (v1.1, v1.2, ...) only when modules are added, removed, or reordered at the topic level — not for prose edits, typo fixes, or example updates within an existing module, which are ordinary content maintenance.
- Each path tracks its own curriculum version independently (e.g. "Manual Testing v1.0" once that path's structure is finalized), so future changes can be announced precisely: "Curriculum v1.1 added AI-Assisted Exploratory Testing" instead of a silent structural change.

---

## Path 2: Manual Testing and Test Design

**Directory**: `/learning-paths/manual-testing/`  
**Position**: 2  
**Prerequisites**: Foundations of Software Testing  
**Target Audience**: QA engineers, testers, automation engineers (designing tests first)  
**Estimated Duration**: 4–8 weeks  

**Learning Objectives**:
- Master test design techniques (BVA, equivalence partitioning, decision tables, state transitions)
- Understand test case organization and naming
- Learn to think systematically about edge cases and failure modes
- Apply test design to realistic domains and products
- Distinguish thoughtful testing from random testing
- Communicate test cases clearly

**Modules** (planned for v0.1–v1.0):
1. Test Design Fundamentals (why structure matters)
2. Boundary Value Analysis (testing at limits)
3. Equivalence Partitioning (grouping test cases efficiently)
4. Decision Table Testing (testing logical combinations)
5. State Transition Testing (testing state changes)
6. Combinatorial Testing (reducing explosions of variables)
7. Error Guessing (using intuition and experience)
8. Test Case Organization and Naming (making tests maintainable)
9. Applying Test Design to Real Projects (fintech, e-commerce, healthcare scenarios)
10. Common Mistakes in Test Design
11. Interview Preparation for Test Design Questions

**Success Criteria**:
- Learner designs a complete test plan for a non-trivial feature
- Learner explains why certain test cases are unnecessary (equivalence classes)
- Learner identifies edge cases a junior tester would miss

---

## Path 3: API Testing

**Directory**: `/learning-paths/api-testing/`  
**Position**: 3  
**Prerequisites**: Foundations, Manual Testing and Test Design (concepts apply equally)  
**Target Audience**: API testers, backend QA engineers, SDETs  
**Estimated Duration**: 4–6 weeks  

**Learning Objectives**:
- Understand REST, gRPC, GraphQL from a testing perspective
- Design API tests using test design techniques
- Test error handling, edge cases, and integrations
- Validate data contracts and schemas
- Understand authentication, authorization, and rate limiting
- Test cascading failures and recovery

**Modules** (planned for v0.1–v1.0):
1. API Testing Fundamentals (why APIs matter, testing scope)
2. HTTP Basics for Testers (status codes, methods, headers, body)
3. JSON and Data Validation (parsing, schema validation, nulls)
4. Designing API Test Cases (applying test design to API payloads)
5. Authentication Testing (API keys, OAuth, JWTs)
6. Authorization Testing (roles, permissions, data isolation)
7. Rate Limiting and Throttling (testing quotas and backoff)
8. Cascading Failures and Integration Testing (when one service is down)
9. API Security Testing (injection, XXE, CORS, HTTPS)
10. Performance Testing APIs (response time, throughput under load)
11. API Testing Tools Comparison (Postman, REST Client, Bruno, code-based approaches)
12. Common API Testing Mistakes
13. Interview Preparation for API Testing

**Success Criteria**:
- Learner designs tests for a REST API including happy path, edge cases, and error scenarios
- Learner identifies security issues in an API design
- Learner explains when API testing differs from UI testing

---

## Path 4: Database Testing

**Directory**: `/learning-paths/database-testing/`  
**Position**: 4  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: QA engineers testing data-heavy systems, data specialists, backend testers  
**Estimated Duration**: 3–5 weeks  

**Learning Objectives**:
- Write basic SQL for testing (not for the database team, but for QA)
- Understand data integrity and consistency
- Test ETL and data pipelines
- Validate data state after operations
- Understand transactions and concurrency
- Test constraints and relationships

**Modules** (planned for v0.1–v1.0):
1. SQL Basics for QA (SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY)
2. Writing Assertions with SQL (SELECT to verify expected state)
3. Data Integrity Testing (checking constraints are enforced)
4. Transaction and Concurrency Testing (ACID properties, deadlocks)
5. Referential Integrity (foreign keys, orphaned records)
6. Testing ETL Pipelines (data in → transformation → data out)
7. Testing Denormalization and Caching
8. Data Validation Checklists (common mistakes in data operations)
9. Performance Implications of Queries (indexes, query plans)
10. Common Database Testing Mistakes
11. Interview Preparation for Database Testing

**Success Criteria**:
- Learner writes SQL queries to verify expected data state after a feature
- Learner designs tests for an ETL pipeline
- Learner identifies data integrity issues in a system

---

## Path 5: Test Automation

**Directory**: `/learning-paths/automation/`  
**Position**: 5  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: Automation engineers, SDETs, developers writing tests  
**Estimated Duration**: 6–12 weeks  

**Learning Objectives**:
- Understand test automation principles and design patterns
- Build maintainable test automation using frameworks like Playwright
- Understand page object model and abstraction layers
- Integrate tests into CI/CD pipelines
- Write automation that is fast, reliable, and understandable
- Test automation frameworks and tool trade-offs

**Modules** (planned for v0.1–v1.0):
1. Why Automate? (mindset: what should be automated vs. manual)
2. Test Automation Principles (maintainability, reliability, speed)
3. Designing Automation from Test Cases (test design → automation)
4. Page Object Model (abstraction and maintainability)
5. Locator Strategies and Best Practices (selectors that survive change)
6. Waiting Strategies and Flakiness (timing issues are the biggest automation problem)
7. Data-Driven Testing (parameterizing test cases)
8. CI/CD Integration (running tests automatically)
9. Parallel Execution and Performance (scaling test runs)
10. Maintaining Automation at Scale (refactoring, removing dead tests)
11. Tool Comparison: Playwright vs. Selenium vs. Others
12. Common Automation Mistakes (brittle tests, false positives, slow feedback loops)
13. Interview Preparation for Automation Questions

**Success Criteria**:
- Learner writes maintainable automation for a realistic workflow
- Learner explains why a test is flaky and fixes it
- Learner refactors brittle tests into reliable ones

---

## Path 6: Performance Testing

**Directory**: `/learning-paths/performance-testing/`  
**Position**: 6  
**Prerequisites**: Foundations, one of (Manual Testing, API Testing, Database Testing)  
**Target Audience**: Performance engineers, backend QA, DevOps engineers  
**Estimated Duration**: 4–8 weeks  

**Learning Objectives**:
- Understand performance testing types (load, stress, spike, soak)
- Design load tests that reflect realistic scenarios
- Use performance testing tools (k6, JMeter, Gatling, Locust)
- Identify bottlenecks and troubleshoot performance issues
- Connect performance problems to architecture and resources
- Report performance results to non-technical stakeholders

**Modules** (planned for v0.1–v1.0):
1. Performance Testing Fundamentals (why it matters, what we measure)
2. Load, Stress, Spike, and Soak Testing Defined (each type, when to use)
3. Performance Metrics and SLOs (latency, throughput, resource use, acceptable thresholds)
4. Load Testing Tools Comparison (k6, JMeter, Gatling, Locust, their trade-offs)
5. Designing Load Tests That Reflect Reality (realistic user behavior, not unrealistic peaks)
6. Baseline, Ramp, and Spike Profiles (how to structure a load test)
7. Identifying and Troubleshooting Bottlenecks (CPU? Memory? Database? Network?)
8. Performance Reporting and Root Cause Analysis (explaining findings)
9. Database Performance Testing (joins, indexes, query optimization)
10. API Performance Under Load (response time degradation, timeout handling)
11. Frontend Performance Testing (rendering, memory leaks)
12. Common Performance Testing Mistakes (unrealistic scenarios, ignoring steady state)
13. Interview Preparation for Performance Questions

**Success Criteria**:
- Learner designs a load test for a realistic scenario
- Learner analyzes performance results and identifies the bottleneck
- Learner explains performance findings to a non-technical stakeholder

---

## Path 7: Security Testing

**Directory**: `/learning-paths/security-testing/`  
**Position**: 7  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Target Audience**: Security-focused QA, SDETs, developers responsible for security  
**Estimated Duration**: 6–12 weeks  

**Learning Objectives**:
- Understand OWASP Top 10 from a testing perspective
- Threat model and design security tests
- Test authentication, authorization, and data protection
- Use security testing tools (Burp Suite, OWASP ZAP)
- Shift-left: find security issues early, not after release
- Understand compliance testing (GDPR, HIPAA, PCI-DSS)

**Modules** (planned for v0.1–v1.0):
1. Security Testing Fundamentals (threat model, attack surface)
2. OWASP Top 10 Explained (each vulnerability, real examples)
3. Threat Modeling for Testers (identifying risks)
4. Authentication Testing (login, session management, password policies)
5. Authorization and Access Control (role-based access, data isolation)
6. Injection Testing (SQL, command, XML injection)
7. Cross-Site Scripting (XSS) Testing
8. Cross-Site Request Forgery (CSRF) Testing
9. Encryption and Data Protection (in transit, at rest, TLS)
10. API Security Testing (authentication, rate limiting, data leakage)
11. Security in CI/CD (scanning, secret management)
12. Compliance Testing (GDPR, HIPAA, PCI-DSS, SOC 2)
13. Security Tools: Burp Suite vs. OWASP ZAP vs. Code Scanning
14. Common Security Testing Mistakes (testing obvious attacks, missing business logic flaws)
15. Interview Preparation for Security Questions

**Success Criteria**:
- Learner threat models a feature and designs security tests
- Learner tests for SQL injection and explains how it works
- Learner explains the difference between authentication and authorization

---

## Path 8: AI and Testing (Future-Focused)

**Directory**: `/learning-paths/ai-testing/`  
**Position**: 8  
**Prerequisites**: Foundations  
**Target Audience**: QA engineers preparing for AI-driven testing, ML engineers  
**Estimated Duration**: 4–6 weeks (evolving as AI changes)  

**Learning Objectives** (v0.1 scope):
- Understand how AI changes QA work
- Test LLM outputs and AI-driven features
- Evaluate prompt quality and model behavior
- Synthetic data generation for testing
- Safety and hallucination testing

**Modules** (v0.1 scope):
1. AI in Testing: Opportunity and Risk (how AI changes QA)
2. Testing LLM-Generated Content (quality, safety, accuracy)
3. Prompt Testing Fundamentals (designing prompts, evaluating responses)
4. Evaluating AI Outputs (factual accuracy, relevance, tone)
5. Synthetic Data Generation (using AI to create test data)
6. Safety Testing for AI Systems (harmful outputs, bias)
7. AI Evaluation Frameworks (DeepEval, RAGAS, custom metrics)
8. Hallucination Detection (when LLMs make things up)
9. Bias Testing in AI Systems (fairness across demographics)

**Future Expansion** (v1.0+ as field evolves):
- Agent Testing (multi-step AI workflows)
- RAG Testing (retrieval-augmented generation)
- Model Evaluation (specialized)
- LLM Performance Benchmarking
- Adversarial Testing (jailbreaks, prompt injection against LLMs)

**Success Criteria**:
- Learner tests an LLM feature and identifies quality issues
- Learner designs synthetic test data for an AI system
- Learner explains why traditional QA approaches don't work for AI

---

## Path 9: Interview Preparation

**Directory**: `/learning-paths/interview-preparation/`  
**Position**: 9  
**Prerequisites**: Foundations (minimum), any technical path (recommended)  
**Target Audience**: Job seekers, career-changers, QA professionals  
**Estimated Duration**: 2–8 weeks (depends on preparation depth)  

**Learning Objectives**:
- Understand QA interview patterns (behavioral, technical, system design)
- Practice scenario-based questioning
- Articulate testing judgment clearly
- Communicate under interview pressure
- Showcase real-world problem-solving
- Negotiate offers confidently

**Modules** (planned for v0.1–v1.0):
1. The QA Interview: What Companies Ask (panel discussion, take-home, real-time)
2. Behavioral Interviews for QA (STAR method, discussing failures)
3. Technical Interviews: Test Design (designing tests for a feature)
4. Technical Interviews: Automation (designing test automation)
5. Technical Interviews: API Testing (testing REST APIs)
6. Technical Interviews: Security Testing (finding vulnerabilities)
7. Technical Interviews: System Design for QA (scalability, reliability of QA infrastructure)
8. Whiteboarding Test Cases (drawing test matrices on the board)
9. Take-Home Challenges (typical assignments, time management)
10. Salary Negotiation for QA Professionals (knowing your worth)
11. Mock Interviews (scenario-based practice)
12. Post-Interview (follow-up, handling rejection)

**Success Criteria**:
- Learner explains a testing challenge using the STAR method
- Learner designs tests for a feature in an interview setting
- Learner negotiates a competitive offer

---

## Path 10: Career and Leadership in QA

**Directory**: `/learning-paths/career/`  
**Position**: 10  
**Prerequisites**: Foundations + 1+ years QA experience  
**Target Audience**: QA professionals, team leads, QA managers, QA directors  
**Estimated Duration**: Ongoing (career development)  

**Learning Objectives**:
- Build and communicate testing strategies
- Lead QA teams and processes
- Measure and report testing impact
- Grow your QA career (IC or management track)
- Handle technical debt and process improvement
- Navigate organizational politics

**Modules** (planned for v0.1–v1.0):
1. From QA Engineer to QA Lead (first leadership role)
2. Building a Test Strategy (risk-based approach, scoping)
3. QA Process Design and Governance (how QA works in your organization)
4. Metrics That Matter (reporting test effectiveness, not vanity metrics)
5. Communicating Test Results (to engineers, to PMs, to executives)
6. Managing Technical Debt in Testing (when to refactor, when to rebuild)
7. Tool Selection and Vendor Evaluation (choosing frameworks, platforms)
8. Onboarding and Growing QA Teams (hiring, training, retaining)
9. Career Growth Paths in QA (IC vs. management, specialization)
10. QA in Agile, Waterfall, and Hybrid (adapting strategy to process)
11. Executive Communication (dashboards, ROI, business impact)
12. Common Leadership Mistakes in QA (moving too fast, ignoring culture)

**Success Criteria**:
- QA leader builds a testing strategy that's understood and followed
- QA leader measures testing impact on business outcomes
- QA leader grows team members into their next roles

---

## Path Progression Map

```
Start Here
    ↓
Foundations (gateway)
    ↓
    ├─→ Manual Testing → API Testing → Interview Prep
    │       ↓
    │    Automation ──→ Performance → Career
    │       ↓
    │    Database Testing
    │
    └─→ Security Testing ────→ Interview Prep
           ↓
        Career

Specialized Paths:
    Performance Testing → Career
    AI Testing → (emerging, connects to all)
```

---

## Switching Paths

Learners can switch paths at any time, but some transitions are smoother:

**Smooth Transitions**:
- Manual Testing → API Testing (concepts apply directly)
- Manual Testing → Automation (design first, then automate)
- Automation → Performance Testing (load testing uses the same tools)
- Any path → Interview Prep (prerequisites satisfied)
- Any path → Career (after 1+ years experience)

**Rougher Transitions** (more catch-up needed):
- Automation → Database Testing (requires SQL knowledge)
- Performance Testing → Security Testing (different mindset, different tools)

---

## Path Maintenance

**Annually**:
- Review each path's modules for accuracy and currency
- Check if new topics should be added (e.g., AI Testing expanded in v1.0)
- Gather learner feedback on difficulty and progression

**Per Merge**:
- New content connects to existing paths; no isolated modules
- Cross-references between paths are validated

This flexible path structure allows TestAtlas to serve different roles without forcing everyone through the same progression.
