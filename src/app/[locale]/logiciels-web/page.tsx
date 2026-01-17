// app/[locale]/logiciels-web/page.tsx
import LogicielsWebDefinition from '@/components/pages/logiciels/Definition/LogicielsWebDefinition';
import LogicielsWebDeploy from '@/components/pages/logiciels/Deploy/LogicielsWebDeploy';
import LogicielsWebFeatures from '@/components/pages/logiciels/Features/LogicielsWebFeatures';
import LogicielsWebHero from '@/components/pages/logiciels/Hero/LogicielsWebHero';
import LogicielsWebProcess from '@/components/pages/logiciels/Process/LogicielsWebProcess';
import LogicielsWebSkills from '@/components/pages/logiciels/Skills/LogicielsWebSkills';
import LogicielsWebTechnos from '@/components/pages/logiciels/Technos/LogicielsWebTechnos';
import type { Metadata } from "next";

const BASE_URL = "https://hugo-calmels.fr";

export const metadata: Metadata = {
  title: "Logiciels web — Hugo Calmels",
  description:
    "Outils web sur-mesure : back-office, dashboards, espaces privés, MVP. Pensés pour un besoin précis.",
  alternates: {
    canonical: `${BASE_URL}/fr/logiciels-web`,
    languages: {
      fr: `${BASE_URL}/fr/logiciels-web`,
      en: `${BASE_URL}/en/logiciels-web`,
    },
  },
  openGraph: {
    url: `${BASE_URL}/fr/logiciels-web`,
  },
};


export default function LogicielsWebPage() {
  return (
    <>
      <LogicielsWebHero />
      <LogicielsWebDefinition />
      <LogicielsWebSkills/>
      <LogicielsWebFeatures />

      <LogicielsWebDeploy />
      <LogicielsWebProcess />
      <LogicielsWebTechnos />
    </>
  );
}
