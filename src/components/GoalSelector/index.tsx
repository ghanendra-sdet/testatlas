import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface GoalOption {
  id: string;
  label: string;
  recommendation: string;
  reason: string;
  pathName: string;
  pathHref: string;
}

const goals: GoalOption[] = [
  {
    id: 'new',
    label: "I'm new to testing",
    recommendation: "Foundations of Software Testing",
    reason: "Start from absolute zero. Learn how quality connects to business value, why execution is only 20% of the work, and how the entire testing lifecycle fits together before writing a single test case.",
    pathName: "Start Foundations Path",
    pathHref: "/learning-paths/foundations/what-is-software-testing"
  },
  {
    id: 'manual',
    label: "I'm a Manual Tester",
    recommendation: "Manual Testing & Test Design",
    reason: "Learn boundary values, equivalence partitioning, state transition testing, error guessing, and exploratory techniques. Build the structured reasoning needed to design tests that discover actual critical flaws.",
    pathName: "Explore Test Design",
    pathHref: "/learning-paths/manual-testing/test-design-fundamentals"
  },
  {
    id: 'api',
    label: "I want to learn API Testing",
    recommendation: "API Testing",
    reason: "Go deep into REST APIs. Learn request/response structures, contract validation, security tokens (JWT, OAuth), rate limiting, and backend behavior checking before trying to write automation.",
    pathName: "Start API Testing",
    pathHref: "/learning-paths/api-testing/what-is-api-testing"
  },
  {
    id: 'automation',
    label: "I want to become an Automation Engineer",
    recommendation: "Test Automation",
    reason: "Bridge the gap between manually designed test cases and reliable, maintainable code using Playwright and Selenium. Learn Page Object Models, wait synchronization, and CI/CD triggers.",
    pathName: "Explore Automation",
    pathHref: "/learning-paths/automation/introduction-to-automation-testing"
  },
  {
    id: 'sdet',
    label: "I want to become an SDET",
    recommendation: "Test Automation + Database Testing",
    reason: "SDETs require complete stack awareness. Combine Test Automation (Playwright/Selenium) with deep Database/SQL verification to ensure database transactions match UI updates perfectly.",
    pathName: "Explore Database Testing First",
    pathHref: "/learning-paths/database-testing/what-is-database-testing"
  },
  {
    id: 'performance',
    label: "I want to learn Performance Testing",
    recommendation: "Performance Testing",
    reason: "Learn JMeter, latency percentiles, load profiles, spike testing, bottleneck correlation, and capacity forecasting to ensure systems scale under traffic, not just in isolation.",
    pathName: "Start Performance Path",
    pathHref: "/learning-paths/performance-testing/what-is-performance-testing"
  },
  {
    id: 'security',
    label: "I want to learn Security Testing",
    recommendation: "Security Testing",
    reason: "Learn security threat modeling, OWASP Top 10 vulnerabilities, authentication exploits, XSS/SQL Injection defenses, and security audit metrics from a quality engineer's perspective.",
    pathName: "Start Security Path",
    pathHref: "/learning-paths/security-testing/what-is-security-testing"
  },
  {
    id: 'ai',
    label: "I want to use AI for QA",
    recommendation: "AI for QA",
    reason: "Harness LLMs for test case generation, test data synthesis, and automation authoring, while exploring the principles of testing AI features and prompt reliability themselves.",
    pathName: "Explore AI for QA",
    pathHref: "/learning-paths/ai-for-qa/ai-in-software-testing"
  },
  {
    id: 'interview',
    label: "I'm preparing for interviews",
    recommendation: "Interview Preparation",
    reason: "Focus on scenario-based practice questions. Learn how to describe your technical experience using the STAR method, talk through live SQL queries, and handle coding challenges cleanly.",
    pathName: "Start Interview Prep",
    pathHref: "/learning-paths/interview-preparation/how-qa-interviews-are-structured"
  },
  {
    id: 'leader',
    label: "I want to grow into QA Leadership",
    recommendation: "Career & Leadership",
    reason: "Transition from individual contributor to lead or manager. Learn to architect an org-wide quality strategy, manage budgets, direct shift-left initiatives, and run effective QA retrospectives.",
    pathName: "Explore Leadership",
    pathHref: "/learning-paths/career-leadership/qa-career-roadmap-ic-vs-technical-lead-vs-manager"
  }
];

export default function GoalSelector() {
  const [activeGoal, setActiveGoal] = useState<string>('new');
  const selectedGoal = goals.find(g => g.id === activeGoal)!;

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Where should I start?</h3>
      <p className={styles.sectionSubtitle}>Select your learning goal below to view your recommended path:</p>
      
      <div className={styles.selectorLayout}>
        <div className={styles.buttonList}>
          {goals.map(goal => (
            <button
              key={goal.id}
              className={`${styles.goalBtn} ${activeGoal === goal.id ? styles.activeGoalBtn : ''}`}
              onClick={() => setActiveGoal(goal.id)}
            >
              {goal.label}
            </button>
          ))}
        </div>
        
        <div className={styles.recommendationCard}>
          <p className={styles.recommendationLabel}>RECOMMENDED CURRICULUM</p>
          <h4 className={styles.recommendationPath}>{selectedGoal.recommendation}</h4>
          <p className={styles.recommendationReason}>{selectedGoal.reason}</p>
          
          <div className={styles.ctaWrapper}>
            <Link to={selectedGoal.pathHref} className="button button--primary button--lg">
              {selectedGoal.pathName} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
