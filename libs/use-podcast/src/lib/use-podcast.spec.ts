import { afterEach, beforeEach, vi } from 'vitest'

import { usePodcast } from './use-podcast'

const { parseURL } = vi.hoisted(() => ({ parseURL: vi.fn() }))
vi.mock('rss-parser', () => ({
  default: class {
    parseURL = parseURL
  },
}))

beforeEach(() => {
  parseURL.mockReset()
  vi.useFakeTimers()
})
afterEach(() => vi.useRealTimers())

describe('usePodcast', () => {
  it('returns feed accessors without requiring options', () => {
    const podcast = usePodcast()

    expect(podcast.getFeed).toBeTypeOf('function')
    expect(podcast.getEpisode).toBeTypeOf('function')
  })

  it('reuses fresh feeds but fetches again after one minute', async () => {
    parseURL
      .mockResolvedValueOnce({ items: [{ title: 'Old episode' }] })
      .mockResolvedValueOnce({ items: [{ title: 'New episode' }] })
    const podcast = usePodcast({ url: 'https://example.com/ttl.xml' })
    await podcast.getFeed()
    await podcast.getFeed()
    expect(parseURL).toHaveBeenCalledTimes(1)
    vi.advanceTimersByTime(60_001)
    expect((await podcast.getFeed())?.items[0].title).toBe('New episode')
    expect(parseURL).toHaveBeenCalledTimes(2)
  })

  it('refreshes a warm cache for webhook and page revalidation', async () => {
    parseURL
      .mockResolvedValueOnce({ items: [{ title: 'Old episode' }] })
      .mockResolvedValueOnce({ items: [{ title: 'New episode' }] })
    const url = 'https://example.com/refresh.xml'
    await usePodcast({ url }).getFeed()
    await usePodcast({ url }).getFeed({ forceRefresh: true })
    expect((await usePodcast({ url }).getFeed())?.items[0].title).toBe(
      'New episode',
    )
    expect(parseURL).toHaveBeenCalledTimes(2)
  })

  it('propagates refresh errors instead of acknowledging stale data', async () => {
    parseURL.mockRejectedValueOnce(new Error('Feed unavailable'))
    await expect(
      usePodcast({ url: 'https://example.com/error.xml' }).getFeed({
        forceRefresh: true,
      }),
    ).rejects.toThrow('Feed unavailable')
  })
})
