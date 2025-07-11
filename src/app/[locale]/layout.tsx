import { NextIntlClientProvider } from 'next-intl'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Geist, Geist_Mono } from 'next/font/google'
import { Archivo_Black, Montserrat } from 'next/font/google'
import '@/styles/globals.css'

// Fonts
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

// SEO global
export const metadata: Metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params
  const fallbackLocale = 'fr'
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
