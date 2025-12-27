'use client'

import React from 'react'
import styles from './MiniCTA.module.css'

type MiniCTAProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export default function MiniCTA({ children, href, className }: MiniCTAProps) {
  return (
    <a href={href} className={`${styles.cta} ${className || ''}`}>
      {children}
    </a>
  )
}
