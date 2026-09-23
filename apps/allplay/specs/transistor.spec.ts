/** @jest-environment node */
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '../src/pages/api/hooks/transistor'

const getFeed = jest.fn()
jest.mock('use-podcast', () => ({ usePodcast: () => ({ getFeed }) }))

describe('Transistor webhook', () => {
  const originalSecret = process.env.TRANSISTOR_REVALIDATE_KEY
  beforeEach(() => {
    delete process.env.TRANSISTOR_REVALIDATE_KEY
    getFeed
      .mockReset()
      .mockResolvedValue({
        items: [{ link: 'https://example.com/new-episode' }],
      })
    jest.spyOn(console, 'debug').mockImplementation(() => {})
  })
  afterEach(() => {
    jest.restoreAllMocks()
    if (originalSecret === undefined)
      delete process.env.TRANSISTOR_REVALIDATE_KEY
    else process.env.TRANSISTOR_REVALIDATE_KEY = originalSecret
  })

  async function request(method = 'POST', secret?: string | string[]) {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn(),
      revalidate: jest.fn().mockResolvedValue(undefined),
    }
    await handler(
      {
        method,
        query: secret === undefined ? {} : { secret },
      } as NextApiRequest,
      res as unknown as NextApiResponse,
    )
    return res
  }

  it.each([undefined, '', ' '])(
    'fails closed with an unconfigured secret: %j',
    async (secret) => {
      if (secret !== undefined) process.env.TRANSISTOR_REVALIDATE_KEY = secret
      const res = await request()
      expect(res.status).toHaveBeenCalledWith(503)
      expect(getFeed).not.toHaveBeenCalled()
      expect(res.revalidate).not.toHaveBeenCalled()
    },
  )

  it.each([undefined, 'incorrect', ['correct', 'incorrect']])(
    'rejects invalid request credentials: %j',
    async (secret) => {
      process.env.TRANSISTOR_REVALIDATE_KEY = 'correct'
      const res = await request('POST', secret)
      expect(res.status).toHaveBeenCalledWith(401)
      expect(getFeed).not.toHaveBeenCalled()
    },
  )

  it('rejects GET even with valid credentials', async () => {
    process.env.TRANSISTOR_REVALIDATE_KEY = 'correct'
    const res = await request('GET', 'correct')
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.setHeader).toHaveBeenCalledWith('Allow', 'POST')
    expect(getFeed).not.toHaveBeenCalled()
  })

  it('refreshes the feed and revalidates pages for an authenticated POST', async () => {
    process.env.TRANSISTOR_REVALIDATE_KEY = 'correct'
    const res = await request('POST', 'correct')
    expect(getFeed).toHaveBeenCalledWith({ forceRefresh: true })
    expect(res.revalidate.mock.calls.map(([path]) => path)).toEqual([
      '/podcast/new-episode',
      '/og-image/podcast/new-episode',
      '/podcast',
      '/',
    ])
    expect(res.json).toHaveBeenCalledWith({ revalidated: true })
  })
})
