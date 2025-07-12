import Head from 'next/head'
import { SeoMeta } from '@/types/seo'

const SeoHead = ({ title, description }: SeoMeta) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  )
}

export default SeoHead