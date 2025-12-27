'use client'

import styles from './Features.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebFeaturesEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Features already implemented</h2>

        <p className={styles.text}>
          A selection of building blocks I’ve already implemented on real projects, which I can
          reuse or adapt depending on your needs.
        </p>

        <DashList>
          <li>
            authentication via external APIs (e.g. Steam OpenID, adaptable to Google OAuth, etc.),
          </li>
          <li>team management, invitations, and simple roles,</li>
          <li>server-side image upload and replacement,</li>
          <li>tables with sorting, filters, and pagination,</li>
          <li>booking or appointment scheduling systems,</li>
          <li>dated event management (UTC, statuses, validation),</li>
          <li>private user areas and restricted pages,</li>
          <li>full CRUD: forms → database → interface,</li>
          <li>simple dashboards with basic stats or indicators.</li>
        </DashList>

        <p className={styles.textMuted}>
          This isn’t a closed list&nbsp;: if your needs are close to one of these features, it’s
          often faster to adapt it rather than start from scratch.
        </p>
      </div>
    </section>
  )
}
