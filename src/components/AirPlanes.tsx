'use client'

import { useEffect, useState } from 'react'
import styles from './Airplanes.module.css'
import Image from 'next/image'

type PlaneType = 'takeoff' | 'landing' | 'zigzag'

const planeModels = [
  '/images/planes/plane-1.webp',
  '/images/planes/plane-1.webp',
  '/images/planes/plane-1.webp',
]

function getRandomPlane() {
  const src = planeModels[Math.floor(Math.random() * planeModels.length)]
  const type: PlaneType = ['takeoff', 'landing', 'zigzag'][Math.floor(Math.random() * 3)] as PlaneType
  const size = 40 + Math.floor(Math.random() * 40)
  const opacity = 0.5 + Math.random() * 0.4
  const top = `${10 + Math.floor(Math.random() * 60)}%`

  return { src, type, size, opacity, top }
}

export default function Airplanes() {
  const [plane, setPlane] = useState(getRandomPlane)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlane(getRandomPlane())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div
        className={`${styles.wrapper} ${styles[plane.type]} ${styles.flipped}`}
        style={{
          '--start-top': plane.type === 'landing' ? '10%' : '90%',
          '--end-top': plane.type === 'landing' ? '90%' : '10%',
          opacity: plane.opacity,
        } as React.CSSProperties}
      >
<Image
  src={plane.src}
  alt="Flying plane"
  width={plane.size}
  height={plane.size * 0.6}
  className={`${styles.plane} ${styles.flipped}`}
  priority
/>
      </div>
    </div>
  )
}
