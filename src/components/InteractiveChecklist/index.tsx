import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { jmeterChecklistData, ChecklistSection, ChecklistItem } from './jmeterData';
import Link from '@docusaurus/Link';

const isBrowser = typeof window !== 'undefined';

interface InteractiveChecklistProps {
  id?: string;
  data?: ChecklistSection[];
}

export default function InteractiveChecklist({ id = 'jmeter_load_test', data = jmeterChecklistData }: InteractiveChecklistProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize and load completed status from localStorage
  useEffect(() => {
    setMounted(true);
    if (isBrowser) {
      try {
        const saved = localStorage.getItem(`testatlas_checklist_${id}`);
        if (saved) {
          setCheckedIds(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load checklist state', e);
      }
    }
  }, [id]);

  // Helper to save checked state
  const saveState = (updated: string[]) => {
    setCheckedIds(updated);
    if (isBrowser) {
      try {
        localStorage.setItem(`testatlas_checklist_${id}`, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save checklist state', e);
      }
    }
  };

  // Toggle item status
  const toggleItem = (itemId: string, e: React.MouseEvent) => {
    // Prevent toggle if clicking on a reference link
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    
    const index = checkedIds.indexOf(itemId);
    const updated = [...checkedIds];
    if (index > -1) {
      updated.splice(index, 1);
    } else {
      updated.push(itemId);
    }
    saveState(updated);
  };

  // Reset checklist helper
  const resetChecklist = () => {
    if (window.confirm('Are you sure you want to reset all checklist items?')) {
      saveState([]);
    }
  };

  // Compute overall counts
  const allItems = data.flatMap(section => section.items);
  const totalCount = allItems.length;
  const completedCount = allItems.filter(item => checkedIds.includes(item.id)).length;
  const overallPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Render check icon helper
  const renderCheckIcon = () => (
    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  // Render external link icon helper
  const renderExternalLinkIcon = () => (
    <svg className={styles.refLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  // Reset button icon
  const renderResetIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  );

  return (
    <div className={styles.container}>
      {/* Dynamic Header Progress Card */}
      <div className={styles.headerCard}>
        <div className={styles.progressInfo}>
          <h3 className={styles.progressTitle}>Checklist Completion</h3>
          <p className={styles.progressSubtitle}>
            Track your testing preparations live. Your progress is saved automatically.
          </p>
          <div className={styles.progressBarBg}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${mounted ? overallPercentage : 0}%` }}
            />
          </div>
          <div className={styles.progressMetrics}>
            <span>{completedCount} of {totalCount} items completed</span>
            <span>{mounted ? overallPercentage : 0}% Done</span>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button 
            className={styles.resetButton} 
            onClick={resetChecklist}
            aria-label="Reset checklist progress"
          >
            {renderResetIcon()}
            Reset Progress
          </button>
        </div>
      </div>

      {/* Accordion List Sections */}
      {data.map((section, sIndex) => {
        const sectionItems = section.items;
        const sectionCompletedCount = sectionItems.filter(item => checkedIds.includes(item.id)).length;
        const sectionTotalCount = sectionItems.length;
        const isSectionCompleted = sectionCompletedCount === sectionTotalCount && sectionTotalCount > 0;

        return (
          <details key={sIndex} className={styles.section}>
            <summary className={styles.sectionSummary}>
              <div className={styles.summaryTitleWrapper}>
                <span className={styles.summaryIcon}>{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <span className={`${styles.sectionProgressBadge} ${isSectionCompleted ? styles.sectionProgressBadgeCompleted : ''}`}>
                {sectionCompletedCount}/{sectionTotalCount}
              </span>
            </summary>
            
            <div className={styles.sectionContent}>
              {sectionItems.map((item) => {
                const isCompleted = checkedIds.includes(item.id);
                return (
                  <div 
                    key={item.id} 
                    className={`${styles.itemCard} ${isCompleted ? styles.itemCardCompleted : ''}`}
                    onClick={(e) => toggleItem(item.id, e)}
                  >
                    {/* Custom Checkbox */}
                    <div className={`${styles.checkboxContainer} ${isCompleted ? styles.checkboxChecked : ''}`}>
                      {isCompleted && renderCheckIcon()}
                    </div>

                    {/* Content Details */}
                    <div className={styles.itemDetails}>
                      <span className={`${styles.itemText} ${isCompleted ? styles.itemTextCompleted : ''}`}>
                        {item.text}
                      </span>

                      {item.example && (
                        <div className={styles.exampleBlock}>
                          <strong>Example:</strong> {item.example}
                        </div>
                      )}

                      {item.refLink && item.refText && (
                        <div className={styles.refWrapper}>
                          <Link to={item.refLink} className={styles.refLink}>
                            {renderExternalLinkIcon()}
                            {item.refText}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
}
