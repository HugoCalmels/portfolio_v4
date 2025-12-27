'use client'

import {useLocale} from 'next-intl'
import ProjectsFr from './Projects.fr'
import ProjectsEn from './Projects.en'

export default function Projects() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ProjectsEn /> : <ProjectsFr />
}
