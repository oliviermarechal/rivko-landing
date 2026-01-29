/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rivko.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Priorités personnalisées par section
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
    } else if (path === '/guides' || path === '/blog') {
      priority = 0.9;
    } else if (path.startsWith('/guides/resilier-')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/guides/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/comparatifs/')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (
      path === '/confidentialite' ||
      path === '/conditions-utilisation' ||
      path === '/mentions-legales'
    ) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
