import { usePodcast } from './use-podcast'

describe('usePodcast', () => {
  it('returns feed accessors without requiring options', () => {
    const podcast = usePodcast()

    expect(podcast.getFeed).toBeTypeOf('function')
    expect(podcast.getEpisode).toBeTypeOf('function')
  })
})
