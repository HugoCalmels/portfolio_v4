// app/PageFade.tsx
'use client'
import { useEffect, useState } from 'react'
import styles from './pagefade.module.css'

export default function PageFade({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])
  return <div className={ready ? styles.ready : styles.init}>{children}</div>
}