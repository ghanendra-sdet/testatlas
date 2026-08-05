---
title: "Pre-Load-Testing Checklist (JMeter)"
sidebar_label: "Pre-Load-Testing Checklist"
description: "An eleven-section, print-and-use checklist for preparing a JMeter load test — objectives, environment readiness, load profile, test data, script validation, monitoring, and reporting."
keywords: ["load testing checklist", "JMeter checklist", "performance test readiness", "pre-load-test checklist"]
last_reviewed: "2026-08-05"
---

# Pre-Load-Testing Checklist (JMeter)

A practical, print-and-use checklist for preparing a JMeter load test, worked through against AtlasBank's International Transfer feature — the same feature used throughout [Performance Testing v1.0](/learning-paths/performance-testing/what-is-performance-testing). Every item below traces back to a concept that path teaches in full; this page is the condensed, operational form of it.

## 1. Business & Testing Objectives

- [ ] **Purpose of the test clearly defined.** *Example*: "Evaluate the International Transfer feature's stability and correctness-preserving performance under Load, Stress, Spike, and Soak conditions ahead of the Q3 promotional campaign, per [Performance Testing Strategy](/learning-paths/performance-testing/performance-testing-strategy)."
- [ ] **Business scenarios (critical flows) identified.** *Example*: transfer submission, compliance-aggregation check, balance debit/credit, confirmation and notification delivery.
- [ ] **Success criteria / SLOs defined.** *Example*: p95 response time under 1,500ms at expected peak; error rate under 0.1%; zero data-consistency defects; graceful recovery after stress/spike — see [Performance Metrics and SLAs](/learning-paths/performance-testing/performance-metrics-and-slas).
- [ ] **Key metrics identified.** Throughput (TPS), p50/p90/p95/p99 latency, error rate, concurrency, CPU/memory utilization, database connection-pool usage, queue depth — see [Performance Metrics and SLAs](/learning-paths/performance-testing/performance-metrics-and-slas) and [Bottleneck Analysis and Monitoring](/learning-paths/performance-testing/bottleneck-analysis-and-monitoring).

## 2. Test Environment Readiness

- [ ] **Environment matches production-like configuration** — infrastructure specs, service configuration, and worker pool sizing genuinely comparable to production, per [Performance Test Environment](/learning-paths/performance-testing/performance-test-environment).
- [ ] **Network conditions comparable to production** — no artificial throttling or unrepresentative latency between the load generator and the system under test.
- [ ] **No other tests running on the environment** during the test window.
- [ ] **Environment stability confirmed** before execution — health checks, service availability, and baseline resource utilization all verified clean.
- [ ] **Test data volume matches production shape and distribution**, not just row count — see [Test Data for Performance](/learning-paths/performance-testing/test-data-for-performance).

## 3. Load Profile Definition

- [ ] **Virtual user count defined**, grounded in a real or estimated concurrent-user target, not an arbitrary number.
- [ ] **Ramp-up period defined**, matched deliberately to the test type — gradual for load, incremental for stress, near-immediate for spike, per [Executing Load, Stress, Spike, Soak, and Volume Tests](/learning-paths/performance-testing/executing-load-stress-spike-soak-and-volume-tests).
- [ ] **Steady-state duration defined** — long enough to observe consistent behavior (load), or extended for a genuine soak run (hours, not minutes).
- [ ] **Think time / pacing defined**, simulating realistic user behavior rather than back-to-back, unthrottled requests.
- [ ] **Peak vs. normal load distinguished explicitly**, both stated as concrete numbers, not relative terms.

## 4. Test Data Preparation

- [ ] **Unique test data per virtual user**, avoiding data collisions across concurrent threads.
- [ ] **No hardcoded credentials** — all sensitive inputs externalized and parameterized.
- [ ] **Parameterized inputs** (CSV Data Set Config or equivalent) for realistic, variable test data.
- [ ] **Test data shaped to match production's real volume, shape, and distribution** — not a uniform, artificially even dataset, per [Test Data for Performance](/learning-paths/performance-testing/test-data-for-performance).
- [ ] **Data reset / cleanup plan defined** for after test execution.

## 5. JMeter Script Validation

