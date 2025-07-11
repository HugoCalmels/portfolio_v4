import { NextIntlClientProvider } from 'next-intl'
import Navbar from '@/components/Navbar'
import { Geist, Geist_Mono } from 'next/font/google'
import { Archivo_Black, Montserrat } from 'next/font/google'
import '@/styles/globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title',
})

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
}

// Attention : Pas de typage explicite ici sur les props
// Next.js injecte params, locale etc automatiquement

export default async function LocaleLayout({ children, params }: any) {
  const fallbackLocale = 'fr'
  const locale = params?.locale ?? fallbackLocale
  let messages

  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch {
    console.warn(`❌ Traductions manquantes pour "${locale}", fallback vers "${fallbackLocale}"`)
    messages = (await import(`@/messages/${fallbackLocale}.json`)).default
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
