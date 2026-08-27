import { ChecklistSection } from './jmeterData';

export const releaseChecklistData: ChecklistSection[] = [
  {
    title: "1. Scope & Build Verification",
    icon: "📦",
    items: [
      {
        id: "rel_git_tag",
        text: "Git release tag & commit hash verified.",
        example: "Ensure the build artifact matches the signed-off commit hash (e.g. release-v2.4.0) with no unmerged hotfix commits."
      },
      {
        id: "rel_changelog",
        text: "Release notes & changelog finalized.",
        example: "JIRA release version closed; all customer-facing features and bug fixes documented with issue keys."
      },
      {
        id: "rel_flags",
        text: "Feature flags & environment variables configured.",
        example: "Verify LaunchDarkly/Split flags for new features are set to the correct rollout percentages (e.g., 0% or internal beta)."
      }
    ]
  },
  {
    title: "2. Automated Regression & Quality Gates",
    icon: "🧪",
    items: [
      {
        id: "rel_e2e_pass",
        text: "End-to-End automated regression test suite 100% green.",
        example: "All critical user journeys (Sign-up, Search, Checkout, Billing) executed without unexpected failures or quarantined tests."
      },
      {
        id: "rel_code_coverage",
        text: "Unit & Integration test coverage gates cleared.",
        example: "SonarQube / Codecov reports meet threshold (>80% coverage, 0 critical security vulnerabilities, 0 blocker bugs)."
      },
      {
        id: "rel_contracts",
        text: "API contract tests (Pact / OpenAPI) validated.",
        example: "Ensures no breaking schema changes between backend microservices and web/mobile clients."
      }
    ]
  },
  {
    title: "3. Database & Migration Readiness",
    icon: "💾",
    items: [
      {
        id: "rel_db_migration",
        text: "Database schema migration scripts dry-run passed.",
        example: "Flyway/Liquibase migration scripts applied in staging with zero locks, data truncation, or syntax errors."
      },
      {
        id: "rel_rollback_plan",
        text: "Rollback migration & data backup confirmed.",
        example: "Pre-deployment database snapshot taken; downward migration script (revert) tested and documented."
      },
      {
        id: "rel_seed_data",
        text: "Lookup tables & reference data populated.",
        example: "Currency rates, country codes, and payment gateway config constants populated in production DB."
      }
    ]
  },
  {
    title: "4. Non-Functional & Security Checks",
    icon: "🛡️",
    items: [
      {
        id: "rel_security_scan",
        text: "DAST/SAST & dependency vulnerability scans resolved.",
        example: "Snyk / OWASP Dependency Check reported zero High/Critical CVEs in third-party npm/maven packages."
      },
      {
        id: "rel_perf_slo",
        text: "Performance p95 latency SLOs validated under load.",
        example: "Peak load run confirms response times stay under 800ms with error rate < 0.05%."
      },
      {
        id: "rel_tls_ssl",
        text: "SSL/TLS certificates and domain DNS validity confirmed.",
        example: "Production domain certs checked for expiration dates (> 60 days remaining)."
      }
    ]
  },
  {
    title: "5. Production Deployment & Live Sanity",
    icon: "🚀",
    items: [
      {
        id: "rel_deploy_window",
        text: "Deployment window & war-room channel active.",
        example: "On-call QA, Lead DevOps, and Product Lead present in dedicated #release-war-room channel."
      },
      {
        id: "rel_prod_smoke",
        text: "Post-deployment production smoke test completed.",
        example: "Live transaction executed using designated test accounts with zero 5xx server errors in Datadog/Grafana."
      },
      {
        id: "rel_monitoring",
        text: "APM alerts & error dashboards monitored for 30 minutes.",
        example: "Sentry error rate, AWS CloudWatch CPU usage, and payment gateway webhooks running within normal baselines."
      },
      {
        id: "rel_signoff",
        text: "Formal QA sign-off communicated to stakeholders.",
        example: "Confirmation email sent with test summary, monitoring logs, and formal 'GO' status."
      }
    ]
  }
];
