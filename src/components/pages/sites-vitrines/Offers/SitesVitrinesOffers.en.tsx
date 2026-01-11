'use client'

import SectionSubtitle from '@/components/ui/SectionSubtitle'
import styles from './Offers.module.css'

export default function SitesVitrinesOffersEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionSubtitle>Two formats, one solid foundation.</SectionSubtitle>

        <div className={styles.offersGrid}>
          {/* Landing page */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Landing page</h3>

            <p className={styles.cardText}>
              A single page to present your business and make it easy to get in touch.
            </p>

<ul className={`${styles.list} ${styles.commonList}`}>
  <li>Custom & responsive design (mobile&nbsp;/&nbsp;desktop).</li>
  <li>Minimal visual identity (favicon, logo, color palette).</li>
  <li>Secure website (HTTPS).</li>
  <li>Contact form.</li>
  <li>Legal notices.</li>
  <li>Deployment & go-live.</li>
  <li>Basic SEO: meta tags and Google indexing.</li>
  <li>Google Search Console setup.</li>
  <li>Google Maps integration.</li>
  <li>15 days of small changes included.</li>
</ul>


            <div className={styles.divider} aria-hidden="true" />

            <ul className={`${styles.list} ${styles.extrasList}`}>
              <li>1 page (defined sections).</li>
            </ul>

            <p className={styles.priceLine}>
              <strong>From €200</strong>
            </p>

            <p className={styles.cardNote}>
              Limited SEO potential: a single page → one main keyword, limited room to grow.
            </p>
          </article>

          {/* Brochure website */}
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Brochure website</h3>

            <p className={styles.cardText}>
              A structured website to present your services and organize your content.
            </p>

<ul className={`${styles.list} ${styles.commonList}`}>
  <li>Custom & responsive design (mobile&nbsp;/&nbsp;desktop).</li>
  <li>Minimal visual identity (favicon, logo, color palette).</li>
  <li>Secure website (HTTPS).</li>
  <li>Contact form.</li>
  <li>Legal notices.</li>
  <li>Deployment & go-live.</li>
  <li>Basic SEO: meta tags and Google indexing.</li>
  <li>Google Search Console setup.</li>
  <li>Google Maps integration.</li>
  <li>30 days of small changes included.</li>
</ul>

            <div className={styles.divider} aria-hidden="true" />

            <ul className={`${styles.list} ${styles.extrasList}`}>
              <li>Up to 5 pages included (extra pages possible).</li>
              <li>Site structure & navigation.</li>

            </ul>

            <p className={styles.priceLine}>
              <strong>From €400</strong>
            </p>

            <p className={styles.cardNote}>
              Stronger SEO foundations: multiple pages → ability to target several keywords.
            </p>
          </article>
        </div>

        <p className={styles.pricingNote}>
          Payment&nbsp;: <strong>50% upfront</strong> to start, then{' '}
          <strong>50% on delivery</strong>.
        </p>
      </div>
    </section>
  )
}
