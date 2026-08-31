---
title: "Linux & Bash for QA Engineers Cheat Sheet"
sidebar_label: "Linux & Bash Cheat Sheet"
description: "A fast-reference command cheat sheet for QA engineers: live log streaming, grep regex patterns, process management, port checks, file permissions, and curl validations."
keywords: ["linux cheat sheet for qa", "bash for testers", "tail log real time grep", "lsof port check", "curl command cheat sheet"]
last_reviewed: "2026-08-29"
---

# Linux & Bash for QA Engineers Cheat Sheet

A practical command-line cheat sheet for QA and SDETs working on staging servers, headless containers, and CI/CD runners.

---

## 1. Live Log Monitoring & Filtering

```bash
# 1. Follow logs live as they are written
tail -f /var/log/app/server.log

# 2. Follow logs filtering for 500 errors or exceptions (case-insensitive)
tail -f server.log | grep --line-buffered -i -E "error|exception|fail|500"

# 3. View the last 100 lines and follow
tail -n 100 -f server.log

# 4. View logs with line numbers and paging (search with / and quit with q)
less +G -N /var/log/app/server.log
```

---

## 2. Advanced Search (`grep` & `find`)

```bash
# 1. Find all occurrences of a string across all log files in a directory
grep -rn "NullPointerException" /var/log/app/

# 2. Show 5 lines before and 5 lines after the match (Contextual log triage)
grep -C 5 "TransactionTimedOutException" server.log

# 3. Count total occurrences of errors today
grep -c "ERROR" server-2026-08-29.log

# 4. Find all test report JSON files modified in the last 60 minutes
find /tmp/test-runs/ -name "*.json" -mmin -60
```

---

## 3. Process & System Resource Monitoring

```bash
# 1. Find process ID (PID) of running Java / Node / Python test runner
pgrep -fl "java"
# Or:
ps aux | grep "selenium"

# 2. Kill a hung process gracefully (SIGTERM), or force terminate (SIGKILL)
kill <PID>
kill -9 <PID>

# 3. Check memory & swap usage in human-readable format
free -h

# 4. Check available disk space on server partitions
df -h

# 5. Interactive process and CPU monitor (sort by memory with Shift+M)
top
```

---

## 4. Port Tracking & Network Connectivity

```bash
# 1. Find which process is listening on a specific port (e.g. 8080 or 4444)
lsof -i :8080
# Or:
netstat -tulnp | grep 8080

# 2. Test if a remote host port is open and reachable
nc -zv api.staging.bank.com 443

# 3. Check DNS resolution and latency
dig api.staging.bank.com +short
ping -c 4 8.8.8.8
```

---

## 5. API Testing with `curl`

```bash
# 1. Send a POST request with JSON payload and auth bearer token
curl -X POST https://api.staging.com/v1/orders \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"itemId": 402, "qty": 2}' \
  -v

# 2. Fetch only HTTP response headers and status code (no body)
curl -I https://api.staging.com/health

# 3. Measure API response latency breakdown
curl -w "\nDNS: %{time_namelookup}s | Connect: %{time_connect}s | TTFB: %{time_starttransfer}s | Total: %{time_total}s\n" \
  -o /dev/null -s https://api.staging.com/v1/users
```

---

## 6. Permissions & File Manipulation

```bash
# 1. Make automation execution script executable
chmod +x run-regression.sh

# 2. Standard safe permissions: 755 for scripts/dirs, 644 for config files
chmod 755 bin/
chmod 644 config.properties

# 3. Compress / Archive test reports into tarball
tar -czvf allure-report-20260829.tar.gz /app/allure-results/

# 4. Extract archive
tar -xzvf allure-report-20260829.tar.gz
```

---

## Related Guides

- [Interview Academy: CLI & Linux](/interview-academy/cli-linux) — 20+ interview questions and answers
- [Docker Interview Questions](/interview-academy/docker) — managing containers and environments
