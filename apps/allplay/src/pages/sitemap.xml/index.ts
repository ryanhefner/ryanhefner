import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { TransistorClient } from 'transistor-client'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.allplay.fm'
const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: BASE_URL,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/newsletter`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/podcast`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${BASE_URL}/withoss`,
      lastmod: new Date().toISOString(),
    },
  ]

  // Episodes
  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  const episodes = await transistorClient.episodes(SHOW_ID as string)
  const episodeFields = episodes?.data.map((item: any) => ({
    loc: `${BASE_URL}/podcast/${item.attributes.slug}`,
    lastmod: item.attributes.published_at,
  }))

  if (episodeFields.length) {
    fields.push(...episodeFields)
  }

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  return null
}
