'use client'

import Image from 'next/image'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import DashList from '@/components/ui/DashList'
import styles from './Perso.module.css'

export default function AboutPersoEn() {
  return (
    <section className={styles.section} id="perso" aria-labelledby="perso-title">
      <div className={styles.inner}>
        <header className={styles.header} id="perso-title">
          <HomeSectionTitle title="A personal touch" />
        </header>

        <div className={styles.prose}>
          <p>I spend quite a lot of my free time playing PC video games.</p>

          <p>
            I enjoy farming and hardcore modes: <strong>Diablo&nbsp;II</strong>,{' '}
            <strong>WoW&nbsp;Classic</strong>.
            <br />
            I played in teams for a long time and even took part in tournaments and LANs:{' '}
            <strong>Dota&nbsp;2</strong>.
            <br />
            I like straightforward shooters: <strong>Counter-Strike</strong>.
            <br />
            I love the creativity in <strong>Minecraft</strong>.
            <br />
            And I play <strong>Rust</strong>, which combines a bit of all that.
          </p>

          <p>
            Alongside this, I often head into the <strong>Pyrenees</strong>, not far from Toulouse.
            Bivouacs or solo nights in mountain huts. A 10–12&nbsp;kg pack, sometimes 3-day routes,
            completing a large loop in the mountains.
          </p>

          <p>Some tools I use to prepare my mountain trips:</p>

          <DashList>
            <li>
              <a
                href="https://www.pyrenees-refuges.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.accentLink}
              >
                pyrenees-refuges.com
              </a>{' '}
              — map of shepherd huts and refuges
            </li>

            <li>
              <a
                href="https://snowmap.fr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.accentLink}
              >
                snowmap.fr
              </a>{' '}
              — real-time snow cover map
            </li>

            <li>
              <a
                href="https://www.visorando.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.accentLink}
              >
                visorando.com
              </a>{' '}
              — routes and hiking maps
            </li>
          </DashList>

          <Image
            src="/images/cabane.jpg"
            alt="Mountain hut in the Pyrenees during a solo bivouac"
            className={styles.image}
            width={1200}
            height={800}
            sizes="(max-width: 640px) 100vw, 760px"
          />

          <p className={styles.caption}>
            <em>Waking up in a mountain hut facing Pic de Saint-Barthélemy — Pyrenees.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
