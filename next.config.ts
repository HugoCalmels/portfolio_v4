import createNextIntlPlugin from 'next-intl/plugin';
import intlConfig from './next-intl.config.js'; // ← doit rester .js

const withNextIntl = createNextIntlPlugin(intlConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
