# Bug Museum

This document defines the structure for documenting real production defects in TestAtlas: the "Bug Museum" where learners study actual bugs that escaped to production and learn how to find and prevent similar defects.

## Design Principle

The Bug Museum is TestAtlas's secret weapon. Each bug entry is a real defect from production, documented with:
- What happened (symptom)
- Why it happened (root cause)
- How QA would find it (test strategy)
- How to prevent it (lessons learned)

Learners see that defects are not random; they follow patterns. Understanding these patterns makes them better testers.

## Relationship to the Real-World Experience Library

The Bug Museum and the [Real-World Experience Library](./REAL_WORLD_EXPERIENCE_LIBRARY.md) (REWL) cover overlapping raw material — real production defects — but serve different purposes, and every contributor should know which one they're writing for:

- **REWL is the intake taxonomy.** Its "Production Defects" category is where a real defect first gets logged, tagged, and categorized alongside eight other experience types (postmortems, anti-patterns, root causes, edge cases, bottlenecks, integration failures, strategy decisions, failed releases). It doesn't have a fixed page template — entries can be short.
- **Bug Museum is the publication format.** When a REWL "Production Defect" entry is substantial enough to teach as a standalone lesson (has a clear root cause, a test that would have caught it, and a generalizable lesson), it gets written up using the full Bug Museum structure below and published as its own page.
- **Rule of thumb**: If it's a single, well-understood defect → Bug Museum page. If it's a multi-system or multi-week systemic failure → a [Case Study](./CASE_STUDIES.md) instead. If it's a raw, not-yet-fully-written-up observation → log it in REWL first; promote it to a Bug Museum page later.

## Bug Entry Structure

Each bug gets its own page: `bug-museum/DOMAIN/bug-name.md`

### Standard Sections

#### 1. **The Story** (1–2 paragraphs)
What happened in production? From the perspective of someone who experienced it.

Example:
> **The Banking Balance Bug**
> 
> A customer at a major bank transferred $500 to a friend. The money left their account, but the friend never received it. Confused, the customer transferred another $500. Now $1,000 was missing. The customer called support, escalated to regulators, and the bank faced a compliance investigation and customer compensation.

#### 2. **The Impact** (1 paragraph)
- **Business Cost**: Money lost, customer churn, reputation damage, regulatory fines
- **User Impact**: Confusion, financial loss, trust erosion
- **Engineering Effort**: Time spent on emergency fix and postmortem

Example:
> This bug affected ~0.5% of transfers over a 4-week period. 500+ customers were impacted. The bank paid $2M in customer compensation and $500K in fines. Engineering spent 2 weeks on the emergency fix and investigation.

#### 3. **The Root Cause** (1–2 paragraphs)
What was the underlying problem?

Example:
> The bug was a race condition in the transfer processing pipeline. When two transfers were processed concurrently for the same account:
> 1. Transfer A reads balance: $1,000
> 2. Transfer B reads balance: $1,000
> 3. Transfer A deducts $500, writes: $500
> 4. Transfer B deducts $500, writes: $500
> 
> Both transfers succeeded, but only one should have. The second transfer should have read $500, not $1,000.

#### 4. **The Test That Would Have Found It** (1–2 paragraphs)
Specifically, how would QA design a test to catch this?

Example:
> A concurrency test would catch this:
> 
> **Test: Concurrent transfers from the same account**
> - Account starts with $1,000
> - Thread 1: Transfer $500 to Account B
> - Thread 2: Transfer $500 to Account C (at same time as Thread 1)
> - Verify: Account A has $0 (not $500)
> - Verify: Account B has $500
> - Verify: Account C has $500
> 
> This test fails on the buggy code (Account A ends with $500) and passes on the fixed code.

#### 5. **Why QA Didn't Catch It** (1 paragraph)
What prevented QA from finding this?

Example:
> QA tested transfers, but not concurrent transfers. The assumption was: "The database handles concurrency." This is a common gap: QA focuses on single-user workflows, missing race conditions that only appear under load or with specific timing.

#### 6. **The Lesson** (2–3 bullet points)
What testing principle is illustrated here?

Example:
> - **Concurrency bugs are hidden in normal workflows**: They require specific timing to reproduce. Automated tests of single users won't catch them.
> - **Financial systems need concurrency testing**: Any shared resource (account balance, inventory) that can be modified concurrently must be tested with concurrent access.
> - **Load testing finds concurrency bugs**: Running the same operation 100 times in parallel is how this bug would surface.

#### 7. **Prevention Strategy** (1 paragraph)
How would the team prevent this in the future?

Example:
> - Add concurrency tests to the test suite (run transfers simultaneously)
> - Add performance testing to pre-release (500+ concurrent transfers)
> - Use database locking or optimistic locking in the code review
> - Add integration tests between the app and database to verify transaction isolation

---

## Bug Categories

Bugs are tagged by domain and type, making them discoverable:

### By Domain
- Banking/FinTech
- E-Commerce
- Healthcare
- HRMS
- Insurance
- CRM
- Food Delivery
- Ride Sharing
- Social Media

### By Type (Root Cause)

| Type | Example | Learning Area |
|------|---------|----------------|
| **Race Condition** | Two transfers process simultaneously | Concurrency, Database Testing |
| **Off-by-One Error** | Pagination shows wrong results | API Testing, Database Testing |
| **Missing Validation** | Negative amounts accepted | Input Validation, Security Testing |
| **Authorization Bypass** | User sees another user's data | Security Testing, API Testing |
| **Calculation Error** | Price tax calculated incorrectly | Database Testing, Test Design |
| **Timeout/Performance** | Feature slow under load | Performance Testing |
| **Null Pointer Exception** | App crashes on empty response | Error Handling, Edge Cases |
| **State Management** | Feature broken after user logs out | Test Design, Automation |
| **Integration Failure** | Third-party API integration fails | API Testing, Error Handling |
| **Data Consistency** | Cache out of sync with database | Database Testing, Concurrency |

