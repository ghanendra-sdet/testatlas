# Curriculum Architecture

This document defines the complete learning curriculum for TestAtlas: all learning paths, their dependencies, prerequisites, and recommended learning order.

## Design Principle

TestAtlas is not a linear progression of chapters. It is a **knowledge graph** where atomic concepts (e.g., "Boundary Value Analysis") are taught once and referenced across multiple contexts.

Learners follow different paths based on their role and experience level, but all paths build on the same foundational concepts.

## The Learning Paths

### Path 1: Foundations of Software Testing
**Target Audience**: Anyone starting their QA journey  
**Prerequisites**: None  
**Duration**: 2–4 weeks  
**Learning Objectives**:
- Understand why testing matters (risk-based thinking)
- Know when testing happens in delivery (not just a phase)
- See how testing works across different levels
- Distinguish testing from checking

**Modules**:
1. What Is Software Testing? (foundational concept)
2. The Role of QA in Product Delivery
3. Testing Across the SDLC
4. Risk-Based Testing Fundamentals
5. Quality Metrics and Defect Severity
6. Career Paths in QA

**Modules Feed Into**: All other learning paths

---

### Path 2: Manual Testing and Test Design
**Target Audience**: QA professionals, manual testers, automation engineers (everyone designing tests)  
**Prerequisites**: Foundations of Software Testing  
**Duration**: 4–8 weeks  
**Learning Objectives**:
- Master test design techniques (boundary value analysis, equivalence partitioning, decision tables)
- Understand how to create maintainable test cases
- Learn to think about edge cases and failure modes
- Apply test design to realistic domains

**Modules**:
1. Test Design Fundamentals (reusable knowledge node)
2. Equivalence Partitioning (reusable knowledge node)
3. Boundary Value Analysis (reusable knowledge node)
4. Decision Table Testing (reusable knowledge node)
5. State Transition Testing (reusable knowledge node)
6. Error Guessing and Experience-Based Techniques
7. Combinatorial Testing
8. Test Case Organization and Maintenance
9. Applying Test Design to Real Projects
10. Common Mistakes in Test Design

**Modules Feed Into**: API Testing, Automation Testing, Security Testing, Performance Testing

---

### Path 3: API Testing
**Target Audience**: API testers, backend QA, automation engineers  
**Prerequisites**: Foundations, Manual Testing and Test Design (concepts apply equally to APIs)  
**Duration**: 4–6 weeks  
**Learning Objectives**:
- Understand REST, gRPC, GraphQL from a testing perspective
- Design API tests using the same techniques as manual testing
- Test error handling, edge cases, and integrations
- Validate data contracts and schemas

**Modules**:
1. API Testing Fundamentals
2. HTTP Basics for Testers
3. JSON and Data Validation
4. Designing API Test Cases (reuses test design concepts)
5. Authentication and Authorization Testing
6. Rate Limiting and Throttling
7. Cascading Failures and Integration Testing
8. API Security Testing (links to Security Testing path)
9. Performance Testing APIs (links to Performance Testing path)
10. API Testing Tools Comparison

**Modules Feed Into**: Automation Testing, Security Testing, Performance Testing

---

### Path 4: Database Testing
**Target Audience**: QA engineers, data specialists, backend testers  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Duration**: 3–5 weeks  
**Learning Objectives**:
- Write basic SQL for testing
- Understand data integrity and consistency
- Test ETL and data pipelines
- Validate data state after operations

**Modules**:
1. SQL Basics for QA
2. Writing Assertions with SQL
3. Data Integrity Testing
4. Transaction and Concurrency Testing
5. Referential Integrity
6. Testing ETL Pipelines
7. Data Validation Checklists
8. Performance Implications of Queries

**Modules Feed Into**: API Testing, Automation Testing, Performance Testing

---

### Path 5: Test Automation
**Target Audience**: Automation engineers, SDETs, developers writing tests  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Duration**: 6–12 weeks  
**Learning Objectives**:
- Build maintainable test automation
- Understand page object model and design patterns
- Integrate tests into CI/CD
- Write automation that developers and QA understand
- Test automation frameworks (Playwright, Selenium, etc.)

**Modules**:
1. Why Automate? (mindset)
2. Test Automation Principles
3. Designing Automation from Test Cases
4. Page Object Model
5. Locator Strategies and Best Practices
6. Waiting Strategies and Flakiness
7. Data-Driven Testing
8. CI/CD Integration
9. Parallel Execution and Performance
10. Maintaining Automation at Scale
11. Tool Comparison: Playwright vs. Selenium vs. Others
12. Common Automation Mistakes

**Modules Feed Into**: Performance Testing, Security Testing, CI/CD and Observability

---

### Path 6: Performance Testing
**Target Audience**: Performance engineers, backend QA, DevOps  
**Prerequisites**: Foundations, one of (Manual Testing, API Testing, Database Testing)  
**Duration**: 4–8 weeks  
**Learning Objectives**:
- Understand performance metrics and SLOs
- Design load, stress, spike, and soak tests
- Use performance testing tools (k6, JMeter, Gatling, Locust)
- Identify and troubleshoot performance issues
- Connect performance problems to architecture

