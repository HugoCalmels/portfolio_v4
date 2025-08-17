'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import styles from './OffresSurMesure.module.css'
import FadeIn from '@/components/FadeIn'

// 👇 icônes importées
import { FiTool, FiZap } from 'react-icons/fi'

export default function OffresSurMesure() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <FadeIn>
            <h2 className={styles.heading}>Des solutions 100 % sur mesure</h2>
          </FadeIn>
          <FadeIn>
            <p className={styles.lead}>
              Besoin d’un espace client, d’un tableau de bord ou d’un outil métier développé spécialement pour vous&nbsp;?
              Je conçois des fonctionnalités web adaptées à votre activité.
            </p>
          </FadeIn>
        </div>

        <div className={styles.cards}>
        <FadeIn>
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>
      <FiTool className={styles.cardIconInline} size={20} />
      <span>Fonction métier</span>
    </h3>
    <p className={styles.cardText}>
  Une fonctionnalité pensée uniquement pour compléter votre site vitrine : module spécifique, intégré proprement et conçu pour évoluer sans surcharge.
</p>

    <ul className={styles.cardList}>
      <li>Développement 100 % ciblé</li>
      <li>Intégration fluide et légère</li>
      <li>Modules évolutifs et maintenables</li>
    </ul>
    <div className={styles.price}>Sur devis</div>
  </div>
</FadeIn>



          <FadeIn>
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>
      <FiZap className={styles.cardIconInline} size={20} />
      <span>Logiciel web sur mesure</span>
    </h3>
    <p className={styles.cardText}>
      Un outil métier pensé uniquement pour votre façon de travailler : application web autonome, rapide, et sans dépendance à une plateforme — idéal pour remplacer les Excel et process bricolés.
    </p>
    <ul className={styles.cardList}>
      <li>Développement 100 % adapté à vos besoins</li>
      <li>Aucune licence ni abonnement imposé</li>
      <li>Évolutif : fonctions ajoutées selon vos besoins</li>
    </ul>
    <div className={styles.price}>Sur devis</div>
  </div>
</FadeIn>

        </div>

        <FadeIn>
          <div className={styles.ctaSection}>
            <p className={styles.ctaLead}>Un outil spécifique à créer&nbsp;?</p>
            <a href={`/${locale}/solutions-metier`} className={styles.ctaMain}>
              Voir les solutions sur mesure →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
