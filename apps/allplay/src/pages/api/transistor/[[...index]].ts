import { NextApiRequest, NextApiResponse } from 'next'
import { TransistorClient } from 'transistor-client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { index: slug } = req.query

  const client = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  try {
    const path = `/${Array.isArray(slug) ? slug.join('/') : slug ?? ''}`
    const response = await client._request(path)

    res.json(response)
  } catch (err) {
    res.json({ error: err })
  }
}

export default handler
