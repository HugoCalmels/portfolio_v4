// app/[locale]/(site)/a-propos/_sections/HowIWork/AboutHowIWork.en.tsx
'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './HowIWork.module.css'

export default function AboutHowIWorkEn() {
  return (
    <section
      className={styles.section}
      id="how-i-work"
      aria-labelledby="how-i-work-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="how-i-work-title">
            <HomeSectionTitle title="How I work" />
          </div>
        </header>

        <div className={styles.prose}>
          <h3 className={styles.h3}>Approach</h3>

          <p>I work in a direct and incremental way.</p>

          <p>
            Everything starts with a first conversation to understand the real
            need, the context, and to confirm the project makes sense for both
            sides.
          </p>

          <p>
            I do not start from a pre-made theme or an imposed platform. The
            starting point is always your activity, your content, and the
            expected usage — not a template to fill.
          </p>

          <p>
            You talk directly with the person who designs and builds the
            project, from start to finish.
          </p>

          <h3 className={styles.h3}>Process</h3>

          <p>
            Once the quote is approved, we work together on the structure of the
            website or application.
          </p>

          <p>
            This can be done via async messages, calls, or video sessions with
            screen sharing to draft simple wireframes and validate the structure
            of pages or features.
          </p>

          <p>
            Existing references are welcome: websites, specific elements,
            features, visual references. They are a discussion baseline, not a
            copy target.
          </p>

          <p>
            Development starts next. Depending on the project, I can move
            independently or ask for frequent feedback to stay aligned with your
            activity and communication style.
          </p>

          <p>
            Before delivery, everything is tested. A short period for minor
            adjustments is included after launch.
          </p>

          <h3 className={styles.h3}>Framework</h3>

          <p>Timelines depend on scope and on how fast we can iterate together.</p>

          <p>
            As an indication, a simple brochure website can be delivered in 5 to
            10 business days, spread across multiple weeks if needed.
          </p>

          <p>
            The pace adapts to your schedule: some projects move quickly, others
            take more time to validate content or decisions.
          </p>

          <p>
            Text copy and media preparation are ideally handled on the client
            side. When that is not possible, we plan it upfront to avoid
            timeline drift.
          </p>

          <p>
            My goal is to deliver something functional, clear, and maintainable
            — without unnecessary rush.
          </p>
        </div>
      </div>
    </section>
  )
}
