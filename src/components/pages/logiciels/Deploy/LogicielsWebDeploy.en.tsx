'use client'

import styles from './Deploy.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebDeployEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Deployment & hosting</h2>

        <p className={styles.text}>
          The idea is to keep something simple, reliable, and easy to understand.
        </p>

        <DashList>
          <li>
            web interface deployed on <strong>Vercel</strong> or <strong>Netlify</strong> (fast, well-suited
            for modern websites),
          </li>
          <li>
            backend (<strong>Spring Boot API</strong>) hosted on a <strong>VPS</strong> (for example OVH) with{' '}
            <strong>Nginx</strong>,
          </li>
          <li>optional setup of an update pipeline (simple CI/CD),</li>
          <li>backups and basic best practices.</li>
        </DashList>

        <p className={styles.textMuted}>
          The goal&nbsp;: a tool that runs smoothly over time, without unnecessarily complex infrastructure.
        </p>
      </div>
    </section>
  )
}
