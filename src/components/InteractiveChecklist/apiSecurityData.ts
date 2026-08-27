import { ChecklistSection } from './jmeterData';

export const apiSecurityChecklistData: ChecklistSection[] = [
  {
    title: "1. Authentication & Session Security (API1 / API2)",
    icon: "🔑",
    items: [
      {
        id: "sec_token_expire",
        text: "JWT tokens use short expiration & strong signing algorithms.",
        example: "Access tokens expire in 15 mins; verified that `alg: none` or weak HMAC-SHA256 secrets are rejected."
      },
      {
        id: "sec_bfla",
        text: "Broken Object Property & Function Level Authorization tested.",
        example: "Regular user attempting to call admin routes (e.g. `POST /api/v1/admin/users`) receives `403 Forbidden`."
      },
      {
        id: "sec_bola",
        text: "BOLA / IDOR vulnerability checks executed.",
        example: "Changing URL parameter `/api/orders/1024` to another user's ID `/api/orders/1025` returns `403 Forbidden`."
      }
    ]
  },
  {
    title: "2. Input Validation & Data Sanitation (API3 / API8)",
    icon: "🛡️",
    items: [
      {
        id: "sec_sql_inj",
        text: "SQL / NoSQL injection payloads rejected.",
        example: "Sending `' OR 1=1 --` or `{\"$ne\": null}` in query parameters is sanitized and returns `400 Bad Request`."
      },
      {
        id: "sec_mass_assign",
        text: "Mass assignment / parameter tampering prevented.",
        example: "Sending unexpected JSON keys like `{\"isAdmin\": true, \"balance\": 9999}` in registration payload is ignored/rejected."
      },
      {
        id: "sec_xss_headers",
        text: "Cross-Site Scripting (XSS) payload escaping confirmed.",
        example: "HTML/JS characters in input fields are sanitized; `Content-Type: application/json` strictly enforced."
      }
    ]
  },
  {
    title: "3. Rate Limiting & Resource Consumption (API4)",
    icon: "⏱️",
    items: [
      {
        id: "sec_rate_limit",
        text: "API rate limiting / throttling active on sensitive endpoints.",
        example: "Login or OTP endpoints enforce max 5 requests/min, returning `429 Too Many Requests` with `Retry-After` header."
      },
      {
        id: "sec_payload_size",
        text: "Maximum payload size limit enforced (DoS prevention).",
        example: "Uploading JSON requests > 2MB or large multipart files returns `413 Payload Too Large`."
      },
      {
        id: "sec_pagination",
        text: "Pagination limits enforced on list endpoints.",
        example: "`GET /api/v1/items?limit=100000` is capped to a maximum allowable page size (e.g., max 100)."
      }
    ]
  },
  {
    title: "4. Information Disclosure & Security Headers (API7 / API9)",
    icon: "👁️",
    items: [
      {
        id: "sec_stack_trace",
        text: "Stack traces & server versions hidden in error responses.",
        example: "On 500 errors, response returns sanitized JSON `{ \"error\": \"Internal Server Error\", \"code\": \"ERR_500\" }` without DB traces."
      },
      {
        id: "sec_headers",
        text: "Security headers configured properly.",
        example: "`X-Content-Type-Options: nosniff`, `Strict-Transport-Security (HSTS)`, `X-Frame-Options: DENY` present in all responses."
      },
      {
        id: "sec_cors",
        text: "CORS policy explicitly configured (no wildcard with credentials).",
        example: "`Access-Control-Allow-Origin` set only to trusted whitelisted domains; `*` wildcard rejected when credentials are true."
      }
    ]
  },
  {
    title: "5. Transport & Data Encryption",
    icon: "🔒",
    items: [
      {
        id: "sec_https_only",
        text: "HTTPS mandatory with HTTP redirection disabled for APIs.",
        example: "Plain HTTP requests to `http://api.domain.com` immediately return `301 Moved Permanently` to HTTPS."
      },
      {
        id: "sec_pii_logging",
        text: "No PII or secrets printed to server/gateway logs.",
        example: "Passwords, credit card numbers, and auth bearer tokens masked as `***` in Datadog/Splunk logs."
      }
    ]
  }
];
