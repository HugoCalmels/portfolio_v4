'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import styles from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const [lang, setLang] = useState<'fr' | 'en'>(locale as 'fr' | 'en')
  const [open, setOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShowNavbar(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down: hide navbar and close dropdown
        setShowNavbar(false)
        setOpen(false)  // <- fermeture dropdown ici
      } else {
        setShowNavbar(true)
      }

      setHasScrolled(currentScrollY > 10)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLangChange = (value: 'fr' | 'en') => {
    setLang(value)
    setOpen(false)

    const segments = pathname.split('/')
    segments[1] = value // change the locale segment
    const newPath = segments.join('/')

    router.push(newPath)
  }

  return (
    <header
      className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${
        hasScrolled ? styles.scrolledBg : ''
      }`}
    >
      <div className={styles.inner}>
        <Link href={`/${lang}/creation-site-internet-toulouse`} className={styles.brand}>
          <Image
            src="/images/logo-hugo-cropped.png"
            alt="Logo"
            width={32}
            height={32}
            className={styles.logo}
          />
          <span>HUGO CALMELS</span>
        </Link>

        <div className={styles.languageSelector}>
          <button className={styles.toggle} onClick={() => setOpen(!open)}>
            <img
              src={`https://flagcdn.com/${lang === 'fr' ? 'fr' : 'gb'}.svg`}
              alt={lang === 'fr' ? 'Français' : 'English'}
              width={20}
              height={15}
            />
            <span>{lang.toUpperCase()}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {open && (
            <div className={styles.menu}>
              <button onClick={() => handleLangChange('fr')}>
                <img src="https://flagcdn.com/fr.svg" alt="FR" width={20} height={15} />
                <span>FR</span>
              </button>
              <button onClick={() => handleLangChange('en')}>
                <img src="https://flagcdn.com/gb.svg" alt="EN" width={20} height={15} />
                <span>EN</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
