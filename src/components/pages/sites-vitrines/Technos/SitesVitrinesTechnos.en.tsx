'use client'

import ReactIcon from '@/components/ReactIcon'
import SpringIcon from '@/components/SpringIcon'
import styles from './Technos.module.css'
import SectionSubtitle from '@/components/ui/SectionSubtitle'

export default function SitesVitrinesTechnosEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionSubtitle>Technologies used</SectionSubtitle>

        <p className={styles.techIntro}>
          No WordPress-style CMS. No generic themes or plugins.
          <br />
          The website is <strong>fully custom-coded</strong>, built specifically for your needs.
          <br />
          Far less exposed to automated attacks and common security issues.
        </p>

        <div className={styles.techGrid}>
          {/* React */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconReact} aria-hidden="true">
                <ReactIcon />
              </div>
              <h3 className={styles.techTitle}>React / Next.js (frontend)</h3>
            </div>

            <p className={styles.text}>
              React and Next.js allow me to build your website’s interface: pages, sections, forms, and
              more.
            </p>

            <ul className={styles.list}>
              <li>Smooth and fast interface on mobile and desktop.</li>
              <li>No dependency on third-party plugins or themes.</li>
              <li>Clear structure, easy to evolve over time.</li>
              <li>Technology widely used in professional environments.</li>
            </ul>

            <p className={styles.textMuted}>
              Smooth navigation&nbsp;: the loading spinner barely has time to show up.
            </p>
          </article>

          {/* Spring Boot */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconSpring} aria-hidden="true">
                <SpringIcon />
              </div>
              <h3 className={styles.techTitle}>Spring Boot (backend)</h3>
            </div>

            <p className={styles.text}>
              Spring Boot is a Java framework used when a real backend is needed: APIs, data,
              admin interfaces, and business logic.
            </p>

            <ul className={styles.list}>
              <li>Stable backend to manage website data.</li>
              <li>Reliable API for editable websites.</li>
              <li>Technology used at scale across the industry.</li>
              <li>Designed to last over time.</li>
            </ul>

            <p className={styles.textMuted}>
              Java is even used in space missions&nbsp;— on the server side, it’s rock solid.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
