import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Stage = {
  id: string;
  label: string;
  x: number;
  y: number;
  emphasis?: 'current' | 'attention';
};

const NODE_W = 176;
const NODE_H = 56;

// Left column is the main pipeline; Requirements through Release, top to bottom.
// Defects branches right off Execution; CI/CD branches right off Automation and
// receives a feedback line from Defects — the loop a real testing workflow forms.
const stages: Stage[] = [
  {id: 'requirements', label: 'Requirements', x: 16, y: 8},
  {id: 'planning', label: 'Test Planning', x: 16, y: 96},
  {id: 'design', label: 'Test Design', x: 16, y: 184},
  {id: 'execution', label: 'Execution', x: 16, y: 272, emphasis: 'current'},
  {id: 'automation', label: 'Automation', x: 16, y: 360},
  {id: 'release', label: 'Release', x: 16, y: 448},
  {id: 'defects', label: 'Defects', x: 268, y: 272, emphasis: 'attention'},
  {id: 'cicd', label: 'CI/CD', x: 268, y: 360},
];

const stageIndex = Object.fromEntries(stages.map((s, i) => [s.id, i]));
const center = (s: Stage) => ({x: s.x + NODE_W / 2, y: s.y + NODE_H / 2});
const byId = (id: string) => stages.find((s) => s.id === id)!;

type Connector = {
  id: string;
  from: string;
  to: string;
  kind: 'vertical' | 'horizontal';
};

const connectors: Connector[] = [
  {id: 'req-plan', from: 'requirements', to: 'planning', kind: 'vertical'},
  {id: 'plan-design', from: 'planning', to: 'design', kind: 'vertical'},
  {id: 'design-exec', from: 'design', to: 'execution', kind: 'vertical'},
  {id: 'exec-auto', from: 'execution', to: 'automation', kind: 'vertical'},
  {id: 'auto-release', from: 'automation', to: 'release', kind: 'vertical'},
  {id: 'exec-defects', from: 'execution', to: 'defects', kind: 'horizontal'},
  {id: 'auto-cicd', from: 'automation', to: 'cicd', kind: 'horizontal'},
  {id: 'defects-cicd', from: 'defects', to: 'cicd', kind: 'vertical'},
];

function connectorPath(c: Connector): string {
  const from = byId(c.from);
  const to = byId(c.to);
  if (c.kind === 'vertical') {
    const x = from.x + NODE_W / 2;
    const y1 = from.y + NODE_H;
    const y2 = to.y;
    return `M ${x} ${y1} L ${x} ${y2}`;
  }
  const y = from.y + NODE_H / 2;
  const x1 = from.x + NODE_W;
  const x2 = to.x;
  return `M ${x1} ${y} L ${x2} ${y}`;
}

const ICON_STROKE = '#f7fbfc';

