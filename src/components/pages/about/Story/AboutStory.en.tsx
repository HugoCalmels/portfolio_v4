'use client'

import styles from './Story.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

export default function AboutStoryEn() {
  return (
    <section className={styles.section} id="background">
      <div className={styles.inner}>
        <header className={styles.header}>
          <HomeSectionTitle title="Background" />

          <p className={styles.prose}>
            I’m a web developer, <strong>80% self-taught</strong>, with 10% formal training and
            10% mentorship.
          </p>

          <p className={styles.prose}>
            <strong>No degree.</strong>
            <br />
            No “traditional” professional experience (consulting firms, agencies, software vendors).
            <br />
            No internship or apprenticeship.
            <br />
            <strong>Just 4 to 5 years of real-world practice.</strong>
          </p>
        </header>

        <div className={styles.stack}>
          {/* Bootcamp */}
          <article className={styles.block}>
            <h3 className={styles.h3}>6 months — Bootcamp (intensive training)</h3>
            <p className={styles.badge}>Fullstack Developer — Ruby / React</p>

            <div className={styles.prose}>
              <p>
                Out of <strong>550 participants</strong>, only <strong>13</strong> obtained the certification.
              </p>

              <p>
                Among those 13, some had already been coding for <strong>3 to 5 years</strong>.
                <br />
                I was starting from scratch.
              </p>

              <p>
                It wasn’t easy.
                <br />
                But I was clearly <strong>the most persistent in the group</strong>.
                <br />
                Never give up.
              </p>

              <p>
                In the end, I had learned the basics, had a roadmap —
                but I knew I was still <strong>bad at it</strong>.
              </p>
            </div>
          </article>

          {/* Solo grind */}
          <article className={styles.block}>
            <h3 className={styles.h3}>2 to 3 years — Solo grind (self-directed learning)</h3>
            <p className={styles.badge}>Fullstack Developer — Ruby / React</p>

            <div className={styles.prose}>
              <p>
                This period was dedicated to <strong>consistent, autonomous practice</strong> in web development.
                <br />
                The goal was simple: code often, understand what I was doing, and improve through real projects.
              </p>

              <p>
                On the frontend side, I worked on React interfaces: components, state and data rendering,
                user interactions, and API communication with the backend.
              </p>

              <p>
                I also made significant progress in UI / UX.
                <br />
                My early interfaces were messy; over time, I learned how to structure pages,
                clarify user flows, and avoid overengineering.
              </p>

              <p>
                On the backend, I mainly worked with Ruby and PostgreSQL.
                <br />
                APIs, business logic, authentication, email delivery, data management,
                and code organization.
              </p>

              <p>
                This phase helped me truly understand <strong>how a web project works end-to-end</strong>:
                frontend, backend, and database.
              </p>

              <p>
                I also practiced algorithmic exercises.
                <br />
                Technically interesting, but with little real-world impact outside interview contexts.
              </p>

              <p>
                At that point, I had a <strong>solid enough technical level</strong> to work on real projects.
                <br />
                But the market was tough: Ruby + React in Toulouse, and very few junior opportunities in 2023.
              </p>

              <p>
                I realized I needed to learn a more in-demand backend language
                (Node, Java, or Python).
              </p>
            </div>
          </article>

          {/* Mentorship */}
          <article className={styles.block}>
            <h3 className={styles.h3}>1 year — Mentorship</h3>
            <p className={styles.badge}>Java / Angular</p>

            <div className={styles.prose}>
              <p>
                I chose <strong>Java</strong>.
                <br />
                Simply because I found a motivated mentor to guide me —
                an engineer recently hired at <strong>Rolex</strong>.
              </p>

              <p>
                The goal was straightforward:
                <strong>learn by building a complete, production-like project</strong>.
              </p>

              <p>
                I had never worked with Java or Angular before.
                <br />
                So I first had to <strong>learn the fundamentals on my own</strong> before starting the project.
              </p>

              <p>
                We built a match planning tool for Dota&nbsp;2 teams.
                <br />
                Advanced security: OpenID, JWT, refresh tokens, http-only cookies.
                <br />
                Sortable tables, team management, match scheduling, time zone handling,
                and even <strong>some SSR and WebSockets</strong>.
              </p>

              <p>
                Every line of code went through code reviews.
                <br />
                Until reaching a <strong>solid junior-level standard</strong>, ready for industry work.
              </p>
            </div>
          </article>

          {/* Freelance */}
          <article className={styles.block}>
            <h3 className={styles.h3}>Today — Freelance</h3>
            <p className={styles.badge}>Java / React</p>

            <div className={styles.prose}>
              <p>
                Today, it’s common for <strong>hundreds of developers</strong> to apply for a single job posting.
                For junior profiles, landing a first role at a consulting firm or software company
                has become extremely difficult.
              </p>

              <p>
                Many degree holders struggle to find a position.
                For self-taught developers, market access is even more limited.
              </p>

              <p>
                Freelancing became a realistic alternative:
                finding projects independently, working directly with end clients,
                and staying close to hands-on development.
              </p>

              <p>
                This is not a “freelance dream”.
                It’s a pragmatic choice — to move forward, gain experience,
                and see where this path leads.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
