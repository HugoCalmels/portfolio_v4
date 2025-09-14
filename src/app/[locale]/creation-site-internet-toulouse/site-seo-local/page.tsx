'use client';

import styles from './SiteSeoLocalToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Script from 'next/script';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

export default function SiteSeoLocal() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const toggle = (index: number) => setOpenIndex(index === openIndex ? null : index);

  const questions = [
    {
      question: 'En combien de temps vais-je être visible sur Google ?',
      answer:
        'Le référencement local est progressif. Vous pouvez commencer à apparaître dès quelques semaines, mais atteindre des positions stables prend souvent 3 à 6 mois selon le secteur et la concurrence.',
    },
    {
      question: 'Pourquoi un suivi mensuel est-il important ?',
      answer:
        "Mettre à jour régulièrement le contenu et suivre vos performances permet d'améliorer durablement vos positions et d'ajuster la stratégie.",
    },
    {
      question: 'Qu’est-ce que le référencement GEO ?',
      answer:
        'Le référencement GEO consiste à structurer votre contenu de manière claire et crédible pour que votre site apparaisse dans les recherches locales et soit cité par les IA. C’est une extension du SEO classique.',
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer.replace(/<[^>]+>/g, '') },
    })),
  };

  return (
    <>
          <SeoHead
        title="SEO local à Toulouse – Gagnez en visibilité près de vos clients"
        description="Optimisation locale : fiche Google Business, avis, balisage et contenus géolocalisés. Attirez des clients autour de Toulouse."
      />
    <section className={styles.page}>
      <div className={styles.container}>
        <FadeIn>
          {/* Intro */}
          <header className={styles.intro}>
            <p className={styles.kicker}>🟦 Site SEO local Toulouse</p>
            <h1 className={styles.h1}>Optimisé pour le SEO local à Toulouse</h1>
            <p className={styles.lead}>
              Je crée des sites web clairs et performants, configurés pour le SEO local et Google Business. Attirez vos
              clients dans votre zone dès maintenant.
            </p>
            <p className={styles.returnLink}>
              <Link href={`/${locale}/creation-site-internet-toulouse`}>&larr; Voir les autres offres</Link>
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          {/* Socle SEO Local */}
          <section className={styles.block} aria-labelledby="offer">
            <h2 id="offer" className={styles.h2}>
              <HiOutlineShieldCheck className={styles.icon} /> Mon offre « SEO local »
            </h2>
            <article className={`${styles.card} ${styles.cardTight}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.h3}>
                  <FiCheckCircle className={styles.icon} /> Ce que vous obtenez
                </h3>
                <div className={styles.priceRow}>
                  <span className={styles.priceFrom}>Sur devis</span>
                </div>
              </div>

              <ul className={styles.bulletList}>
                <li>Audit complet et analyse locale</li>
                <li>Site complet 3-8 pages optimisé SEO local</li>
                <li>Optimisation interne : balises, maillage, structure technique</li>
                <li>Google Business / fiche locale configurée</li>
                <li>Pages satellites utiles</li>
                <li>Design professionnel pour convertir vos visiteurs</li>
              </ul>

              <br />

              <h3 className={styles.h3}>
                <FiXCircle className={styles.icon} /> Ce que vous n’obtenez pas
              </h3>
              <ul className={styles.bulletList}>
                <li>Gestion des réseaux sociaux</li>
                <li>Campagnes Google Ads</li>
                <li>Backlinks payants</li>
              </ul>
<p className={styles.note}>
  Cette offre n&apos;est pas encore disponible. <br />
  Je ne suis pas encore expert pour vous classer rapidement sur Google sur des requêtes compétitives.<br />
  Je suis encore en train de faire des tests.
</p>


              <div className={styles.ctaRow}>
                <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                  Discutons de votre projet →
                </Link>
              </div>
            </article>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Processus */}
          <section className={styles.block} aria-labelledby="process">
            <h2 id="process" className={styles.h2}>
              Comment ça se passe ?
            </h2>
            <ol className={styles.processList}>
              <li className={styles.processStep}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepContent}>
                  <strong>Audit & échanges</strong>
                  <p>Analyse de vos objectifs et de votre marché local.</p>
                </div>
              </li>
              <li className={styles.processStep}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepContent}>
                  <strong>Maquette (optionnelle)</strong>
                  <p>Validation d&apos;un design clair et engageant pour vos visiteurs.</p>
                </div>
              </li>
              <li className={styles.processStep}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepContent}>
                  <strong>Développement & contenu</strong>
                  <p>Création du site 3 à 8 pages optimisées pour le SEO local.</p>
                </div>
              </li>
              <li className={styles.processStep}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepContent}>
                  <strong>Mise en ligne</strong>
                  <p>Votre site est visible sur Google et Google Maps.</p>
                </div>
              </li>
            </ol>
          </section>
        </FadeIn>

        <FadeIn>
          {/* FAQ */}
          <section className={styles.miniFaq} id="mini-faq">
            <div className={styles.containerFaq}>
              <h2 className={styles.heading}>Questions fréquentes</h2>
              <div className={styles.items}>
                {questions.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <button className={styles.question} onClick={() => toggle(index)}>
                      <span>{item.question}</span>
                      <FaChevronDown
                        className={`${styles.iconChevron} ${openIndex === index ? styles.rotate : ''}`}
                      />
                    </button>
                    <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                      <div className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                ))}
              </div>
              <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* CTA */}
          <section className={styles.final} aria-labelledby="call">
            <h2 id="call" className={styles.finalTitle}>
              Prêt à démarrer votre SEO local ?
            </h2>
            <p className={styles.finalText}>
              Posez les bases d’une visibilité locale durable dès maintenant. Audit et stratégie inclus, socle complet à
              partir de 2 200 €.
            </p>
            <div className={styles.ctaRow}>
              <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                Discutons de votre visibilité →
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
      </section>
      </>
  );
}
