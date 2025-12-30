'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './BusinessModel.module.css'

export default function AboutBusinessModelEn() {
  return (
    <section
      className={styles.section}
      id="business-model"
      aria-labelledby="business-model-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="business-model-title">
            <HomeSectionTitle title="Business model" />
          </div>
        </header>

        <div className={styles.prose}>
          {/* ===================== */}
          {/* Websites */}
          {/* ===================== */}
          <h3 className={styles.h3}>Websites</h3>

          <p>
            Today, building a website has become commonplace.
            CMSs, no-code tools, templates&nbsp;— there is a huge supply,
            a lot of competition, and very low barriers to entry.
          </p>

          <p>
            For typical websites (brochure sites, landing pages, small e-commerce),
            we are probably around <strong>70–80&nbsp;% CMS</strong>,&nbsp;
            <strong>10–15&nbsp;% no-code</strong>,
            and <strong>5–15&nbsp;% custom code</strong>.
            These are rough estimates, not official figures,
            but they reflect the reality on the ground fairly well.
          </p>

          <div
            className={styles.matrixA}
            role="table"
            aria-label="Comparison between code, CMS and no-code"
          >
            {/* CODE */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>Code</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>0&nbsp;€ / month possible (static site)</li>
                    <li>The fastest / most performant option</li>
                    <li>Full technical freedom and creativity</li>
                    <li>Total control over site behavior</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Project handover more demanding (React required)</li>
                    <li>Development time can be longer than with a CMS</li>
                    <li>
                      No built-in editing interface
                      (custom admin possible)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CMS */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>CMS</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>Ready-made templates (design + structure)</li>
                    <li>Built-in content editing interface</li>
                    <li>Plugins to move fast</li>
                    <li>Easy to find a provider</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Plugins / themes often paid</li>
                    <li>Monthly costs and maintenance</li>
                    <li>Performance depends on the stack</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NO-CODE */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>No-code</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>Very fast for prototyping</li>
                    <li>Accessible without a technical background</li>
                    <li>Fine for simple MVPs</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Limits appear as soon as logic becomes specific</li>
                    <li>Strong dependency on the platform</li>
                    <li>Hard transition to clean custom code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p>
            WordPress market share increased steadily for more than ten years,
            going from around 13&nbsp;% in 2011 to over 43&nbsp;% in 2022.
            Since 2022–2023, this growth has clearly slowed down,
            at the same time AI became a common tool in both no-code
            platforms and custom development.
          </p>

          <p>
            AI has not replaced CMSs,
            but it has shifted the balance&nbsp;:
            it allows no-code tools to move faster,
            and developers to produce code much more quickly than before.
            Approaches that used to be marginal are now simply more viable.
          </p>

          <p>
            In the end, the tool matters less than it seems.
            If you really want a good website,
            you either need to invest a lot of time yourself,
            or work with a good developer.
          </p>

          {/* ===================== */}
          {/* Web software */}
          {/* ===================== */}
          <h3 className={styles.h3}>Web software</h3>

          <p>
            The second part of my activity focuses on{' '}
            <strong>web software</strong>&nbsp;:
            business applications, internal tools, SaaS, MVPs.
          </p>

          <p>
            From a technical standpoint, I can design and build this kind of project.
            However, it is an axis I am developing more slowly on the business side.
            Building software is not just about writing code.
          </p>

          <p>
            Software often involves&nbsp;:
            continuous development, user feedback,
            maintenance, support, ongoing improvements,
            and sometimes user acquisition.
            It is a heavy workload to carry alone.
          </p>

          <p>
            Today, I mainly focus on websites
            in order to stabilize this activity.
            Software remains an axis I want to develop,
            ideally on well-defined projects,
            with concrete and clearly identified needs.
          </p>

          <p>
            In the longer term, I am also open to working as part of a team&nbsp;—
            startup, agency, software publisher or company.
            The format matters less than the technical context
            and the quality of the projects.
          </p>
        </div>
      </div>
    </section>
  )
}
