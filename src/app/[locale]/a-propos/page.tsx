// app/[locale]/a-propos/page.tsx

import AboutHero from '@/components/pages/about/Hero/AboutHero';
import AboutHowIWork from '@/components/pages/about/HowIWork/AboutHowIWork';
import Index from '@/components/pages/about/Index/Index';

import AboutStory from '@/components/pages/about/Story/AboutStory';
import TechStack from '@/components/pages/about/TechStack/TechStack';
import type { Metadata } from "next";
const BASE = "https://hugo-calmels.fr";

export async function generateMetadata(
  { params }: { params: { locale: "fr" | "en" } }
): Promise<Metadata> {
  const locale = params.locale;
  const path = "/a-propos";
  const canonical = `${BASE}/${locale}${path}`;

  return {
    title: locale === "fr" ? "À propos — Hugo Calmels" : "About — Hugo Calmels",
    description:
      locale === "fr"
        ? "Parcours, méthode et choix techniques. Une approche rigoureuse du développement web."
        : "Background, approach and technical choices. A rigorous way to build web projects.",
    alternates: {
      canonical,
      languages: {
        fr: `${BASE}/fr${path}`,
        en: `${BASE}/en${path}`,
      },
    },
    openGraph: { url: canonical },
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Index />
      <AboutHowIWork/>

      <AboutStory />


      <TechStack />

    </>
  );
}
