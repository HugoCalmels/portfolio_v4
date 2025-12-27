'use client'

import ReactIcon from '@/components/ReactIcon'
import SpringIcon from '@/components/SpringIcon'
import styles from './Technos.module.css'

export default function LogicielsWebTechnosEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.blockTitle}>Technologies used</h2>

        <p className={styles.techIntro}>
          For <strong>web software</strong>, I clearly separate the <strong>frontend</strong>{' '}
          (interface) and the <strong>backend</strong> (API / data).
          <br />
          The same building blocks used in many professional web projects, designed to scale.
        </p>

        <div className={styles.techGrid}>
          {/* Frontend */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconReact} aria-hidden="true">
                <ReactIcon />
              </div>
              <h3 className={styles.techTitle}>Frontend (React)</h3>
            </div>

            <p className={styles.text}>
              Used to build the interface&nbsp;: screens, dashboards, forms, tables, filters…
              <br />
              I also use Next.js for SEO when relevant.
            </p>

            <ul className={styles.list}>
              <li>Smooth, responsive app-like interface.</li>
              <li>Modular components that are easy to evolve.</li>
              <li>Well-suited for tools with many interactions.</li>
              <li>Technologies widely used in professional environments.</li>
            </ul>

            <p className={styles.textMuted}>
              Goal&nbsp;: a fast, frictionless user interface.
            </p>
          </article>

          {/* Backend */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconSpring} aria-hidden="true">
                <SpringIcon />
              </div>
              <h3 className={styles.techTitle}>Backend (Spring Boot)</h3>
            </div>

            <p className={styles.text}>
              The backend handles the software’s logic&nbsp;: data, user accounts, business rules,
              emails, and secure access.
            </p>

            <ul className={styles.list}>
              <li>APIs to read and write data.</li>
              <li>User accounts, roles, and permissions management.</li>
              <li>Server-side business logic.</li>
              <li>Solid foundation for an internal tool or an MVP.</li>
            </ul>

            <p className={styles.textMuted}>
              I prefer working with technologies I truly master, rather than promising a “trendy”
              stack without real experience.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
