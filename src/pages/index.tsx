import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';
import HeroWorkflowDiagram from '@site/src/components/HeroWorkflowDiagram';
import GoalSelector from '@site/src/components/GoalSelector';
import LearningPathCard from '@site/src/components/LearningPathCard';
import { learningPaths } from '@site/src/data/learningPaths';
import { getLastActiveModule, getCompletedModules } from '@site/src/components/LearningProgress';
import styles from './index.module.css';

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
    label: 'Bug Museum Console',
    description: 'An interactive database of real-world concurrency, security, and transaction bugs with code verification.',
    status: 'v1.1+',
  },
  {
    label: 'Resources & Templates',
    description: 'Ready-to-use checklist libraries for release, API, mobile, performance, and security testing.',
    status: 'v1.1+',
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const githubUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;

  // Client-side progress tracking states (safe from SSR build errors)
  const [lastActive, setLastActive] = useState<string | null>(null);
  const [completedCount, setCompletedCount] = useState<number>(0);

  useEffect(() => {
    setLastActive(getLastActiveModule());
    setCompletedCount(getCompletedModules().length);

    const handleUpdate = () => {
      setLastActive(getLastActiveModule());
      setCompletedCount(getCompletedModules().length);
    };
    window.addEventListener('testatlas_progress_update', handleUpdate);
    return () => window.removeEventListener('testatlas_progress_update', handleUpdate);
  }, []);

  // Helper to format module pathname to a friendly label
  const getFriendlyModuleName = (path: string) => {
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart
      .replace(/^\d+-/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Layout
      title="Practical, Visual Software Testing Learning Platform"
      description="Practical software testing knowledge, interactive paths, real-world bug database, and open-source QA resources.">
      <main>
        
        {/* Continue Learning Banner */}
        {lastActive && (
          <div className={styles.continueBanner}>
            <div className="container">
              <div className={styles.continueContent}>
                <div className={styles.continueLeft}>
                  <span className={styles.continueLabel}>WELCOME BACK</span>
                  <span className={styles.continueTitle}>
                    Resume learning: <strong>{getFriendlyModuleName(lastActive)}</strong>
                  </span>
                </div>
                <div className={styles.continueRight}>
                  <span className={styles.completedBadge}>{completedCount} modules completed</span>
                  <Link className="button button--primary button--sm" to={lastActive}>
                    Continue Learning &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>Learn software testing by doing the work</p>
                <h1 className={styles.heroTitle}>The serious platform for learning software testing.</h1>
                <p className={styles.heroCopy}>
                  Practical learning paths for testers, SDETs, automation engineers, and QA leaders — 
                  from fundamentals to API, automation, performance, security, AI, and leadership.
                </p>
                <div className={styles.actions}>
                  <Link
                    className="button button--primary button--lg"
                    to="/learning-paths/foundations/what-is-software-testing">
                    Start Learning
                  </Link>
                  <a className="button button--secondary button--lg" href="#paths">
                    Explore Learning Paths
                  </a>
                </div>
                <ul className={styles.heroBadgeRow}>
                  <li className={clsx(styles.heroBadge, styles.heroBadgeComplete)}>11 Paths Live</li>
                  <li className={styles.heroBadge}>223 Modules</li>
                  <li className={styles.heroBadge}>10 Certified Reference Curricula</li>
                  <li className={styles.heroBadge}>Free</li>
                  <li className={styles.heroBadge}>Open Source</li>
                  <li className={styles.heroBadge}>No Login Required</li>
                </ul>
              </div>
              <div className={styles.heroVisual}>
                <HeroWorkflowDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* Goal Selector Section */}
        <section className={styles.section}>
          <div className="container">
            <GoalSelector />
          </div>
        </section>

        {/* Mission Statement */}
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

        {/* Learning Paths Grid */}
        <section id="paths" className={clsx(styles.section, styles.surface)}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Core Curriculum</p>
              <h2 className={styles.sectionTitle}>Explore learning paths</h2>
              <p>
                Eleven role-based paths share one foundation. All eleven are live today &mdash; everything 
                is built against the same certified curriculum architecture.
              </p>
            </div>
            <div className={styles.pathGrid}>
              {learningPaths.map((path) => (
                <LearningPathCard
                  key={path.title}
                  title={path.title}
                  description={path.description}
                  href={path.href}
                  difficulty={path.difficulty}
                  modulesCount={path.modulesCount}
                  duration={path.duration}
                  skills={path.skills}
                  prerequisites={path.prerequisites}
                  careerRelevance={path.careerRelevance}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why TestAtlas */}
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

        {/* Coming Next */}
        <section className={clsx(styles.section, styles.surface)}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Coming next</p>
              <h2 className={styles.sectionTitle}>Beyond the learning paths</h2>
              <p>
                Projects, labs, and interactive consoles are scheduled. Here&rsquo;s what&rsquo;s planned and when.
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

        {/* Community */}
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

        {/* Start CTA */}
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
