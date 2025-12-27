'use client'

import {useLocale} from 'next-intl'
import LogicielsWebDeployFr from './LogicielsWebDeploy.fr'
import LogicielsWebDeployEn from './LogicielsWebDeploy.en'

export default function LogicielsWebDeploy() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebDeployEn /> : <LogicielsWebDeployFr />
}
