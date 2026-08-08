import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {ReactNode} from 'react';
import HeroWorkflowDiagram from '@site/src/components/HeroWorkflowDiagram';
import styles from './index.module.css';

type LearningPath = {
  title: string;
  description: string;
  href?: string;
  status: string;
};

const learningPaths: LearningPath[] = [
  {
    title: 'Foundations of Software Testing',
    description: 'What testing actually is, and why it matters before you write a single test case.',
    href: '/learning-paths/foundations/what-is-software-testing',
    status: 'Live · 17 modules',
  },
  {
    title: 'Manual Testing & Test Design',
    description: 'Boundary values, equivalence classes, decision tables — designing tests that catch real problems.',
    href: '/learning-paths/manual-testing/test-design-fundamentals',
    status: 'Live · 23 modules, certified',
  },
  {
    title: 'API Testing',
    description: 'Apply test design to REST APIs: contracts, authentication, error handling, edge cases.',
    href: '/learning-paths/api-testing/what-is-api-testing',
    status: 'Live · 21 modules, certified',
  },
  {
    title: 'Test Automation',
    description: 'Turn designed test cases into automation that survives real change, not just the demo.',
    href: '/learning-paths/automation/introduction-to-automation-testing',
    status: 'Live · 18 modules, certified',
  },
  {
    title: 'Database Testing',
    description: 'Enough SQL to verify what actually happened to the data, not just what the UI shows.',
    href: '/learning-paths/database-testing/what-is-database-testing',
    status: 'Live · 16 modules, certified',
  },
  {
    title: 'Performance Testing',
    description: 'Load, stress, and spike testing designed around realistic traffic, not arbitrary numbers.',
    href: '/learning-paths/performance-testing/what-is-performance-testing',
    status: 'Live · 17 modules, certified',
  },
  {
    title: 'Security Testing',
    description: 'The OWASP Top 10 and threat modeling from a tester’s point of view.',
    href: '/learning-paths/security-testing/what-is-security-testing',
    status: 'Live · 22 modules, certified',
  },
  {
    title: 'AI for QA',
    description: 'Using AI to accelerate testing, and testing AI-driven features themselves — where each fits.',
    href: '/learning-paths/ai-for-qa/ai-in-software-testing',
    status: 'Live · 17 modules, certified',
  },
  {
    title: 'Mobile Testing',
    description: 'Device fragmentation, offline behavior, hardware and permissions — testing beyond web and API.',
    href: '/learning-paths/mobile-testing/what-is-mobile-testing',
    status: 'Live · 16 modules, certified',
  },
  {
    title: 'Interview Preparation',
    description: 'Scenario-based practice for the interviews QA candidates actually get asked.',
    href: '/learning-paths/interview-preparation/how-qa-interviews-are-structured',
    status: 'Live · 21 modules, certified',
  },
  {
    title: 'Career & Leadership',
    description: 'Building a test strategy, leading a QA team, and growing beyond individual execution.',
    href: '/learning-paths/career-leadership/qa-career-roadmap-ic-vs-technical-lead-vs-manager',
    status: 'Live · 35 modules, certified',
  },
];

const differentiators = [
  {
    title: 'One concept, one page',
    description:
      'Boundary Value Analysis is explained once, not five times with five different levels of care. Every path that needs a concept links back to the same page, so it stays accurate as the project grows.',
  },
  {
    title: 'Built from real defects',
    description:
      'Every domain path is planned around a companion Bug Museum: real, anonymized production defects — the race condition, the off-by-one, the authorization bypass — with the root cause and the test that would have caught it.',
  },
  {
    title: 'Architecture before content',
    description:
      'Before writing a chapter, we designed how 500+ pages would fit together without duplicating or contradicting each other. That design was reviewed and is documented, not assumed.',
  },
];

