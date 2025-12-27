'use client'

import styles from './Definition.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebDefinitionEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>You already use web software.</h2>

        <p className={styles.text}>
          Webmail, a client portal, a booking tool, or a tracking dashboard&nbsp;— all of these run
          directly in a browser.
        </p>

        <p className={styles.text}>
          In a professional context, it’s the same idea&nbsp;: an online tool designed to make a
          specific task easier.
        </p>

        <DashList>
          <li>manage data or files,</li>
          <li>administer a website or service,</li>
          <li>equip a team with simple screens,</li>
          <li>test an idea or lay the groundwork for an MVP.</li>
        </DashList>

        <p className={styles.note}>
          That’s what we call <strong>web software</strong>. My role is to build useful, clear versions
          tailored to your real needs — not oversized platforms.
        </p>
      </div>
    </section>
  )
}
