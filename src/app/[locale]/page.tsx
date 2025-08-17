'use client'

import SeoHead from '@/components/SeoHead'
import Hero from '@/components/CreationPage/Hero'
import OffresSimples from '@/components/CreationPage/OffresSimples'
import Testi from '@/components/CreationPage/Testi'
import Geo from '@/components/CreationPage/Geo'
import Projects from '@/components/CreationPage/Projects'
import ContactSection from '@/components/CreationPage/ContactSection'
import { useTranslations } from 'next-intl'
import CeQueJePropose from '@/components/CreationPage/v2/CeQueJePropose'
import MiniFaq from '@/components/CreationPage/v2/MiniFaq'
import OffresSurMesure from '@/components/CreationPage/v2/megaSection/OffresSurMesure'
import Airplanes from '@/components/AirPlanes'

export default function Home() {
  const t = useTranslations('creationSeo')

  return (
    <>
      <SeoHead
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <main>
        <Airplanes/>
        <Hero />
   
        <CeQueJePropose />

        {/*
           <PourquoiFaireUnSite />
               <Testi />
                  <FonctionnalitesMetier />
                          <HostingOptions />
                                 <Faq />
                                           <InclusDansChaqueSite/>
                                                   <HowIWork />
        */ }
        <OffresSimples />
        <OffresSurMesure/>


   
        <MiniFaq />
        <Projects />
        <Geo />
        <Testi />
        <ContactSection />

        {/* <FaqSection /> */}
        {/* <LocalSection /> */}
        {/* <CtaSection /> */}
      </main>
    </>
  )
}