**Modules**:
1. Performance Testing Fundamentals
2. Load, Stress, Spike, and Soak Testing Defined
3. Performance Metrics and SLOs
4. Load Testing Tools Comparison
5. Designing Load Tests That Reflect Reality
6. Baseline, Ramp, and Spike Profiles
7. Performance Reporting and Root Cause
8. Database Performance Testing (links to Database Testing path)
9. API Performance Under Load
10. Frontend Performance Testing
11. Common Performance Mistakes

**Modules Feed Into**: CI/CD and Observability, Security Testing

---

### Path 7: Security Testing
**Target Audience**: Security-focused QA, SDETs, developers responsible for security  
**Prerequisites**: Foundations, Manual Testing and Test Design  
**Duration**: 6–12 weeks  
**Learning Objectives**:
- Understand OWASP Top 10 from a testing perspective
- Threat model and design security tests
- Use security testing tools (Burp Suite, OWASP ZAP)
- Test authentication, authorization, injection, and data protection
- Shift-left security practices

**Modules**:
1. Security Testing Fundamentals
2. OWASP Top 10 Explained
3. Threat Modeling for Testers
4. Authentication Testing
5. Authorization and Access Control
6. Injection Testing (SQL, Command, XML)
7. XSS and CSRF
8. Encryption and Data Protection
9. API Security Testing (links to API Testing path)
10. Security Tools: Burp Suite vs. OWASP ZAP
11. Security in CI/CD
12. Compliance Testing (GDPR, HIPAA, PCI-DSS)

**Modules Feed Into**: CI/CD and Observability, Project Simulations

---

### Path 8: AI and Testing (Future-Focused)
**Target Audience**: QA engineers preparing for AI-driven testing, ML engineers  
**Prerequisites**: Foundations  
**Duration**: 4–6 weeks (evolving)  
**Learning Objectives**:
- Understand how AI changes QA work
- Test LLM outputs and AI-driven features
- Prompt testing and evaluation
- Synthetic data generation for testing
- Model evaluation and safety

**Modules** (v0.1 scope):
1. AI in Testing: Opportunity and Risk
2. Testing LLM-Generated Content
3. Prompt Testing Fundamentals
4. Evaluating AI Outputs
5. Synthetic Data Generation
6. Safety Testing for AI Systems
7. AI Evaluation Frameworks (DeepEval, RAGAS)
8. Hallucination Detection
9. Bias Testing in AI Systems

**Future Expansion** (v1.0+):
- Agent Testing (multi-step AI workflows)
- RAG Testing (retrieval-augmented generation)
- Model Evaluation (specialized)
- LLM Performance Benchmarking

**Modules Feed Into**: Project Simulations (AI-driven features)

---

### Path 9: Interview Preparation
**Target Audience**: Job seekers, career-changers, QA professionals  
**Prerequisites**: Foundations (minimum)  
**Duration**: 2–8 weeks (depends on depth)  
**Learning Objectives**:
- Understand QA interview patterns
- Practice scenario-based questioning
- Articulate testing judgment
- Demonstrate communication skills
- Showcase real-world problem-solving

**Modules**:
1. The QA Interview: What Companies Ask
2. Behavioral Interviews for QA
3. Technical Interviews: Test Design (connects to Manual Testing)
4. Technical Interviews: Automation (connects to Test Automation)
5. Technical Interviews: API Testing
6. Technical Interviews: Security Testing
7. System Design for QA (scalability, reliability)
8. Whiteboarding Test Cases
9. Salary Negotiation for QA Professionals
10. Mock Interviews (scenario-based)

**Modules Feed Into**: None (end state for this path)

---

### Path 10: Career and Leadership in QA
**Target Audience**: QA professionals, team leads, QA managers  
**Prerequisites**: Foundations + 1+ years QA experience  
**Duration**: Ongoing  
**Learning Objectives**:
- Build a testing strategy
- Lead QA teams and processes
- Communicate with product and engineering
- Measure and report testing impact
- Grow your QA career

**Modules**:
1. From QA Engineer to QA Lead
2. Building a Test Strategy
3. QA Process Design and Governance
4. Metrics That Matter
5. Communicating Test Results
6. Managing Technical Debt in Testing
7. Tool Selection and Vendor Evaluation
8. Onboarding QA Teams
9. Career Growth Paths in QA
10. QA in Agile, Waterfall, and Hybrid

**Modules Feed Into**: None (ongoing path)

---

## Knowledge Graph: Atomic Concepts

These concepts are taught once and referenced across multiple learning paths.

### Test Design (Reusable Across Paths)
- Boundary Value Analysis
- Equivalence Partitioning
- Decision Table Testing
- State Transition Testing
- Combinatorial Testing
- Error Guessing

