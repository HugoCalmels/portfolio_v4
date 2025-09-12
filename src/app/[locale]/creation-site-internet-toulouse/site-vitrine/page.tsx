'use client';

import styles from './SiteVitrineToulouse.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDesignServices} from 'react-icons/md';
import { FiCheckCircle} from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Script from 'next/script';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

import { MdEdit, MdAutoFixHigh, MdTune, MdCode, MdSecurity,MdSpeed, MdTrendingUp } from "react-icons/md";

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
    offers: { '@type': 'Offer', price: '500.00', priceCurrency: 'EUR' },
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
              Vous cherchez un site simple, clair et professionnel pour être trouvé ? Je crée pour vous
              un site vitrine moderne, sécurisé et facile à prendre en main, dès <strong>500&nbsp;€ TTC</strong>.<br/>
    
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
                  <span className={styles.price}>500&nbsp;€</span>
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

              <div className={styles.ctaRow}>
                <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                  Discutons de votre projet →
                </Link>
              </div>
            </article>
          </section>
        </FadeIn>

  


     <FadeIn>
  <section className={styles.block} aria-labelledby="process">
    <h2 id="process" className={styles.h2}>
      <MdOutlineDesignServices className={styles.icon} aria-hidden /> Comment ça se passe (J1 → J5)
    </h2>

    <ol className={styles.processList}>
      <li className={styles.processStep}>
        <span className={styles.stepNumber}>J1</span>
        <div className={styles.stepContent}>
          <strong>Brief & contenus</strong>
          <p>On définit les pages et les objectifs. Vous me transmettez textes/visuels (ou je peux les produire).</p>
        </div>
      </li>

      <li className={styles.processStep}>
        <span className={styles.stepNumber}>J2</span>
        <div className={styles.stepContent}>
          <strong>Structure & aperçu visuel</strong>
          <p>Je conçois un <em>plan simplifié des pages</em> (wireframe rapide) pour valider navigation et sections.</p>
        </div>
      </li>

      <li className={styles.processStep}>
        <span className={styles.stepNumber}>J3</span>
        <div className={styles.stepContent}>
          <strong>Intégration des pages</strong>
          <p>Mise en place du design responsive, contenus, formulaire de contact, bases SEO.</p>
        </div>
      </li>

      <li className={styles.processStep}>
        <span className={styles.stepNumber}>J4</span>
        <div className={styles.stepContent}>
          <strong>Finitions & retours</strong>
          <p>Tests, performance, accessibilité. Vous testez sur un lien de prévisualisation et envoyez vos retours (1 cycle).</p>
        </div>
      </li>

      <li className={styles.processStep}>
        <span className={styles.stepNumber}>J5</span>
        <div className={styles.stepContent}>
          <strong>Mise en ligne</strong>
          <p>Déploiement avec HTTPS, remise des accès et mini-prise en main.</p>
        </div>
      </li>
    </ol>

    <div className={styles.note}>
      <strong>Disponibilité :</strong> je prévois un <em>créneau d’échange quotidien (≈30 min)</em> pour valider, ajuster et répondre à vos questions.
    </div>
  </section>
</FadeIn>
<FadeIn>
  <section className={styles.block} aria-labelledby="changes">
    <h2 id="changes" className={styles.h2}>
      <MdEdit className={styles.icon} aria-hidden /> Modifications & évolutions
    </h2>

    <p className={styles.lead}>
      Par défaut, <strong>il n’y a pas de tableau de bord d’édition</strong> (pas de CMS, pas de WordPress)
      après la mise en ligne, deux solutions simples selon vos besoins :
    </p>

    <div className={styles.cards}>
      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdAutoFixHigh aria-hidden className={styles.icon} />
          Retouches ponctuelles
        </h3>
        <ul className={styles.bulletList}>
          <li>Textes, visuels, liens…</li>
          <li>Intervention rapide — <strong>30 € / h</strong></li>
          <li>Parfait si vous modifiez <em>occasionnellement</em></li>
        </ul>
      </article>

      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdTune aria-hidden className={styles.icon} />
          Mini interface de gestion
        </h3>
        <ul className={styles.bulletList}>
          <li>Modifier vous-même du contenu ciblé</li>
          <li>À partir de <strong>500 €</strong> (selon besoin)</li>
          <li>Utile si vous changez <em>régulièrement</em></li>
        </ul>
      </article>
    </div>

    <p className={styles.lead} style={{ marginTop: "1rem" }}>
   <strong>30 jours de retouches incluses</strong> après la mise en ligne (ajustements mineurs).<br/>
     Ensuite : retouches ponctuelles ou mini interface — à vous de choisir.
    </p>
  </section>
</FadeIn>

<FadeIn>
  <section className={styles.block} aria-labelledby="stack">
    <h2 id="stack" className={styles.h2}>
      <MdCode className={styles.icon} aria-hidden /> Sous le capot (technos modernes)
    </h2>

    <p className={styles.lead}>
      Le site est développé avec <strong>React / Next.js</strong> — des standards actuels du web pro.
      Résultat : une base <em>solide, rapide et durable</em>, prête à évoluer selon vos priorités.
    </p>

    <div className={styles.cards}>
      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdSpeed aria-hidden className={styles.icon} />
          Performance
        </h3>
        <ul className={styles.bulletList}>
          <li>Pages légères et rapides</li>
          <li>Bonnes pratiques CWV intégrées</li>
          <li>Images optimisées</li>
        </ul>
      </article>

      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdSecurity aria-hidden className={styles.icon} />
          Sécurité & fiabilité
        </h3>
        <ul className={styles.bulletList}>
          <li>Stack sans plugins lourds</li>
          <li>HTTPS et headers propres</li>
          <li>Moins de maintenance</li>
        </ul>
      </article>

      <article className={styles.card}>
        <h3 className={styles.titleHeadder}>
          <MdTrendingUp aria-hidden className={styles.icon} />
          Évolutivité
        </h3>
        <ul className={styles.bulletList}>
          <li>Ajouts SEO / pages</li>
          <li>Modules e-commerce simples</li>
          <li>Fonctionnalités métier au besoin</li>
        </ul>
      </article>
    </div>

    <div className={styles.note}>
      Vous commencez avec un site vitrine simple ; la même base peut grandir (SEO, vente, outils internes) quand c’est pertinent.
    </div>
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
              Expliquez-moi vos besoins en 2 minutes et obtenez un devis clair et sans surprise. 
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