### By Severity

| Severity | Impact | Example |
|----------|--------|---------|
| **Critical** | User data loss, regulatory violation, financial loss | Race condition loses transfers |
| **High** | Major feature broken, significant user impact | Login always fails for 10% of users |
| **Medium** | Feature partially broken, workaround exists | Pagination off by one |
| **Low** | Cosmetic or rare edge case | Button text misaligned in one language |

---

## Example Bug Entries (Placeholder Structure)

### Bug 1: Banking Race Condition
**File**: `bug-museum/banking/race-condition-transfers.md`
- **Domain**: Banking
- **Type**: Race Condition
- **Severity**: Critical
- **Discovered**: After 4 weeks in production
- **Test Type That Would Have Found It**: Concurrency + Performance Testing

### Bug 2: E-Commerce Overselling
**File**: `bug-museum/ecommerce/overselling-inventory.md`
- **Domain**: E-Commerce
- **Type**: Race Condition
- **Severity**: High
- **Discovered**: During Black Friday surge
- **Test Type That Would Have Found It**: Load Testing + Concurrency Testing

### Bug 3: Healthcare Double-Booking
**File**: `bug-museum/healthcare/double-booking-appointments.md`
- **Domain**: Healthcare
- **Type**: Race Condition
- **Severity**: Critical (patient safety)
- **Discovered**: During peak booking hours
- **Test Type That Would Have Found It**: Concurrency Testing + State Transitions

### Bug 4: SQL Injection in Search
**File**: `bug-museum/ecommerce/sql-injection-search.md`
- **Domain**: E-Commerce
- **Type**: Security Vulnerability
- **Severity**: Critical
- **Discovered**: In security audit (before production)
- **Test Type That Would Have Found It**: Security Testing + API Testing

### Bug 5: Authorization Bypass
**File**: `bug-museum/crm/authorization-bypass-customer-data.md`
- **Domain**: CRM
- **Type**: Authorization Bypass
- **Severity**: Critical (data breach)
- **Discovered**: Through user complaint
- **Test Type That Would Have Found It**: Security Testing + API Testing

---

## Tagging and Discovery

Each bug is tagged for easy discovery:

```yaml
---
title: "Banking: Race Condition in Money Transfers"
domain: "Banking"
bug_type: "Race Condition"
severity: "Critical"
discovered_stage: "Production"
learning_paths: 
  - "Database Testing"
  - "Performance Testing"
  - "API Testing"
test_types:
  - "Concurrency Testing"
  - "Performance Testing"
  - "Integration Testing"
keywords: ["race condition", "concurrency", "financial accuracy", "transactions"]
---
```

---

## Bug Count Target

**Phase v0.1**: 5–10 bugs (foundational patterns)  
**Phase v0.5**: 20–30 bugs (depth in each domain)  
**Phase v1.0**: 50+ bugs (comprehensive coverage)

---

## Adding Bugs to the Museum

### Contributor Guidelines

1. **Use Real Bugs**: Only documented production defects (not hypothetical)
2. **Anonymize**: Don't expose customer data, specific company names (use "a banking customer," "a major e-commerce platform")
3. **Verify the Story**: Confirm the root cause and impact with teammates
4. **Create the Test**: Write the actual test case that would find the bug
5. **Extract the Lesson**: Make it generalizable (not specific to one codebase)

### Submission Format

```markdown
# [Bug Name]

[Story: 1–2 paragraphs describing what happened]

## Impact
- Business: [cost]
- Users: [how they were affected]
- Engineering: [effort to fix]

## Root Cause
[What was the underlying problem? 1–2 paragraphs]

## The Test
[Specific test case that would have found this. Include code if helpful.]

## Why It Wasn't Caught
[What testing gap allowed this to escape?]

## Lesson
- [Principle 1]
- [Principle 2]
- [Principle 3]

## Prevention
[How the team would prevent this going forward]
```

---

## Bug Museum in Learning Paths

Bugs are referenced throughout TestAtlas:

- **Performance Testing path**: Links to "Overselling Under Load" bug
- **Concurrency section**: Links to "Race Condition in Transfers"
- **API Testing path**: Links to "Authorization Bypass" bug
- **Security Testing path**: Links to "SQL Injection" bug
- **Database Testing path**: Links to "Data Consistency" bugs

---

## The Power of the Bug Museum

After reading 10–20 real bugs, learners notice patterns:

1. **Concurrency bugs** are common and hide in normal workflows
2. **Authorization bugs** often miss edge cases (team members, deleted users)
3. **Calculation bugs** come from assumptions about data ranges
4. **Performance bugs** surface only under realistic load
5. **Integration bugs** fail when external services are slow or unavailable

These patterns become the foundation of effective testing.

---

## Future: Interactive Bug Analysis

In v1.0+, the Bug Museum could include:
- **Interactive Traces**: Step through the race condition as it happens
- **Timeline Diagrams**: Show concurrent operations over time
- **Comparative Testing**: See the test run against buggy vs. fixed code
- **Community Contributions**: Learners submit bugs they've encountered
- **Search and Filter**: Find bugs by domain, severity, test type

The Bug Museum is the bridge between theory and practice: real defects, real costs, real testing strategies.
