'use client'

import styles from './Skills.module.css'

export default function LogicielsWebSkillsEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>My skills</h2>

        <div className={styles.grid}>
          <article className={styles.block}>
            <h3 className={styles.blockTitle}>Functional side</h3>
            <ul className={styles.list}>
              <li>forms and simple account management,</li>
              <li>tables with search, sorting, and filters,</li>
              <li>content creation / editing via a web interface,</li>
              <li>restricted access after login (private areas, dashboards),</li>
              <li>date, schedule, status, or booking management,</li>
              <li>simple workflows&nbsp;: request → validation → email notification.</li>
            </ul>
          </article>

          <article className={styles.block}>
            <h3 className={styles.blockTitle}>Technical side</h3>
            <ul className={styles.list}>
              <li>REST APIs to read and write data,</li>
              <li>authentication with tokens (JWT), sessions, and simple roles,</li>
              <li>databases&nbsp;: creation, updates, and targeted queries,</li>
              <li>automatic email sending (forms, confirmations),</li>
              <li>image management (upload, replacement, deletion),</li>
              <li>integration of external APIs when needed (auth, data, etc.).</li>
            </ul>
            <p className={styles.textMuted}>
              The idea is to rely on well-mastered building blocks that can evolve if the tool is
              actually used.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
