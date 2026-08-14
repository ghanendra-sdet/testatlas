import React, { useState } from 'react';
import styles from './styles.module.css';

interface BugMuseumProps {
  id: string;
  title: string;
  category: string;
  whatHappened: string;
  whyMissed: string;
  rootCause: string;
  howToDetect: string;
  testToCatch: string;
}

export default function BugMuseum({
  id,
  title,
  category,
  whatHappened,
  whyMissed,
  rootCause,
  howToDetect,
  testToCatch
}: BugMuseumProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'root' | 'prevention'>('overview');

  return (
    <div className={styles.museumBox}>
      <div className={styles.header}>
        <span className={styles.museumLabel}>BUG MUSEUM</span>
        <span className={styles.categoryBadge}>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>

      {/* Interactive Tabs */}
      <div className={styles.tabsRow}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'root' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('root')}
        >
          Root Cause Analysis
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'prevention' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('prevention')}
        >
          Prevention & Testing
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'overview' && (
          <div className={styles.fadeContent}>
            <div className={styles.section}>
              <h4 className={styles.sectionHeader}>What Happened?</h4>
              <p className={styles.text}>{whatHappened}</p>
            </div>
            <div className={styles.section}>
              <h4 className={styles.sectionHeader}>Why Testing Missed It</h4>
              <p className={`${styles.text} ${styles.warningText}`}>{whyMissed}</p>
            </div>
          </div>
        )}

        {activeTab === 'root' && (
          <div className={styles.fadeContent}>
            <div className={styles.section}>
              <h4 className={styles.sectionHeader}>Technical Root Cause</h4>
              <p className={styles.text}>{rootCause}</p>
            </div>
          </div>
        )}

        {activeTab === 'prevention' && (
          <div className={styles.fadeContent}>
            <div className={styles.section}>
              <h4 className={styles.sectionHeader}>How to Detect It</h4>
              <p className={styles.text}>{howToDetect}</p>
            </div>
            <div className={styles.section}>
              <h4 className={styles.sectionHeader}>What Test Should Have Caught It?</h4>
              <p className={`${styles.text} ${styles.successText}`}>{testToCatch}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
