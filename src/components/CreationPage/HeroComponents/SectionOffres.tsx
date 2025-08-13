"use client"

import stylesOffres from "./SectionOffres.module.css"
import Link from "next/link"

export function SectionOffres() {
  return (
    <section id="offres" className={stylesOffres.wrapper}>
      <div className={stylesOffres.inner}>
        <header className={stylesOffres.head}>
          <h2>Création de site web à Toulouse&nbsp;: choisissez votre formule</h2>
          <p>Du simple site vitrine à la plateforme métier intégrée : je développe des sites rapides, sécurisés et pensés pour votre visibilité locale.</p>
        </header>

        <div className={stylesOffres.grid}>
          {/* Vitrine */}
          <article className={stylesOffres.card}>
            <h3>Site vitrine simple</h3>
            <p>Idéal pour artisans, indépendants, professions libérales ou associations toulousaines qui veulent une présence claire et crédible en ligne.</p>
            <ul>
              <li>Design personnalisé & responsive</li>
              <li>Pages services + contact + mentions légales</li>
              <li>Hébergement & maintenance en option</li>
            </ul>
            <Link href="#contact" className={stylesOffres.cardCta}>Demander un devis</Link>
          </article>

          {/* SEO local */}
          <article className={stylesOffres.card}>
            <h3>Site optimisé SEO local</h3>
            <p>Pour apparaître sur Google quand on cherche votre métier + "Toulouse" ou votre zone. Architecture, contenus & balisage structurés.</p>
            <ul>
              <li>Recherche mots-clés locaux</li>
              <li>Pages villes / quartiers ciblées</li>
              <li>Schema LocalBusiness + Google Business Profile</li>
            </ul>
            <Link href="#contact" className={stylesOffres.cardCta}>Obtenir une estimation</Link>
          </article>

          {/* Sur-mesure */}
          <article className={stylesOffres.card}>
            <h3>Site web sur‑mesure</h3>
            <p>Besoin d'un portail client, d'un paiement en ligne, d'un intranet ou d'outils métier spécifiques ? Je développe du sur‑mesure scalable.</p>
            <ul>
              <li>Espace client sécurisé</li>
              <li>Paiement / facturation</li>
              <li>Intégrations API & automatisations</li>
            </ul>
            <Link href="#contact" className={stylesOffres.cardCta}>Parler de votre projet</Link>
          </article>
        </div>

        <p className={stylesOffres.noteSolo}>
          Je prends en charge le projet du brief à la mise en ligne : conception, développement, performances, SEO technique et suivi.
        </p>
      </div>
    </section>
  )
}