'use client'

import { useState, useMemo } from 'react'
import styles from './Faq.module.css'
import { FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Faq = {
  question: string
  answerHtml: string
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<null | number>(null)
  const params = useParams()
 const locale = params?.locale || 'fr'

  const offres = `/${locale}/offres`

  const faqs: Faq[] = [
    // --- Mini FAQ en tête (repris tel quel) ---
    {
      question: '1. Un développeur web peut-il remplacer une agence ?',
      answerHtml:
        'Oui. Je fais tout ce qu’une agence propose — maquettes, contenu, SEO, développement — mais <strong>sans intermédiaires</strong>. Moins de frais, <strong>plus de clarté</strong>, un <strong>seul interlocuteur</strong> du début à la fin.',
    },
    {
      question: '2. Quelle différence entre un site vitrine et une application web ?',
      answerHtml:
        'Un <strong>site vitrine</strong> présente votre activité. Une <strong>application web</strong> propose des <strong>fonctionnalités sur mesure</strong> : tableau de bord, interface client, outil métier…',
    },
    {
      question: '3. Et si je veux modifier le site plus tard ?',
      answerHtml:
        'Pas de souci. Vous pouvez me transmettre les changements à faire, ou je peux développer une <strong>interface simple</strong> pour que vous puissiez les gérer vous-même.',
    },

    // --- FAQ étendue adaptée à ton contexte réel ---
    {
      question: '4. Combien coûte un site vitrine ?',
      answerHtml:
        `Repères sur la page <a href="${offres}"><strong>Offres</strong></a> : à partir de <strong>700 € TTC</strong> pour un site simple. Le prix dépend du contenu à intégrer, des objectifs et des options. Un devis clair est fourni avant de commencer.`,
    },
    {
      question: '5. Comment se déroule un projet ?',
      answerHtml:
        `Le déroulé est simple : prise de contact → échange sur vos besoins → devis → conception et développement → mise en ligne.
Je suis en train de mettre en place des outils comme la prise de rendez-vous en ligne et un questionnaire dédié pour simplifier encore plus le processus, mais vous avez déjà un cadre clair dès le départ.`,
    },
    {
      question: '6. Qui s’occupe des textes et des images ?',
      answerHtml: `
        Je peux <strong>rédiger</strong> à partir de vos infos et proposer des visuels adaptés. 
        Je peux aussi <strong>générer des images avec l’IA</strong> si besoin. 
        Si vous préférez écrire vous-même, je vous fournis un <strong>gabarit</strong> et je relis pour clarifier. 
        Plus de détails sur <a href="${offres}"><strong>Offres</strong></a>.
      `,
    },
    {
      question: '7. Et si je veux faire des modifications juste après la mise en ligne ?',
      answerHtml: `
        Je reste disponible pour de petites <strong>retouches post-livraison</strong>, 
        <strong>sans frais</strong>, pendant une période allant de <strong>10 à 30 jours</strong> selon l’offre choisie. 
        Exemples : correction d’un texte, ajout d’une image, modification d’un lien ou d’un bouton.<br/>
        Au-delà du délai ou pour des changements plus conséquents, j’applique simplement mon <strong>tarif horaire</strong>.
      `,
    },
    {
      question: '8. Mon site sera-t-il bien référencé sur Google ?',
      answerHtml: `
        Oui, il sera <strong>optimisé techniquement</strong> pour être indexé par Google (structure, balises, vitesse, responsive). 
        En revanche, apparaître en bonne position sur une recherche précise dépend aussi du <strong>contenu</strong> et de la <strong>concurrence</strong>. 
        Pour maximiser vos chances, je propose une offre <strong>SEO local</strong> avec audit et optimisation ciblée, 
        idéalement accompagnée d’un <strong>abonnement mensuel</strong> pour mettre à jour régulièrement le contenu (essentiel pour progresser dans les résultats).
        Voir <a href="${offres}"><strong>Offres</strong></a>.
      `,
    },
    {
      question: '9. Qui possède le site une fois livré ?',
      answerHtml:
        `Vous êtes <strong>propriétaire</strong> du code, du contenu, du nom de domaine et de l’hébergement (configurés à votre nom). Rien n’est verrouillé.`,
    },
    {
      question: '10. Hébergement et nom de domaine : qui gère ?',
      answerHtml:
        `Par défaut, <strong>je mets tout en place pour vous</strong>, directement à votre nom (domaine, hébergement, certificats HTTPS). Si vous préférez tout gérer vous-même, c’est possible mais <strong>hors forfait</strong> et généralement plus lent.`,
    },
    {
      question: '11. Reprise d’un site existant : dans quels cas ?',
      answerHtml:
        `Je reprends les projets dont la base technique est <strong>compatible</strong> avec mon stack (React/Next.js, Angular, Java/Spring). Sur un site <strong>WordPress</strong>, je recommande le plus souvent une <strong>refonte</strong> propre et moderne plutôt qu’une rustine.`,
    },
    {
      question: '12. Travaillez-vous uniquement à Toulouse ?',
      answerHtml:
        `Non. Je travaille avec des clients dans toute la France. Les projets se font très bien à <strong>distance</strong> (visio, email, téléphone).`,
    },
    {
      question: '13. En combien de temps le site est-il prêt ?',
      answerHtml:
        `Un site simple : <strong>5 à 10 jours</strong>. Un site complet : <strong>2–3 semaines</strong>. Une version orientée SEO local : <strong>3–4 semaines</strong>. Les délais varient surtout selon la <strong>disponibilité des contenus</strong> et la rapidité des retours.`,
    },

  ]

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  // JSON-LD SEO (on enlève la numérotation dans "name")
  const faqJsonLd = useMemo(() => {
    const strip = (html: string) =>
      html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

    const mainEntity = faqs.map((f) => ({
      '@type': 'Question',
      name: f.question.replace(/^\d+\.\s*/, ''),
      acceptedAnswer: {
        '@type': 'Answer',
        text: strip(f.answerHtml),
      },
    }))

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity,
    }
  }, [faqs])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Foire aux questions</h1>
        <p className={styles.intro}>
  Réponses aux questions courantes sur mes prestations, le contenu, le SEO, l’hébergement et les délais.
</p>


        <div className={styles.items}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}
                />
              </button>
              <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                <div
                  className={styles.answer}
                  dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
  <p>Une autre question&nbsp;?</p>
  <Link href={`/${locale}/contact`} className={styles.buttonPrimary}>
    Me contacter
  </Link>
</div>


      </div>

      {/* JSON-LD pour les rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  )
}
