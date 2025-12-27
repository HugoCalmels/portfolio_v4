'use client'

import styles from './HomeCraft.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import List from '@/components/ui/List'
import Text from '@/components/ui/Text'
import CustomLink from '@/components/ui/CustomLink'
import {useLocale} from 'next-intl'

export default function HomeCraftEn() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.section} id="artisan">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Custom-built"
          title="Development designed around your needs."
          subtitle={
            <>
              I work like a web craftsman. I start from your real needs and build the website or tool
              exactly the way it should work. No themes to fill in, no imposed platforms.
            </>
          }
        />

        <List>
          <li>We start from your business and your content, not from a template.</li>
          <li>The site or tool is designed for your use and can evolve over time if needed.</li>
          <li>You communicate directly with the person who builds it.</li>
        </List>

        <Text as="p">
          To learn more about my background and how I work,&nbsp;
          <CustomLink href={`/${locale}/about`}>click here</CustomLink>.
        </Text>
      </div>
    </section>
  )
}
