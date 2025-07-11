import SeoHead from '@/components/SeoHead'
import Hero from '@/components/CreationPage/Hero'
import OffresSimples from '@/components/CreationPage/OffresSimples'
import Testi from '@/components/CreationPage/Testi'
import PourquoiFaireUnSite from '@/components/CreationPage/PourquoiFaireUnSite'
import FonctionnalitesMetier from '@/components/CreationPage/FonctionnalitesMetier'
import HowIWork from '@/components/CreationPage/HowIWork'
import Faq from '@/components/CreationPage/Faq'
import Geo from '@/components/CreationPage/Geo'
import Projects from '@/components/CreationPage/Projects'
import ContactSection from '@/components/CreationPage/ContactSection'
import HostingOptions from '@/components/CreationPage/HostingOptions'



export default function CreationSiteToulouse() {
  return (
    <>
      <SeoHead
        title="Création de site internet à Toulouse – Hugo Calmels"
        description="Freelance web à Toulouse – Création de sites propres, rapides et optimisés SEO."
      />
      <main>
        <Hero />
        <Testi />
        <PourquoiFaireUnSite/>
        <OffresSimples />
        <FonctionnalitesMetier />
        <HostingOptions />
        <HowIWork />
        <Projects />
        <Faq />
        <Geo/>
        <ContactSection/>


        {/* Ensuite : */}

        {/* <FaqSection /> */}
        {/* <LocalSection /> */}
        {/* <CtaSection /> */}
      </main>
    </>
  )
}