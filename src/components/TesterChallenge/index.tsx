import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface TesterChallengeProps {
  id: string;
  title?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export default function TesterChallenge({
  id,
  title = "TESTER'S CHALLENGE",
  question,
  options,
  correctIndex,
  explanation
}: TesterChallengeProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`challenge_${id}`);
      if (stored !== null) {
        setSelected(parseInt(stored, 10));
        setSubmitted(true);
      }
    }
  }, [id]);

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`challenge_${id}`, selected.toString());
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`challenge_${id}`);
    }
  };

  return (
    <div className={styles.challengeBox}>
      <div className={styles.header}>
        <span className={styles.badge}>{title}</span>
      </div>
      <p className={styles.question}>{question}</p>
      
      <div className={styles.optionsList}>
        {options.map((option, idx) => {
          let btnClass = styles.optionBtn;
          if (selected === idx) {
            btnClass += ` ${styles.selected}`;
          }
          if (submitted) {
            if (idx === correctIndex) {
              btnClass += ` ${styles.correct}`;
            } else if (selected === idx && selected !== correctIndex) {
              btnClass += ` ${styles.incorrect}`;
            }
            btnClass += ` ${styles.disabled}`;
          }

          return (
            <button
              key={idx}
              className={btnClass}
              onClick={() => handleSelect(idx)}
              disabled={submitted}
            >
              <span className={styles.optionMarker}>
                {submitted && idx === correctIndex ? '✓' : submitted && selected === idx ? '✗' : String.fromCharCode(65 + idx)}
              </span>
              <span className={styles.optionText}>{option}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.actionRow}>
        {!submitted ? (
          <button
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit Answer
          </button>
        ) : (
          <button className={styles.resetBtn} onClick={handleReset}>
            Retry Challenge
          </button>
        )}
      </div>

      {submitted && (
        <div className={`${styles.explanationBox} ${selected === correctIndex ? styles.explanationCorrect : styles.explanationIncorrect}`}>
          <h4 className={styles.explanationTitle}>
            {selected === correctIndex ? 'Correct! 🎉' : 'Incorrect. Let\'s learn why:'}
          </h4>
          <p className={styles.explanationText}>{explanation}</p>
        </div>
      )}
    </div>
  );
}
