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
                Une interface interne ou un espace client sur mesure, à ajouter à votre site pour répondre à vos besoins métiers spécifiques.
              </p>
              <ul className={styles.cardList}>
                <li>Interface sécurisée</li>
                <li>Conçue pour votre activité</li>
                <li>Code léger, maintenable</li>
              </ul>
              <div className={styles.price}>Sur devis</div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className={styles.card}>
            <h3 className={styles.cardTitle}>
  <FiZap className={styles.cardIconInline} size={20} />
  <span>Logiciel web personnalisé</span>
</h3>
              <p className={styles.cardText}>
                Un outil métier complet, développé pour vos besoins spécifiques : application web indépendante, rapide et sans dépendance à une plateforme.
              </p>
              <ul className={styles.cardList}>
                <li>Développement 100 % sur mesure</li>
                <li>Pas de dépendance SaaS</li>
                <li>Liberté d’évolution future</li>
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
