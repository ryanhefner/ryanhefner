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

  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })
  const feed = await getFeed()
  const episodeFields =
    feed?.items.flatMap((item) => {
      const slug = item.link?.split('/').pop()

      return slug
        ? [
            {
              loc: `${BASE_URL}/podcast/${slug}`,
              lastmod: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
            },
          ]
        : []
    }) ?? []

  if (episodeFields.length) {
    fields.push(...episodeFields)
  }

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  return null
}
