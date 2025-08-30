/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hugo-calmels.fr',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/merci'], // ex. pages à ne pas indexer
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};