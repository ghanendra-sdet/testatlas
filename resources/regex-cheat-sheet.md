---
title: "Regex Cheat Sheet for QA & Testers"
sidebar_label: "Regex Cheat Sheet"
description: "A fast-reference regular expressions cheat sheet for QA engineers — core syntax, common validation patterns, log-scraping and PII-masking patterns, and the pitfalls that cause silent false positives."
keywords: ["regex cheat sheet for testers", "regular expressions qa", "regex validation patterns", "test data regex", "regex log parsing"]
last_reviewed: "2026-09-02"
---

# Regex Cheat Sheet for QA & Testers

A condensed, print-and-use regular expressions reference for input validation, test-data generation, and scraping structured values out of logs and API responses.

---

## 1. Core Syntax Quick Reference

| Pattern | Meaning | Example match |
| :--- | :--- | :--- |
| `.` | Any single character (except newline) | `c.t` matches `cat`, `cot`, `c9t` |
| `\d` | Any digit (`0-9`) | `\d{3}` matches `404` |
| `\w` | Any word character (`a-z`, `A-Z`, `0-9`, `_`) | `\w+` matches `user_42` |
| `\s` | Any whitespace character | `\s+` matches one or more spaces/tabs |
| `^` / `$` | Start / end of the string (or line, in multiline mode) | `^Error` matches only if the line starts with `Error` |
| `*` / `+` / `?` | Zero-or-more / one-or-more / zero-or-one | `colou?r` matches both `color` and `colour` |
| `{n,m}` | Between `n` and `m` repetitions | `\d{2,4}` matches `12`, `123`, `1234` — not `1` or `12345` |
| `[...]` | Character class — any one of these | `[aeiou]` matches any single vowel |
| `[^...]` | Negated character class | `[^0-9]` matches any character that isn't a digit |
| `(...)` | Capturing group | `(\d{4})-(\d{2})` captures year and month separately |
| `(?:...)` | Non-capturing group | Groups for `\|` without producing a capture |
| `\|` | Alternation (OR) | `cat\|dog` matches either word |

---

## 2. Common Validation Patterns

```regex
# Email (practical, not fully RFC 5322-compliant — good enough for most test validation)
^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$

# Phone number (US-style, allows optional country code and separators)
^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$

# URL (http/https only)
^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$

# ISO 8601 date (YYYY-MM-DD)
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$

# IPv4 address
^(\d{1,3}\.){3}\d{1,3}$

# UUID v4
^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$

# Strong-ish password (min 8 chars, at least one upper, one lower, one digit)
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$
```

> [!WARNING]
> The email pattern above is intentionally practical, not exhaustive — genuinely RFC 5322-compliant email regex is notoriously enormous and still doesn't guarantee the address is real. For test automation, this level of validation (correct shape) is almost always the right amount; save exhaustiveness for a dedicated library if the product genuinely needs it.

---

## 3. Test-Data & Log-Scraping Patterns

```regex
# Extract a transaction ID from a log line like: "INFO txn_id=TX-2026-88213 status=SETTLED"
txn_id=([A-Z0-9-]+)

# Extract every dollar amount from a response body
\$\s?[\d,]+\.\d{2}

# Mask a credit card number down to the last 4 digits (find, then replace with $1)
\d{12}(\d{4})    →   replace with: "************$1"

# Find any 5xx status code in a raw log dump
\b5\d{2}\b

# Strip ANSI color codes from captured terminal/CI output before asserting on text
\x1B\[[0-9;]*m
```

---

## 4. Common Pitfalls

| Pitfall | Why it bites | Fix |
| :--- | :--- | :--- |
| **Greedy by default** (`.*` grabs as much as possible) | `<.*>` against `<b>bold</b>` matches the *whole* string, not just `<b>` | Use a lazy quantifier: `<.*?>` |
| **Unescaped special characters** | A literal `.` in `192.168.1.1` matches ANY character, not just a dot — `192X168X1X1` would silently match too | Escape it: `192\.168\.1\.1` |
| **Catastrophic backtracking** | Nested quantifiers like `(a+)+b` can take exponential time on a non-matching long input, hanging the test run | Avoid nested repetition on the same character class; prefer possessive/atomic groups or a simpler pattern where the engine supports it |
| **Forgetting `^`/`$` (or full-string anchors)** | `\d{3}` "matches" `abc123def` because it's just checking for a substring, not validating the whole value | Anchor the pattern: `^\d{3}$` when the entire string must match, not just contain a match |
| **Case sensitivity assumptions** | `[a-z]+` silently rejects `Active` because of the capital `A` | Add the case-insensitive flag (`/pattern/i`, or `re.IGNORECASE`) when case genuinely shouldn't matter |

---

## Related Guides

- [Data Validation & Response Verification](/learning-paths/api-testing/data-validation-and-response-verification) — where these patterns get used against real API responses
- [Manual Testing Learning Path](/learning-paths/manual-testing/boundary-value-analysis) — boundary value analysis and equivalence partitioning, the design techniques regex validation patterns support
- [SQL Cheat Sheet](/resources/sql-cheat-sheet) — the companion reference for validating data at the database layer
