---
title: "REST API Security & OWASP Top 10 Checklist"
sidebar_label: "API Security & OWASP Checklist"
description: "An interactive, practical checklist for testing REST APIs against OWASP API Security Top 10 vulnerabilities — authentication, BOLA, injection, rate limiting, and information disclosure."
keywords: ["api security testing checklist", "owasp api top 10", "bola idor testing", "jwt token security qa", "api rate limiting test"]
last_reviewed: "2026-08-27"
---

# REST API Security & OWASP Top 10 Checklist

A practical, interactive security verification checklist for QA and SDETs to audit backend endpoints against the OWASP API Security Top 10 guidelines.

Use this tool to track your security audits; progress is saved automatically in your browser's local storage.

<InteractiveChecklist preset="api-security" />

---

## OWASP API Risk Architecture

```mermaid
%% OWASP API Risk Architecture
flowchart LR
    accTitle: OWASP API Risk Architecture
    accDescr: Visual mapping of API request layers and key security defense checkpoints.
    A[Client Request] --> B[WAF / Gateway: Rate Limiting & SSL]
    B --> C[Auth Layer: JWT Validation & BOLA Check]
    C --> D[Input Sanitation: SQL Injection & XSS Guard]
    D --> E[Business Logic & Sanitized Error Handler]
```

---

## Related Guides

- [API Security Fundamentals](/learning-paths/api-testing/api-security-fundamentals) — core security risks and defense principles
- [Bulletproof API Assertions in Postman](/blog/bulletproof-api-assertions-postman) — assertions for status, headers, and schemas
- [Interview Academy: API Testing](/interview-academy/api-testing-postman) — master 50+ interview questions on REST & APIs