### Quality Attributes (Reusable)
- Functionality
- Performance
- Security
- Usability
- Reliability
- Maintainability

### Metrics (Reusable)
- Code Coverage
- Defect Density
- Test Coverage
- Cyclomatic Complexity
- Mean Time to Repair (MTTR)

### Tools (Reusable References)
- Automation: Playwright, Selenium, Cypress, Robot Framework
- Performance: k6, JMeter, Gatling, Locust
- Security: Burp Suite, OWASP ZAP, Fortify
- API: Postman, REST Client, Bruno
- Database: SQL Developer, DBeaver, DataGrip

---

## Recommended Learning Orders

### For QA Professionals (Manual Testers)
1. Foundations of Software Testing
2. Manual Testing and Test Design
3. API Testing (optional, but recommended)
4. Database Testing (optional)
5. Interview Preparation (when job hunting)
6. Career and Leadership (after 2+ years)

### For Automation Engineers (SDETs)
1. Foundations of Software Testing
2. Manual Testing and Test Design (understanding before automation)
3. Test Automation
4. API Testing (often automated)
5. Performance Testing (optional, but valuable)
6. Security Testing (optional, but increasingly expected)
7. Interview Preparation (when job hunting)

### For Performance Engineers
1. Foundations of Software Testing
2. API Testing (to understand what you're testing)
3. Database Testing (to understand bottlenecks)
4. Performance Testing
5. Interview Preparation (when job hunting)

### For Security-Focused QA
1. Foundations of Software Testing
2. Manual Testing and Test Design
3. API Testing
4. Security Testing
5. Interview Preparation
6. Project Simulations (Banking, Healthcare)

### For Career Changers (No QA Experience)
1. Foundations of Software Testing
2. Manual Testing and Test Design
3. API Testing OR Test Automation (choose based on career interest)
4. Database Testing (foundational knowledge)
5. Interview Preparation
6. Career and Leadership

---

## Progression Visualization

```
                    Foundations (Gateway)
                           ↓
                    /              \
                   /                \
            Manual Testing      Automation
             Test Design             Testing
                   ↓                    ↓
          /         |         \      /   \
         /          |          \    /     \
      API          DB      Performance  Security
     Testing      Testing   Testing     Testing
        ↓           ↓           ↓          ↓
        \___________|___________|________/
                     ↓
            Project Simulations
                  (Real Work)
                     ↓
         Interview Prep / Leadership
```

---

## Design Decisions

**Decision 1: Knowledge Nodes Over Duplication**
- Boundary Value Analysis is taught once, then referenced in Manual Testing, API Testing, and Security Testing
- This prevents learners from seeing three different explanations of the same concept
- Updates to a concept propagate everywhere automatically

**Decision 2: Paths, Not Chapters**
- Learning paths allow specialization (an API tester doesn't need Database Testing, but might want Performance Testing)
- All paths build on Foundations (consistent baseline)
- Paths can branch and reconnect

**Decision 3: Tools as References, Not Subjects**
- We don't teach "How to use Playwright" — we teach "Test Automation Principles" and show Playwright as one example
- This keeps content evergreen as tools change
- Learners can apply principles to any tool

**Decision 4: Interview Prep Integrated**
- Each technical module includes interview questions
- Separate Interview Preparation path for comprehensive prep
- Connects learning to job market reality

---

## Future Expansion (v1.0+)

As TestAtlas grows, new paths can be added without breaking existing ones:
- **AI and Testing** (minimal in v0.1, expands significantly)
- **Accessibility Testing**
- **Localization Testing**
- **DevOps and QA** (CI/CD-focused)
- **Data Science and QA** (testing ML pipelines)

Each new path will connect to existing knowledge nodes, maintaining the graph structure.

---

## Entry Points by Role

| Role | Start Here | Next | Path |
|------|-----------|------|------|
| Junior QA | Foundations | Manual Testing | 1 → 2 → API → Automation → Interview |
| Manual Tester | Foundations | Manual Testing | 1 → 2 → API/Security → Interview |
| Automation Engineer | Foundations | Automation | 1 → 5 → Performance/Security |
| SDET | Foundations | Automation | 1 → 5 → API → Database → Performance |
| Performance Engineer | Foundations | Performance | 1 → 3 → Performance → Career |
| Security QA | Foundations | Security | 1 → 2 → Security → Interview |
| QA Lead | Foundations | Career | 1 → 10 (bring experience) |
| Career Changer | Foundations | Based on interest | 1 → (2 or 5) → ... |

---

## Maintenance Strategy

- **Quarterly Review**: Check each path for accuracy and currency
- **Concept Versioning**: Mark concepts that need updates (e.g., "Tools section last updated 2026-Q2")
- **Feedback Loop**: Learner feedback shapes path adjustments
- **New Content**: Always connect to existing paths; never create isolated modules

This architecture ensures TestAtlas scales from 50 pages to 500+ without becoming fragmented or duplicative.
