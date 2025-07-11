import createNextIntlPlugin from 'next-intl/plugin';
import intlConfig from './next-intl.config.js'; // ← doit être .js

const withNextIntl = createNextIntlPlugin(intlConfig);

const nextConfig = {
  experimental: {
    serverActions: {}
  }
};

export default withNextIntl(nextConfig);