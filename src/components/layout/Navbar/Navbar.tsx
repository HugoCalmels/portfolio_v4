'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import styles from './Navbar.module.css'

import { Fr, Gb } from 'react-flag-icons'

type NavLink = { label: string; href: string; highlight?: boolean }
type Separator = { type: 'separator' }
type NavItem = NavLink | Separator

const isLink = (item: NavItem): item is NavLink => 'href' in item

const ChevronDown = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
  >
    <path
      d="M6 9l6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


const withLocale = (pathname: string, locale: 'fr' | 'en') => {
  const parts = pathname.split('/')
  parts[1] = locale
  const joined = parts.join('/')
  return joined.startsWith('/') ? joined : `/${joined}`
}

export default function Navbar() {
  const pathname = usePathname() || '/fr'
  const locale = (useLocale() as 'fr' | 'en') || 'fr'
  const t = useTranslations('Navbar')

  const [openDropdown, setOpenDropdown] = useState<'lang' | 'main' | null>(null)
  const [showNavbar, setShowNavbar] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const langRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const prevY = lastScrollY.current
        const currentY = window.scrollY
        lastScrollY.current = currentY

        const nextShow = currentY < 50 || currentY < prevY
        if (showNavbar !== nextShow) setShowNavbar(nextShow)

        const nextHasScrolled = currentY > 10
        if (hasScrolled !== nextHasScrolled) setHasScrolled(nextHasScrolled)

        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showNavbar, hasScrolled])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (openDropdown && !langRef.current?.contains(target) && !mainRef.current?.contains(target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  const toggleDropdown = useCallback((type: 'lang' | 'main') => {
    setOpenDropdown(prev => (prev === type ? null : type))
  }, [])

  // ✅ Le Link fait la navigation, nous on ferme juste le menu
  const handleLangSelect = useCallback(() => {
    setOpenDropdown(null)
  }, [])

  const navLinks: NavItem[] = useMemo(
    () => [
      { label: t('links.home'), href: `/${locale}` },
      { label: t('links.sites'), href: `/${locale}/sites-web` },
      { label: t('links.apps'), href: `/${locale}/logiciels-web` },
      { label: t('links.about'), href: `/${locale}/a-propos` },
      { label: t('links.contact'), href: `/${locale}/contact`, highlight: true }
    ],
    [locale, t]
  )

  const nextFr = useMemo(() => withLocale(pathname, 'fr'), [pathname])
  const nextEn = useMemo(() => withLocale(pathname, 'en'), [pathname])

  const CurrentFlag = locale === 'fr' ? Fr : Gb

  return (
    <header
      className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${
        hasScrolled ? styles.scrolledBg : ''
      }`}
    >
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.brand} onClick={() => setOpenDropdown(null)}>
          <Image src="/images/jpp-logo.png" alt="Logo" width={25} height={25} className={styles.logo} />
          <span>HUGO CALMELS</span>
        </Link>

        <div className={styles.right}>
          <div className={styles.actionGroup}>
            {/* Lang Dropdown */}
            <div className={styles.dropdownContainer} ref={langRef}>
              <button
                className={styles.dropdownButton}
                onClick={() => toggleDropdown('lang')}
                aria-expanded={openDropdown === 'lang'}
                aria-haspopup="menu"
                type="button"
              >
                <span className={styles.flagWrap} aria-hidden="true">
                  <CurrentFlag className={styles.flagIcon} />
                </span>

                <span>{locale.toUpperCase()}</span>
         <ChevronDown size={14} />
              </button>

              {openDropdown === 'lang' && (
                <div className={`${styles.dropdownMenu} ${styles.langMenu}`} role="menu">
                  <Link
                    href={nextFr}
                    className={styles.dropdownItem}
                    onClick={handleLangSelect}
                    role="menuitem"
                  >
                    <span className={styles.flagWrap} aria-hidden="true">
                      <Fr className={styles.flagIcon} />
                    </span>
                    <span>FR</span>
                  </Link>

                  <Link
                    href={nextEn}
                    className={styles.dropdownItem}
                    onClick={handleLangSelect}
                    role="menuitem"
                  >
                    <span className={styles.flagWrap} aria-hidden="true">
                      <Gb className={styles.flagIcon} />
                    </span>
                    <span>EN</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Main Dropdown */}
            <div className={styles.dropdownContainer} ref={mainRef}>
              <button
                className={styles.dropdownButton}
                onClick={() => toggleDropdown('main')}
                aria-expanded={openDropdown === 'main'}
                aria-haspopup="menu"
                type="button"
              >
                <span>{t('menuButton')}</span>
    <ChevronDown size={14} />
              </button>

              {openDropdown === 'main' && (
                <div className={`${styles.dropdownMenu} ${styles.mainMenu}`} role="menu">
                  {navLinks.map((item, i) =>
                    isLink(item) ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`${styles.dropdownItem} ${item.highlight ? styles.highlightLink : ''}`}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <hr key={`sep-${i}`} className={styles.menuSeparator} />
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
