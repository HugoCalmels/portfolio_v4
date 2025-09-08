'use client'
import { useEffect, useRef } from 'react'
import styles from './bootloader.module.css'
import Loading from '@/components/common/Loading'

type Props = {
  /** Temps d’affichage minimal avant le fade-out */
  minShowMs?: number
  /** Petit délai après la transition avant finish() */
  postGapMs?: number
}

export default function BootLoader({ minShowMs = 200, postGapMs = 120 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const finishedRef = useRef(false)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach(id => clearTimeout(id))
    timers.current = []
  }

  const finish = () => {
    if (finishedRef.current) return
    finishedRef.current = true
    clearTimers()

    // 1) Masquer définitivement l’overlay
    if (ref.current) ref.current.style.display = 'none'

    // 2) Publier le flag global et l’évènement
    try {
      document.documentElement.dataset.boot = 'done'
      window.dispatchEvent(new Event('boot:done'))
    } catch {}
  }

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 1) Attendre minShowMs avant de déclencher le fade-out (sauf reduced motion)
    const startHide = () => {
      ref.current?.classList.add(styles.hide)
    }

    const startDelay = prefersReduced ? 0 : minShowMs
    timers.current.push(window.setTimeout(startHide, startDelay))

    // 2) Fallback absolu au cas où la transition n’arrive jamais
    //    On essaie d’estimer la durée de transition CSS pour caler le fallback.
    const getTransitionMs = () => {
      const el = ref.current
      if (!el) return 600
      const cs = getComputedStyle(el)
      // transitionDuration peut être "0.3s, 0.3s" -> on garde le max
      const durations = cs.transitionDuration
        .split(',')
        .map(s => s.trim())
        .map(s => (s.endsWith('ms') ? parseFloat(s) : parseFloat(s) * 1000))
      const delays = cs.transitionDelay
        .split(',')
        .map(s => s.trim())
        .map(s => (s.endsWith('ms') ? parseFloat(s) : parseFloat(s) * 1000))
      const total = Math.max(...durations.map((d, i) => d + (delays[i] ?? 0)))
      return isFinite(total) && total > 0 ? total : 600
    }

    const fallbackTotal =
      (prefersReduced ? 0 : minShowMs) + (prefersReduced ? 0 : getTransitionMs()) + (prefersReduced ? 0 : postGapMs) + 50

    timers.current.push(window.setTimeout(finish, fallbackTotal))

    return () => {
      clearTimers()
    }
  }, [minShowMs, postGapMs])

  const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = () => {
    // Petit gap après le fade-out avant de retirer l’overlay
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const id = window.setTimeout(finish, prefersReduced ? 0 : postGapMs)
    timers.current.push(id)
  }

  return (
    <div
      ref={ref}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden="true"
      className={styles.wrapper}
    >
      <Loading />
    </div>
  )
}
