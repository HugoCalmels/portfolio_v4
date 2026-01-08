'use client'

import styles from './Services.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import MiniCTA from '@/components/ui/MiniCta'
import {useLocale} from 'next-intl'

export default function ServicesFr() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Mes services"
          title="Ce que je développe."
          subtitle={<>Deux types de projets&nbsp;: sites web et logiciels web.</>}
        />

        <div className={styles.grid}>
          {/* Sites web */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Sites web</h3>

            <p className={styles.cardText}>
              Sites vitrines, landing pages et projets spécifiques, pensés pour être clairs, rapides et
              durables.
            </p>

            <ul className={styles.list}>
              <li>Landing page ou site vitrine (1 à 5 pages)</li>
              <li>Contenu évolutif (modifications cadrées)</li>
              <li>Paiement en ligne si besoin</li>
              <li>SEO & visibilité (optionnel)</li>
            </ul>

            <MiniCTA href={`/${locale}/sites-web`}>En savoir plus</MiniCTA>

            <div className={styles.cardFooter}>
              <span className={styles.price}>À partir de 400€              <br/>et 0€ / mois</span>

            </div>
          </article>

          {/* Logiciels web */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Logiciels web</h3>

            <p className={styles.cardText}>
              Des outils web conçus pour un besoin précis, en interne ou pour vos clients.
            </p>

            <ul className={styles.list}>
              <li>Back-office & interfaces d’administration</li>
              <li>Outils métiers et espaces privés</li>
              <li>MVP pour tester une idée</li>
              <li>Projets sur mesure selon vos besoins</li>
            </ul>

            <MiniCTA href={`/${locale}/logiciels-web`}>En savoir plus</MiniCTA>

            <div className={styles.cardFooter}>
              <span className={styles.price}>Sur devis</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
