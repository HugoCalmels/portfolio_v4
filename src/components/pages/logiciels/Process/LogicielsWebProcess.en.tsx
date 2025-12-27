'use client'

import DashList from '@/components/ui/DashList'
import styles from './Process.module.css'

export default function LogicielsWebProcessEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Process & pricing</h2>

        <p className={styles.text}>
          We always start with a simple version of the software to avoid oversized projects.
        </p>

        <DashList>
          <li>we define the key screens together,</li>
          <li>we clarify the main flow (who does what, and in what order),</li>
          <li>we limit the scope to what is truly useful at the beginning.</li>
        </DashList>

        <p className={styles.text}>
          Then I work in short cycles (a few days or a week), with regular check-ins to make sure
          what’s delivered matches your real needs.
        </p>

        <div className={styles.methodsGrid}>
          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>Classic model</h3>
            <ul className={styles.list}>
              <li>quote based on a scope defined together,</li>
              <li>40% upfront,</li>
              <li>the remainder paid upon delivery of the planned milestone.</li>
            </ul>
            <p className={styles.textMuted}>
              Well-suited when the requirements are clear and well-defined.
            </p>
          </article>

          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>Short milestone-based work</h3>
            <ul className={styles.list}>
              <li>3 to 7-day cycles, with deliverables at each milestone,</li>
              <li>payment at the end of each validated milestone,</li>
              <li>the project can be stopped or adjusted at any time.</li>
            </ul>
            <p className={styles.textMuted}>
              Ideal for software projects where you need to build, test, and adapt to real usage.
            </p>
          </article>
        </div>

        <div className={styles.pricingBlock}>
          <h3 className={styles.blockTitle}>Pricing</h3>
          <DashList>
            <li>€125 / day for software projects,</li>
            <li>estimated workload before each step,</li>
            <li>option to start small to limit risks.</li>
          </DashList>
        </div>
      </div>
    </section>
  )
}
