# Lab Architecture

This document defines the structure and learning objectives for "Labs" — hands-on exercises where learners write code, design tests, and practice real QA skills.

## Design Principle

Labs are the bridge between concept and practice. After reading about test automation patterns, learners write actual automation. After learning SQL, they write queries to verify data. Labs are self-contained, runnable environments with clear success criteria.

## Types of Labs

### 1. Automation Labs

**Purpose**: Practice writing maintainable test automation  
**Technology**: Playwright (primary), Selenium (secondary)  
**Difficulty**: Beginner → Advanced

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| Todo App Basics | Beginner | Locators, basic actions, assertions | 30 min |
| Login Workflow | Beginner | Wait strategies, form submission | 45 min |
| E-Commerce Checkout | Intermediate | Page objects, data-driven tests | 90 min |
| Flaky Test Diagnosis | Intermediate | Debugging timing issues, wait strategies | 60 min |
| Banking App | Advanced | Complex workflows, state management | 120 min |

**Lab Structure**:
1. **Setup Instructions**: Install dependencies, clone the sample app
2. **Acceptance Criteria**: What the test should verify (not how to write it)
3. **Scaffolding Code**: Skeleton to build on (if helpful)
4. **Solution**: Complete working example
5. **Reflection**: What was hard? What would you do differently?

**Example Lab: Todo App Basics**
```
Exercise: Write a test that adds a todo and verifies it appears in the list

Acceptance Criteria:
✓ Test navigates to the todo app
✓ Test adds a new todo "Buy milk"
✓ Test verifies the todo appears in the list
✓ Test verifies the todo text is exactly "Buy milk"

Starter Code:
  test('add a todo', async ({ page }) => {
    // Your code here
  });

Expected Test Run Output:
  ✓ add a todo (2s)
```

---

### 2. API Testing Labs

**Purpose**: Practice designing and executing API tests  
**Technology**: curl, Postman, REST Client (code-based preferred)  
**Difficulty**: Beginner → Advanced

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| GET Request Basics | Beginner | Query parameters, response parsing | 20 min |
| Authentication | Beginner | API keys, token management | 30 min |
| Error Handling | Intermediate | Error responses, edge cases | 45 min |
| Banking API | Intermediate | Complex payloads, validation | 60 min |
| Cascading Failures | Advanced | Integration testing, retry logic | 90 min |

**Lab Structure**:
1. **Setup**: Access the test API, example requests
2. **Acceptance Criteria**: What the test should verify
3. **Starter Code**: Example requests to build on
4. **Solution**: Complete test scenarios
5. **Reflection**: What was surprising? What edge cases exist?

**Example Lab: Authentication**
```
Exercise: Test authentication on the banking API

Acceptance Criteria:
✓ Request with no API key returns 401
✓ Request with invalid API key returns 401
✓ Request with valid API key returns 200
✓ Valid API key allows access to user data

Starter Code:
  # No authentication
  curl https://api.testbank.com/accounts

  # With API key
  curl -H "Authorization: Bearer YOUR_KEY" https://api.testbank.com/accounts
```

---

### 3. SQL Labs

**Purpose**: Practice writing SQL assertions for testing  
**Technology**: PostgreSQL (primary), MySQL (secondary)  
**Difficulty**: Beginner → Intermediate

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| SELECT Basics | Beginner | Querying, WHERE, ORDER BY | 20 min |
| Joins | Beginner | INNER JOIN, LEFT JOIN | 30 min |
| Data Validation | Intermediate | Counting rows, verifying state | 45 min |
| Transaction Testing | Intermediate | ACID properties, rollback | 60 min |
| ETL Verification | Intermediate | Comparing before/after state | 60 min |

**Lab Structure**:
1. **Setup**: Database access, schema documentation
2. **Acceptance Criteria**: What queries should return
3. **Starter Code**: Incomplete SQL queries
4. **Solution**: Complete queries
5. **Reflection**: What would this query catch? When would it fail?

**Example Lab: Data Validation**
```
Exercise: Write SQL to verify a bank transfer was recorded correctly

Acceptance Criteria:
✓ Sender's balance decreased by $100
✓ Receiver's balance increased by $100
✓ Transaction record exists with correct amounts
✓ Transaction status is 'completed'

Starter SQL:
  SELECT * FROM transactions WHERE id = ?
  SELECT balance FROM accounts WHERE id = ?

Your Task:
  Write a query that verifies all four criteria after a transfer
```

---

### 4. Performance Testing Labs

**Purpose**: Practice designing and executing performance tests  
**Technology**: k6 (primary), JMeter (secondary)  
**Difficulty**: Intermediate → Advanced

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| Baseline Test | Intermediate | Single-user performance, metrics | 30 min |
| Load Test | Intermediate | Gradual ramp-up, sustained load | 60 min |
| Spike Test | Advanced | Sudden traffic spike, recovery | 45 min |
| Bottleneck Analysis | Advanced | Identifying slow endpoints | 90 min |

**Lab Structure**:
1. **Setup**: k6 installed, test target available
2. **Acceptance Criteria**: Performance thresholds
3. **Starter Code**: Basic load test script
4. **Solution**: Complete test with analysis
5. **Reflection**: Where's the bottleneck? How would you fix it?

**Example Lab: Baseline Test**
```
Exercise: Measure response time for search endpoint under single-user load

Acceptance Criteria:
✓ Test completes 100 searches
✓ Measure p50, p95, p99 latency
✓ All requests return 200
✓ Response time < 500ms (p95)

Starter Code:
  import http from 'k6/http';
  import { check } from 'k6';

  export default function() {
    // Your test here
  }

Expected Output:
  p50.......: 123ms
  p95.......: 456ms
  p99.......: 789ms
```

