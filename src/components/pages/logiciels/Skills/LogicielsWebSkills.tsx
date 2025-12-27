'use client'

import {useLocale} from 'next-intl'
import LogicielsWebSkillsFr from './LogicielsWebSkills.fr'
import LogicielsWebSkillsEn from './LogicielsWebSkills.en'

export default function LogicielsWebSkills() {
  const locale =useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebSkillsEn /> : <LogicielsWebSkillsFr />
}
