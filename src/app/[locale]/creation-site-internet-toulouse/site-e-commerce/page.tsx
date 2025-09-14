'use client';

import styles from './SiteECommerceToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Script from 'next/script';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

// Icons
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiCheckCircle } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import {
  MdOutlineDesignServices,
  MdEdit,
  MdAutoFixHigh,
  MdTune,
  MdCode,
  MdSecurity,
  MdSpeed,
  MdTrendingUp,
} from 'react-icons/md';

export default function SiteECommerce() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const toggle = (index: number) => setOpenIndex(index === openIndex ? null : index);

  // --- FAQ content (single-offer + extension) ---
  const questions = [
    {
      question: 'Puis-je ajouter mes produits moi-même ?',
      answer: `
Dans l’offre de base <strong>(catalogue fixe)</strong>, non : j’intègre 5 à 20 articles au lancement. 
Si vous souhaitez être autonome, l’<strong>extension mini-admin (+400&nbsp;€)</strong> permet d’ajouter/modifier/supprimer vos articles (connexion protégée, CRUD + upload d’images).
      `,
    },
    {
      question: 'Quels frais récurrents prévoir ?',
      answer: `
Hébergement front (Vercel/Netlify) gratuit ou quelques €/mois selon trafic, <strong>Stripe</strong> prend une commission par transaction, 
nom de domaine ~20&nbsp;€/an. Si l’extension mini-admin est activée, <strong>Firebase</strong> coûte en général <strong>0–5&nbsp;€/mois</strong> pour un petit site.
      `,
    },
    {
      question: 'Puis-je vendre à l’international ?',
      answer: `
Par défaut, on démarre <strong>France uniquement</strong> avec 1–2 frais de port fixes (configurés dans Stripe Checkout). 
L’international (pays supplémentaires, règles de taxes/livraison) est possible <strong>en évolution</strong> sur devis.
      `,
    },
    {
      question: 'Qu’est-ce qui n’est pas inclus dans l’offre de base ?',
      answer: `
Variantes complexes, codes promo, multi-devises, calcul de livraison dynamique, factures PDF automatiques, 
blog/i18n avancés, ERP/CRM, retours/logistiques. Tout cela peut être ajouté plus tard <strong>sur devis</strong>.
      `,
    },
  ];

  // JSON-LD (FAQ)
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer.replace(/<[^>]+>/g, '') },
    })),
  };

  // JSON-LD (Service)
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site e-commerce à Toulouse',
    description:
      'Boutique en ligne moderne : catalogue fixe au lancement, panier simple, paiement sécurisé Stripe Checkout, extension mini-admin possible.',
    areaServed: { '@type': 'City', name: 'Toulouse' },
    provider: { '@type': 'LocalBusiness', name: 'Hugo Calmels' },
    offers: { '@type': 'Offer', price: '900.00', priceCurrency: 'EUR' },
  };

  return (
    <>
      <SeoHead
        title="Site e-commerce à Toulouse – Boutique en ligne simple et évolutive"
        description="Lancez une boutique en ligne claire et sécurisée : catalogue fixe au lancement, panier et paiement Stripe. Extension mini-admin disponible pour être autonome."
      />
      <section className={styles.page}>
        {/* JSON-LD Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <div className={styles.container}>
          {/* Intro */}
          <FadeIn>
            <header className={styles.intro}>
              <p className={styles.kicker}>🟨 Site e-commerce Toulouse</p>
              <h1 className={styles.h1}>Votre boutique en ligne clé en main</h1>
              <p className={styles.lead}>
                Vendez vos créations directement en ligne avec un site moderne, sécurisé et simple à utiliser,&nbsp;
                dès <strong>900&nbsp;€ TTC</strong>.
              </p>

              <p className={styles.returnLink}>
                <Link href={`/${locale}/creation-site-internet-toulouse`}>&larr; Voir les autres offres</Link>
              </p>
            </header>
          </FadeIn>

          {/* Offre principale (une seule offre + extension) */}
          <FadeIn>
            <section className={styles.block} aria-labelledby="offer">
              <h2 id="offer" className={styles.h2}>
                <HiOutlineShieldCheck className={styles.icon} aria-hidden /> Mon offre « Site e-commerce »
              </h2>

              <article className={`${styles.card} ${styles.cardTight}`}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.h3}>
                    <FiCheckCircle className={styles.icon} aria-hidden /> Ce qui est inclus
                  </h3>
                  <div className={styles.priceRow}>
                    <span className={styles.priceFrom}>À partir de</span>
                    <span className={styles.price}>900&nbsp;€</span>
                    <span className={styles.priceTtc}>TTC</span>
                  </div>
                </div>

                <p className={styles.desc}>
                  L’essentiel pour encaisser vos paiements en ligne et présenter vos articles.
                </p>
