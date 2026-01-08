'use client'

import styles from './Services.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import MiniCTA from '@/components/ui/MiniCta'
import {useLocale} from 'next-intl'

export default function ServicesEn() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="My services"
          title="What I build."
          subtitle={<>Two types of projects&nbsp;: websites and web software.</>}
        />

        <div className={styles.grid}>
          {/* Websites */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Websites</h3>

            <p className={styles.cardText}>
              Brochure websites, landing pages, and custom projects designed to be clear, fast, and
              long-lasting.
            </p>

            <ul className={styles.list}>
              <li>Landing page or brochure site (1 to 5 pages)</li>
              <li>Evolving content (scoped updates)</li>
              <li>Online payments if needed</li>
              <li>SEO & visibility (optional)</li>
            </ul>

            <MiniCTA href={`/${locale}/sites-web`}>Learn more</MiniCTA>

            <div className={styles.cardFooter}>
              <span className={styles.price}>Starting at €400 <br/>and €0 / month</span>
            </div>
          </article>

          {/* Web software */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Web software</h3>

<p className={styles.cardText}>
  Web tools designed to meet a specific need, whether for internal use or for your customers.
</p>


            <ul className={styles.list}>
              <li>Back-office & admin interfaces</li>
              <li>Business tools and private dashboards</li>
              <li>MVPs to test an idea</li>
              <li>Fully custom projects</li>
            </ul>

            <MiniCTA href={`/${locale}/logiciels-web`}>Learn more</MiniCTA>

            <div className={styles.cardFooter}>
              <span className={styles.price}>Custom quote</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
