// app/[locale]/logiciels-web/page.tsx
import LogicielsWebDefinition from '@/components/pages/logiciels/Definition/LogicielsWebDefinition';
import LogicielsWebDeploy from '@/components/pages/logiciels/Deploy/LogicielsWebDeploy';
import LogicielsWebFeatures from '@/components/pages/logiciels/Features/LogicielsWebFeatures';
import LogicielsWebHero from '@/components/pages/logiciels/Hero/LogicielsWebHero';
import LogicielsWebProcess from '@/components/pages/logiciels/Process/LogicielsWebProcess';
import LogicielsWebSkills from '@/components/pages/logiciels/Skills/LogicielsWebSkills';
import LogicielsWebTechnos from '@/components/pages/logiciels/Technos/LogicielsWebTechnos';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Logiciels web',
  description:
    'Outils web sur-mesure : back-office, dashboards, espaces privés, MVP. Pensés pour un besoin précis.',
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
