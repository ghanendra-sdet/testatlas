import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';
import styles from './index.module.css';

const pillars = [
  {
    icon: '01',
    title: 'Learn with purpose',
    description:
      'Structured paths that explain why a testing practice matters, when to use it, and how it works on a real product.',
  },
  {
    icon: '02',
    title: 'Practise the work',
    description:
      'Runnable labs, reusable templates, and project simulations that turn concepts into decisions you can make on a team.',
  },
  {
    icon: '03',
    title: 'Build in the open',
    description:
      'A reviewed, community-maintained knowledge base that values accurate guidance over a large collection of shallow pages.',
  },
];

const futureAreas = [
  'Learning paths',
  'QA labs',
  'Project simulations',
  'Templates',
  'Interview Academy',
  'Resources',
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="The Open Software Testing Knowledge Base"
      description="Practical software testing knowledge, real-world projects, and open-source resources.">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>The Open Software Testing Knowledge Base</p>
            <h1>Learn testing the way it is practised.</h1>
            <p className={styles.heroCopy}>
              TestAtlas connects testing principles to the work that matters: understanding risk,
              investigating failures, building useful coverage, and helping teams ship with confidence.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/project/overview">
                Explore TestAtlas
              </Link>
              <Link className="button button--secondary button--lg" to="/project/contributing">
                Contribute
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>A practical ecosystem</p>
              <h2>More than a documentation site</h2>
              <p>
                Good testing knowledge should help you make a better decision at work, not just
                recognise a term in an interview.
              </p>
            </div>
            <div className={styles.pillarGrid}>
              {pillars.map((pillar) => (
                <article className={styles.pillar} key={pillar.title}>
                  <span className={styles.pillarNumber}>{pillar.icon}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.surface)}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Built deliberately</p>
              <h2>What TestAtlas is becoming</h2>
              <p>
                The foundation is in place. Content will be added through reviewed learning paths,
                hands-on practice, and realistic project work—not rushed into isolated articles.
              </p>
            </div>
            <ul className={styles.areaList}>
              {futureAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.callout}>
          <div className="container">
            <p className={styles.eyebrow}>Open source, high standards</p>
            <h2>Every merge should make TestAtlas better than it was yesterday.</h2>
            <p>
              Read the standards that guide the project, or help shape the knowledge base from the
              beginning.
            </p>
            <div className={styles.actions}>
              <Link className="button button--outline button--lg" to="/project/constitution">
                Read the constitution
              </Link>
              <Link className="button button--secondary button--lg" to="/project/roadmap">
                View the roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
