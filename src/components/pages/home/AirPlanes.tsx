'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Airplanes.module.css'
import Image from 'next/image'

type Plane = {
  id: number
  name: string
  src: string
  direction: 'flyLeft' | 'flyRight'
  duration: string
  top: string
  size: number
  opacity: number
  blur: boolean
  flip: boolean
  fadeOut: boolean
}

type PlaneVariant = {
  name: string
  src: string
  minSize: number
  maxSize: number
  minDuration: number
  maxDuration: number
  rarity: number
  minAltitude: number
  maxAltitude: number
  blur?: boolean
  pairWith?: string
}

const planeVariants: PlaneVariant[] = [

  {
    name: 'a320',
    src: '/images/planes/plane-001.webp',
    minSize: 150,
    maxSize: 150,
    minDuration: 11,
    maxDuration: 16,
    rarity: 0.5,
    minAltitude: 2,
    maxAltitude: 10,
  },
  {
    name: 'beluga',
    src: '/images/planes/plane-002.webp',
    minSize: 250,
    maxSize: 250,
    minDuration: 14,
    maxDuration: 22,
    rarity: 0.2,
    minAltitude: 1,
    maxAltitude: 6,
  },
  {
    name: 'atr',
    src: '/images/planes/plane-003.webp',
    minSize: 140,
    maxSize: 150,
    minDuration: 11,
    maxDuration: 16,
    rarity: 0.35,
    minAltitude: 2,
    maxAltitude: 10,
  },
  {
    name: 'idk',
    src: '/images/planes/plane-004.webp',
    minSize: 140,
    maxSize: 150,
    minDuration: 11,
    maxDuration: 16,
    rarity: 0.1,
    minAltitude: 2,
    maxAltitude: 10,
  },
  {
    name: 'rafale',
    src: '/images/planes/plane-006.webp',
    minSize: 50,
    maxSize: 55,
    minDuration: 4,
    maxDuration: 6,
    rarity: 0.2,
    minAltitude: 2,
    maxAltitude: 10,

  },
]

export default function Airplanes() {
  const [planes, setPlanes] = useState<Plane[]>([])
  const idCounter = useRef(0)
  const planesRef = useRef<Plane[]>([])

  useEffect(() => {
    planesRef.current = planes
  }, [planes])

  const pickRandomVariant = (): PlaneVariant => {
    const total = planeVariants.reduce((sum, v) => sum + v.rarity, 0)
    const rand = Math.random() * total
    let acc = 0
    for (const v of planeVariants) {
      acc += v.rarity
      if (rand < acc) return v
    }
    return planeVariants[0]
  }

  const spawnPlane = (variantOverride?: PlaneVariant) => {
    const variant = variantOverride || pickRandomVariant()
    const fromLeft = Math.random() > 0.5
    const duration = variant.minDuration + Math.random() * (variant.maxDuration - variant.minDuration)
    const size = variant.minSize + Math.random() * (variant.maxSize - variant.minSize)
    const top = `${variant.minAltitude + Math.random() * (variant.maxAltitude - variant.minAltitude)}%`

    const plane: Plane = {
      id: idCounter.current++,
      name: variant.name,
      src: variant.src,
      direction: fromLeft ? 'flyLeft' : 'flyRight',
      duration: `${duration}s`,
      top,
      size,
      opacity: 1,
      blur: variant.blur ?? false,
      flip: !fromLeft,
      fadeOut: true,
    }

    setPlanes(prev => [...prev, plane])

    if (variant.pairWith) {
      const paired = planeVariants.find(p => p.name === variant.pairWith)
      if (paired) {
        setTimeout(() => spawnPlane(paired), 400)
      }
    }

    setTimeout(() => {
      setPlanes(prev => prev.filter(p => p.id !== plane.id))
    }, duration * 1000 + 1000)
  }

  useEffect(() => {
    const firstDelay = 8000 + Math.random() * 6000 // 5–9s pour le premier
    const timeout = setTimeout(() => {
      spawnPlane()
      scheduleNext()
    }, firstDelay)
  
    const scheduleNext = () => {
      const delay = 25000 + Math.random() * 15000 // 16–28s entre chaque
      setTimeout(() => {
        if (planesRef.current.length < 2) {
          spawnPlane()
        }
        scheduleNext()
      }, delay)
    }
  
    return () => clearTimeout(timeout)
  }, [])
  

  return (
    <div className={styles.container}>
      {planes.map(plane => (
        <div
          key={plane.id}
          className={`${styles.wrapper} ${styles[plane.direction]}`}
          style={{
            top: plane.top,
            animationDuration: plane.duration,
            opacity: plane.opacity,
            filter: `${plane.blur ? 'blur(0.25px)' : ''} brightness(0.8)`,
          }}
        >
          <Image
            src={plane.src}
            alt={plane.name}
            width={plane.size}
            height={plane.size * 0.6}
            className={styles.plane}
            style={{
              transform: plane.flip ? 'scaleX(-1)' : undefined,
            }}
            priority
          />
        </div>
      ))}
    </div>
  )
}
