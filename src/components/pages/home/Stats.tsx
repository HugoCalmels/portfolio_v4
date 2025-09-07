'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from './Stats.module.css'

type StatProps = {
  value: number
  suffix?: string
  label: string
  duration?: number // en ms
}

function StatItem({ value, suffix = '', label, duration = 1500 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    let start = 0
    const increment = value / (duration / 16) // ~60fps
    const step = () => {
      start += increment
      if (start < value) {
        setCount(Math.floor(start))
        requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }
    requestAnimationFrame(step)
  }, [visible, value, duration])

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statNumber}>
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Stats() {
  return (

      <section className={styles.statsSection}>
       
        <div className={styles.container}>

          <StatItem value={20} suffix="+" label="projets web déployés" />
          <StatItem value={4} suffix="+" label="années de pratique" />
          <StatItem value={100} suffix="%" label="développement sur-mesure" />

        </div>
         
      </section>

  )
}
