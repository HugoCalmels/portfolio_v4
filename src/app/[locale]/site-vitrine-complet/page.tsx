'use client'

import styles from './SiteVitrine.module.css'

export default function SiteVitrineComplet() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Site vitrine complet</h1>
        <p className={styles.lead}>
          Une présence professionnelle structurée, pensée pour durer. Cette version complète vous donne une base solide pour vous démarquer.
        </p>

        <div className={styles.block}>
          <h2>🌟 Objectif principal</h2>
          <p>Construire une vitrine sérieuse, crédible et évolutive, adaptée à votre positionnement.</p>
        </div>

        <div className={styles.block}>
          <h2>🧑‍💼 Pour qui ?</h2>
          <p>
            Adapté aux pros en activité, aux petites équipes ou à toute personne souhaitant valoriser plusieurs services, activités ou métiers sur un site bien organisé.
          </p>
        </div>

        <div className={styles.block}>
          <h2>📄 Contenu</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Contenu organisé</h3>
              <p>Les infos sont hiérarchisées, et pensées pour guider vos visiteurs naturellement.</p>
            </div>
            <div className={styles.card}>
              <h3>Formulaire adapté</h3>
              <p>Possibilité d’ajouter des champs personnalisés ou des appels à l’action ciblés.</p>
            </div>
            <div className={styles.card}>
              <h3>Travail éditorial</h3>
              <p>Je vous aide à structurer vos idées, clarifier vos messages et créer un fil conducteur solide.</p>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <h2>🎨 Design</h2>
          <p>
            Design plus travaillé, en lien avec votre identité visuelle. On travaille sur les contrastes, la typographie, l’équilibre visuel pour marquer les esprits sans en faire trop.
          </p>
        </div>

        <div className={styles.block}>
          <h2>📈 SEO</h2>
          <p>
            Base SEO propre avec un balisage cohérent, des titres clairs, et un contenu structuré autour de vos métiers et votre ville. Suffisant pour être indexé proprement et apparaître sur des requêtes métier + localisation.
          </p>
        </div>

        <div className={styles.block}>
          <h2>🔧 Technique</h2>
          <p>
            Toujours sans CMS, le site reste ultra léger, rapide, et facilement maintenable. On prépare aussi le terrain si vous souhaitez ajouter des pages ou modules dans le futur.
          </p>
        </div>

        <div className={styles.block}>
          <h2>⏳ Délais</h2>
          <p>
            Généralement livré en deux à trois semaines selon le volume de contenu. Je vous accompagne dès les premiers échanges pour cadrer le projet au plus juste.
          </p>
        </div>

        <div className={styles.block}>
          <h2>💰 Tarif</h2>
          <p>
            À partir de <strong>900 € TTC</strong>. Le tarif dépendra notamment de la charge rédactionnelle ou des choix graphiques.
          </p>
        </div>
      </div>
    </section>
  )
}
