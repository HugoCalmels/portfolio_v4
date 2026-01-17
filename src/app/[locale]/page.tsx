// app/[locale]/page.tsx
import ContactSection from '@/components/pages/home/ContactSection/ContactSection';
import HomeCraft from '@/components/pages/home/CraftSection/HomeCraft';
import FaqSection from '@/components/pages/home/FaqSection/FaqSection';
import Hero from '@/components/pages/home/HeroSection/Hero';
import Services from '@/components/pages/home/ServicesSection/Services';
import type { Metadata } from "next";
const BASE = "https://hugo-calmels.fr";

export async function generateMetadata(
  { params }: { params: { locale: "fr" | "en" } }
): Promise<Metadata> {
  const locale = params.locale;
  const path = ""; // home
  const canonical = `${BASE}/${locale}${path}`;

  return {
    title: locale === "fr" ? "Développeur web indépendant" : "Freelance web developer",
    description:
      locale === "fr"
        ? "Sites et logiciels web sur-mesure : simples, rapides, fiables. Sans CMS lourd, sans plugins inutiles."
        : "Custom websites & web apps: simple, fast, reliable. No heavy CMS, no useless plugins.",
    alternates: {
      canonical,
      languages: {
        fr: `${BASE}/fr`,
        en: `${BASE}/en`,
      },
    },
    openGraph: { url: canonical },
  };
}


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
