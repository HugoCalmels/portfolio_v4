'use client';

import { useEffect, useState, useRef } from 'react';
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

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname() || '/fr';
  const locale = useLocale() || 'fr';

  const [lang, setLang] = useState<'fr' | 'en'>(locale as 'fr' | 'en');
  const [openDropdown, setOpenDropdown] = useState<'lang' | 'main' | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const langRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < 50 || currentY < lastScrollY.current);
      setHasScrolled(currentY > 10);
      lastScrollY.current = currentY;
      setOpenDropdown(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLangChange = (value: 'fr' | 'en') => {
    setLang(value);
    setOpenDropdown(null);
    const segments = pathname.split('/');
    segments[1] = value;
    router.push(segments.join('/'));
  };

  const toggleDropdown = (type: 'lang' | 'main') => {
    setOpenDropdown(prev => (prev === type ? null : type));
  };

  const navLinks: NavItem[] = [
    { label: 'Accueil', href: `/${lang}` },
    { label: 'Création de site', href: `/${lang}/creation-site-internet-toulouse` },
    { label: 'Développement web', href: `/${lang}/developpement-web-toulouse` },
    { label: 'Frais récurrents', href: `/${lang}/frais-recurrents` },

    { label: 'Blog', href: `/${lang}/blog` },


 
    {
      label: 'Contact / Devis',
      href: `/${lang}/contact`,
      highlight: true,
    },



  ];

  return (
    <header className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${hasScrolled ? styles.scrolledBg : ''}`}>
      <div className={styles.inner}>
        <Link href={`/${lang}`} className={styles.brand}>
          <Image src="/images/jpp-logo.png" alt="Logo" width={25} height={25} className={styles.logo} />
          <span>HUGO CALMELS</span>
        </Link>

        <div className={styles.right}>
          <div className={styles.actionGroup}>
            {/* Lang Dropdown */}
            <div className={styles.dropdownContainer} ref={langRef}>
              <button className={styles.dropdownButton} onClick={() => toggleDropdown('lang')}>
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
                <div className={`${styles.dropdownMenu} ${styles.langMenu}`}>
                  <button className={styles.dropdownItem} onClick={() => handleLangChange('fr')}>
                    <Image src="https://flagcdn.com/fr.svg" alt="FR" width={20} height={15} />
                    <span>FR</span>
                  </button>
                  <button className={styles.dropdownItem} onClick={() => handleLangChange('en')}>
                    <Image src="https://flagcdn.com/gb.svg" alt="EN" width={20} height={15} />
                    <span>EN</span>
                  </button>
                </div>
              )}
            </div>

            {/* Main Dropdown */}
            <div className={styles.dropdownContainer} ref={mainRef}>
              <button className={styles.dropdownButton} onClick={() => toggleDropdown('main')}>
                <span>Menu</span>
                <FaChevronDown size={10} />
              </button>
              {openDropdown === 'main' && (
                <div className={`${styles.dropdownMenu} ${styles.mainMenu}`}>
                  {navLinks.map((item, i) =>
                    isLink(item) ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`${styles.dropdownItem} ${item.highlight ? styles.highlightLink : ''}`}
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
