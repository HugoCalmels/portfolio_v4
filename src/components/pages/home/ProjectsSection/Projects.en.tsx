'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Projects.module.css'

export default function ProjectsEn() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Recent projects"
          title="A few examples of my work."
          subtitle={
            <>
              Some types of projects I can build&nbsp;: brochure websites, e-commerce, and custom web
              tools.
            </>
          }
        />

        <div className={styles.grid}>
          {/* Card 1 */}
          <article className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Brochure website</h3>
              <p className={styles.cardMeta}>Showcase for a small local business.</p>
              <p className={styles.cardText}>
                Clear homepage, service presentation, practical information, and a contact form.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className={`${styles.card} ${styles.cardRight}`}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>E-commerce website</h3>
              <p className={styles.cardMeta}>Online shop with secure payments.</p>
              <p className={styles.cardText}>
                Simple catalog, cart, Stripe payments, and an interface to manage products.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Tool / dashboard</h3>
              <p className={styles.cardMeta}>Internal tracking adapted to the client’s business.</p>
              <p className={styles.cardText}>
                Web interface to centralize data, track bookings, or automate certain tasks.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
