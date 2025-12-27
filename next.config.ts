import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: {} },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: false
      }
    ];
  }
};

export default withNextIntl(nextConfig);
