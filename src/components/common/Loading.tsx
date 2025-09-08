'use client';
import type { CSSProperties } from 'react';
import styles from './Loading.module.css';

type Props = {
  size?: number | string;      // ex: 48 ou "3rem"
  thickness?: number;          // ex: 6 (px)
  label?: string;
}

type Vars = Record<'--size'|'--thickness', string>;

export default function Loading({
  size = 48,
  thickness = 6,
  label = 'Chargement…',
}: Props) {
  const cssSize = typeof size === 'number' ? `${size}px` : size;

  const style: CSSProperties & Vars = {
    '--size': cssSize,
    '--thickness': `${thickness}px`,
  };

  return (
    <div role="status" aria-live="polite" aria-busy="true" aria-label={label}
         className={styles.wrapper} style={style}>
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.srOnly}>{label}</span>
    </div>
  );
}
