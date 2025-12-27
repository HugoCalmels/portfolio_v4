'use client';

import styles from './Projects.module.css';

export default function LogicielsWebProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Petits projets déjà réalisés</h2>
        <p className={styles.text}>
          Quelques exemples proches de ce que j’ai déjà développé, pour situer le type
          d’outils que je peux concevoir.
        </p>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Plateforme pour matchs organisés</h3>
            <p className={styles.cardText}>
              Gestion de comptes, équipes, invitations, création de matchs, statut des
              rencontres et notifications e-mail. Authentification via API externe.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Outil de gestion d’événements</h3>
            <p className={styles.cardText}>
              Création d’événements datés (UTC), inscriptions, statuts, tableau récapitulatif
              avec filtres. Formulaires connectés à une base de données.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>API de formulaires de contact</h3>
            <p className={styles.cardText}>
              API Spring avec envoi d’e-mails, stockage des messages, petites règles
              de validation et déploiement sur serveur avec CI/CD simple.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
