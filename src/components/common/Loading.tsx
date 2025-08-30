'use client';

import type { CSSProperties } from 'react';
import styles from './Loading.module.css';

type Props = {
  /** ex: 48 ou '3rem' */
  size?: number | string;
  /** ex: 5 */
  thickness?: number;
  /** % de “trou” (0–100). ex: 22 */
  gap?: number;
  label?: string;
};

// Types pour les variables CSS personnalisées
type SpinnerVars = Record<'--size' | '--thickness' | '--gap', string>;

export default function Loading({
  size = 48,
  thickness = 10,
  gap = 22,
  label = 'Chargement…',
}: Props) {
  const cssSize = typeof size === 'number' ? `${size}px` : size;

  const style: CSSProperties & SpinnerVars = {
    '--size': cssSize,
    '--thickness': String(thickness),
    '--gap': String(gap),
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
      className={styles.wrapper}
      style={style}
    >
      <svg className={styles.svg} viewBox="0 0 100 100" aria-hidden="true">
        <g className={styles.spin}>
          {/* arc fixe, on fait juste tourner le groupe */}
          <circle className={styles.arc} cx="50" cy="50" r="42" pathLength={100} />
        </g>
      </svg>
      <span className={styles.srOnly}>{label}</span>
    </div>
  );
}
