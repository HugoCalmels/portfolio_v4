'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import styles from './OffresSimples.module.css'
import FadeIn from '@/components/FadeIn'

export default function OffresSimples() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <section className={styles.section} id="offres">
      <div className={styles.container}>
        <div className={styles.intro}>
          <FadeIn>
            <h2 className={styles.heading}>Offres de sites vitrine</h2>
          </FadeIn>
          <FadeIn>
            <p className={styles.lead}>
              Site vitrine simple, version plus complète ou optimisée pour le SEO local&nbsp;?
              Voici trois formats clairs pour démarrer votre projet web.
            </p>
          </FadeIn>
        </div>

        <div className={styles.cards}>
          <FadeIn>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🟩 Site vitrine simple</h3>
              <p className={styles.cardText}>
              Présentez votre activité simplement, avec un site clair, rapide et sans superflu.
              </p>
              <ul className={styles.cardList}>
                <li>1 à 2 pages essentielles</li>
      
                <li>Livraison rapide (5 à 10 jours)</li>
              </ul>
              <div className={styles.price}>À partir de 700 € TTC</div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🟨 Site vitrine complet</h3>
              <p className={styles.cardText}>
                Un site plus riche, avec plusieurs pages, un design travaillé et un contenu plus abouti.
              </p>
              <ul className={styles.cardList}>
                <li>3 à 6 pages</li>
                <li>Aide à la rédaction plus poussée</li>
                <li>Design soigné, professionnel</li>
              </ul>
              <div className={styles.price}>À partir de 1200 €</div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🟦 Site optimisé SEO local</h3>
              <p className={styles.cardText}>
                Pour ressortir dans les résultats quand on cherche votre métier à Toulouse.
              </p>
              <ul className={styles.cardList}>
                <li>4 à 8 pages ciblées</li>
                <li>Structure pensée pour Google</li>
                <li>Mots-clés locaux définis avec vous</li>
         
              </ul>
              <div className={styles.price}>À partir de 1800 €</div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className={styles.ctaSection}>
            <p className={styles.ctaLead}>Besoin d’un conseil pour choisir&nbsp;?</p>
            <a href={`/${locale}/offres-site-vitrine`} className={styles.ctaMain}>
              Voir le détail des offres →
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className={styles.conclusion}>
            <p>
            <strong>Tous les formats incluent :</strong> design responsive, formulaire de contact, accompagnement sur les textes, SEO de base.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className={styles.subtleLink}>
            <a href={`/${locale}/tarifs`}>
              Besoin des prix en détail ? → Voir les tarifs
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
