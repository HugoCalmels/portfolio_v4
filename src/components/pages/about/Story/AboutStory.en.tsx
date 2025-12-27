'use client'

import DashList from '@/components/ui/DashList'
import styles from './Story.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

export default function AboutStoryEn() {
  return (
    <section className={styles.section} id="parcours">
      <div className={styles.inner}>
        <header className={styles.header}>
          <HomeSectionTitle title="Background" />

          <p className={styles.lead}>
            I’m a web developer, <strong>80% self-taught</strong>, 10% training, and 10% mentoring.
          </p>

          <p className={styles.meta}>
            <strong>No degree.</strong>
            <br />
            No “classic” professional experience (consulting firms, software companies, agencies).
            <br />
            No internship or apprenticeship.
            <br />
            <strong>Just 4 to 5 years of real practice.</strong>
          </p>
        </header>

        <div className={styles.stack}>
          {/* Bootcamp */}
          <article className={styles.block}>
            <h3 className={styles.h3}>6 months — Bootcamp (accelerated training)</h3>
            <p className={styles.badge}>Fullstack developer — Ruby / React</p>

            <div className={styles.prose}>
              <p>
                Out of <strong>550 participants</strong>, only <strong>13</strong> got certified.
              </p>

              <p>
                Among those 13, some had already been coding for <strong>3 to 5 years</strong>.
                <br />
                I was starting from zero.
              </p>

              <p>
                It wasn’t easy.
                <br />
                But I was clearly <strong>the most persistent in the group</strong>.
                <br />
                Never give up.
              </p>

              <p>
                In the end, I had learned the basics, I had a roadmap, but I knew that{' '}
                <strong>I wasn’t good yet</strong>.
              </p>
            </div>
          </article>

          {/* Solo grind */}
          {/* Solo grind */}
          <article className={styles.block}>
            <h3 className={styles.h3}>2 to 3 years — Solo grind (self-taught learning)</h3>
            <p className={styles.badge}>Fullstack developer — Ruby / React</p>

            <div className={styles.prose}>
              <p>
                This period was dedicated to a <strong>regular, self-driven practice</strong>&nbsp; of web
                development.
                <br />
                The goal was simple: code often, understand what I was doing, and improve through real
                projects.
              </p>

              <p>
                On the frontend side, I worked on React interfaces: components, UI data handling, user
                interactions, and API calls to the backend.
              </p>

              <p>
                I also improved a lot on UI / UX.
                <br />
                My first interfaces were messy, then I learned how to structure pages, make flows clearer,
                and avoid overdoing things.
              </p>

              <p>
                On the backend side, I mostly worked with Ruby and PostgreSQL.
                <br />
                Building APIs, business logic, authentication, sending emails, data management, and code
                structure.
              </p>

              <p>
                This phase helped me understand&nbsp; <strong>how a web project really works</strong>: what
                happens in the UI, on the server, and in the database.
              </p>

              <p>
                I also trained on algorithm exercises.
                <br />
                Technically interesting, but with no concrete impact in a context with no interviews.
              </p>

              <p>
                At that point, I had a <strong>strong enough technical level</strong>&nbsp; to work on real
                projects.
                <br />
                But the market was tough: Ruby + React in Toulouse, and very few opportunities for junior
                profiles in 2023.
              </p>

              <p>
                So I understood I needed to learn another backend language that was more in demand (Node,
                Java, or Python).
              </p>
            </div>
          </article>

          {/* Mentoring */}
          <article className={styles.block}>
            <h3 className={styles.h3}>1 year — Mentoring</h3>
            <p className={styles.badge}>Java / Angular</p>

            <div className={styles.prose}>
              <p>
                I chose <strong>Java</strong>.
                <br />
                Simply because I found a mentor who was motivated to help me — an engineer recently hired
                at <strong>Rolex</strong>.
              </p>

              <p>
                The goal was simple:&nbsp;
                <strong>learn by building a full project</strong>, like in a company setting.
              </p>

              <p>
                I had never touched Java or Angular before.
                <br />
                So I had to <strong>learn the basics on my own</strong> before starting the project.
              </p>

              <p>
                We built a match-planning tool for Dota&nbsp;2 teams.
                <br />
                Advanced security: OpenID, JWT, refresh tokens, http-only cookies.
                <br />
                Sortable tables, team management, match scheduling, time zone handling, and even{' '}
                <strong>a bit of SSR and WebSockets</strong>.
              </p>

              <p>
                Every line of code had to be validated through code reviews.
                <br />
                Until reaching a <strong>solid junior level</strong>, ready for the industry.
              </p>
            </div>
          </article>

          {/* Job market struggles */}
          <article className={styles.block}>
            <h3 className={styles.h3}>6 months of struggle</h3>
            <p className={styles.badge}>Java / Angular / React</p>

            <div className={styles.prose}>
              <p>
                Back to training on algorithm tests and quizzes.
                <br />
                Then <strong>back to the job market</strong>.
              </p>

              <DashList>
                <li>
                  <strong>100</strong> applications
                </li>
                <li>
                  <strong>0</strong> interviews
                </li>
                <li>
                  <strong>0</strong> technical tests
                </li>
                <li>
                  <strong>2 to 5%</strong> clicks to my website / portfolio
                </li>
              </DashList>

              <p>
                At that point, <strong>I was fed up</strong>.
              </p>
              <p>
                Break. Then <strong>reflection</strong>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
