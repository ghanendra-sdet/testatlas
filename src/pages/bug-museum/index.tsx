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
