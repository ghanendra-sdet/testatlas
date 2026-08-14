import React from 'react';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface AcademyModule {
  chapter: string;
  title: string;
  description: string;
  href: string;
  questionsCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToRead: string;
  skills: string[];
}

const academyModules: AcademyModule[] = [
  {
    chapter: "01",
    title: "Manual Testing",
    description: "100 comprehensive questions on test design, STLC phases, EP/BVA boundaries, metrics, and Agile methodologies.",
    href: "/interview-academy/manual-testing",
    questionsCount: 100,
    difficulty: "Beginner",
    timeToRead: "25 min",
    skills: ["STLC", "Defect Lifecycle", "Black-box Design", "Agile Testing"],
  },
  {
    chapter: "02",
    title: "Selenium with Java",
    description: "100 questions on WebDriver architecture, dynamic locators, explicit waits, Page Object Models, and frame handling.",
    href: "/interview-academy/selenium-java",
    questionsCount: 100,
    difficulty: "Intermediate",
    timeToRead: "22 min",
    skills: ["WebDriver API", "Page Object Model", "Dynamic Waits", "XPath/CSS"],
  },
  {
    chapter: "03",
    title: "API Testing with Postman",
    description: "100 questions covering HTTP methods, OAuth variables, environment chaining, and Newman execution.",
    href: "/interview-academy/api-testing-postman",
    questionsCount: 100,
    difficulty: "Intermediate",
    timeToRead: "20 min",
    skills: ["Postman Scripts", "JWT Auth", "Newman CLI", "HTTP Statuses"],
  },
  {
    chapter: "04",
    title: "SQL & Databases",
    description: "50 questions on JOIN syntaxes, GROUP BY, subqueries, indexing performance, and transaction rollback mechanics.",
    href: "/interview-academy/sql-databases",
    questionsCount: 50,
    difficulty: "Intermediate",
    timeToRead: "20 min",
    skills: ["SQL JOINs", "Aggregation", "Indexes", "Transactions"],
  },
  {
    chapter: "05",
    title: "Java Programming",
    description: "50 core Java concepts and 20 essential coding challenges with syntax-highlighted solutions.",
    href: "/interview-academy/java-programming",
    questionsCount: 70,
    difficulty: "Intermediate",
    timeToRead: "24 min",
    skills: ["OOP Pillars", "Collections", "Exceptions", "Coding Practice"],
  },
  {
    chapter: "06",
    title: "Git & GitHub",
    description: "20 questions on branching strategies, stashing, merge conflict resolutions, and soft resets.",
    href: "/interview-academy/git-github",
    questionsCount: 20,
    difficulty: "Intermediate",
    timeToRead: "10 min",
    skills: ["Git Flow", "Merge Conflict", "Git Stash", "Commit Revert"],
  },
  {
    chapter: "07",
    title: "CI/CD & Jenkins",
    description: "30 questions on Pipeline configurations, declarative Jenkinsfiles, quality gates, and blue-green deployments.",
    href: "/interview-academy/cicd-jenkins",
    questionsCount: 30,
    difficulty: "Intermediate",
    timeToRead: "15 min",
    skills: ["Jenkinsfiles", "Parallel Runs", "Quality Gates", "Blue-Green"],
  },
  {
    chapter: "08",
    title: "Jira",
    description: "10 questions covering defect tracking, workflow transitions, JQL filtering, and Zephyr test integration.",
    href: "/interview-academy/jira",
    questionsCount: 10,
    difficulty: "Beginner",
    timeToRead: "6 min",
    skills: ["Bug Lifecycle", "JQL Queries", "Sprint Reporting", "Integrations"],
  },
  {
    chapter: "09",
    title: "Docker",
    description: "20 questions on image layers, docker compose grids, volume data mounts, and pipeline isolation.",
    href: "/interview-academy/docker",
    questionsCount: 20,
    difficulty: "Intermediate",
    timeToRead: "10 min",
    skills: ["Containers vs VMs", "Dockerfiles", "Docker Compose", "Volumes"],
  },
  {
    chapter: "10",
    title: "CLI & Linux",
    description: "20 commands for file system navigation, log tailing grep, process ports listening, and server connection checks.",
    href: "/interview-academy/cli-linux",
    questionsCount: 20,
    difficulty: "Beginner",
    timeToRead: "8 min",
    skills: ["File Ops", "Log Grep", "Tailing Logs", "Networking"],
  },
  {
    chapter: "11",
    title: "AI for QA",
    description: "25 questions covering prompt design, self-healing element selectors, Applitools visual checks, and predictive coverage.",
    href: "/interview-academy/ai-for-qa",
    questionsCount: 25,
    difficulty: "Intermediate",
    timeToRead: "12 min",
    skills: ["Self-Healing", "Visual Checking", "NLP Testing", "Bug Prediction"],
  },
  {
    chapter: "12",
    title: "Tricky Scenarios",
    description: "40 scenarios on developer conflict resolution, debugging integration failures, testing under deadlines, and cart logic.",
    href: "/interview-academy/tricky-scenarios",
    questionsCount: 40,
    difficulty: "Advanced",
    timeToRead: "22 min",
    skills: ["QA Conflict", "API vs UI Mismatch", "Cart Concurrency", "Critical Release"],
  }
];

