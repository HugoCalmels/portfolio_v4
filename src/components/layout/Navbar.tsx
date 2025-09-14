'use client';

import { useEffect, useMemo, useRef, useState, useCallback, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';

type NavLink = { label: string; href: string; highlight?: boolean };
type Separator = { type: 'separator' };
type NavItem = NavLink | Separator;

const isLink = (item: NavItem): item is NavLink => 'href' in item;

// util: remplace le 1er segment (locale) d'un pathname
const withLocale = (pathname: string, locale: 'fr' | 'en') => {
  const segments = pathname.split('/');
  // s'assure d'avoir une base /xx
  if (!segments[1]) segments[1] = locale;
  else segments[1] = locale;
  return segments.join('/') || `/${locale}`;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname() || '/fr';
  const locale = (useLocale?.() as 'fr' | 'en') || 'fr';

  // garde un état local (pour l’affichage du flag) mais se resynchronise dès que l’URL/locale change
  const [lang, setLang] = useState<'fr' | 'en'>(locale);
  useEffect(() => {
    if (lang !== locale) setLang(locale);
  }, [locale]); // eslint-disable-line react-hooks/exhaustive-deps

  const [openDropdown, setOpenDropdown] = useState<'lang' | 'main' | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const langRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [, startTransition] = useTransition();

  // ----- SCROLL: lissé + passif
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      lastScrollY.current = currentY;

      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          // réduit les setState au strict nécessaire
          setShowNavbar((prev) => {
            const next = currentY < 50 || currentY < (lastScrollY.current ?? 0);
            return prev !== next ? next : prev;
          });
          setHasScrolled((prev) => {
            const next = currentY > 10;
            return prev !== next ? next : prev;
          });
          // on ne ferme pas systématiquement les menus pour éviter les re-renders pendant le scroll
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  // ----- ACTIONS
  const toggleDropdown = useCallback((type: 'lang' | 'main') => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  }, []);

  const handleLangSelect = useCallback(
    (value: 'fr' | 'en') => {
      // Pas de double render : on met à jour l'état pour l’UI et on laisse Next gérer la nav via Link
      setLang(value);
      setOpenDropdown(null);
    },
    []
  );

  // Si tu veux forcer router.push (par ex. interactions clavier), fais-le sans bloquer l’UI
  const navigateSoft = useCallback(
    (href: string) => {
      startTransition(() => {
        router.push(href);
      });
      setOpenDropdown(null);
    },
    [router]
  );

  // ----- LINKS
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

  // Préfetch des pages principales (facultatif, Next le fait souvent tout seul quand visible)
  useEffect(() => {
    if ('prefetch' in router) {
      navLinks.forEach((item) => {
        if (isLink(item)) {
          try {
            // @ts-ignore - app router sait gérer
            router.prefetch?.(item.href);
          } catch {}
        }
      });
    }
    // on veut seulement exécuter quand la liste change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navLinks]);

  const nextFr = withLocale(pathname, 'fr');
  const nextEn = withLocale(pathname, 'en');

  return (
    <header
      className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${
        hasScrolled ? styles.scrolledBg : ''
      }`}
    >
      <div className={styles.inner}>
        <Link href={`/${lang}`} className={styles.brand} prefetch onClick={() => setOpenDropdown(null)}>
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
                  src={`https://flagcdn.com/${lang === 'fr' ? 'fr' : 'gb'}.svg`}
                  alt={lang}
                  width={20}
                  height={15}
                />
                <span>{lang.toUpperCase()}</span>
                <FaChevronDown size={10} />
              </button>
              {openDropdown === 'lang' && (
                <div className={`${styles.dropdownMenu} ${styles.langMenu}`} role="menu">
                  {/* On passe par Link pour bénéficier du prefetch et d’une nav plus fluide */}
                  <Link
                    href={nextFr}
                    prefetch
                    className={styles.dropdownItem}
                    onClick={() => handleLangSelect('fr')}
                    role="menuitem"
                  >
                    <Image src="https://flagcdn.com/fr.svg" alt="FR" width={20} height={15} />
                    <span>FR</span>
                  </Link>
                  <Link
                    href={nextEn}
                    prefetch
                    className={styles.dropdownItem}
                    onClick={() => handleLangSelect('en')}
                    role="menuitem"
                  >
                    <Image src="https://flagcdn.com/gb.svg" alt="EN" width={20} height={15} />
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
                <FaChevronDown size={10} />
              </button>
              {openDropdown === 'main' && (
                <div className={`${styles.dropdownMenu} ${styles.mainMenu}`} role="menu">
                  {navLinks.map((item, i) =>
                    isLink(item) ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        prefetch
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
