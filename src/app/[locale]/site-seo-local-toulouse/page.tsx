'use client'

import styles from './SiteVitrine.module.css'

export default function SiteSeoLocal() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Site optimisé SEO local</h1>
        <p className={styles.lead}>
          Un site pensé dès le départ pour capter des recherches locales sur Google. Objectif : attirer des clients de votre zone.
        </p>

        <div className={styles.block}>
          <h2>🌟 Objectif principal</h2>
          <p>Générer du trafic qualifié et local, sans dépendre de la pub ou des réseaux sociaux.</p>
        </div>

        <div className={styles.block}>
          <h2>🧑‍💼 Pour qui ?</h2>
          <p>
            Cette offre s’adresse à celles et ceux qui veulent développer leur visibilité sur le web local : artisans, services, cabinets, commerçants…
          </p>
        </div>

        <div className={styles.block}>
          <h2>📄 Contenu</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Contenu SEO friendly</h3>
              <p>Textes optimisés, structure pensée pour Google, sans négliger la lisibilité humaine.</p>
            </div>
            <div className={styles.card}>
              <h3>Formulaire visible</h3>
              <p>Un formulaire mis en avant pour inciter à la prise de contact ou à la demande de devis.</p>
            </div>
            <div className={styles.card}>
              <h3>Accompagnement stratégique</h3>
              <p>Je vous guide pour choisir les bons mots-clés à viser selon votre secteur et votre localisation.</p>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <h2>🎨 Design</h2>
          <p>
            Le design reste élégant mais rapide à charger. On met l’accent sur la hiérarchie visuelle, les contrastes et la clarté des actions.
          </p>
        </div>

        <div className={styles.block}>
          <h2>📈 SEO</h2>
          <p>
            Ici, le SEO est central : structure sémantique, URLs propres, balisage cohérent, pages optimisées, vitesse de chargement… le site est prêt à viser des requêtes locales ciblées.
          </p>
          <p>
            <strong>Important :</strong> pour obtenir ou maintenir une bonne position sur Google, un suivi régulier est recommandé. Je propose un accompagnement SEO mensuel (à partir de 150 €/mois), qui permet d’ajuster les pages clés, ajouter du contenu stratégique et rester compétitif dans les résultats.
          </p>
        </div>

        <div className={styles.block}>
          <h2>🔧 Technique</h2>
          <p>
            Le site est codé sur-mesure, avec une base légère et rapide. Tout est optimisé pour l’indexation Google et les performances (LCP, CLS, etc).
          </p>
        </div>

        <div className={styles.block}>
          <h2>⏳ Délais</h2>
          <p>
            Délai moyen : 3 semaines, selon la disponibilité des contenus. On définit ensemble un angle stratégique dès le début.
          </p>
        </div>

        <div className={styles.block}>
          <h2>💰 Tarif</h2>
          <p>
            À partir de <strong>1200 € TTC</strong>. Selon le niveau de concurrence ou le nombre de pages optimisées.
          </p>
        </div>
      </div>
    </section>
  )
}