- [ ] **Scripts recorded and cleaned** — recording artifacts removed, samplers clearly named.
- [ ] **HTTP headers configured correctly** (Authorization, Content-Type, Accept).
- [ ] **Cookies / sessions handled correctly**, or token-based auth confirmed stateless where applicable.
- [ ] **Correlation implemented** for dynamic values (tokens, session IDs, generated identifiers).
- [ ] **Response assertions added**, so only genuinely successful responses count as passing samples.
- [ ] **Error handling verified** — failures are captured and logged, not silently dropped or allowed to abort the run.
- [ ] **Timers configured** for realistic pacing, per [Performance Testing Tools](/learning-paths/performance-testing/performance-testing-tools).

## 6. Baseline Test (Mandatory)

- [ ] **Run with a small number of users first** (1–5) to validate script correctness before scaling up.
- [ ] **Verify**: no auth/request errors, correct responses, stable response times, correct dynamic-value handling.
- [ ] **Fix all script issues before increasing load** — a baseline defect only gets harder to diagnose at scale.

## 7. Monitoring & Observability Setup

- [ ] **Server-side monitoring enabled** — CPU, memory, disk I/O, network, across every relevant service.
- [ ] **Application-level monitoring enabled**, tracking response time, throughput, and thread/worker pool health.
- [ ] **Database monitoring enabled** — connection pool usage, query time, lock contention, per [Database Performance Testing](/learning-paths/database-testing/database-performance-testing).
- [ ] **Application, database, and system logs enabled**, for post-test correlation and investigation.
- [ ] **A load-generation and a monitoring tool are both running together**, per [Performance Testing Tools](/learning-paths/performance-testing/performance-testing-tools) — one alone can't confirm a bottleneck.

## 8. Tool & Infrastructure Readiness

- [ ] **JMeter version documented.**
- [ ] **Any plugins used are documented.**
- [ ] **Load generator sized correctly** for the target throughput.
- [ ] **Distributed testing setup validated**, if a single load generator can't reach target load on its own.
- [ ] **GUI vs. non-GUI execution mode decided** — non-GUI for any real test run, GUI reserved for script authoring and debugging.
- [ ] **Sufficient disk space confirmed** for result files.

## 9. Test Execution Plan

- [ ] **Start and end time clearly scheduled.**
- [ ] **Abort / rollback criteria defined** — the specific conditions (error-rate threshold, service instability) that stop the test early.
- [ ] **Stakeholders informed** ahead of the test window.
- [ ] **A communication channel defined** for real-time coordination during execution.
- [ ] **Scripts, test data, and configuration backed up** in version control, for traceability and repeatability.

## 10. Risk & Assumptions

- [ ] **Known limitations documented** — e.g., a single load-generator region, which may not fully represent geographically distributed real traffic (per [Performance Test Environment](/learning-paths/performance-testing/performance-test-environment)).
- [ ] **Scope exclusions documented** — what this specific test does and doesn't cover.
- [ ] **Assumptions about user behavior stated explicitly** — request distribution, pacing, and account/data state assumed for the test.
- [ ] **Data-cleanup impact considered** — whether test-generated records interfere with reporting or reconciliation.

## 11. Result & Reporting Readiness

- [ ] **Result file naming convention defined**, for traceability across repeated runs.
- [ ] **Metrics to report agreed** — average, p90/p95/p99, and error rate, at minimum, per [Result Analysis and Reporting](/learning-paths/performance-testing/result-analysis-and-reporting).
- [ ] **Comparison against a prior baseline planned**, where one exists.
- [ ] **A bottleneck-analysis approach defined in advance** — which resource dimensions will be correlated against the load timeline, per [Bottleneck Analysis and Monitoring](/learning-paths/performance-testing/bottleneck-analysis-and-monitoring), not decided ad hoc after the run.

## Related

- [Performance Testing v1.0](/learning-paths/performance-testing/what-is-performance-testing) — the full learning path this checklist condenses
- [Performance Testing Strategy](/learning-paths/performance-testing/performance-testing-strategy) — how to decide what deserves this checklist's full rigor in the first place
- [Result Analysis and Reporting](/learning-paths/performance-testing/result-analysis-and-reporting) — turning this checklist's output into a communicated result
