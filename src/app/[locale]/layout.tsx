// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Geist, Geist_Mono } from 'next/font/google';
import { Archivo_Black, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import BootLoader from './BootLoader';

// --- locales bornées + imports statiques
const SUPPORTED = ['fr', 'en'] as const;
type Locale = (typeof SUPPORTED)[number];

import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';

// Si vos JSON contiennent des arrays/objets non “string-leaf”, on les tape en any
const MESSAGES: Record<Locale, any> = {
  fr: frMessages,
  en: enMessages,
};

// --- Forcer le segment en statique
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
};

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-title' });
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (params?.locale as Locale) || 'fr';
  if (!SUPPORTED.includes(locale)) notFound();

  // Relax typing only at the boundary for next-intl
  const messages = MESSAGES[locale] as unknown as AbstractIntlMessages;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <BootLoader />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
