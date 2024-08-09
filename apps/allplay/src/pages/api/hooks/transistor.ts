import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { usePodcast } from 'use-podcast'

const cors = Cors({
  origin: '*',
  methods: ['POST'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Validate secret
  if (req.query.secret !== process.env.TRANSISTOR_REVALIDATE_KEY) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Revalidate episode passed
  try {
    // eslint-disable-next-line
    const { getFeed } = usePodcast({
      url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
    })

    const feed = await getFeed()

    if (feed?.items) {
      for (const item of feed.items) {
        console.debug(
          `Revalidate episode page: /podcast/${item.link.split('/').pop()}`,
        )
        await res.revalidate(`/podcast/${item.link.split('/').pop()}`)
        console.debug(
          `Revalidate og-image: /podcast/${item.link.split('/').pop()}`,
        )
        await res.revalidate(`/og-image/podcast/${item.link.split('/').pop()}`)
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