<ul className={styles.bulletList}>
  <li>Base site vitrine (Accueil, Contact & Légal) <strong>+ espace Boutique</strong></li>
  <li>Catalogue fixe (5–20 articles intégrés au lancement)</li>
  <li>Panier client simple (ajout / suppression)</li>
  <li>Paiement sécurisé via <strong>Stripe Checkout</strong> (CB, 3-D Secure)</li>
  <li>1 devise, 1–2 frais de port fixes (configurés dans Stripe)</li>
</ul>

<p className={styles.note}>Délai indicatif : <strong>J1 → J9</strong> (selon contenus fournis).</p>



                <div className={styles.ctaRow}>
                  <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                    Discutons de votre projet →
                  </Link>
                </div>
              </article>
            </section>
          </FadeIn>

          {/* Process (J1 → J9) */}
          <FadeIn>
            <section className={styles.block} aria-labelledby="process">
              <h2 id="process" className={styles.h2}>
                <MdOutlineDesignServices className={styles.icon} aria-hidden /> Comment ça se passe (J1 → J9)
              </h2>

              <ol className={styles.processList}>
                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J1</span>
                  <div className={styles.stepContent}>
                    <strong>Brief &amp; contenus</strong>
                    <p>
                      Articles, prix, visuels, frais de port : on cadre votre besoin et le périmètre.
                    </p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J2</span>
                  <div className={styles.stepContent}>
                    <strong>Structure &amp; aperçu visuel</strong>
                    <p>
                      <em>Plan simplifié des pages</em> (wireframe rapide) pour valider la navigation et les sections.
                    </p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J3-4</span>
                  <div className={styles.stepContent}>
                    <strong>Intégration catalogue &amp; panier</strong>
                    <p>
                      Mise en place de la boutique (catalogue fixe), du panier simple et du design responsive.
                    </p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J5-6</span>
                  <div className={styles.stepContent}>
                    <strong>Paiement Stripe Checkout</strong>
                    <p>
                      Configuration du paiement sécurisé et des frais de port via Stripe.
                    </p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J7</span>
                  <div className={styles.stepContent}>
                    <strong>Tests &amp; qualité</strong>
                    <p>Parcours de commande, accessibilité, performances, SEO de base.</p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J8</span>
                  <div className={styles.stepContent}>
                    <strong>Retours</strong>
                    <p>Vous testez via un lien de prévisualisation et envoyez vos retours.</p>
                  </div>
                </li>

                <li className={styles.processStep}>
                  <span className={styles.stepNumber}>J9</span>
                  <div className={styles.stepContent}>
                    <strong>Mise en ligne</strong>
                    <p>Déploiement, configuration du domaine et mini-prise en main.</p>
                  </div>
                </li>
              </ol>

              <div className={styles.note}>
                <strong>Disponibilité :</strong> créneau d’échange quotidien (≈30 min) pour valider, ajuster et répondre à vos questions.
              </div>
            </section>
          </FadeIn>

          {/* Modifs & évolutions (inclut l’extension mini-admin) */}
          <FadeIn>
            <section className={styles.block} aria-labelledby="changes">
              <h2 id="changes" className={styles.h2}>
                <MdEdit className={styles.icon} aria-hidden /> Modifications &amp; évolutions
              </h2>

              <p className={styles.lead}>
                Par défaut, le <strong>catalogue est fixe</strong>. Deux solutions si vous souhaitez le faire évoluer :
              </p>

              <div className={styles.cards}>
                <article className={styles.card}>
                  <h3 className={styles.titleHeadder}>
                    <MdAutoFixHigh aria-hidden className={styles.icon} />
                    Retouches ponctuelles
                  </h3>
                  <ul className={styles.bulletList}>
                    <li>Nouveaux articles / retouches</li>
                    <li>Intervention rapide — <strong>30 € / h</strong></li>
                    <li>Idéal si vous changez <em>rarement</em></li>
                  </ul>
                </article>

                <article className={styles.card}>
                  <h3 className={styles.titleHeadder}>
                    <MdTune aria-hidden className={styles.icon} />
                    Extension mini-admin
                  </h3>
                  <ul className={styles.bulletList}>
                    <li>Ajouter / modifier / supprimer vos articles vous-même</li>
                    <li>Connexion protégée, upload d’images</li>
                    <li>Supplément indicatif : <strong>+400 €</strong></li>
                  </ul>
                </article>
              </div>

              <p className={styles.lead} style={{ marginTop: '1rem' }}>
                <strong>30 jours de retouches incluses</strong> après la mise en ligne (ajustements mineurs).
              </p>
            </section>
          </FadeIn>
{/* Options avancées (compact) */}
<FadeIn>
  <section className={styles.block} aria-labelledby="addons">
    <h2 id="addons" className={styles.h2}>
      <MdTrendingUp className={styles.icon} aria-hidden /> Options supplémentaires
    </h2>

    <ul className={styles.bulletList}>
      <li>Codes promo</li>
      <li>Variantes simples (taille/couleur)</li>
      <li>Produits associés</li>
      <li>Pays / zones supplémentaires</li>
      <li>Click-&-collect</li>
      <li>Conditions de livraison perso</li>
      <li>Pages légales & cookies</li>
      <li>Export commandes CSV</li>
    </ul>

    <p className={styles.note}>
      Besoins plus poussés (stock temps réel, factures PDF, multi-devises) : sur devis.
    </p>
  </section>
