'use client';

import styles from './DevWebToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Script from 'next/script';
import { FiLayers, FiPackage, FiCpu } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import TechStack from './TechStack';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

export default function DevWebToulouse() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      question: 'Faut-il un cahier des charges détaillé ?',
      answer:
        'Non. On cadre d’abord une première version utile (objectifs, écrans, données). Vous validez, puis je développe et livre rapidement.',
    },
    {
      question: 'Vous travaillez uniquement à Toulouse ?',
      answer:
        'Je suis basé à Toulouse mais j’interviens aussi à distance partout en France, avec échanges réguliers en visio.',
    },
    {
      question: 'Quels délais pour un projet de dev web ?',
      answer:
        'De 2–3 semaines à quelques mois selon la complexité. Je livre par jalons pour mettre une base en production rapidement.',
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement web sur-mesure',
    description:
      'Applications web, fonctionnalités métier et intégrations techniques conçues pour vos usages : rapides, évolutives et maintenables.',
    areaServed: { '@type': 'City', name: 'Toulouse' },
    provider: { '@type': 'LocalBusiness', name: 'Hugo Calmels' },
  };

  return (
    <>
       <SeoHead
        title="Développement web à Toulouse – Applications et intégrations"
        description="Applications web sur-mesure, intégration front & back-end, API et performances. Code fiable et évolutif pour PME et indépendants à Toulouse."
      />
    <section className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div className={styles.container}>
        {/* Intro */}
        <FadeIn>
          <header className={styles.intro}>
            <p className={styles.kicker}>Développement web • Toulouse & à distance</p>
            <h1 className={styles.h1}>Développement web sur-mesure à Toulouse</h1>
            <p className={styles.lead}>
              Applications web, <strong>fonctionnalités métier</strong> et intégrations techniques conçues pour vos
              usages : rapides, évolutives et maintenables.
            </p>

            <div className={styles.ctaRow}>
              <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                Discutons de votre besoin →
              </Link>
            </div>
          </header>
        </FadeIn>

        <FadeIn>
          {/* Use cases */}
          <section className={styles.block} id="usecases" aria-labelledby="usecases-title">
            <h2 id="usecases-title" className={styles.h2}>
              Ce que je développe le plus souvent
            </h2>

            <div className={styles.grid}>
              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <FiLayers className={styles.icon} /> Applications web internes
                </h3>
                <ul className={styles.bulletList}>
                  <li>CRM léger, gestion de données, portail client</li>
                  <li>Tableaux de bord & reporting</li>
                  <li>Automatisations (emails, exports, notifications)</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <FiPackage className={styles.icon} /> Fonctionnalités métier
                </h3>
                <ul className={styles.bulletList}>
                  <li>Prise de rendez-vous, paiement en ligne</li>
                  <li>Espace sécurisé (rôles & permissions)</li>
                  <li>Génération PDF (devis, factures, rapports)</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <FiCpu className={styles.icon} /> Intégrations & APIs
                </h3>
                <ul className={styles.bulletList}>
                  <li>Connexion à vos outils (ERP/CRM)</li>
                  <li>Login Google / LinkedIn / SSO</li>
                  <li>Synchronisations & webhooks</li>
                </ul>
              </article>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Méthode */}
          <section className={styles.block} aria-labelledby="method-title">
            <h2 id="method-title" className={styles.h2}>
              {' '}
              Méthode simple et efficace
            </h2>

            <div className={styles.gridSteps}>
              <article className={`${styles.card} ${styles.cardTight}`}>
                <h3 className={styles.h3}>1) Cadrage</h3>
                <p className={styles.desc}>Objectifs, écrans clés, données. On isole la 1ʳᵉ version utile.</p>
              </article>

              <article className={`${styles.card} ${styles.cardTight}`}>
                <h3 className={styles.h3}>2) Dév. par jalons</h3>
                <p className={styles.desc}>Livraisons courtes, retours rapides, transparence sur l’avancement.</p>
              </article>

              <article className={`${styles.card} ${styles.cardTight}`}>
                <h3 className={styles.h3}>3) Mise en ligne</h3>
                <p className={styles.desc}>Base propre en production, puis évolutions selon vos priorités.</p>
              </article>
            </div>
          </section>
        </FadeIn>

        <TechStack />

        <FadeIn>
          {/* FAQ */}
          <section className={styles.miniFaq} id="mini-faq">
            <div className={styles.containerFaq}>
              <h2 className={styles.heading}>Questions fréquentes</h2>
              <div className={styles.items}>
                {faqs.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <button className={styles.question} onClick={() => toggle(index)}>
                      <span>{item.question}</span>
                      <FaChevronDown className={`${styles.iconChevron} ${openIndex === index ? styles.rotate : ''}`} />
                    </button>
                    <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                      <div className={styles.answer}>{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Script id="faq-ld-devweb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* CTA finale */}
          <section className={styles.final} aria-labelledby="call">
            <h2 id="call" className={styles.finalTitle}>
              Un besoin concret, un outil utile rapidement
            </h2>
            <p className={styles.finalText}>
              Décrivez votre cas en quelques lignes — je vous propose un plan d’action clair pour démarrer sereinement.
            </p>
            <div className={styles.ctaRow}>
              <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                Démarrer la discussion →
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
      </section>
      </>
  );
}
