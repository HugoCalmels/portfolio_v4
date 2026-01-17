

import ExpandableSections from '@/components/pages/sites-vitrines/Accordion/ExpandableSections';
import SitesWebHero from '@/components/pages/sites-vitrines/Hero/SitesWebHero';
import SitesVitrinesOffers from '@/components/pages/sites-vitrines/Offers/SitesVitrinesOffers';
import SitesVitrinesTechnos from '@/components/pages/sites-vitrines/Technos/SitesVitrinesTechnos';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sites web — Hugo Calmels",
  description: "Sites vitrines et landing pages simples, rapides, sans CMS.",
  alternates: {
    canonical: "https://hugo-calmels.fr/fr/sites-web",
    languages: {
      fr: "https://hugo-calmels.fr/fr/sites-web",
      en: "https://hugo-calmels.fr/en/sites-web",
    },
  },
  openGraph: {
    url: "https://hugo-calmels.fr/fr/sites-web",
  },
};


export default function SitesWebPage() {
  return (
    <>
    <SitesWebHero/>
    <SitesVitrinesOffers/>

    <ExpandableSections/>
    {/*   <SitesVitrinesShowcase/>*/}

        <SitesVitrinesTechnos/>
    </>
  )
}
