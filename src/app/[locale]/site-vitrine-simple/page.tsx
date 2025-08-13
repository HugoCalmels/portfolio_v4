'use client'

import styles from './SiteVitrine.module.css'

export default function SiteVitrineSimple() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Site vitrine simple</h1>
        <p className={styles.lead}>
          Une page claire et rapide, pour présenter votre activité de manière directe. Adapté aux besoins essentiels.
        </p>

        <div className={styles.block}>
          <h2>🌟 Objectif principal</h2>
          <p>Être visible en ligne rapidement, avec une présentation simple et efficace.</p>
        </div>

        <div className={styles.block}>
          <h2>🧑‍💼 Pour qui ?</h2>
          <p>
            Cette formule s’adresse aux indépendants, freelances, petites structures ou artisans qui veulent mettre leur activité en ligne rapidement, sans complexité ni superflu.
          </p>
        </div>

        <div className={styles.block}>
          <h2>📄 Contenu</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Présentation claire</h3>
              <p>Vos services ou votre activité sont mis en avant de façon simple et directe.</p>
            </div>
            <div className={styles.card}>
              <h3>Formulaire de contact</h3>
              <p>Un formulaire intégré permet aux visiteurs de vous écrire facilement.</p>
            </div>
            <div className={styles.card}>
              <h3>Aide à la rédaction</h3>
              <p>Je vous aide à formuler les textes essentiels et à sélectionner quelques visuels utiles.</p>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <h2>🎨 Design</h2>
          <p>
            Un design léger et lisible, adapté aux petits écrans comme aux grands. On évite toute surcharge visuelle : le site reste sobre, rassurant et professionnel.
          </p>
        </div>

        <div className={styles.block}>
          <h2>📈 SEO</h2>
          <p>
            Une optimisation basique mais propre : balises structurées, description, performance rapide. Suffisant pour un nom de marque ou un secteur peu concurrentiel.
          </p>
        </div>

        <div className={styles.block}>
          <h2>🔧 Technique</h2>
          <p>
            Le site est codé à la main avec React/Next.js. Pas de CMS, pas de plugin, pas de dépendances inutiles. Hébergement rapide, HTTPS inclus, et excellent score de performance.
          </p>
        </div>

        <div className={styles.block}>
          <h2>⏳ Délais</h2>
          <p>
            Vous récupérez un site prêt rapidement. Je vous guide pour l’envoi de vos textes et visuels, et j’avance efficacement dès que tout est rassemblé.
          </p>
        </div>

        <div className={styles.block}>
          <h2>💰 Tarif</h2>
          <p>
            À partir de <strong>500 € TTC</strong>. Le prix dépendra surtout du style graphique attendu et du niveau d’accompagnement.
          </p>
        </div>
      </div>
    </section>
  )
}
