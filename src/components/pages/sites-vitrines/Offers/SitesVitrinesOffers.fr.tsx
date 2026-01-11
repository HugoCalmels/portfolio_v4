'use client'

import SectionSubtitle from '@/components/ui/SectionSubtitle'
import styles from './Offers.module.css'

export default function SitesVitrinesOffersFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionSubtitle>Deux formats, une base propre.</SectionSubtitle>

        <div className={styles.offersGrid}>
          {/* Landing page */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Landing page</h3>

            <p className={styles.cardText}>
              Une page unique pour présenter votre activité et faciliter la prise de contact.
            </p>

            <ul className={`${styles.list} ${styles.commonList}`}>
  <li>Design sur mesure & responsive (mobile&nbsp;/&nbsp;desktop).</li>
  <li>Identité visuelle minimale (favicon, logo, couleurs).</li>
  <li>Site sécurisé (HTTPS).</li>
  <li>Formulaire de contact.</li>
  <li>Mentions légales.</li>
  <li>Mise en ligne.</li>
  <li>SEO de base&nbsp;: balises et indexation par Google.</li>
  <li>Configuration Google Search Console.</li>
  <li>Intégration d’une carte Google Maps.</li>
              <li>15 jours de petites modifications incluses.</li>
            </ul>

            <div className={styles.divider} aria-hidden="true" />

            <ul className={`${styles.list} ${styles.extrasList}`}>
              <li>1 page (sections définies).</li>

            </ul>

            <p className={styles.priceLine}>
              <strong>À partir de 200&nbsp;€</strong>
            </p>

            <p className={styles.cardNote}>
              Limité en référencement (SEO) : une seule page → une seule requête principale, difficile
              d’évoluer.
            </p>
          </article>

          {/* Site vitrine */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Site vitrine</h3>

            <p className={styles.cardText}>
              Un site structuré pour présenter vos services et organiser vos contenus.
            </p>

<ul className={`${styles.list} ${styles.commonList}`}>
  <li>Design sur mesure & responsive (mobile&nbsp;/&nbsp;desktop).</li>
  <li>Identité visuelle minimale (favicon, logo, couleurs).</li>
  <li>Site sécurisé (HTTPS).</li>
  <li>Formulaire de contact.</li>
  <li>Mentions légales.</li>
  <li>Mise en ligne.</li>
  <li>SEO de base&nbsp;: balises et indexation par Google.</li>
  <li>Configuration Google Search Console.</li>
  <li>Intégration d’une carte Google Maps.</li>
  <li>30 jours de petites modifications incluses.</li>
</ul>


            <div className={styles.divider} aria-hidden="true" />

            <ul className={`${styles.list} ${styles.extrasList}`}>
              <li>Jusqu’à 5 pages incluses (pages supplémentaires possibles).</li>
              <li>Arborescence & navigation.</li>
            </ul>

            <p className={styles.priceLine}>
              <strong>À partir de 400&nbsp;€</strong>
            </p>

            <p className={styles.cardNote}>
              Bonnes bases pour le référencement (SEO) : pages multiples → possibilité de viser plusieurs
              requêtes.
            </p>
          </article>
        </div>

        <p className={styles.pricingNote}>
          Paiement&nbsp;: <strong>50&nbsp;% d’acompte</strong> au démarrage, puis{' '}
          <strong>50&nbsp;% à la livraison</strong>.
        </p>
      </div>
    </section>
  )
}
