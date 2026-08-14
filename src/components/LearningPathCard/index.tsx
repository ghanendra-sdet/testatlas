import React from 'react';
import Link from '@docusaurus/Link';
import { usePathProgress } from '@site/src/components/LearningProgress';
import styles from './styles.module.css';

export interface LearningPathCardProps {
  title: string;
  description: string;
  href: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  modulesCount: number;
  duration: string;
  skills: string[];
  prerequisites?: string;
  careerRelevance: string;
}

export default function LearningPathCard({
  title,
  description,
  href,
  difficulty,
  modulesCount,
  duration,
  skills,
  prerequisites,
  careerRelevance
}: LearningPathCardProps) {
  // Infer pathPrefix from href (e.g. /learning-paths/foundations/what-is-software-testing -> /learning-paths/foundations)
  const pathPrefix = href.split('/').slice(0, 3).join('/');
  const { completed, percentage } = usePathProgress(pathPrefix, modulesCount);

  // Difficulty badge class helper
  const diffClass = difficulty === 'Beginner' 
    ? styles.diffBeginner 
    : difficulty === 'Intermediate' 
    ? styles.diffIntermediate 
    : styles.diffAdvanced;

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <span className={`${styles.badge} ${diffClass}`}>{difficulty}</span>
        <span className={styles.modulesCount}>{modulesCount} modules · {duration}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Progress Bar (Visible once user has completed at least 1 module) */}
      {completed > 0 && (
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>
            <span>{completed} / {modulesCount} completed</span>
            <span>{percentage}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${percentage}%` }} />
          </div>
        </div>
      )}

      {/* Career Relevance */}
      <div className={styles.relevanceBox}>
        <span className={styles.boxLabel}>Career Impact:</span>
        <p className={styles.relevanceText}>{careerRelevance}</p>
      </div>

      {/* Prerequisites */}
      {prerequisites && (
        <div className={styles.prereqBox}>
          <span className={styles.boxLabel}>Prerequisites:</span>
          <span className={styles.prereqText}>{prerequisites}</span>
        </div>
      )}

      {/* Skills Tags */}
      <div className={styles.skillsWrapper}>
        {skills.map(skill => (
          <span key={skill} className={styles.skillTag}>{skill}</span>
        ))}
      </div>

      <div className={styles.actionRow}>
        <Link to={href} className="button button--primary button--block">
          {completed > 0 ? 'Continue Path →' : 'Start Path →'}
        </Link>
      </div>
    </div>
  );
}
