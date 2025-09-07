'use client'
import { useEffect, useRef } from 'react'
import styles from './bootloader.module.css'
import Loading from '@/components/common/Loading'

export default function BootLoader() {
  const ref = useRef<HTMLDivElement>(null)
  const finishedRef = useRef(false)

  // appel unique
  const finish = () => {
    if (finishedRef.current) return
    finishedRef.current = true

    // 1) Masquer définitivement l’overlay
    if (ref.current) ref.current.style.display = 'none'

    // 2) Publier le flag global et l’évènement
    try {
      document.documentElement.dataset.boot = 'done'
      window.dispatchEvent(new Event('boot:done'))
    } catch {}
  }

  useEffect(() => {
    // Demande le fade-out au 1er frame
    const id = requestAnimationFrame(() => {
      ref.current?.classList.add(styles.hide)
    })

    // Fallback au cas où la transition est désactivée / interrompue
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const fallback = window.setTimeout(finish, prefersReduced ? 0 : 600)

    return () => {
      cancelAnimationFrame(id)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div
      ref={ref}
      onTransitionEnd={finish}      // quand le fade-out finit → finish()
      aria-hidden="true"
      className={styles.wrapper}
    >
      <Loading />
      {/* Optionnel : micro dot. Tu peux le supprimer si tu veux 0 UI */}

    </div>
  )
}
