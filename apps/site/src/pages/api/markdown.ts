import type { NextApiRequest, NextApiResponse } from 'next'

import { getMarkdownDocument } from '../../utils/markdown-content'

const requestedPath = (path: NextApiRequest['query']['path']) => {
  if (Array.isArray(path)) return path.join('/')

  return path || '/'
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD')
    res.status(405).end()
    return
  }

  const document = getMarkdownDocument(requestedPath(req.query.path))

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader('Vary', 'Accept, Accept-Encoding')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.status(document.status)

  if (req.method === 'HEAD') {
    res.end()
    return
  }

  res.send(document.body)
}

export default handler
