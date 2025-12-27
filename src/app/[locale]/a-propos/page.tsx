// app/[locale]/a-propos/page.tsx
import AboutFreelance from '@/components/pages/about/Freelance/AboutFreelance';
import AboutHero from '@/components/pages/about/Hero/AboutHero';
import Index from '@/components/pages/about/Index/Index';
import AboutPerso from '@/components/pages/about/Perso/AboutPerso';
import AboutStory from '@/components/pages/about/Story/AboutStory';
import TechStack from '@/components/pages/about/TechStack/TechStack';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Parcours, méthode et choix techniques. Une approche rigoureuse du développement web.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Index />
      <AboutStory />
      <AboutFreelance />
      <TechStack />
      <AboutPerso />
    </>
  );
}
