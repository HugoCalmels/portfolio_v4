'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaLaptopCode, FaGlobe, FaChevronDown } from 'react-icons/fa';

import styles from './AccueilCards.module.css';
import FadeIn from '@/components/common/FadeIn';

export default function AccueilCards() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // --- FAQ data (light, non-cannibalisant SEO)
  const questions = [
    {
      question: 'Avez-vous de la disponibilité rapidement ?',
      answer:
        'Oui. En général, je peux <strong>démarrer un projet sous 1 à 2 semaines</strong>, selon la complexité et la charge du moment.',
    },
    {
      question: 'Dois-je fournir tous les textes et visuels ?',
      answer:
        "Pas forcément. Vous pouvez préparer vos contenus si vous en avez, ou je peux <strong>créer la structure et la rédaction</strong> à partir de vos idées. Pour les visuels si vous n’avez rien, je peux utiliser des <strong>images libres de droit ou générées par IA</strong>, adaptées au style de votre site.",
    },
    {
      question: 'Que se passe-t-il après la mise en ligne ?',
      answer:
        'Le site repose sur un <strong>socle technique stable</strong> qui ne nécessite pas de mises à jour régulières. Si vos besoins évoluent, je peux intervenir ponctuellement pour <strong>ajouter des fonctionnalités ou ajuster le contenu</strong>.',
    },
  ];

  return (
    <section className={styles.section} id="services">
      <p className={styles.pause}>&nbsp;</p>

      <div className={styles.container}>
        {/* Intro */}
        <FadeIn>
          <div className={styles.introLeft}>
            <h2 className={styles.heading}>Mes services</h2>
            <p className={styles.lead}>
              Deux prestations principales : la <strong>création de sites internet</strong> pour booster votre
              visibilité en ligne, et le <strong>développement web sur-mesure</strong> pour répondre à des besoins
              techniques spécifiques.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Cards */}
          <div className={styles.cards}>
            {/* Création de site */}
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <FaGlobe className={styles.icon} aria-hidden />
                <h3 className={styles.cardTitle}>Création de site internet</h3>
              </header>
              <p className={styles.cardText}>
                Sites vitrines, e-commerce et SEO local, pensés pour renforcer votre présence en ligne à Toulouse et
                au-delà.
              </p>
              <ul className={styles.bulletList}>
                <li>Design moderne et responsive</li>
                <li>Optimisation SEO de base incluse</li>
              </ul>
              <Link href={`/${locale}/creation-site-internet-toulouse`} className={styles.ctaMain}>
                En savoir plus →
              </Link>
            </article>

            {/* Développement web */}
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <FaLaptopCode className={styles.icon} aria-hidden />
                <h3 className={styles.cardTitle}>Développement web</h3>
              </header>
              <p className={styles.cardText}>
                Applications et solutions techniques personnalisées, avec intégration front &amp; back-end pour des
                projets fiables et évolutifs.
              </p>
              <ul className={styles.bulletList}>
                <li>Applications sur-mesure</li>
                <li>Suivi technique simplifié</li>
              </ul>
              <Link href={`/${locale}/developpement-web-toulouse`} className={styles.ctaMain}>
                En savoir plus →
              </Link>
            </article>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        {/* Mini FAQ (accordéon) */}
        <section className={styles.faqSection} id="faq">
          <h2 className={styles.faqTitle}>Questions fréquentes</h2>
          <div className={styles.items}>
            {questions.map((item, i) => (
              <div className={styles.item} key={i}>
                <button className={styles.question} onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`${styles.chevron} ${openIndex === i ? styles.rotate : ''}`}
                    aria-hidden
                  />
                </button>
                <div className={`${styles.answerWrapper} ${openIndex === i ? styles.open : ''}`}>
                  <div className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </section>
  );
}
