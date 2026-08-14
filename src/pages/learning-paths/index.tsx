import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import { learningPaths } from '@site/src/data/learningPaths';
import LearningPathCard from '@site/src/components/LearningPathCard';
import { getCompletedModules } from '@site/src/components/LearningProgress';
import styles from './styles.module.css';

export default function LearningPathsIndex(): ReactNode {
  const [completedCount, setCompletedCount] = useState<number>(0);
  const totalModules = 223; // Sum of all live modules

  useEffect(() => {
    setCompletedCount(getCompletedModules().length);
    const handleUpdate = () => {
      setCompletedCount(getCompletedModules().length);
    };
    window.addEventListener('testatlas_progress_update', handleUpdate);
    return () => window.removeEventListener('testatlas_progress_update', handleUpdate);
  }, []);

  const overallPercentage = Math.round((completedCount / totalModules) * 100);

  return (
    <Layout
      title="Learning Paths Curriculum"
      description="Eleven role-based software testing learning paths — Foundations through Career & Leadership, 223 modules, all live and built against the same certified architecture.">
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.heading}>Learning Paths</h1>
            <p className={styles.intro}>
              TestAtlas structured curriculum contains eleven role-based paths sharing one common foundation. 
              All 223 modules are live, free, and designed to teach testing as a practiced engineering judgment.
            </p>

            {/* Overall Progress Dashboard */}
            {completedCount > 0 && (
              <div className={styles.progressDashboard}>
                <div className={styles.dashboardMetric}>
                  <span className={styles.metricValue}>{completedCount}</span>
                  <span className={styles.metricLabel}>Modules Completed</span>
                </div>
                <div className={styles.dashboardDivider} />
                <div className={styles.dashboardMetric}>
                  <span className={styles.metricValue}>{overallPercentage}%</span>
                  <span className={styles.metricLabel}>Overall Progress</span>
                </div>
                <div className={styles.dashboardDivider} />
                <div className={styles.dashboardProgressTrack}>
                  <div className={styles.dashboardBarBg}>
                    <div className={styles.dashboardBarFill} style={{ width: `${overallPercentage}%` }} />
                  </div>
                  <span className={styles.trackHelper}>Track progress across all 11 paths automatically</span>
                </div>
              </div>
            )}
          </header>

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
      </main>
    </Layout>
  );
}
