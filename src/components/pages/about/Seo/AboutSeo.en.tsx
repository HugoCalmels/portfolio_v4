'use client'

import Image from 'next/image'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Seo.module.css'

export default function AboutSeoEn() {
  function formatDurationEn(ms: number) {
    const totalMinutes = Math.floor(ms / (1000 * 60))

    const days = Math.floor(totalMinutes / (60 * 24))
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
    const minutes = totalMinutes % 60

    return `${days} day${days !== 1 ? 's' : ''} ${hours} hour${
      hours !== 1 ? 's' : ''
    } and ${minutes} minute${minutes !== 1 ? 's' : ''}`
  }

  const deployedAt = new Date(2025, 11, 30, 0, 0, 0).getTime()
  const durationMs = Date.now() - deployedAt
  const onlineSince = formatDurationEn(durationMs)

  return (
    <section className={styles.section} id="seo" aria-labelledby="seo-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="seo-title">
            <HomeSectionTitle title="SEO, visibility and positioning" />
          </div>
        </header>

        <div className={styles.prose}>
          <p>
            I started working on SEO in early summer 2025. A first version of the
            site, more oriented toward <strong>local SEO</strong>, went live at
            the end of the summer.
          </p>

          <p>
            Visibility improved, but the site did not feel right to me&nbsp;:
            not clear enough, not aligned enough with my actual activity.
          </p>

          <p>
            The site mixed two incompatible approaches&nbsp;:
            on one side, a <strong>global</strong> positioning&nbsp;
            (responding to tenders, convincing everywhere),
            on the other, <strong>local SEO</strong>&nbsp;
            with “Toulouse” everywhere — even in the URLs.
            The result was a blurred message.
          </p>

          <p>
            I therefore chose to stop there and start over&nbsp;: simplify,
            clarify, and refocus the site on what I actually do.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/stats.png"
              alt="Website visibility growth in Google Search Console"
              className={styles.image}
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, 760px"
            />
            <figcaption className={styles.figcaption}>
              Google Search Console screenshot — SEO test period (6 months).
            </figcaption>
          </figure>

          <p>
            The curve simply reflects that&nbsp;: a one-shot test, followed by a
            stop, with no iterations or continuous publishing.
          </p>

          <p>
            The current site has been online for <strong>{onlineSince}</strong>.
          </p>

          <p>
            For now, I am simply observing which queries it appears on
            naturally. If directions emerge over time, they will be more
            <strong> global and niche</strong>, for example around{' '}
            <em>custom-built websites</em>.
          </p>

          <p>
            The takeaway — especially when starting from scratch&nbsp;:
            it is crucial to clearly identify who you want to sell to
            before building a site around that.
          </p>

          <p>
            As a point of reference, Paul Vengeons took <strong>4 years</strong>{' '}
            to position himself on <strong>“SEO agency”</strong>, and at
            Superprof, SEO is handled by a team of around{' '}
            <strong>30 people</strong>.
            Ranking on competitive SEO queries is therefore a long,
            demanding process, and rarely an immediate one.
          </p>
        </div>
      </div>
    </section>
  )
}
