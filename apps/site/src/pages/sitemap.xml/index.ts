import { allNows } from 'contentlayer/generated'
import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy } from 'next-sitemap'

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'

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
      loc: `${BASE_URL}/withoss`,
      lastmod: new Date().toISOString(),
    },
  ]

  // Now
  const nowFields = allNows.map((now) => ({
    loc: `${BASE_URL}/now/${now.slug}`,
    lastmod: now.date,
  }))

  if (nowFields.length) {
    fields.push(
      {
        loc: `${BASE_URL}/now`,
        lastmod: new Date().toISOString(),
      },
      ...nowFields,
    )
  }

  // Thoughts - hidden per user request, not yet ready for public access
  // const thoughtFields = allThoughts.map((thought) => ({
  //   loc: `${BASE_URL}/thoughts/${thought.slug}`,
  //   lastmod: thought.date,
  // }))

  // if (thoughtFields.length) {
  //   fields.push(
  //     {
  //       loc: `${BASE_URL}/thoughts`,
  //       lastmod: new Date().toISOString(),
  //     },
  //     ...thoughtFields,
  //   )
  // }

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  return null
}
