// app/[locale]/page.tsx
import ContactSection from '@/components/pages/home/ContactSection/ContactSection';
import HomeCraft from '@/components/pages/home/CraftSection/HomeCraft';
import FaqSection from '@/components/pages/home/FaqSection/FaqSection';
import Hero from '@/components/pages/home/HeroSection/Hero';
import Services from '@/components/pages/home/ServicesSection/Services';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Développeur web indépendant',
  description:
    'Sites et logiciels web sur-mesure : simples, rapides, fiables. Sans CMS lourd, sans plugins inutiles.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />

      <HomeCraft />
      <ContactSection />
      <FaqSection />
    </>
  );
}