---

### 5. Security Testing Labs

**Purpose**: Practice identifying and testing for security issues  
**Technology**: Burp Suite Community, curl  
**Difficulty**: Intermediate → Advanced

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| Input Validation | Intermediate | Testing boundaries, special chars | 45 min |
| SQL Injection | Intermediate | Identifying injection points | 60 min |
| Authorization | Intermediate | Testing access control | 45 min |
| XSS Prevention | Advanced | Finding XSS vulnerabilities | 60 min |

**Lab Structure**:
1. **Setup**: Vulnerable test app, Burp Suite
2. **Acceptance Criteria**: Security issues to find
3. **Starter Code**: How to interact with the test app
4. **Solution**: Exploit payloads and fixes
5. **Reflection**: Why was this vulnerable? How would you prevent it?

**Example Lab: Input Validation**
```
Exercise: Test an API endpoint's input validation

Acceptance Criteria:
✓ Find at least 3 validation issues
✓ Test empty strings
✓ Test very long strings (1MB+)
✓ Test special characters (', ", <>, etc.)
✓ Report: which inputs are validated, which aren't?

Starter Code:
  # Test with empty amount
  curl -X POST https://testbank.com/transfer -d '{"amount": ""}'

  # Test with negative amount
  curl -X POST https://testbank.com/transfer -d '{"amount": -1000}'
```

---

### 6. Test Design Labs

**Purpose**: Practice designing test cases using systematic techniques  
**Technology**: Google Docs, text editor (tools don't matter)  
**Difficulty**: Beginner → Intermediate

| Lab | Difficulty | Concepts Practiced | Time |
|-----|-----------|-------------------|------|
| Boundary Value Analysis | Beginner | Testing at limits | 30 min |
| Equivalence Partitioning | Beginner | Grouping test cases | 30 min |
| Decision Tables | Intermediate | Testing combinations | 45 min |
| Real Feature Testing | Intermediate | Designing complete test plan | 90 min |

**Lab Structure**:
1. **Feature Spec**: What are we testing?
2. **Acceptance Criteria**: What should your test plan cover?
3. **Starter**: Example test cases (maybe 3–5)
4. **Solution**: Complete test plan
5. **Reflection**: Did you miss any cases? How would you prioritize?

**Example Lab: BVA for Date Field**
```
Exercise: Design test cases for a date field (01/01/1900 – 12/31/2099)

Acceptance Criteria:
✓ Test lower boundary (01/01/1900)
✓ Test just below lower (12/31/1899)
✓ Test just above upper (01/01/2100)
✓ Test upper boundary (12/31/2099)
✓ Explain why each test matters

Your Test Cases:
  1. Enter 01/01/1900
     Expected: Accepted
  2. ...

Reflection:
  - Which boundary is most important?
  - What about leap years?
  - What about invalid dates (02/30)?
```

---

## Lab Environment Setup

### Local Setup

For labs that run locally, provide:
1. Dependency installation instructions (npm, pip, apt)
2. Sample app setup (clone repo, start server)
3. Verification (how to know it's working)

**Example**:
```bash
# Install dependencies
npm install

# Start the test app
npm run start-test-app

# Run a test
npm test
```

### Cloud/Sandbox Setup

For labs requiring external services (APIs, databases):
1. Provide test credentials or sandbox environment
2. Document API endpoints
3. Show example successful requests
4. Explain cleanup (don't leave test data behind)

---

## Lab Success Criteria

Each lab should be:

1. **Self-Contained**: No assumptions about prior labs
2. **Runnable**: Works locally without installation pain
3. **Clear Success**: Learner knows when they're done
4. **Reflective**: Asks learner to think, not just copy-paste
5. **Scaffolded**: Starter code for beginners, none for advanced
6. **Realistic**: Mirrors real QA work, not toy problems

---

## Lab Progression Path

**Beginner QA Starting Out**:
1. Automation Lab: Todo App Basics
2. API Lab: GET Request Basics
3. SQL Lab: SELECT Basics
4. Test Design Lab: BVA
5. Automation Lab: Login Workflow

**Automation Engineer Specializing**:
1. Automation Lab: Page Objects
2. Automation Lab: Flaky Test Diagnosis
3. Performance Lab: Baseline Test
4. Automation Lab: Banking App (complex)

**Performance Engineer Specializing**:
1. Performance Lab: Baseline
2. Performance Lab: Load Test
3. Performance Lab: Spike Test
4. Performance Lab: Bottleneck Analysis

---

## Contributing Labs

Contributors can add labs by:
1. Creating a `/labs/` folder in the appropriate category
2. Following the lab structure (setup, criteria, starter, solution)
3. Testing the lab (can a learner complete it in the stated time?)
4. Providing feedback guidance (reflection questions)

Each lab is versioned with Docusaurus, so labs can evolve as tools/platforms change.

---

## Future Lab Types

As TestAtlas expands:
- **Browser Extension Testing** (Chrome, Firefox)
- **Mobile Testing Labs** (Appium, mobile platforms)
- **AI/LLM Testing Labs** (prompt testing, evaluation)
- **Accessibility Labs** (WCAG compliance, screen readers)
- **Load Testing with Microservices** (Docker, Kubernetes)
- **Contract Testing** (Pact, schema validation)

Each new type follows the same structure: clear setup, acceptance criteria, reflection.
