'use client'

import Image from 'next/image'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import DashList from '@/components/ui/DashList'
import styles from './Perso.module.css'

export default function AboutPersoFr() {
  return (
    <section className={styles.section} id="perso" aria-labelledby="perso-title">
      <div className={styles.inner}>
        <header className={styles.header} id="perso-title">
          <HomeSectionTitle title="Une touche personnelle" />
        </header>

        <div className={styles.prose}>
          <p>Je joue beaucoup à des jeux-vidéos PC sur mon temps libre.</p>

          <p>
            Je suis un farmer et fan de modes hardcore : <strong>Diablo&nbsp;II</strong>,{' '}
            <strong>WoW&nbsp;Classic</strong>.
            <br />
            J&apos;ai joué en équipe pendant longtemps, et même participé à des tournois et LAN :{' '}
            <strong>Dota&nbsp;2</strong>.
            <br />
            J&apos;aime bien les shooters simples : <strong>Counter-Strike</strong>.
            <br />
            J&apos;adore la créativité dans <strong>Minecraft</strong>.
            <br />
            Et je joue à <strong>Rust</strong>, qui propose un mix de tout ça.
          </p>

          <p>
            Parallèlement à ça, je pars assez souvent dans les <strong>Pyrénées</strong>, c&apos;est proche
            de Toulouse. Bivouacs ou nuits en cabane solo. Sac 10–12&nbsp;kg, itinéraires parfois sur 3
            jours, à compléter une large boucle dans la montagne.
          </p>

          <p>Quelques outils que j’utilise pour préparer mes sorties en montagne :</p>

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
              — carte des cabanes et refuges de berger
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
              — carte d’enneigement en temps réel
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
              — carte de tracés et itinéraires
            </li>
          </DashList>

          <Image
            src="/images/cabane.jpg"
            alt="Cabane de montagne dans les Pyrénées lors d’un bivouac solo"
            className={styles.image}
            width={1200}
            height={800}
            sizes="(max-width: 640px) 100vw, 760px"
          />

          <p className={styles.caption}>
            <em>Un réveil en cabane devant le Pic de Saint-Barthélemy — Pyrénées.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
