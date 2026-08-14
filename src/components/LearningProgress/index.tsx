import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Safely interact with localStorage in Docusaurus (SSR-proof)
const isBrowser = typeof window !== 'undefined';

export function getCompletedModules(): string[] {
  if (!isBrowser) return [];
  try {
    const data = localStorage.getItem('testatlas_completed_modules');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function saveCompletedModules(modules: string[]) {
  if (!isBrowser) return;
  try {
    localStorage.setItem('testatlas_completed_modules', JSON.stringify(modules));
    window.dispatchEvent(new Event('testatlas_progress_update'));
  } catch (e) {}
}

export function toggleModuleCompleted(moduleId: string): boolean {
  const completed = getCompletedModules();
  const index = completed.indexOf(moduleId);
  let isCompletedNow = false;
  if (index > -1) {
    completed.splice(index, 1);
  } else {
    completed.push(moduleId);
    isCompletedNow = true;
  }
  saveCompletedModules(completed);
  return isCompletedNow;
}

export function getLastActiveModule(): string | null {
  if (!isBrowser) return null;
  return localStorage.getItem('testatlas_last_active_module');
}

export function setLastActiveModule(moduleId: string) {
  if (!isBrowser) return;
  localStorage.setItem('testatlas_last_active_module', moduleId);
}

// React component to render a checkbox/button inside a module page
export default function MarkCompleted({ moduleId }: { moduleId: string }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(getCompletedModules().includes(moduleId));
    setLastActiveModule(moduleId);

    const handleUpdate = () => {
      setCompleted(getCompletedModules().includes(moduleId));
    };
    window.addEventListener('testatlas_progress_update', handleUpdate);
    return () => window.removeEventListener('testatlas_progress_update', handleUpdate);
  }, [moduleId]);

  const handleToggle = () => {
    toggleModuleCompleted(moduleId);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleToggle}
        className={`${styles.button} ${completed ? styles.completed : ''}`}
        aria-label={completed ? 'Mark module as incomplete' : 'Mark module as completed'}
      >
        <span className={styles.checkboxIcon}>
          {completed ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : null}
        </span>
        {completed ? 'Completed' : 'Mark as Completed'}
      </button>
    </div>
  );
}

// React hook to get progress stats for a learning path prefix
export function usePathProgress(pathPrefix: string, totalModules: number) {
  const [stats, setStats] = useState({ completed: 0, percentage: 0 });

  const calculateStats = () => {
    if (!pathPrefix) return;
    const completed = getCompletedModules();
    const pathCompletedCount = completed.filter(m => m.startsWith(pathPrefix)).length;
    const percentage = totalModules > 0 ? Math.round((pathCompletedCount / totalModules) * 100) : 0;
    setStats({ completed: pathCompletedCount, percentage });
  };

  useEffect(() => {
    calculateStats();
    window.addEventListener('testatlas_progress_update', calculateStats);
    return () => window.removeEventListener('testatlas_progress_update', calculateStats);
  }, [pathPrefix, totalModules]);

  return stats;
}
