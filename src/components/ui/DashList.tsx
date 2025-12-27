'use client'

import styles from './DashList.module.css'

type Props = {
  children: React.ReactNode
}

export default function DashList({ children }: Props) {
  return <ul className={styles.list}>{children}</ul>
}