</FadeIn>




{/* Stack / architecture */}
<FadeIn>
  <section className={styles.block} aria-labelledby="stack">
    <h2 id="stack" className={styles.h2}>
      <MdCode className={styles.icon} aria-hidden /> Technologies utilisées
    </h2>

    <div className={styles.cards}>
      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdSpeed aria-hidden className={styles.icon} />
          Front-end
        </h3>
        <ul className={styles.bulletList}>
          <li><strong>React / Next.js</strong></li>
          <li>Pages rapides & légères</li>
          <li>Hébergement <strong>Vercel/Netlify</strong></li>
        </ul>
      </article>

      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdSecurity aria-hidden className={styles.icon} />
          Paiement & sécurité
        </h3>
        <ul className={styles.bulletList}>
          <li><strong>Stripe Checkout</strong></li>
          <li>Paiement 3-D Secure</li>
          <li>HTTPS & headers propres</li>
        </ul>
      </article>

      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdTrendingUp aria-hidden className={styles.icon} />
          Données & évolutivité
        </h3>
        <ul className={styles.bulletList}>
          <li>Catalogue fixe (socle)</li>
          <li>Mini-admin Firebase</li>
          <li>Options : variantes, promos</li>
        </ul>
      </article>
    </div>

<p className={styles.note}>
  Pas de CMS ni de plugins lourds → moins de maintenance,
  plus de performance, et des bases prêtes à évoluer. <br/>
  <em>Admin légère</em> : Firebase. <em>Besoins métiers avancés</em> : Spring Boot <strong>sur devis</strong>.
</p>
  </section>
</FadeIn>


          {/* FAQ */}
          <FadeIn>
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
                          aria-hidden
                        />
                      </button>
                      <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* JSON-LD FAQ */}
                <Script
                  id="faq-ld"
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
                />
              </div>
            </section>
          </FadeIn>

          {/* CTA finale */}
          <FadeIn>
            <section className={styles.final} aria-labelledby="call">
              <h2 id="call" className={styles.finalTitle}>
                Prêt à lancer votre boutique en ligne&nbsp;?
              </h2>
              <p className={styles.finalText}>
                Expliquez-moi vos besoins en 2 minutes et obtenez un devis clair et réaliste.
                Vous pouvez aussi consulter les{' '}
                <Link href={`/${locale}/tarifs`} className={styles.link}>
                  coûts récurrents
                </Link>
                .
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
