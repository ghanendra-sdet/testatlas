export interface ChecklistItem {
  id: string;
  text: string;
  example?: string;
  refLink?: string;
  refText?: string;
}

export interface ChecklistSection {
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export const jmeterChecklistData: ChecklistSection[] = [
  {
    title: "1. Business & Testing Objectives",
    icon: "🎯",
    items: [
      {
        id: "obj_purpose",
        text: "Purpose of the test clearly defined.",
        example: "Evaluate the International Transfer feature's stability and correctness-preserving performance under Load, Stress, Spike, and Soak conditions ahead of the Q3 promotional campaign.",
        refLink: "/learning-paths/performance-testing/performance-testing-strategy",
        refText: "Performance Testing Strategy"
      },
      {
        id: "obj_scenarios",
        text: "Business scenarios (critical flows) identified.",
        example: "transfer submission, compliance-aggregation check, balance debit/credit, confirmation and notification delivery."
      },
      {
        id: "obj_slo",
        text: "Success criteria / SLOs defined.",
        example: "p95 response time under 1,500ms at expected peak; error rate under 0.1%; zero data-consistency defects; graceful recovery after stress/spike.",
        refLink: "/learning-paths/performance-testing/performance-metrics-and-slas",
        refText: "Performance Metrics & SLAs"
      },
      {
        id: "obj_metrics",
        text: "Key metrics identified.",
        example: "Throughput (TPS), p50/p90/p95/p99 latency, error rate, concurrency, CPU/memory utilization, database connection-pool usage, queue depth.",
        refLink: "/learning-paths/performance-testing/bottleneck-analysis-and-monitoring",
        refText: "Bottleneck Analysis & Monitoring"
      }
    ]
  },
  {
    title: "2. Test Environment Readiness",
    icon: "🖥️",
    items: [
      {
        id: "env_match",
        text: "Environment matches production-like configuration.",
        example: "Infrastructure specs, service configuration, and worker pool sizing genuinely comparable to production.",
        refLink: "/learning-paths/performance-testing/performance-test-environment",
        refText: "Performance Test Environment"
      },
      {
        id: "env_network",
        text: "Network conditions comparable to production.",
        example: "No artificial throttling or unrepresentative latency between the load generator and the system under test."
      },
      {
        id: "env_isolation",
        text: "No other tests running on the environment during the test window.",
        example: "Ensures no noise or CPU spikes from functional, automated, or manual tests interfere with calculations."
      },
      {
        id: "env_stability",
        text: "Environment stability confirmed before execution.",
        example: "Health checks, service availability, and baseline resource utilization all verified clean."
      },
      {
        id: "env_data_volume",
        text: "Test data volume matches production shape and distribution.",
        example: "Ensures search indexing and db caches are loaded with realistic production volume data, not just row count.",
        refLink: "/learning-paths/performance-testing/test-data-for-performance",
        refText: "Test Data for Performance"
      }
    ]
  },
  {
    title: "3. Load Profile Definition",
    icon: "📈",
    items: [
      {
        id: "prof_user_count",
        text: "Virtual user count defined.",
        example: "Grounded in a real or estimated concurrent-user target, not an arbitrary guess."
      },
      {
        id: "prof_ramp",
        text: "Ramp-up period defined.",
        example: "Matched deliberately to the test type — gradual for load, incremental for stress, near-immediate for spike.",
        refLink: "/learning-paths/performance-testing/executing-load-stress-spike-soak-and-volume-tests",
        refText: "Executing Load, Stress, & Spike"
      },
      {
        id: "prof_steady",
        text: "Steady-state duration defined.",
        example: "Long enough to observe consistent behavior (load), or extended for a genuine soak run (hours, not minutes)."
      },
      {
        id: "prof_think_time",
        text: "Think time / pacing defined.",
        example: "Simulating realistic user behavior rather than back-to-back, unthrottled thread requests."
      },
      {
        id: "prof_peak_normal",
        text: "Peak vs. normal load distinguished explicitly.",
        example: "Both stated as concrete numbers, not relative terms (e.g. Normal: 50 TPS, Peak: 200 TPS)."
      }
    ]
  },
  {
    title: "4. Test Data Preparation",
    icon: "💾",
    items: [
      {
        id: "data_unique",
        text: "Unique test data per virtual user.",
        example: "Avoiding data collisions or duplicate keys across concurrent testing threads."
      },
      {
        id: "data_secrets",
        text: "No hardcoded credentials.",
        example: "All sensitive inputs externalized and parameterized."
      },
      {
        id: "data_param",
        text: "Parameterized inputs.",
        example: "Using JMeter CSV Data Set Config or equivalent for realistic, variable test data."
      },
      {
        id: "data_distribution",
        text: "Test data shaped to match production's real volume and distribution.",
        example: "Not a uniform, artificially even dataset; should contain edge names, long descriptions, etc.",
        refLink: "/learning-paths/performance-testing/test-data-for-performance",
        refText: "Test Data for Performance"
      },
      {
        id: "data_reset",
        text: "Data reset / cleanup plan defined.",
        example: "Steps to revert database states or clear created records after test execution."
      }
    ]
  },
  {
    title: "5. JMeter Script Validation",
    icon: "⚙️",
    items: [
      {
        id: "scr_clean",
        text: "Scripts recorded and cleaned.",
        example: "Recording artifacts and duplicate headers removed, samplers clearly named."
      },
      {
        id: "scr_headers",
        text: "HTTP headers configured correctly.",
        example: "Authorization, Content-Type, Accept, and User-Agent headers matched."
      },
      {
        id: "scr_sessions",
        text: "Cookies / sessions handled correctly.",
        example: "Or token-based authentication confirmed stateless where applicable."
      },
      {
        id: "scr_correlation",
        text: "Correlation implemented.",
        example: "Dynamic values like token hashes, session IDs, and generated user identifiers captured and reused.",
        refLink: "/learning-paths/performance-testing/performance-testing-tools",
        refText: "Performance Testing Tools"
      },
      {
        id: "scr_assertions",
        text: "Response assertions added.",
        example: "Ensure that only genuinely successful responses count as passing samples, not generic 200 OK blank pages."
      },
      {
        id: "scr_errors",
        text: "Error handling verified.",
        example: "Failures are captured and logged, not silently dropped or allowed to abort the run."
      },
      {
        id: "scr_timers",
        text: "Timers configured.",
        example: "Using Gaussian Random Timers or Constant Throughput Timers for realistic pacing."
      }
    ]
  },
  {
    title: "6. Baseline Test (Mandatory)",
    icon: "🧪",
    items: [
      {
        id: "base_scale",
        text: "Run with a small number of users first.",
        example: "Run 1–5 users to validate script correctness before scaling to hundreds of threads."
      },
      {
        id: "base_verify",
        text: "Verify clean execution variables.",
        example: "No authentication/request errors, correct responses, stable response times, and correct dynamic-value handling."
      },
      {
        id: "base_fix",
        text: "Fix all script issues before increasing load.",
        example: "A baseline defect only gets harder to diagnose and isolate at scale."
      }
    ]
  },
  {
    title: "7. Monitoring & Observability Setup",
    icon: "📊",
    items: [
      {
        id: "mon_server",
        text: "Server-side monitoring enabled.",
        example: "CPU, memory, disk I/O, network metrics active across every relevant service."
      },
      {
        id: "mon_app",
        text: "Application-level monitoring enabled.",
        example: "Tracking response times, transaction throughput, and thread/worker pool health."
      },
      {
        id: "mon_db",
        text: "Database monitoring enabled.",
        example: "Connection pool usage, query execution times, lock contention.",
        refLink: "/learning-paths/database-testing/database-performance-testing",
        refText: "Database Performance Testing"
      },
      {
        id: "mon_logs",
        text: "Application, database, and system logs enabled.",
        example: "Crucial for post-test correlation and bottleneck investigation."
      },
      {
        id: "mon_dual",
        text: "A load-generation and a monitoring tool are both running together.",
        example: "One tool alone cannot confirm a bottleneck location.",
        refLink: "/learning-paths/performance-testing/performance-testing-tools",
        refText: "Performance Testing Tools"
      }
    ]
  },
  {
    title: "8. Tool & Infrastructure Readiness",
    icon: "🔧",
    items: [
      {
        id: "tool_version",
        text: "JMeter version documented.",
        example: "Ensure all test run logs note the specific executable package versions."
      },
      {
        id: "tool_plugins",
        text: "Any plugins used are documented.",
        example: "e.g., Custom Thread Groups, Dummy Sampler, JSON Path Extractor."
      },
      {
        id: "tool_sizing",
        text: "Load generator sized correctly.",
        example: "Ensure generator CPU and heap sizes can handle target throughput without bottlenecking locally."
      },
      {
        id: "tool_dist",
        text: "Distributed testing setup validated.",
        example: "Required if a single load generator cannot reach target load on its own."
      },
      {
        id: "tool_mode",
        text: "Non-GUI execution mode configured.",
        example: "Run in Non-GUI mode (`jmeter -n -t ...`) for any real test run; GUI reserved for script authoring and debugging only."
      },
      {
        id: "tool_space",
        text: "Sufficient disk space confirmed.",
        example: "JMeter output files (`.jtl` log files) can grow very large during high-throughput runs."
      }
    ]
  },
  {
    title: "9. Test Execution Plan",
    icon: "📅",
    items: [
      {
        id: "exec_schedule",
        text: "Start and end time clearly scheduled.",
        example: "Run during low-traffic windows to avoid affecting real system users."
      },
      {
        id: "exec_abort",
        text: "Abort / rollback criteria defined.",
        example: "Specific conditions (e.g. error rate > 5% for 1 min, cpu > 95% for 2 mins) that trigger an early stop."
      },
      {
        id: "exec_stakeholders",
        text: "Stakeholders informed.",
        example: "Send notifications to dev ops, product owners, and customer support leads before the test window opens."
      },
      {
        id: "exec_comm",
        text: "Communication channel defined.",
        example: "Active Slack or Teams war-room channel for real-time coordination during execution."
      },
      {
        id: "exec_backup",
        text: "Scripts, test data, and configuration backed up.",
        example: "Save script revisions in Git version control for traceability and repeatability."
      }
    ]
  },
  {
    title: "10. Risk & Assumptions",
    icon: "⚠️",
    items: [
      {
        id: "risk_limits",
        text: "Known limitations documented.",
        example: "e.g., a single load-generator region, which may not fully represent geographically distributed traffic.",
        refLink: "/learning-paths/performance-testing/performance-test-environment",
        refText: "Performance Test Environment"
      },
      {
        id: "risk_exclusions",
        text: "Scope exclusions documented.",
        example: "Clear statements on what this specific test does and does not cover (e.g. third-party APIs mocked)."
      },
      {
        id: "risk_behavior",
        text: "Assumptions about user behavior stated explicitly.",
        example: "Request distribution profiles, pacing assumptions, and initial database data state assumptions."
      },
      {
        id: "risk_cleanup",
        text: "Data-cleanup impact considered.",
        example: "Check whether test-generated records will interfere with reporting, accounting, or reconciliation pipelines."
      }
    ]
  },
  {
    title: "11. Result & Reporting Readiness",
    icon: "📝",
    items: [
      {
        id: "rep_naming",
        text: "Result file naming convention defined.",
        example: "Ensure filenames include test profile, user count, and timestamp for traceability across repeated runs."
      },
      {
        id: "rep_metrics",
        text: "Metrics to report agreed.",
        example: "Minimum of Average, p90/p95/p99, error rate, throughput, and CPU usage.",
        refLink: "/learning-paths/performance-testing/result-analysis-and-reporting",
        refText: "Result Analysis & Reporting"
      },
      {
        id: "rep_compare",
        text: "Comparison against a prior baseline planned.",
        example: "Measure degradation or improvements against previous release metrics."
      },
      {
        id: "rep_method",
        text: "A bottleneck-analysis approach defined in advance.",
        example: "Determine which resource dimensions will be correlated against the load timeline, rather than deciding ad hoc.",
        refLink: "/learning-paths/performance-testing/bottleneck-analysis-and-monitoring",
        refText: "Bottleneck Analysis & Monitoring"
      }
    ]
  }
];
