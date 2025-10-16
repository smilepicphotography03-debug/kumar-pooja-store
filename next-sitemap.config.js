/**
 * Minimal next-sitemap config.
 * Set SITE_URL in Netlify environment variables to your production URL.
 */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  sitemapSize: 5000
}
