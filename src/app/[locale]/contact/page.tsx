// app/[locale]/contact/page.tsx
import Booking from '@/components/pages/contact/Booking/Booking';
import ContactForm from '@/components/pages/contact/Form/ContactForm';
import ContactHero from '@/components/pages/contact/Hero/ContactHero';
import ContactLegal from '@/components/pages/contact/Legal/ContactLegal';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Parlons de votre projet. Message ou créneau en visio. Réponse sous 24–48h ouvrées.',
};

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
