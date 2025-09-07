'use client';

import styles from './SiteVitrineToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDesignServices, MdOutlineTextSnippet } from 'react-icons/md';
import { FiCheckCircle, FiFileText, FiPhoneCall } from 'react-icons/fi';
import { FaRocket, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Script from 'next/script';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

export default function SiteVitrine() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const questions = [
    {
      question: 'Comment modifier mon site après la livraison ?',
      answer: `
Pendant 30 jours après la mise en ligne, les petites modifications sont incluses gratuitement. 
Ensuite, vous avez deux options :
<br/><br/>
1. <strong>Modifications ponctuelles</strong> — vous me dites quoi changer, je le fais rapidement (50 € / heure). 
<br/>
2. <strong>Espace de gestion simple</strong> — pour être autonome, je peux créer un petit tableau de bord minimaliste 
pour modifier vous-même vos textes ou images. Prix à partir de 500 € pour un espace minimaliste, un peu plus complet sur devis.
      `,
    },
    {
      question: 'Sites 100% sur-mesure, pas de CMS',
      answer: `
Je ne travaille pas avec WordPress ou un CMS : chaque site est créé sur-mesure pour vous 
(<strong>HTML/CSS/TypeScript/React/Next.js</strong>, parfois <strong>Java/Spring</strong> pour les tableaux de bord simples). 
C’est plus rapide, sécurisé et parfaitement adapté à vos besoins. 
  `,
    },
  ];

  const toggle = (index: number) => setOpenIndex(index === openIndex ? null : index);

  // JSON-LD FAQ
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer.replace(/<[^>]+>/g, '') },
    })),
  };

  // JSON-LD minimal (Service)
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site vitrine à Toulouse',
    description:
      'Besoin d’un site internet simple et efficace à Toulouse ? Je crée des sites vitrines modernes, rapides et faciles à utiliser, dès 900 € TTC.',
    areaServed: { '@type': 'City', name: 'Toulouse' },
    provider: { '@type': 'LocalBusiness', name: 'Hugo Calmels' },
    offers: { '@type': 'Offer', price: '900.00', priceCurrency: 'EUR' },
  };

  return (
    <>
        <SeoHead
        title="Site vitrine à Toulouse – Création rapide et professionnelle"
        description="Présentez votre activité avec un site vitrine clair, responsive et optimisé SEO à Toulouse. Intégration sur-mesure et accompagnement."
      />
    <section className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <div className={styles.container}>
        {/* Intro */}
        <FadeIn>
          <header className={styles.intro}>
            <p className={styles.kicker}>🟩 Site vitrine Toulouse</p>
            <h1 className={styles.h1}>Votre site vitrine clé en main</h1>
            <p className={styles.lead}>
              Vous cherchez un site simple, clair et professionnel pour être trouvé à Toulouse&nbsp;? Je crée pour vous
              un site vitrine moderne, sécurisé et facile à prendre en main, dès <strong>900&nbsp;€ TTC</strong>.
            </p>

            {/* CTA double vers contact + retour moneypage */}
            <p className={styles.returnLink}>
              <Link href={`/${locale}/creation-site-internet-toulouse`}>&larr; Voir les autres offres</Link>
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          {/* Offre simple */}
          <section className={styles.block} aria-labelledby="offer">
            <h2 id="offer" className={styles.h2}>
              <HiOutlineShieldCheck className={styles.icon} aria-hidden /> Mon offre « Site vitrine »
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
                L’essentiel pour présenter votre activité en ligne et être contacté rapidement.
              </p>
              <ul className={styles.bulletList}>
                <li>1 à 5 pages essentielles (Accueil, Services, Contact…)</li>
                <li>Design moderne et responsive (ordinateur & mobile)</li>
                <li>Formulaire de contact et clic-to-call</li>
                <li>HTTPS & sécurité inclus</li>
                <li>Base SEO pour être trouvé sur Google</li>
              </ul>
              <p className={styles.note}>Hébergement & suivi technique dès 100&nbsp;€/an</p>
              <div className={styles.ctaRow}>
                <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                  Discutons de votre projet →
                </Link>
              </div>
            </article>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Bénéfices clairs */}
          <section className={styles.block} aria-labelledby="benefits">
            <h2 id="benefits" className={styles.h2}>
              <FaRocket className={styles.icon} aria-hidden /> Pourquoi un site vitrine ?
            </h2>

            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <FiFileText className={styles.icon} aria-hidden /> Être clair et professionnel
                </h3>
                <p className={styles.desc}>
                  Votre activité est présentée simplement avec des pages essentielles, rassurant vos prospects dès la
                  première visite.
                </p>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <FiPhoneCall className={styles.icon} aria-hidden /> Être contacté facilement
                </h3>
                <p className={styles.desc}>
                  Formulaire, appel en un clic, Google Maps&nbsp;: tout est pensé pour que vos clients vous trouvent
                  sans effort.
                </p>
              </article>

              <article className={styles.card}>
                <h3 className={styles.h3}>
                  <HiOutlineShieldCheck className={styles.icon} aria-hidden /> Être tranquille techniquement
                </h3>
                <p className={styles.desc}>
                  Sécurité, rapidité et référencement de base sont déjà intégrés, sans surcoût ni complexité.
                </p>
              </article>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={styles.block} aria-labelledby="content">
            <h2 id="content" className={styles.h2}>
              <MdOutlineTextSnippet className={styles.icon} aria-hidden /> Création de contenu incluse
            </h2>
            <p>
              Pas de panique si vous n’avez ni textes ni images : je m’occupe aussi de la partie contenu. L’objectif est
              simple : que votre site vitrine soit prêt à convaincre vos visiteurs, sans que vous ayez à tout écrire ou
              chercher vous-même.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Textes adaptés au web</strong> — j’écris des contenus clairs et engageants pour présenter vos
                services.
              </li>
              <li>
                <strong>Images</strong> — je peux utiliser vos visuels, générer des images avec l’IA, ou sélectionner
                des photos libres de droits.
              </li>
              <li>
                <strong>Contenu existant</strong> — si vous avez déjà des textes ou images, je les mets en valeur dans
                un design moderne.
              </li>
            </ul>
            <p>
              Beaucoup de créateurs de sites demandent que vous fournissiez déjà vos textes et visuels. Ici, je propose
              une approche <em>clé en main</em> pour que vous n’ayez pas ce blocage dès le départ.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Process simplifié — version liste numérotée */}
          <section className={styles.block} aria-labelledby="process">
            <h2 id="process" className={styles.h2}>
              <MdOutlineDesignServices className={styles.icon} aria-hidden /> Comment ça marche
            </h2>

            <ol className={styles.processList}>
              <li className={styles.processStep}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepContent}>
                  <strong>On échange</strong>
                  <p>Vos besoins, vos pages, vos objectifs.</p>
                </div>
              </li>

              <li className={styles.processStep}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepContent}>
                  <strong>Maquette</strong>
                  <p>
                    Vous validez le design avant développement <em>(optionnel, sur demande)</em>.
                  </p>
                </div>
              </li>

              <li className={styles.processStep}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepContent}>
                  <strong>Création</strong>
                  <p>Le site est développé avec vos contenus.</p>
                </div>
              </li>

              <li className={styles.processStep}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepContent}>
                  <strong>Mise en ligne</strong>
                  <p>Votre site est prêt et vous pouvez l’utiliser.</p>
                </div>
              </li>
            </ol>
          </section>
        </FadeIn>

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
          {/* CTA finale */}
          <section className={styles.final} aria-labelledby="call">
            <h2 id="call" className={styles.finalTitle}>
              Prêt à créer votre site vitrine à Toulouse&nbsp;?
            </h2>
            <p className={styles.finalText}>
              Expliquez-moi vos besoins en 2 minutes et obtenez un devis clair et sans surprise. Vous pouvez aussi
              consulter les <Link href={`/${locale}/frais-recurrents`} className={styles.link}>coûts récurrents</Link>{' '}
              pour hébergement et suivi technique.
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
