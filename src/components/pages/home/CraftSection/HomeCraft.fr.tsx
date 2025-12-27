'use client'

import styles from './HomeCraft.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import List from '@/components/ui/List'
import Text from '@/components/ui/Text'
import CustomLink from '@/components/ui/CustomLink'
import {useLocale} from 'next-intl'

export default function HomeCraftFr() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.section} id="artisan">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Sur-mesure"
          title="Un développement pensé pour votre besoin."
          subtitle={
            <>
              Je travaille comme un artisan du web. Je pars de votre besoin réel, et je développe le site
              ou l’outil tel qu’il doit fonctionner. Pas de thème à remplir, pas de plateforme imposée.
            </>
          }
        />

        <List>
          <li>On part de votre activité et de vos contenus, pas d’un template.</li>
          <li>Le site ou l’outil est pensé pour votre usage, et peut évoluer si besoin.</li>
          <li>Vous échangez directement avec la personne qui développe.</li>
        </List>

        <Text as="p">
          Pour en savoir plus sur mon parcours et ma façon de travailler,&nbsp;
          <CustomLink href={`/${locale}/a-propos`}>c’est par ici</CustomLink>.
        </Text>
      </div>
    </section>
  )
}
