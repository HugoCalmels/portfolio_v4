'use client'

import styles from './FonctionMetier.module.css'

export default function FonctionMetier() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fonctions métier & logiciels web</h1>
        <p className={styles.lead}>
          Besoin d’un outil spécifique dans votre site ou d’un logiciel métier sur mesure ? Voici deux approches claires selon votre projet.
        </p>

        <div className={styles.block}>
          <h2>🔧 Fonctions métier intégrées</h2>
          <p>
            J’intègre des fonctionnalités avancées dans un site vitrine ou une base existante. Chaque développement est fait sur mesure, à partir de <strong>50 €/h</strong>, sur devis.
          </p>

          <div className={styles.subsection}>
            <h3>🧾 Fonctions simples & utiles</h3>
            <ul className={styles.grid}>
            <li>
    <strong>Statistiques simples</strong><br />
    Dashboard léger pour voir vos visites, clics ou conversions.
  </li>
  <li>
    <strong>Gestion de fichiers</strong><br />
    Upload sécurisé, téléchargement public ou privé, stockage local ou cloud.
  </li>
  <li>
    <strong>Éditeur de contenu interne</strong><br />
    Modifier des textes, images ou fichiers directement depuis une interface simple.
  </li>

            </ul>

            <h3>📅 Interactions & automatisations</h3>
            <ul className={styles.grid}>
              <li>
                <strong>Prise de rendez‑vous</strong><br />
                Créneaux dynamiques, rappels, synchro avec Google ou iCal.
              </li>
              <li>
                <strong>Paiement en ligne</strong><br />
                Intégration Stripe : paiements simples ou abonnements, factures automatisées.
              </li>
              <li>
                <strong>Notifications automatiques</strong><br />
                Emails, SMS, ou webhooks déclenchés automatiquement selon vos règles.
              </li>
              <li>
                <strong>Espace client</strong><br />
                Accès sécurisé, rôles utilisateurs, interface personnalisée.
              </li>
            </ul>

            <h3>⚙️ Fonctions techniques avancées</h3>
            <ul className={styles.grid}>
              <li>
                <strong>Connexion sociale</strong><br />
                Login via Google, Facebook, LinkedIn…
              </li>
              <li>
                <strong>Sécurité renforcée</strong><br />
                Tokens JWT, cookies httpOnly, contrôle d’accès par rôle.
              </li>

            </ul>
          </div>
        </div>

        <div className={styles.block}>
          <h2>💼 Logiciel métier sur mesure</h2>
          <p>
            Pour les projets plus poussés, je développe un outil complet adapté à vos usages pro : gestion interne, extranet, CRM, interface client…
          </p>
          <ul className={styles.points}>
            <li><strong>Développement sur mesure</strong> — rien de générique, chaque module est pensé pour vous.</li>
            <li><strong>Base de données solide</strong> — modèle personnalisé, avec back-office si besoin.</li>
            <li><strong>Évolutif</strong> — on prévoit des bases saines pour ajouter facilement de nouvelles fonctionnalités.</li>
            <li><strong>Connexion à des services tiers</strong> — APIs externes ou webhooks sur mesure.</li>
            <li><strong>Hébergement adapté</strong> — backend, base cloud, sécurisation : tout est cadré.</li>
            <li><strong>Sur devis uniquement</strong> — chaque projet est unique, je vous aide à cadrer l&apos;effort nécessaire.</li>

          </ul>
        </div>

        <div className={styles.block}>
          <h2>📞 Besoin d’un avis ?</h2>
          <p>
            Vous ne savez pas si votre idée est une “fonction” ou un logiciel entier ? Écrivez-moi. Je vous aide à trier, sans jargon ni engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
