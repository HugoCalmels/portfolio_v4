'use client'

import SeoHead from '@/components/common/SeoHead'
import Hero from '@/components/pages/home/Hero'
import ContactSection from '@/components/common/ContactSection'
import Airplanes from '@/components/pages/home/AirPlanes'
import AccueilCards from '@/components/pages/home/AcceuilCards'

export default function Home() {

  return (
    <>
<SeoHead
  title="Création de site internet à Toulouse – Hugo Calmels"
  description="Développeur web indépendant à Toulouse : création de sites vitrines, e-commerce et SEO local. Aussi disponible pour vos projets de développement web sur-mesure."
 image="https://hugo-calmels.fr/images/developpeur-web-independant-toulouse.png"
      />
      <main>
        <Airplanes/>
        <Hero />
        <AccueilCards />
        <ContactSection />
      </main>
    </>
  )
}
