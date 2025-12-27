'use client'

import React from 'react'
import styles from './Cta.module.css'

type CTAProps = {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export default function CTA({ children, onClick, href, className }: CTAProps) {
  if (href) {
    return (
      <a href={href} className={`${styles.cta} ${className || ''}`}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${styles.cta} ${className || ''}`}>
      {children}
    </button>
  )
}
