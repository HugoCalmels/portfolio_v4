// app/[locale]/contact/page.tsx
import Booking from '@/components/pages/contact/Booking/Booking';
import ContactForm from '@/components/pages/contact/Form/ContactForm';
import ContactHero from '@/components/pages/contact/Hero/ContactHero';
import ContactLegal from '@/components/pages/contact/Legal/ContactLegal';
import type { Metadata } from 'next';


const BASE = "https://hugo-calmels.fr";

export async function generateMetadata(
  { params }: { params: { locale: "fr" | "en" } }
): Promise<Metadata> {
  const locale = params.locale;
  const path = "/contact";
  const canonical = `${BASE}/${locale}${path}`;

  return {
    title: locale === "fr" ? "Contact — Hugo Calmels" : "Contact — Hugo Calmels",
    description:
      locale === "fr"
        ? "Parlons de votre projet. Message ou créneau en visio. Réponse sous 24–48h ouvrées."
        : "Let’s talk about your project. Message or video call slot. Reply within 24–48 business hours.",
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


export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Booking />
      <ContactLegal />
    </>
  );
}