const getModuleIcon = (chapter: string): React.ReactNode => {
  const props = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: styles.moduleIcon,
  } as React.SVGProps<SVGSVGElement>;

  switch (chapter) {
    case "01": // Manual Testing - Clipboard
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case "02": // Selenium with Java - Browser
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );
    case "03": // API Testing with Postman - Network Globe
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "04": // SQL & Databases - Server Database Cylinder
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "05": // Java Programming - Code block brackets
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "06": // Git & GitHub - Git branch nodes
      return (
        <svg {...props}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case "07": // CI/CD & Jenkins - Loop
      return (
        <svg {...props}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case "08": // Jira - Columns Kanban
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    case "09": // Docker - Layer Box
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "10": // CLI & Linux - Console Command Prompter
      return (
        <svg {...props}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "11": // AI for QA - Neural network CPU
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      );
    case "12": // Tricky Scenarios - Alert warning sign
      return (
        <svg {...props}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
};

export default function InterviewAcademyIndex(): ReactNode {
  return (
    <Layout
      title="Interview Academy Q&A Bank"
      description="Practice 550+ real-world QA engineering, SDET, and software testing interview questions with detailed explanations and code.">
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.heading}>Interview Academy</h1>
            <p className={styles.intro}>
              Bridge the gap between theoretical testing and production-grade software engineering. 
              Study 550+ structured questions, concrete coding challenges, and dynamic architectural systems designed to build SDET competence.
            </p>
          </header>

          <div className={styles.grid}>
            {academyModules.map((module) => {
              const diffClass = 
                module.difficulty === 'Beginner' ? styles.beginner :
                module.difficulty === 'Intermediate' ? styles.intermediate :
                styles.advanced;

              return (
                <div key={module.chapter} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.chapterNumber}>{module.chapter}</span>
                    <span className={`${styles.difficultyTag} ${diffClass}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>
                    {getModuleIcon(module.chapter)}
                    <span>{module.title}</span>
                  </h3>
                  <p className={styles.cardDescription}>{module.description}</p>
                  
                  <div className={styles.metaRow}>
                    <span className={styles.metaBadge}>
                      <strong>{module.questionsCount}</strong> Questions
                    </span>
                    <span className={styles.metaBadge}>
                      {module.timeToRead}
                    </span>
                  </div>

                  <div className={styles.skillsRow}>
                    {module.skills.map((skill) => (
                      <span key={skill} className={styles.skillChip}>{skill}</span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <Link className={styles.ctaButton} to={module.href}>
                      Explore Questions &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
