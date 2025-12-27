// app/[locale]/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
import type {AbstractIntlMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Archivo_Black, Montserrat} from 'next/font/google';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import '@/styles/globals.css';

import frLayout from '@/messages/fr/layout.json';
import enLayout from '@/messages/en/layout.json';

const SUPPORTED = ['fr', 'en'] as const;
type Locale = (typeof SUPPORTED)[number];

const LAYOUT: Record<Locale, AbstractIntlMessages> = {
  fr: frLayout as unknown as AbstractIntlMessages,
  en: enLayout as unknown as AbstractIntlMessages
};

export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hugo-calmels.fr'),
  title: {default: 'Hugo Calmels — Développeur web', template: '%s — Hugo Calmels'},
  description:
    'Sites et logiciels web sur-mesure : simples, rapides, fiables. Une base propre, sans CMS lourd.',
  robots: {index: true, follow: true},
  openGraph: {
    type: 'website',
    siteName: 'Hugo Calmels',
    url: 'https://hugo-calmels.fr',
    images: ['/images/og.png']
  },
  twitter: {card: 'summary_large_image'}
};

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap'
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale: rawLocale} = await params;
  const locale = (rawLocale as Locale) || 'fr';
  if (!SUPPORTED.includes(locale)) notFound();

  const messages = LAYOUT[locale];

  return (
    <html lang={locale} className={`${archivo.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