const comingNext = [
  {
    label: 'Project Simulations',
    description: 'End-to-end QA workflows inside realistic products — starting with banking and e-commerce.',
    status: 'v1.1+',
  },
  {
    label: 'QA Labs',
    description: 'Runnable exercises with setup, acceptance criteria, and a working solution: automation, API, SQL.',
    status: 'v1.1+',
  },
  {
    label: 'Interview Academy',
    description: 'A question bank and mock-interview structures built from real QA hiring loops.',
    status: 'v1.1+',
  },
  {
    label: 'Resources',
    description: 'Templates and checklists — test plans, bug reports, requirement traceability matrices.',
    status: 'v1.1+',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const githubUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;

  return (
    <Layout
      title="The Open Software Testing Knowledge Base"
      description="Practical software testing knowledge, real-world projects, and open-source resources.">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>The Open Software Testing Knowledge Base</p>
                <h1 className={styles.heroTitle}>Learn testing the way it&rsquo;s actually practiced.</h1>
                <p className={styles.heroCopy}>
                  TestAtlas connects testing principles to the work that matters: understanding risk,
                  investigating failures, building useful coverage, and helping teams ship with confidence.
                </p>
                <div className={styles.actions}>
                  <Link
                    className="button button--primary button--lg"
                    to="/learning-paths/foundations/what-is-software-testing">
                    Start Learning
                  </Link>
                  <Link className="button button--secondary button--lg" to="/project/roadmap">
                    See the Roadmap
                  </Link>
                </div>
                <ul className={styles.heroBadgeRow}>
                  <li className={clsx(styles.heroBadge, styles.heroBadgeComplete)}>11 Paths Live</li>
                  <li className={styles.heroBadge}>223 Modules</li>
                  <li className={styles.heroBadge}>10 Certified Reference Curricula</li>
                  <li className={styles.heroBadge}>Free</li>
                  <li className={styles.heroBadge}>Open Source</li>
                </ul>
                <p className={styles.heroStatus}>
                  Foundations plus ten certified curricula — Manual Testing, API Testing, Test Automation,
                  Database Testing, Performance Testing, AI for QA, Mobile Testing, Security Testing,
                  Interview Preparation, and Career &amp; Leadership — are live today, 223 modules in total.
                </p>
              </div>
              <div className={styles.heroVisual}>
                <HeroWorkflowDiagram />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.missionBlock}>
              <p className={styles.eyebrow}>Mission</p>
              <p className={styles.missionStatement}>
                Help anyone master software testing through practical learning, real production
                experience, and open-source resources &mdash; free, always.
              </p>
              <p className={styles.missionSupport}>
                Most testing education explains definitions. TestAtlas is built on the belief that testing
                is a practiced judgment, not a checklist &mdash; so it teaches through realistic scenarios,
                real defects, and complete workflows instead of isolated terms.
              </p>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.surface)}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Where to go next</p>
              <h2 className={styles.sectionTitle}>Learning paths</h2>
              <p>
                Eleven role-based paths share one foundation. Nine are live today &mdash; everything else is
                being built against the same architecture, proposed and reviewed before a module is written.
              </p>
            </div>
            <div className={styles.pathGrid}>
              {learningPaths.map((path) =>
                path.href ? (
                  <Link className={clsx(styles.pathCard, styles.pathCardLive)} to={path.href} key={path.title}>
                    <span className={clsx(styles.pathStatus, styles.pathStatusLive)}>{path.status}</span>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                  </Link>
                ) : (
                  <div className={styles.pathCard} key={path.title}>
                    <span className={styles.pathStatus}>{path.status}</span>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Why TestAtlas</p>
              <h2 className={styles.sectionTitle}>Not another list of definitions</h2>
            </div>
            <div className={styles.differentiatorGrid}>
              {differentiators.map((item) => (
                <article className={styles.differentiator} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.surface)}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Coming next</p>
              <h2 className={styles.sectionTitle}>Beyond the learning paths</h2>
              <p>
                Projects, labs, interview practice, and templates are architected and scheduled &mdash; not
                yet written. Here&rsquo;s what&rsquo;s planned and when.
              </p>
            </div>
            <div className={styles.comingGrid}>
              {comingNext.map((item) => (
                <div className={styles.comingCard} key={item.label}>
                  <span className={styles.pathStatus}>{item.status}</span>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Community</p>
              <h2 className={styles.sectionTitle}>Built in the open, on purpose</h2>
              <p>
                TestAtlas is reviewed and community-maintained. The standards are public, and so is the
                reasoning behind them.
              </p>
            </div>
            <div className={styles.communityGrid}>
              <Link className={styles.communityCard} to="/project/contributing">
                <h3>Contribute</h3>
                <p>How to propose a page, follow the content standards, and get a review.</p>
              </Link>
              <Link className={styles.communityCard} to="/project/governance">
                <h3>Governance</h3>
                <p>How decisions get made, and who&rsquo;s accountable for them.</p>
              </Link>
              <Link className={styles.communityCard} href={githubUrl}>
                <h3>GitHub</h3>
                <p>Read the source, open an issue, or watch the project evolve commit by commit.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.callout}>
          <div className="container">
            <p className={styles.eyebrow}>Ready when you are</p>
            <h2 className={styles.sectionTitle}>Start with Foundations.</h2>
            <p>It&rsquo;s free, it&rsquo;s live, and it doesn&rsquo;t ask for a sign-up.</p>
            <div className={styles.actions}>
              <Link
                className="button button--primary button--lg"
                to="/learning-paths/foundations/what-is-software-testing">
                Start Learning
              </Link>
              <Link className="button button--outline button--lg" to="/project/contributing">
                Or help build what&rsquo;s next
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
