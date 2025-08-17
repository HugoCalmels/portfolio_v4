'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './InspirationModal.module.css'
import { FiImage, FiX } from 'react-icons/fi'

type Props = {
  /** Image (par défaut : le visuel du hero) */
  src?: string
  /** BlurDataURL optionnel */
  blurSrc?: string
  triggerLabel?: string
  triggerClassName?: string
}

export default function InspirationModal({
  src = '/images/testa42.png',
  blurSrc = '/images/testa42-small-blur.jpg',
  triggerLabel = "Voir l’inspiration",
  triggerClassName,
}: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)
  const [imgBlur, setImgBlur] = useState(blurSrc)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { setImgSrc(src); setImgBlur(blurSrc) }, [src, blurSrc])

  // Lock scroll + ESC
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        className={triggerClassName ?? styles.inspTrigger}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <FiImage aria-hidden />
        <span>{triggerLabel}</span>
      </button>

      {mounted && open && createPortal(
        <div
          className={styles.inspOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Inspiration visuelle"
          onClick={() => setOpen(false)}  // clic hors => ferme
        >
          <div
            className={styles.inspPanel}
            onClick={(e) => e.stopPropagation()} // ne pas propager au backdrop
          >
            <button
              type="button"
              className={styles.inspClose}
              aria-label="Fermer"
              onClick={() => setOpen(false)}
            >
              <FiX />
            </button>

            <div className={styles.inspMedia}>
              <Image
                src={imgSrc}
                alt="Capture d’inspiration"
                fill
                placeholder="blur"
                blurDataURL={imgBlur}
                style={{ objectFit: 'cover', filter: 'brightness(0.65) blur(1.5px)' }}
                priority={false}
                onError={() => {
                  // Fallback automatique sur le visuel du hero
                  setImgSrc('/images/testa42.png')
                  setImgBlur('/images/testa42-small-blur.jpg')
                }}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
