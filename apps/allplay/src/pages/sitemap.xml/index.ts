import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { usePodcast } from 'use-podcast'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.allplay.fm'

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
  // eslint-disable-next-line
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })
  const feed = await getFeed()
  const episodeFields = feed.items.map((item: any) => ({
    loc: `${BASE_URL}/podcast/${item.link.split('/').pop()}`,
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
