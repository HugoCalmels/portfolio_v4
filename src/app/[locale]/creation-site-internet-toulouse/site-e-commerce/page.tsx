'use client';

import styles from './SiteECommerceToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiCheckCircle, FiShoppingCart } from 'react-icons/fi';
import { FaRocket, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Script from 'next/script';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

export default function SiteECommerce() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const toggle = (index: number) => setOpenIndex(index === openIndex ? null : index);

  const questions = [
    {
      question: 'Comment gérer mes produits après la mise en ligne ?',
      answer:
        'Tous vos produits sont accessibles dans un tableau clair et intuitif. Vous pouvez ajouter, modifier ou supprimer vos articles facilement.',
    },
    {
      question: 'Puis-je ajouter des fonctionnalités plus avancées plus tard ?',
      answer:
        'Oui, certaines options techniques peuvent être ajoutées : multi-taxes, variantes produits, export comptable, intégration ERP/CRM, abonnements ou paiements récurrents.',
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

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de boutique e-commerce professionnelle',
    description:
      'Boutique e-commerce complète, paiement Stripe/PayPal, gestion produits, factures PDF et options évolutives.',
    areaServed: { '@type': 'City', name: 'Toulouse' },
    provider: { '@type': 'LocalBusiness', name: 'Hugo Calmels' },
    offers: { '@type': 'Offer', price: '1900.00', priceCurrency: 'EUR' },
  };

  return (
    <>
       <SeoHead
        title="Site e-commerce à Toulouse – Boutique en ligne performante"
        description="Boutique en ligne sur-mesure : paiement sécurisé, catalogue, SEO produit et performances. Développement e-commerce à Toulouse."
      />
    <section className={styles.page}>
      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <div className={styles.container}>
        <FadeIn>
          {/* Intro */}
          <header className={styles.intro}>
            <p className={styles.kicker}>🟨 Site E-commerce Toulouse</p>
            <h1 className={styles.h1}>Votre boutique en ligne clé en main</h1>
            <p className={styles.lead}>
              Encaissez vos ventes en ligne et gérez vos produits simplement, avec des options évolutives selon vos
              besoins.
            </p>

            <p className={styles.returnLink}>
              <Link href={`/${locale}/creation-site-internet-toulouse`}>&larr; Voir les autres offres</Link>
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          {/* Offre principale */}
          <section className={styles.block} aria-labelledby="offer">
            <h2 id="offer" className={styles.h2}>
              <HiOutlineShieldCheck className={styles.icon} /> Mon offre « E-commerce »
            </h2>

            <article className={`${styles.card} ${styles.cardTight}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.h3}>
                  <FiCheckCircle className={styles.icon} /> Inclus dans le socle
                </h3>
                <div className={styles.priceRow}>
                  <span className={styles.priceFrom}>À partir de</span>
                  <span className={styles.price}>1 900 €</span>
                  <span className={styles.priceTtc}>TTC</span>
                </div>
              </div>

              <ul className={styles.bulletList}>
                <li>Catalogue produits (10–20 articles)</li>
                <li>Paiement sécurisé Stripe / PayPal</li>
                <li>HTTPS et sécurité standard</li>
                <li>Factures PDF + suivi simple des commandes</li>
                <li>Pages personnalisables pour vos produits et services</li>
              </ul>

              <p className={styles.note}>
                Options évolutives disponibles : variantes, stock avancé, multi-taxes, abonnements, intégration ERP/CRM…
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
          {/* Options évolutives */}
          <section className={styles.block} aria-labelledby="options">
            <h2 id="options" className={styles.h2}>
              <FaRocket className={styles.icon} /> Options évolutives
            </h2>
            <ul className={styles.bulletList}>
              <li>Catalogue plus large (50–100 produits)</li>
              <li>Variantes produits (taille, couleur…)</li>
              <li>Gestion stock + alertes</li>
              <li>Multi-taxes / TVA européenne</li>
              <li>Emails clients personnalisés</li>
              <li>Export comptable CSV / PDF amélioré</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Options techniques premium */}
          <section className={styles.block} aria-labelledby="advanced">
            <h2 id="advanced" className={styles.h2}>
              <FiShoppingCart className={styles.icon} /> Options premium / techniques
            </h2>
            <ul className={styles.bulletList}>
              <li>Abonnements / paiements récurrents</li>
              <li>Paiements partagés (split payments)</li>
              <li>Gestion complète retours / litiges</li>
              <li>Automatisation suivi commandes / notifications internes</li>
              <li>Intégration ERP ou outil CRM</li>
            </ul>
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
              Prêt à lancer votre boutique en ligne ?
            </h2>
            <p className={styles.finalText}>
              Expliquez-moi vos besoins en 2 minutes et obtenez un devis clair et réaliste. Vous pouvez aussi consulter
              les <Link href={`/${locale}/tarifs`} className={styles.link}>coûts récurrents</Link>.
            </p>
            <div className={styles.ctaRow}>
              <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                Discutons de votre projet →
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
      </section>
      </>
  );
}
