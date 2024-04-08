import { NextApiRequest, NextApiResponse } from 'next'
import { TransistorClient } from 'transistor-client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { index } = req.query

  const client = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  try {
    const path = Array.isArray(index) ? index.join('/') : `/${index || ''}`
    const response = await client._request(path)

    res.json(response)
  } catch (err) {
    res.json({ error: err })
  }
}

export default handler
