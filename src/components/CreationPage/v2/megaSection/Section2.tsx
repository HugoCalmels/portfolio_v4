'use client'

import styles from './Sections.module.css'
import FadeIn from '@/components/FadeIn'
import { useParams } from 'next/navigation'

type RouteParams = {
  locale?: string | string[]
}

export default function Section2() {
  const params = useParams<RouteParams>()
  const rawLocale = params?.locale
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale ?? 'fr'

  return (
    <section className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>Pourquoi pas WordPress</h2>
      </FadeIn>

      <div className={styles.paragraphs}>
        <FadeIn>
          <p>
            On entend souvent : <em>« Il faut un CMS, le client voudra modifier son contenu. »</em><br />
            C’est vrai parfois. Mais en pratique, moins de <strong>30&nbsp;%</strong> des clients modifient leur site
            après livraison — et souvent pour un simple détail.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Je ne suis pas <strong>contre WordPress</strong> : on peut en faire de bons sites. Mais venant du
            développement logiciel, j’ai continué avec le code — et aujourd’hui, pour des sites vitrines ou des outils
            web, c’est tout aussi compétitif.&nbsp;<br/>
            <a className={styles.linkHoverUnderline} href={`/${locale}/blog/comparatif-wordpress-site-code`}>
              👉 J’ai comparé les coûts en détail ici.
            </a>
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Au final, ce n’est pas l’outil qui compte, mais le résultat : un site clair, rapide et utile, sans superflu.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
