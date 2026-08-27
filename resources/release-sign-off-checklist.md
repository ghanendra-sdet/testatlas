---
title: "Pre-Production Release & Smoke Sign-Off Checklist"
sidebar_label: "Release & Smoke Sign-Off"
description: "An interactive, production-grade checklist for QA leads and release managers to verify builds, migrations, security, and live smoke sanity before and after deployment."
keywords: ["release checklist QA", "pre-production sign off", "production smoke testing", "release readiness checklist", "qa deployment checklist"]
last_reviewed: "2026-08-27"
---

# Pre-Production Release & Smoke Sign-Off Checklist

A comprehensive, interactive checklist for QA leads, release managers, and DevOps teams to gate deployments into staging and production environments.

Track each gate directly on this page; all progress is saved automatically in your browser's local storage.

<InteractiveChecklist preset="release" />

---

## Deployment Escalation Matrix

```mermaid
%% Deployment Issue Escalation
flowchart TD
    accTitle: Deployment Issue Escalation
    accDescr: Step by step decision tree for handling smoke or migration defects during production releases.
    A[Deploy to Production] --> B[Run Live Smoke Test]
    B --> C{Smoke Test Pass?}
    C -->|Yes: 100% Green| D[Monitor APM Dashboards for 30m]
    D --> E[Formal QA Sign-off Sent]
    C -->|No: Severity 1/2 Bug| F[Alert War Room & On-Call Lead]
    F --> G{Hotfix Available in < 15m?}
    G -->|Yes| H[Deploy Patch & Re-test]
    G -->|No| I[Trigger Instant Rollback Plan]
```

---

## Related Guides

- [Performance Testing Strategy](/learning-paths/performance-testing/performance-testing-strategy) — ensure load SLOs are cleared before production
- [Database Performance & Transactions](/learning-paths/database-testing/database-performance-testing) — verify lock-free migrations
- [Pre-Load-Testing Checklist (JMeter)](/resources/pre-load-testing-checklist) — checklist for load and stress readiness
