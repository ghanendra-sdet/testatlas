# Project Architecture

This document defines the structure and learning objectives for "Project Simulations" — realistic domain-based exercises where learners apply complete QA workflows.

## Design Principle

Projects are not toy examples. They're realistic product simulations where learners experience what QA work looks like in specific domains: how defects hide, how testing differs by domain, how QA connects to business outcomes.

Projects connect learning paths into real workflows: you design tests (Manual Testing), automate them (Automation), verify data integrity (Database Testing), test under load (Performance Testing), and think about security (Security Testing).

## The Nine Projects (v0.1–v1.0)

Each project is a complete domain simulation with setup, QA workflow, and verification.

### Project 1: Banking/FinTech Platform

**Domain**: A multi-currency payment platform with accounts, transfers, and reporting  
**Real-World Context**: Banking apps like Wise, PayPal, or BDDs like our own fintech experience  
**QA Challenges**:
- Financial accuracy (rounding, currency conversion, balance calculations)
- Concurrent transactions and race conditions
- Regulatory compliance (transaction limits, KYC verification)
- Security (fraud detection, account takeover)
- Performance (peak loads during market hours)

**Modules** (learning objectives):
1. Project Setup: Understanding the domain, API, database schema
2. Test Planning: What could go wrong in finance? (risk assessment)
3. Manual Testing: Account creation, transfers, edge cases
4. API Testing: Payment endpoints, authorization, error handling
5. Database Testing: Ledger integrity, ACID compliance
6. Automation: End-to-end transfer workflows
7. Security Testing: Injection, authorization, data leakage
8. Performance Testing: Load testing payment processing
9. Bug Museum: Real banking defects (balance calculation, race conditions)
10. Postmortem: What we learned about fintech testing

**Learning Outcomes**:
- Understand financial product QA nuances
- Test for data consistency in high-transaction volume
- Think about regulatory compliance in testing

---

### Project 2: E-Commerce Platform

**Domain**: Multi-vendor marketplace with products, cart, checkout, and orders  
**Real-World Context**: Amazon, Shopify, or eBay  
**QA Challenges**:
- Inventory management (overselling, stock races)
- Cart consistency (items removed, prices change)
- Payment processing (retries, chargebacks)
- Search and recommendations (ranking, relevance)
- Peak load (Black Friday, flash sales)

**Modules**:
1. Project Setup: Product catalog, inventory, orders
2. Test Planning: What breaks in e-commerce? (risk assessment)
3. Manual Testing: Search, add to cart, checkout flow
4. API Testing: Product APIs, order creation, inventory updates
5. Database Testing: Inventory consistency, order state
6. Automation: Complete purchase flow from search to confirmation
7. Security Testing: Payment card data, CSRF, injection
8. Performance Testing: Search under load, checkout under peak traffic
9. Bug Museum: Real e-commerce defects (overselling, race conditions, payment failures)
10. Postmortem: What we learned about e-commerce testing

**Learning Outcomes**:
- Understand supply chain and inventory testing
- Test cart consistency under concurrent operations
- Think about payment processing edge cases

---

### Project 3: Healthcare Platform