function StageIcon({id, x, y}: {id: string; x: number; y: number}): ReactNode {
  switch (id) {
    case 'requirements':
      return (
        <g transform={`translate(${x - 8} ${y - 10})`}>
          <rect width="16" height="20" rx="2" fill="none" stroke={ICON_STROKE} strokeWidth="1.6" />
          <line x1="3.5" y1="5" x2="12.5" y2="5" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="3.5" y1="9.5" x2="12.5" y2="9.5" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="3.5" y1="14" x2="9" y2="14" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
        </g>
      );
    case 'planning':
      return (
        <g transform={`translate(${x - 8} ${y - 10})`}>
          <rect x="0.5" y="2" width="16" height="18" rx="2" stroke={ICON_STROKE} strokeWidth="1.6" fill="none" />
          <rect x="5" y="0" width="7" height="4" rx="1" fill={ICON_STROKE} />
          <path
            d="M4.5 11.5l2.5 2.5L14 7"
            stroke={ICON_STROKE}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case 'design':
      return (
        <g transform={`translate(${x - 10} ${y - 10})`}>
          <rect x="0" y="6" width="12" height="12" rx="1.5" stroke={ICON_STROKE} strokeWidth="1.5" fill="none" />
          <rect x="8" y="0" width="12" height="12" rx="1.5" stroke={ICON_STROKE} strokeWidth="1.5" fill="#0b2c3e" />
        </g>
      );
    case 'execution':
      return (
        <g transform={`translate(${x} ${y})`}>
          <circle r="10" fill="none" stroke={ICON_STROKE} strokeWidth="1.3" />
          <path d="M-3.2 -5 L6.3 0 L-3.2 5 Z" fill={ICON_STROKE} />
        </g>
      );
    case 'automation':
      return (
        <g transform={`translate(${x} ${y})`}>
          <circle r="4.2" fill="none" stroke={ICON_STROKE} strokeWidth="1.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="0"
              y1="-6.4"
              x2="0"
              y2="-9.6"
              stroke={ICON_STROKE}
              strokeWidth="1.4"
              strokeLinecap="round"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      );
    case 'release':
      return (
        <g transform={`translate(${x} ${y})`}>
          <path
            d="M0 -9 L4 -1 L4 5 L-4 5 L-4 -1 Z"
            fill="none"
            stroke={ICON_STROKE}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M-4 2.5 L-8.5 8 L-4 6 Z" fill={ICON_STROKE} />
          <path d="M4 2.5 L8.5 8 L4 6 Z" fill={ICON_STROKE} />
          <circle cx="0" cy="-2" r="1.4" fill={ICON_STROKE} />
        </g>
      );
    case 'defects':
      return (
        <g transform={`translate(${x} ${y})`} className={styles.defectGlow}>
          <ellipse cx="0" cy="1" rx="5.4" ry="7" fill="none" stroke={ICON_STROKE} strokeWidth="1.5" />
          <line x1="-5.4" y1="-2.5" x2="-9" y2="-4.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="5.4" y1="-2.5" x2="9" y2="-4.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="-5.4" y1="1.5" x2="-9" y2="1.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="5.4" y1="1.5" x2="9" y2="1.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="-5.4" y1="5.5" x2="-9" y2="7.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="5.4" y1="5.5" x2="9" y2="7.5" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="-7" x2="0" y2="-10" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case 'cicd':
      return (
        <g transform={`translate(${x} ${y})`} className={styles.cicdLoop}>
          <path
            d="M -9 0 C -9 -5 -3.5 -5 0 0 C 3.5 5 9 5 9 0 C 9 -5 3.5 -5 0 0 C -3.5 5 -9 5 -9 0 Z"
            fill="none"
            stroke={ICON_STROKE}
            strokeWidth="1.5"
          />
        </g>
      );
    default:
      return null;
  }
}

const VIEW_W = 460;
const VIEW_H = 528;

export default function HeroWorkflowDiagram(): ReactNode {
  return (
    <svg
      className={styles.diagram}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-labelledby="hero-workflow-title hero-workflow-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-workflow-title">The TestAtlas testing workflow</title>
      <desc id="hero-workflow-desc">
        Requirements lead to test planning, then test design, then execution. Execution feeds both automation and
        any defects found. Automation connects into CI/CD, which defects also feed back into, and the pipeline
        closes with release.
      </desc>

      <defs>
        <marker id="hero-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#5fb8c4" />
        </marker>
      </defs>

      {/* Connectors, drawn first so nodes sit on top */}
      {connectors.map((c, i) => (
        <path
          key={c.id}
          d={connectorPath(c)}
          className={styles.connector}
          style={{animationDelay: `${i * 90}ms`}}
          fill="none"
          stroke="#5fb8c4"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#hero-arrow)"
          opacity={0.85}
        />
      ))}

      {/* Pulse ring behind the current stage */}
      {(() => {
        const exec = byId('execution');
        const {x, y} = center(exec);
        return (
          <rect
            className={styles.pulseRing}
            x={x - NODE_W / 2}
            y={y - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            rx="12"
            fill="none"
            stroke="#38d2a5"
            strokeWidth="2"
            aria-hidden="true"
          />
        );
      })()}

      {stages.map((s) => {
        const isCurrent = s.emphasis === 'current';
        const isAttention = s.emphasis === 'attention';
        const iconPos = ['execution', 'automation', 'defects', 'cicd'].includes(s.id)
          ? {x: s.x + 28, y: s.y + NODE_H / 2}
          : {x: s.x + 20, y: s.y + NODE_H / 2};

        return (
          <g key={s.id} className={styles.node} style={{animationDelay: `${stageIndex[s.id] * 110}ms`}}>
            <rect
              x={s.x}
              y={s.y}
              width={NODE_W}
              height={NODE_H}
              rx="12"
              className={isAttention ? styles.defectGlow : undefined}
              fill={isAttention ? 'rgba(224,102,102,0.10)' : 'rgba(247,251,252,0.05)'}
              stroke={isCurrent ? '#38d2a5' : isAttention ? '#e08a8a' : 'rgba(168,230,226,0.35)'}
              strokeWidth={isCurrent ? 2 : 1.4}
            />
            <StageIcon id={s.id} x={iconPos.x} y={iconPos.y} />
            <text
              x={s.x + 44}
              y={s.y + NODE_H / 2}
              dominantBaseline="middle"
              fill="#f7fbfc"
              fontFamily="Arial, sans-serif"
              fontSize="15"
              fontWeight="600"
            >
              {s.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
