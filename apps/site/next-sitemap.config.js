const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${BASE_URL}/sitemap.xml`, // <==== Add here
    ],
  },
}
