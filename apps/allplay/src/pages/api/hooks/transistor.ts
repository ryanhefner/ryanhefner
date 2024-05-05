import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.TRANSISTOR_REVALIDATE_KEY) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const episode = req.body

    console.debug(episode)

    await res.revalidate(`/podcast/${episode.attributes.slug}`)
    res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
