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

// ---- Locales supportées
const SUPPORTED = ['fr', 'en'] as const;
type Locale = (typeof SUPPORTED)[number];

// ---- Messages JSON (imports statiques -> SSG-friendly)
import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';

// ---- Types JSON permissifs (sans "any")
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | { [key: string]: JsonValue } | JsonValue[];
type LooseMessages = { [key: string]: JsonValue };

// Mappe les messages sans any, avec "satisfies" pour sécuriser
const MESSAGES = {
  fr: frMessages,
  en: enMessages,
} satisfies Record<Locale, LooseMessages>;

// ---- Forcer le segment en statique
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

// ---- Metadata statique
export const metadata: Metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
};

// ---- Fonts
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-title' });
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

// ---- Layout (params est une Promise -> on attend avant d'accéder à locale)
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) || 'fr';
  if (!SUPPORTED.includes(locale)) notFound();

  // Cast unique au boundary pour NextIntl
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
