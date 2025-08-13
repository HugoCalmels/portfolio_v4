'use client'

import styles from './SiteVitrineToulouse.module.css'
import Link from 'next/link'

export default function SiteVitrineToulouse() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Création de site vitrine à Toulouse</h1>
        <p className={styles.subhead}>
          Un site clair, rapide et professionnel pour vous présenter en ligne et recevoir des demandes facilement.
        </p>

        <div className={styles.block}>
          <h2>Pourquoi faire un site vitrine ?</h2>
          <ul>
            <li>✅ Être visible sur Google quand on cherche votre métier</li>
            <li>✅ Inspirer confiance avec une présentation claire</li>
            <li>✅ Recevoir des demandes via un formulaire connecté</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Ce qui est inclus</h2>
          <ul>
            <li>✔️ Page d’accueil personnalisée</li>
            <li>✔️ Formulaire de contact connecté</li>
            <li>✔️ Déploiement compris (hébergement inclus)</li>
            <li>✔️ Design responsive et adapté à votre image</li>
            <li>✔️ Base SEO local (activité + ville)</li>
            <li>✔️ 1 série de retours après livraison</li>
          </ul>
          <p className={styles.price}>
            💰 <strong>À partir de 500 € TTC</strong> – Livraison rapide (5 à 10 jours)
          </p>
        </div>

        <div className={styles.block}>
          <h2>Ce qui n’est pas prévu</h2>
          <ul>
            <li>✖️ Pas de panneau d’administration (back-office)</li>
            <li>✖️ Pas de fonctionnalités avancées (agenda, client, etc.)</li>
            <li>✖️ Pas de rédaction complète (contenu fourni par vous)</li>
          </ul>
          <p className={styles.alt}>
            👉 Pour des besoins plus complexes, voyez aussi{' '}
            <Link href="/logiciel-metier-toulouse">l’offre Logiciel</Link>.
          </p>
        </div>

        <div className={styles.ctaSection}>
          <h3>Prêt à discuter de votre site ?</h3>
          <Link href="/contact" className={styles.cta}>
            Discutons de votre projet →
          </Link>
        </div>
      </div>
    </section>
  )
}
