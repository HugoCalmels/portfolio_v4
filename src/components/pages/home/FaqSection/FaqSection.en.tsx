'use client'

import {useMemo, useState, useCallback} from 'react'
import Link from 'next/link'
import styles from './FaqSection.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

type FaqItem = {
  q: string
  a: React.ReactNode
}

const ChevronDown = ({open}: {open: boolean}) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
  >
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default function FaqSectionEn() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        q: 'Redesign: can you start from an existing website or a mockup?',
        a: (
          <>
            Yes. I can rebuild an existing site (WordPress, Shopify, Wix…) or start from a mockup
            (Figma/PSD).
            <br />
            In practice: we keep what’s useful (structure, content) and rebuild a cleaner, faster, clearer
            version.
          </>
        ),
      },
      {
        q: 'What timeline should I expect for a brochure website?',
        a: (
          <>
            Timelines depend on the amount of content and how fast feedback comes in, but typically:
            <ul className={styles.ul}>
              <li>
                <strong>One-page</strong>: about <strong>2 to 5 business days</strong>
              </li>
              <li>
                <strong>3–5 page site</strong>: about <strong>5 to 10 business days</strong>
              </li>
            </ul>
            When the copy and visuals are already available, a first version can go live very quickly, and
            then be refined afterwards if needed.
          </>
        ),
      },
      {
        q: 'What do we need to get started?',
        a: (
          <>
            Not much. Your activity, the goal of the site, and 2–3 examples of websites you like (even if
            found randomly).
            <br />
            A message like&nbsp;:
            <em>
              {' '}
              “I like Uber’s style”, “I want something simple”, “my main goal is to be contacted”
            </em>
            &nbsp;is enough.
            <br />
            Send what you have (links, notes, rough ideas), and we’ll move forward from there.
          </>
        ),
      },
      {
        q: 'Can I edit the website myself?',
        a: (
          <>
            Yes, as an option. Some key blocks can be made editable (text, images, contact details, opening
            hours…) through a small dedicated interface. Otherwise, changes can be handled on request when
            needed.
            <br />
            <span className={styles.inlineLinks}>
              See:{' '}
              <Link href="/en/brochure-websites" className={styles.link}>
                brochure websites
              </Link>
              .
            </span>
          </>
        ),
      },
      {
        q: 'Domain, hosting, ownership: how does it work?',
        a: (
          <>
            <strong>You own the website</strong> (content + code + access).
            <br />
            <strong>The domain name</strong> is on you (yearly subscription), but I can handle it for you
            if you prefer.
            <br />
            <strong>Hosting</strong> is included / free.
          </>
        ),
      },
    ],
    []
  )

  // 👇 Nothing open by default
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }, [])

  return (
    <section className={styles.faq}>
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="FAQ"
          title="Frequently asked questions"
          subtitle="A few quick answers to clarify the essentials before booking a call."
        />

        <div className={styles.list}>
          {items.map((item, i) => {
            const open = openIndex === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`

            return (
              <div key={item.q} className={styles.card}>
                <button
                  id={btnId}
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  type="button"
                >
                  <span className={styles.qText}>{item.q}</span>
                  <ChevronDown open={open} />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.answerWrap} ${open ? styles.open : styles.closed}`}
                >
                  <div className={styles.answer}>{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
