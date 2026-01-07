'use client'

import {useState} from 'react'
import styles from './ExpandableSections.module.css'
import DashList from '@/components/ui/DashList'

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

export default function ExpandableSectionsEn() {
  const sections: Section[] = [
    {
      id: 'hosting',
      title: 'Hosting & costs',
      content: (
        <>
          <p className={styles.subText}>
            Websites are hosted on modern and reliable infrastructure.
            <br />
            Basic hosting is included with no monthly fee.
          </p>

          <ul className={styles.subList}>
            <li>
              <strong>Hosting included</strong> (Netlify).
            </li>
            <li>
              <strong>Monthly cost: €0</strong> for hosting the website.
            </li>
            <li>
              <strong>Domain in the client’s name</strong>: I can help with purchase / setup if you prefer.
            </li>
          </ul>

          <p className={styles.note}>
            You only pay for your domain name (about €10 to €20 / year). No subscription is required for the
            website.
          </p>
        </>
      ),
    },

  {
  id: 'content',
  title: 'Add-on — Content Management',
  content: (
    <>
      <p className={styles.subText}>
        By default, the website does not include an editing interface. Content updates can be
        handled on request, or through an optional self-managed editing interface.
      </p>

      <h4 className={styles.subTitle}>Self-managed editing (optional)</h4>

      <p className={styles.subText}>
        Setup of a secure administration interface, integrated into the website, with a clearly
        defined scope agreed in advance.
      </p>

      <ul className={styles.subList}>
        <li>
          Up to <strong>10 editable elements</strong> (text, images, prices, opening hours…).
        </li>
        <li>Secure access.</li>
        <li>Hosting and maintenance included.</li>
      </ul>

      <p className={styles.subPrice}>
        <strong>Starting from €350</strong>
        <br />
        <strong>+ €10/month</strong>
      </p>

      <p className={styles.subText}>
        Depending on the project, alternative content management approaches may be considered
        (external solutions, lightweight headless setups, or content management without a dedicated
        admin interface). The final approach is chosen on a case-by-case basis, according to the
        actual needs of the project.
      </p>

      <p className={styles.note}>
        In practice, most clients prefer to delegate content updates in order to avoid any technical
        handling:
        <strong> €15/hour</strong> or <strong>€100/day</strong>.
      </p>
    </>
  ),
},


    {
      id: 'marketing',
      title: 'Add-on — SEO & visibility',
      content: (
        <>
          <p className={styles.subText}>
            I’m less experienced in SEO than in website design and development.
            <br />
            So the approach is intentionally simple, with no long-term commitment, and a budget equivalent
            to <strong>one day of work per month</strong>.
          </p>

          <ul className={styles.subList}>
            <li>Simple keyword research with realistic priorities.</li>
            <li>Optimization of existing pages (titles, content, lightweight structure).</li>
            <li>Occasional creation or enrichment of targeted content.</li>
            <li>Tracking via Search&nbsp;Console and ongoing adjustments.</li>
            <li>
              Occasional activation of other levers when relevant (local SEO, Google Ads tests, simple social
              media, light link building depending on budget).
            </li>
          </ul>

          <p className={styles.note}>
            The priority is first a clear, fast, well-structured website. Visibility work comes next, built
            on a solid foundation.
          </p>

          <p className={styles.price}>
            <strong>€100/month</strong> — about 1 day of work
            <br />
            <span className={styles.note}>Monthly recap provided (actions taken + next steps).</span>
          </p>
        </>
      ),
    },

    {
      id: 'ecommerce',
      title: 'Add-on — E-commerce',
      content: (
        <>
          <p className={styles.subText}>
            Two levels depending on your needs: simple checkout, or a shop with a cart.
          </p>

          <div className={styles.subSection}>
            <h4 className={styles.subTitle}>Checkout (1–5 offers)</h4>
            <ul className={styles.subList}>
              <li>Stripe and/or PayPal payments.</li>
              <li>Dedicated page or secure redirect.</li>
              <li>Confirmation email.</li>
            </ul>
            <p className={styles.subPrice}>
              <strong>From €400</strong>
              <br />
              <span>+ €10 / month</span>
            </p>
          </div>

          <div className={styles.subSection}>
            <h4 className={styles.subTitle}>Shop (catalog + cart)</h4>
            <ul className={styles.subList}>
              <li>Catalog (about 3 to 20 products).</li>
              <li>Cart + Stripe/PayPal payments.</li>
              <li>Order confirmation email.</li>
              <li>Order management via Stripe / PayPal.</li>
            </ul>

            <p className={styles.note}>
              Excludes complex cases (food, advanced taxation, specific logistics).
            </p>

            <p className={styles.subPrice}>
              <strong>From €900</strong>
              <br />
              <span>+ €20 / month</span>
            </p>
          </div>

          <p className={styles.note}>
            Additional features available on request (stock management, business rules, options, filters,
            variations, etc.).
          </p>
        </>
      ),
    },

    {
      id: 'services',
      title: 'À la carte services',
      content: (
        <>
          <p className={styles.subText}>
            One-off services billed per task. No subscription, no commitment.
          </p>

          <DashList>
            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Google Search Console</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Add the site, verify the domain, submit the sitemap, and hand over access.
                  </span>
                </div>
                <span className={styles.servicePrice}>€30</span>
              </div>

              <p className={styles.serviceMuted}>
                Out of scope: complex DNS issues, ongoing tracking, or SEO optimizations.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Google Business Profile</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Create or optimize the listing (address, hours, link to the website).
                  </span>
                </div>
                <span className={styles.servicePrice}>€45</span>
              </div>

              <p className={styles.serviceMuted}>
                Out of scope: review strategy, ongoing management, regular posts.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Professional email (website form)</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Use <strong className={styles.inlineStrong}>contact@yourdomain</strong> as the sender +
                    minimal SMTP/DNS setup.
                  </span>
                </div>
                <span className={styles.servicePrice}>€45</span>
              </div>

              <p className={styles.serviceMuted}>
                Out of scope: mailbox management, complex forwarding, long-term support.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Simple booking tool</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Cal.com or Calendly integration (dedicated page or direct link).
                  </span>
                </div>
                <span className={styles.servicePrice}>€45</span>
              </div>

              <p className={styles.serviceMuted}>Out of scope: complex rules, integrated payments.</p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Google Maps embed</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Responsive embed + link to directions.
                  </span>
                </div>
                <span className={styles.servicePrice}>€30</span>
              </div>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Bilingual website (FR / EN)</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Set up the multilingual structure (routes, language switcher) and integrate translated
                    content across the whole site.
                  </span>
                </div>
                <span className={styles.servicePrice}>€120</span>
              </div>

              <p className={styles.serviceMuted}>
                Translations provided or validated by the client. Other languages on request.
              </p>
            </li>
          </DashList>

          <p className={styles.noteTight}>
            If a service goes beyond the expected scope: custom quote or time spent (€15/hour).
          </p>
        </>
      ),
    },
{
  id: 'good-to-know',
  title: 'Good to know',
  content: (
    <>
      <p className={styles.subText}>
        The stated timelines apply when the content is mostly ready
        (clear activity, defined offer, main messages already in mind).
      </p>

      <p className={styles.subText}>
        <strong>I can help with the content</strong>,
        but only to a reasonable extent.
        If the project requires deeper thinking
        (positioning, messaging, structure),
        it falls outside the initial scope
        and will require an adjustment to the timeline and budget.
      </p>
    </>
  ),
}




  ]

  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sections.map(section => {
          const isOpen = openId === section.id

          return (
            <div key={section.id} className={styles.item}>
              <button
                type="button"
                className={styles.header}
                onClick={() => setOpenId(isOpen ? null : section.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.title}>{section.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className={styles.panel}>
                  <div className={styles.content}>{section.content}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
