'use client'

import styles from './Story.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

export default function AboutStoryEn() {
  return (
    <section className={styles.section} id="parcours">
      <div className={styles.inner}>
        <header className={styles.header}>
          <HomeSectionTitle title="Background" />

          <p className={styles.prose}>
            I am a web developer, <strong>80&nbsp;% self-taught</strong>, 10&nbsp;% formal training and
            10&nbsp;% mentorship.
          </p>

          <p className={styles.prose}>
            <strong>No degree.</strong>
            <br />
            No “traditional” professional experience (consulting firms, software
            publishers, agencies).
            <br />
            No internship or apprenticeship.
            <br />
            <strong>Just 4 to 5 years of real, hands-on practice.</strong>
          </p>
        </header>

        <div className={styles.stack}>
          {/* Bootcamp */}
          <article className={styles.block}>
            <h3 className={styles.h3}>6 months — Bootcamp (intensive training)</h3>
            <p className={styles.badge}>Fullstack developer — Ruby / React</p>

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
                It was not easy.
                <br />
                But I was clearly <strong>the most persistent in the group</strong>.
                <br />
                Never give up.
              </p>

              <p>
                In the end, I had learned the basics, I had a roadmap,
                but I knew that <strong>I was bad</strong>.
              </p>
            </div>
          </article>

          {/* Solo grind */}
          <article className={styles.block}>
            <h3 className={styles.h3}>2 to 3 years — Solo grind (self-taught learning)</h3>
            <p className={styles.badge}>Fullstack developer — Ruby / React</p>

            <div className={styles.prose}>
              <p>
                This period was dedicated to <strong>regular, independent practice</strong> of web development.
                <br />
                The goal was simple&nbsp;: code often, understand what I was doing,
                and make progress through concrete projects.
              </p>

              <p>
                On the frontend side, I worked on React interfaces&nbsp;:
                components, data handling on the UI,
                user interactions, and communication with the backend via APIs.
              </p>

              <p>
                I also made significant progress in UI / UX.
                <br />
                My early interfaces were messy;
                over time, I learned how to structure pages,
                make user flows clearer, and avoid overdoing things.
              </p>

              <p>
                On the backend side, I mainly worked with Ruby and PostgreSQL.
                <br />
                Building APIs, business logic, authentication,
                email sending, data management, and code structure.
              </p>

              <p>
                This phase allowed me to understand{' '}
                <strong>how a web project actually works</strong>&nbsp;:
                what happens on the UI, on the server,
                and in the database.
              </p>

              <p>
                I also trained on algorithmic exercises.
                <br />
                Technically interesting, but with no real impact
                in a context without technical interviews.
              </p>

              <p>
                At that point, I had a <strong>sufficient technical level</strong>
                to work on real projects.
                <br />
                But the market was tough&nbsp;: Ruby + React in Toulouse,
                and very few opportunities for junior profiles in 2023.
              </p>

              <p>
                I therefore understood that I needed to learn another backend language
                that was more in demand (Node, Java or Python).
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
                Simply because I found a motivated mentor willing to help me —
                an engineer recently hired at <strong>Rolex</strong>.
              </p>

              <p>
                The goal was simple&nbsp;:
                <strong>to train by building a complete project</strong>,
                as it would be done in a company.
              </p>

              <p>
                I had never worked with either Java or Angular.
                <br />
                I therefore had to <strong>learn the basics on my own</strong>
                before starting the project.
              </p>

              <p>
                We developed a match scheduling tool for Dota&nbsp;2 teams.
                <br />
                Advanced security&nbsp;: OpenID, JWT, refresh tokens,
                http-only cookies.
                <br />
                Sortable tables, team management, match scheduling,
                time zone handling, and even{' '}
                <strong>a bit of SSR and WebSockets</strong>.
              </p>

              <p>
                Every line of code had to be validated through code reviews,
                <br />
                until reaching a <strong>solid junior level</strong>,
                ready for the industry.
              </p>
            </div>
          </article>

          {/* Today */}
          <article className={styles.block}>
            <h3 className={styles.h3}>Today — Freelance</h3>
            <p className={styles.badge}>Java / React</p>

            <div className={styles.prose}>
              <p>
                In France, it is common to see <strong>300 developers</strong>
                applying for the same position
                (some job postings in the US even reach <strong>1,000 candidates</strong>).
                For a junior today, it is extremely hard to land a first job
                at a consulting firm or a software publisher,
                <strong>even at minimum wage</strong>.
              </p>

              <p>
                Many <strong>master’s-level</strong> profiles find nothing.
                For a self-taught developer like me, it is even harder.
              </p>

              <p>
                I did know, however, that there was work available in{' '}
                <strong>freelance</strong> for a web developer — fullstack,
                frontend or backend — as long as you can land your first contracts
                on your own and convince your first end clients on your own.
              </p>

              <p>
                This is clearly not the “freelance dream”.
                It is rather a choice that imposed itself&nbsp;:
                to make a living,
                and to stay close to the industry.
              </p>

              <p>
                In short. I keep moving forward like this, and I see where it leads.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
