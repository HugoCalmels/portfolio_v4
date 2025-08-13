'use client'

import styles from './Sections.module.css'
import FadeIn from '@/components/FadeIn'
import { useParams } from 'next/navigation'

export default function Section2() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <section className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>Ce que je ne fais pas, et pourquoi</h2>
      </FadeIn>

      <div className={styles.paragraphs}>
        <FadeIn>
          <p>
            On entend souvent :<br />
            <em>“Il faut un CMS, le client voudra modifier son contenu.”</em>
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            C’est vrai dans certains cas.<br />
            Mais dans la réalité, moins de <strong>30 %</strong> des clients modifient leur site après livraison — et quand ils le font, c’est souvent pour une ligne ou une image, pas pour tout changer.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Je ne suis pas <strong>contre WordPress</strong>.<br />
            C’est une bonne solution pour certains projets, et on peut en faire de très bons sites.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Mais personnellement, <strong>je suis plus à l’aise avec le code</strong> (HTML, CSS, JavaScript, Java, etc.).<br />
            C’est mon environnement : je vais plus vite, je fais moins d’erreurs, et je maîtrise tout ce que je livre.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Je préfère <strong>coder des sites sur mesure</strong>, sans surcouche, sans dépendances inutiles.<br />
            👉 <a className={styles.linkHoverUnderline} href={`/${locale}/blog/comparatif-wordpress-site-code`}>J’ai comparé ça en détail ici.</a>
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Pas de thème à adapter. Pas de plugin à surveiller. Juste un <strong>site propre</strong>, pensé pour ce que vous faites.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            Et au final, <strong>la techno importe peu</strong>.<br />
            Ce qui compte, c’est ce qu’on construit avec. Le message. La structure. L’intention.<br />
            Un <strong>site utile</strong>, c’est un site clair, rapide, bien rédigé — quel que soit l’outil.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