**Domain**: Patient scheduling, records, and appointment booking  
**Real-World Context**: ZocDoc, Telemedicine apps, hospital portals  
**QA Challenges**:
- Patient safety (wrong record access, scheduling errors)
- Regulatory compliance (HIPAA, GDPR)
- Race conditions (double-booking, cancelled appointments)
- Data accuracy (medical history, prescriptions)
- Uptime and reliability (medical systems can't go down)

**Modules**:
1. Project Setup: Patient records, appointment slots, provider schedules
2. Test Planning: Safety-critical QA (what's the cost of failure?)
3. Manual Testing: Booking appointments, viewing records, cancellations
4. API Testing: Patient data access, authorization, filtering
5. Database Testing: Record integrity, HIPAA compliance, audit trails
6. Automation: End-to-end appointment booking with multiple users
7. Security Testing: Patient data isolation, access control, encryption
8. Performance Testing: Peak load during booking windows
9. Bug Museum: Real healthcare defects (double-booking, data leaks, access violations)
10. Postmortem: What we learned about safety-critical testing

**Learning Outcomes**:
- Understand compliance-driven testing
- Test for data isolation and privacy
- Think about safety implications of defects

---

### Project 4: HR/HRMS Platform

**Domain**: Employee profiles, payroll, leave management, performance reviews  
**Real-World Context**: Workday, BambooHR, SAP SuccessFactors  
**QA Challenges**:
- Payroll accuracy (tax withholding, deductions)
- Workflow routing (approvals, escalations)
- Data sensitivity (salaries, performance ratings)
- Concurrent updates (multiple managers editing employee data)
- Compliance (labor laws, tax regulations vary by region)

**Modules**:
1. Project Setup: Employee records, payroll structure, leave policies
2. Test Planning: What breaks in HR systems? (risk assessment)
3. Manual Testing: Employee profile updates, leave requests, payroll
4. API Testing: Employee data endpoints, leave API, payroll calculations
5. Database Testing: Referential integrity (departments, managers), workflow state
6. Automation: Complete leave request flow from request to approval
7. Security Testing: Data access control, salary confidentiality, audit trails
8. Performance Testing: Payroll processing under load, simultaneous updates
9. Bug Museum: Real HRMS defects (payroll calculation errors, workflow breaks)
10. Postmortem: What we learned about HR/payroll testing

**Learning Outcomes**:
- Understand workflow and approval system testing
- Test for concurrent data updates
- Think about financial accuracy in non-financial systems

---

### Project 5: Insurance Platform

**Domain**: Policy management, claims processing, premium calculations  
**Real-World Context**: Lemonade, Geico, PolicyBazaar  
**QA Challenges**:
- Premium calculation (underwriting, risk assessment)
- Claims processing (documents, validation, payments)
- Regulatory compliance (insurance regulations vary by region)
- Policy lifecycle (new, renewal, cancellation)
- Risk of financial loss (undercalculated premiums, overpaid claims)

**Modules**:
1. Project Setup: Policy types, coverage, premium tables, claims
2. Test Planning: What could go wrong? (financial impact)
3. Manual Testing: Policy creation, claims filing, renewal
4. API Testing: Premium calculation API, claims status, policy endpoints
5. Database Testing: Premium accuracy, claim state, audit trails
6. Automation: Complete policy lifecycle from purchase to renewal
7. Security Testing: Policy data access, PII protection
8. Performance Testing: Peak load during open enrollment
9. Bug Museum: Real insurance defects (premium miscalculation, claim denial errors)
10. Postmortem: What we learned about insurance testing

**Learning Outcomes**:
- Understand risk-based pricing and calculation testing
- Test for regulatory compliance in financial products
- Think about long-term data consistency (policies last years)

---

### Project 6: CRM Platform

**Domain**: Customer records, opportunity pipeline, sales automation  
**Real-World Context**: Salesforce, HubSpot, Pipedrive  
**QA Challenges**:
- Data synchronization (updates visible across views)
- Opportunity pipeline (stage transitions, forecasting)
- Integration (email, calendar, third-party data)
- Custom fields (extensibility without breaking)
- Concurrent updates (sales team editing the same record)

**Modules**:
1. Project Setup: Accounts, contacts, opportunities, pipeline
2. Test Planning: What breaks in CRM systems?
3. Manual Testing: Creating accounts, moving through pipeline, reporting
4. API Testing: Account endpoints, opportunity updates, bulk operations
5. Database Testing: Data consistency across entities, referential integrity
6. Automation: Complete pipeline flow (lead → opportunity → closed deal)
7. Security Testing: Account/opportunity isolation, role-based access
8. Performance Testing: Large dataset performance, concurrent user updates
9. Bug Museum: Real CRM defects (sync issues, permission problems)
10. Postmortem: What we learned about CRM testing

**Learning Outcomes**:
- Understand multi-entity data models
- Test for data consistency across views
- Think about extensibility testing

---

### Project 7: Food Delivery Platform

**Domain**: Restaurant catalog, order placement, delivery tracking  
**Real-World Context**: DoorDash, Uber Eats, Swiggy  
**QA Challenges**:
- Real-time location tracking (accuracy, latency)
- Inventory management (restaurant items go out of stock)
- Pricing (surge pricing, promotions, taxes)
- Payment and refunds (delivery issues, cancellations)
- Peak load (lunch time, dinner time)

**Modules**:
1. Project Setup: Restaurants, menus, orders, delivery tracking
2. Test Planning: What breaks in delivery apps?
3. Manual Testing: Searching, ordering, tracking delivery
4. API Testing: Restaurant endpoints, order creation, tracking API
5. Database Testing: Order state, inventory, delivery status
6. Automation: Complete order flow from search to delivery
7. Security Testing: Payment data, user data isolation, fraud detection
8. Performance Testing: Map/tracking under peak traffic
9. Bug Museum: Real delivery defects (tracking lag, inventory sync)
10. Postmortem: What we learned about real-time system testing

**Learning Outcomes**:
- Understand real-time system testing
- Test location services and map integrations
- Think about peak load on specific features (not uniform)

---

### Project 8: Ride Sharing Platform

**Domain**: Ride matching, pricing, driver/rider communication  
**Real-World Context**: Uber, Lyft, Ola  
**QA Challenges**:
- Real-time matching (algorithm, fairness)
- Pricing surge (dynamic pricing, calculation accuracy)
- Driver/rider communication (latency, reliability)
- Location accuracy (GPS drift, urban canyons)
- Safety (driver verification, emergency contact)

**Modules**:
1. Project Setup: Drivers, riders, rides, pricing
2. Test Planning: What breaks in ride sharing?
3. Manual Testing: Requesting rides, driver perspective, tracking
4. API Testing: Ride request, matching, pricing, communication
5. Database Testing: Ride state, pricing calculations, driver ratings
6. Automation: Complete ride flow from request to payment
7. Security Testing: Driver/rider privacy, payment data, emergency features
8. Performance Testing: Matching algorithm under peak traffic
9. Bug Museum: Real ride sharing defects (surge pricing errors, false matches)
10. Postmortem: What we learned about matching algorithm testing

**Learning Outcomes**:
- Understand algorithm testing (matching, pricing)
- Test real-time communication systems
- Think about fairness in algorithmic systems

---

### Project 9: Social Media Platform

**Domain**: Profiles, posts, feeds, comments, messaging  
**Real-World Context**: Twitter/X, Facebook, Instagram  
**QA Challenges**:
- Feed ranking (algorithm, bias, viral content)
- Concurrent updates (post edits, deletes, comments)
- Spam and abuse (content moderation, detection)
- Privacy (who sees what, data leakage)
- Scale (millions of users, billions of posts)

**Modules**:
1. Project Setup: Users, profiles, posts, feed, comments
2. Test Planning: What breaks in social platforms?
3. Manual Testing: Creating posts, commenting, following, feed experience
4. API Testing: Post creation, feed ranking, comment threads
5. Database Testing: Post state, comment hierarchy, like counts
6. Automation: Complete user flow (post → comment → like)
7. Security Testing: Privacy settings, XSS in comments, account takeover
8. Performance Testing: Feed rendering under load, search/discovery
9. Bug Museum: Real social media defects (privacy leaks, algorithm bias)
10. Postmortem: What we learned about social platform testing

**Learning Outcomes**:
- Understand feed/algorithm testing
- Test privacy and security at scale
- Think about content moderation and spam detection

---

## Project Structure Template

Each project includes:

1. **Project Overview** (1–2 pages)
   - Domain description
   - Real-world context and examples
   - Key QA challenges
   - Why this domain matters

2. **Setup Instructions** (2–3 pages)
   - How to access the project environment
   - API documentation summary
   - Database schema summary
   - Key endpoints and workflows

3. **QA Workflow Modules** (1 page each)
   - Manual Testing: Test cases for core scenarios
   - API Testing: Test design for APIs
   - Database Testing: Data validation queries
   - Automation: Automation framework and patterns
   - Security Testing: Threat model and test cases
   - Performance Testing: Load test scenarios

4. **Bug Museum Entries** (2–3 entries)
   - Real defects from this domain
   - Root cause analysis
   - How QA would find it

5. **Postmortem** (1–2 pages)
   - Key lessons learned
   - Domain-specific testing principles
   - What makes this domain different

---

## Project Progression

Learners can tackle projects in order or jump to their domain of interest:

**Recommended Path**:
1. Start with **Banking** (introduces financial accuracy concerns)
2. Pick based on interest: E-Commerce, Healthcare, CRM, etc.

**Expert Path**:
1. Try 2–3 projects in different domains
2. Notice patterns across domains
3. Develop domain expertise

---

## Project-to-Learning-Path Connections

Projects reinforce concepts from learning paths:

| Project | Connects To |
|---------|-------------|
| Banking | Manual Testing, API Testing, Database Testing, Performance Testing, Security Testing |
| E-Commerce | Manual Testing, Automation, Performance Testing, Security Testing |
| Healthcare | Manual Testing, API Testing, Database Testing, Security Testing (compliance) |
| HRMS | Database Testing, Automation, Performance Testing (payroll) |
| Insurance | Database Testing, API Testing, Performance Testing (calculations) |
| CRM | Automation, API Testing, Database Testing |
| Food Delivery | Automation, Performance Testing, Real-time systems |
| Ride Sharing | Performance Testing, API Testing, Algorithm testing |
| Social Media | Automation, Performance Testing, Security Testing (scale) |

---

## Success Criteria for Projects

After completing a project, learner should:

1. **Understand the domain**: Why this type of product matters, what breaks, real costs
2. **Design realistic tests**: Manual test cases that catch domain-specific defects
3. **Apply multiple QA disciplines**: Manual, automation, security, performance
4. **Think about risk**: What failure modes matter most in this domain?
5. **Connect to real work**: See how QA decisions impact business outcomes

Projects are not small exercises; they're how learners transition from learning to working.
