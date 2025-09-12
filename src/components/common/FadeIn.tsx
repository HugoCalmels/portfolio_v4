'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './FadeIn.module.css'

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // 1. Vérifie si boot déjà terminé
    if (document.documentElement.dataset.boot === 'done') {
      setReady(true)
    } else {
      // 2. Sinon attends l’événement boot:done
      const onBoot = () => setReady(true)
      window.addEventListener('boot:done', onBoot, { once: true })
      return () => window.removeEventListener('boot:done', onBoot)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ready])

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${visible ? styles.visible : ''}`}
    >
      {children}
    </div>
  )
}
