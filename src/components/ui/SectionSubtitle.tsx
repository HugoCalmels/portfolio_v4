'use client'

import styles from './SectionSubtitle.module.css'

type Props = {
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'p'
}

export default function SectionSubtitle({
  children,
  as: Tag = 'h2',
}: Props) {
  return <Tag className={styles.subtitle}>{children}</Tag>
}
