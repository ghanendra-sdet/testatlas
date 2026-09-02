---
title: "Accessibility (WCAG) Testing Checklist"
sidebar_label: "Accessibility Checklist"
description: "An interactive checklist for auditing web applications against WCAG's four principles — Perceivable, Operable, Understandable, Robust — covering automated scans and the manual passes automation can't replace."
keywords: ["accessibility testing checklist", "wcag testing checklist", "a11y testing checklist", "keyboard accessibility testing", "screen reader testing checklist"]
last_reviewed: "2026-09-02"
---

# Accessibility (WCAG) Testing Checklist

A practical, interactive checklist for auditing an application against WCAG's four core principles — Perceivable, Operable, Understandable, Robust (POUR) — covering both what an automated scanner catches and the manual passes it doesn't.

Use this tool to track your accessibility audits; progress is saved automatically in your browser's local storage.

<InteractiveChecklist preset="accessibility" />

---

## WCAG POUR Principles → Testing Map

```mermaid
flowchart TD
    accTitle: WCAG POUR Principles Testing Map
    accDescr: The four WCAG principles mapped to the kind of testing that verifies each.
    A[Perceivable] --> A1[Alt text, contrast, structure checks]
    B[Operable] --> B1[Keyboard-only manual walkthrough]
    C[Understandable] --> C1[Form labels and error-announcement checks]
    D[Robust] --> D1[Automated axe-core / Lighthouse scan]
```

---

## Automated Scans Are a Floor, Not a Ceiling

Automated tools like axe-core catch real, valuable issues — but industry estimates consistently put automated coverage around 30-40% of WCAG's actual success criteria. Logical tab order, whether an error is genuinely announced at the right moment, and whether a screen reader user can actually complete a task all require a human pass. Treat the automated scan as the fast, CI-gated floor — not the whole audit.

## Related Guides

- [Manual Testing Learning Path](/learning-paths/manual-testing/test-design-fundamentals) — core test design foundations
- [Interview Academy: Manual Testing](/interview-academy/manual-testing) — interview questions and answers
- [API Security & OWASP Checklist](/resources/api-security-testing-checklist) — the sibling audit checklist for backend endpoints
