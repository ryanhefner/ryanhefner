import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

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

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Validate secret
  if (req.query.secret !== process.env.TRANSISTOR_REVALIDATE_KEY) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Revalidate episode passed
  try {
    const episode = req.body.data

    await res.revalidate(`/podcast/${episode.attributes.slug}`)
    await res.revalidate(`/podcast`)
    await res.revalidate(`/`)
    res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
