import { NextApiRequest, NextApiResponse } from 'next'
import { usePodcast } from 'use-podcast'

export const config = {
  maxDuration: 60,
}

const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const secret = process.env.TRANSISTOR_REVALIDATE_KEY
  if (!secret?.trim()) {
    return res.status(503).json({ message: 'Revalidation is not configured' })
  }

  // Validate secret
  if (req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Revalidate episode passed
  try {
    const { getFeed } = usePodcast({
      url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
    })

    const feed = await getFeed({ forceRefresh: true })

    if (feed?.items) {
      for (const item of feed.items) {
        const slug = item.link?.split('/').pop()

        if (slug) {
          console.debug(`Revalidate episode page: /podcast/${slug}`)
          await res.revalidate(`/podcast/${slug}`)
          console.debug(`Revalidate og-image: /podcast/${slug}`)
          await res.revalidate(`/og-image/podcast/${slug}`)
        }
      }
    }

    console.debug(`Revalidate podcast page: /podcast`)
    await res.revalidate(`/podcast`)

    console.debug(`Revalidate home page: /`)
    await res.revalidate(`/`)

    res.status(200).json({ revalidated: true })
  } catch (err) {
    console.error(err)
    return res.status(500).send('Error revalidating')
  }
}

export default handler
