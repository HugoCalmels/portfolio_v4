'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './Navbar.module.css';

type NavLink = { label: string; href: string; highlight?: boolean };
type Separator = { type: 'separator' };
type NavItem = NavLink | Separator;

const isLink = (item: NavItem): item is NavLink => 'href' in item;

// Chevron inline (évite react-icons)
const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden focusable="false">
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Remplace le 1er segment (locale) du pathname
const withLocale = (pathname: string, locale: 'fr' | 'en') => {
  const parts = pathname.split('/');
  // parts[0] === '' (leading slash)
  parts[1] = locale;
  const joined = parts.join('/');
  return joined.startsWith('/') ? joined : `/${joined}`;
};

export default function Navbar() {
  const pathname = usePathname() || '/fr';
  const locale = (useLocale?.() as 'fr' | 'en') || 'fr';

  // État d’affichage uniquement (flag) → se resync quand la locale change
  const [lang, setLang] = useState<'fr' | 'en'>(locale);
  useEffect(() => {
    if (lang !== locale) setLang(locale);
  }, [locale, lang]);

  const [openDropdown, setOpenDropdown] = useState<'lang' | 'main' | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const langRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // ----- SCROLL: lissé + passif (fix: comparer à l’ancienne valeur avant maj)
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const prevY = lastScrollY.current;
        const currentY = window.scrollY;
        lastScrollY.current = currentY;

        const nextShow = currentY < 50 || currentY < prevY;
        if (showNavbar !== nextShow) setShowNavbar(nextShow);

        const nextHasScrolled = currentY > 10;
        if (hasScrolled !== nextHasScrolled) setHasScrolled(nextHasScrolled);

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showNavbar, hasScrolled]);

  // ----- CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        openDropdown &&
        !langRef.current?.contains(target) &&
        !mainRef.current?.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = useCallback((type: 'lang' | 'main') => {
    setOpenDropdown(prev => (prev === type ? null : type));
  }, []);

  const handleLangSelect = useCallback((value: 'fr' | 'en') => {
    setLang(value);
    setOpenDropdown(null);
  }, []);

  const navLinks: NavItem[] = useMemo(
    () => [
      { label: 'Accueil', href: `/${lang}` },
      { label: 'Création de site', href: `/${lang}/creation-site-internet-toulouse` },
      { label: 'Développement web', href: `/${lang}/developpement-web-toulouse` },
      { label: 'Blog', href: `/${lang}/blog` },
      { label: 'Contact / Devis', href: `/${lang}/contact`, highlight: true },
    ],
    [lang]
  );

  const nextFr = useMemo(() => withLocale(pathname, 'fr'), [pathname]);
  const nextEn = useMemo(() => withLocale(pathname, 'en'), [pathname]);

  return (
    <header
      className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${hasScrolled ? styles.scrolledBg : ''}`}
    >
      <div className={styles.inner}>
        <Link href={`/${lang}`} className={styles.brand} onClick={() => setOpenDropdown(null)}>
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
              >
                <Image
                  unoptimized
                  src={`https://flagcdn.com/${lang === 'fr' ? 'fr' : 'gb'}.svg`}
                  alt={lang}
                  width={20}
                  height={15}
                />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown />
              </button>
              {openDropdown === 'lang' && (
                <div className={`${styles.dropdownMenu} ${styles.langMenu}`} role="menu">
                  <Link
                    href={nextFr}
                    className={styles.dropdownItem}
                    onClick={() => handleLangSelect('fr')}
                    role="menuitem"
                  >
                    <Image unoptimized src="https://flagcdn.com/fr.svg" alt="FR" width={20} height={15} />
                    <span>FR</span>
                  </Link>
                  <Link
                    href={nextEn}
                    className={styles.dropdownItem}
                    onClick={() => handleLangSelect('en')}
                    role="menuitem"
                  >
                    <Image unoptimized src="https://flagcdn.com/gb.svg" alt="EN" width={20} height={15} />
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
              >
                <span>Menu</span>
                <ChevronDown />
              </button>
              {openDropdown === 'main' && (
                <div className={`${styles.dropdownMenu} ${styles.mainMenu}`} role="menu">
                  {navLinks.map((item, i) =>
                    isLink(item) ? (
                      <Link
                        key={item.label}
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
  );
}
