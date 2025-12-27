'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Freelance.module.css'

export default function AboutFreelanceEn() {
  return (
    <section className={styles.section} id="freelance" aria-labelledby="freelance-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="freelance-title">
            <HomeSectionTitle title="Freelancing, SEO, and business model" />
          </div>
        </header>

        <div className={styles.prose}>
          <p>
            I became interested in <strong>freelancing</strong> because I knew someone who was making a decent
            living from <strong>local SEO</strong>, selling websites — simple or more complex ones. Two topics
            quickly became central: <strong>SEO</strong> and the <strong>business model</strong>.
          </p>

          <h3 className={styles.h3}>SEO</h3>

          <p>
            I ran a first <strong>local SEO</strong> experiment by trying to rank for a very competitive
            query: <strong>“website creation Toulouse”</strong>.
          </p>

          <p>
            It was intentionally a <strong>one-shot</strong>. No budget, no long-term content strategy, no
            link building — the goal wasn’t an <strong>immediate result</strong>, but to observe how the site
            behaved: <strong>indexing</strong>, <strong>impressions</strong>, <strong>local visibility</strong>.
          </p>

          <p>
            The site didn’t rank for the main query. However, it started showing up on <strong>long-tail
            queries</strong>, with a few impressions through Google and the Google Business Profile —{' '}
            <strong>without real traffic or conversions</strong>.
          </p>

          <p>
            This experiment mostly reminded me of a simple reality: on this kind of query,{' '}
            <strong>SEO is long-term work</strong>. Some players take several years to rank. For example,{' '}
            <strong>Paul Vengeons</strong> reportedly took about <strong>4 years</strong> to rank for “SEO
            Agency” by publishing content regularly.
          </p>

          <p>
            On my side, I quickly realized the issue wasn’t SEO itself. In a one-shot setup, on a site still
            being refined, what I was offering wasn’t yet <strong>clear enough</strong> for me to want to
            promote it seriously.
          </p>

          <p>
            Before chasing visibility, I first needed to <strong>clarify the fundamentals</strong>: what I
            offer, for whom, and within what scope. That work naturally led me to revisit the{' '}
            <strong>business model</strong>.
          </p>

          <h3 className={styles.h3}>The business model</h3>

          <p>
            Website creation today is largely dominated by <strong>CMS</strong> platforms. It’s the standard,
            and in many cases, it works very well.
          </p>

          <p>
            My own entry point has always been <strong>software development</strong>: web interfaces,{' '}
            <strong>application logic</strong>, and <strong>custom backends</strong> when needed. These are the
            same skills I use for <strong>web applications</strong>.
          </p>

          <p>
            Looking at the market more closely, I realized there’s also a <strong>small niche</strong> outside
            of CMS: simple website projects, often <strong>not meant to be frequently edited</strong>, where a{' '}
            <strong>custom-built</strong> approach can make sense.
          </p>

          <p>
            Typically: <strong>brochure websites</strong> or <strong>landing pages</strong>, with{' '}
            <strong>occasional</strong> updates — where a full CMS can become <strong>unnecessarily heavy</strong>.
          </p>

          <p>
            So I chose to offer <strong>both</strong> <strong>websites</strong> and <strong>web software</strong>,
            built on a <strong>shared technical foundation</strong> and tools I truly master.
          </p>

          <p>
            The <strong>bet</strong> isn’t about the tech — it’s about <strong>positioning</strong>: offering
            websites with tools usually used for <strong>applications</strong>, in a market largely{' '}
            <strong>dominated by CMS</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
