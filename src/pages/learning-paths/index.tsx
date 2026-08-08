import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';
import {learningPaths} from '@site/src/data/learningPaths';
import homeStyles from '../index.module.css';
import styles from './styles.module.css';

export default function LearningPathsIndex(): ReactNode {
  return (
    <Layout
      title="Learning Paths"
      description="Eleven role-based software testing learning paths — Foundations through Career & Leadership, 223 modules, all live and built against the same certified architecture.">
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.heading}>Learning paths</h1>
            <p className={styles.intro}>
              Eleven role-based paths share one foundation, all live today — 223 modules from Foundations through
              Career &amp; Leadership, each built against the same certified architecture.
            </p>
          </header>
          <div className={homeStyles.pathGrid}>
            {learningPaths.map((path) =>
              path.href ? (
                <Link
                  className={clsx(homeStyles.pathCard, homeStyles.pathCardLive)}
                  to={path.href}
                  key={path.title}>
                  <span className={clsx(homeStyles.pathStatus, homeStyles.pathStatusLive)}>{path.status}</span>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </Link>
              ) : (
                <div className={homeStyles.pathCard} key={path.title}>
                  <span className={homeStyles.pathStatus}>{path.status}</span>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
