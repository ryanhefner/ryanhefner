import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import slugify from '@sindresorhus/slugify'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: BASE_URL,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/about`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/projects`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/projects/oss`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/now`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/withoss`,
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  return null
}
