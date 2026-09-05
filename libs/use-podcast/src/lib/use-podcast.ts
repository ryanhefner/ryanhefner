import Parser from 'rss-parser'
import TurndownService from 'turndown'

export type PodcastTranscriptReference = {
  $: {
    type?: string
    url: string
  }
}

export type PodcastTranscriptSegment = {
  body: string
  endTime: string
  speaker?: string
  startTime: string
}

export type PodcastTranscript = {
  segments?: PodcastTranscriptSegment[]
}

type PodcastEpisodeFields = {
  description?: string
  descriptionMarkdown?: string
  itunes?: {
    duration?: number | string
    episode?: number | string
  }
  transcript?: PodcastTranscript
  transcripts?: PodcastTranscriptReference[]
}

export type PodcastEpisode = Parser.Item & PodcastEpisodeFields
export type PodcastFeed = Parser.Output<PodcastEpisodeFields>

const parser = new Parser<Record<string, never>, PodcastEpisodeFields>({
  customFields: {
    item: [['podcast:transcript', 'transcripts', { keepArray: true }]],
  },
})

const FEED_CACHE_TTL_MS = 60_000
const feedCache = new Map<string, { feed: PodcastFeed; expiresAt: number }>()

type UsePodcastOptions = {
  url?: string
}

type GetFeedOptions = {
  forceRefresh?: boolean
  orderEpisodes?: 'ASC' | 'DESC'
}

type GetEpisodeOptions = {
  convertDescriptionToMarkdown?: boolean
  slug: string
  transcript?: {
    mimeType: string
  }
}

export const usePodcast = ({ url }: UsePodcastOptions = {}) => {
  const loadFeed = async (forceRefresh = false) => {
    if (!url) {
      console.warn('No podcast feed URL provided.')
      return null
    }

    const cachedFeed = feedCache.get(url)

    if (!forceRefresh && cachedFeed && cachedFeed.expiresAt > Date.now()) {
      return cachedFeed.feed
    }

    const feed = await parser.parseURL(url)
    feedCache.set(url, { feed, expiresAt: Date.now() + FEED_CACHE_TTL_MS })

    return feed
  }

  const loadTranscript = async (
    url: string,
  ): Promise<PodcastTranscript | null> => {
    const response = await fetch(url)

    if (!response.ok) {
      console.warn('No transcript data found.')
      return null
    }

    return (await response.json()) as PodcastTranscript
  }

  const getFeed = async (
    options?: GetFeedOptions,
  ): Promise<PodcastFeed | null> => {
    const { orderEpisodes = 'ASC', forceRefresh = false } = options ?? {}
    const feed = await loadFeed(forceRefresh)

    if (!feed) {
      return null
    }

    return {
      ...feed,
      items:
        orderEpisodes === 'ASC' ? [...feed.items].reverse() : [...feed.items],
    }
  }

  const getEpisode = async ({
    convertDescriptionToMarkdown,
    slug,
    transcript,
  }: GetEpisodeOptions): Promise<PodcastEpisode | null> => {
    const feed = await loadFeed()

    if (!feed) {
      return null
    }

    const feedEpisode = feed.items.find(
      (item) => item.link?.split('/').pop() === slug,
    )

    if (!feedEpisode) {
      return null
    }

    const episode = { ...feedEpisode }

    if (convertDescriptionToMarkdown) {
      const turndownService = new TurndownService()
      episode.descriptionMarkdown = turndownService.turndown(
        episode.content ?? '',
      )
    }

    if (transcript?.mimeType && episode.transcripts) {
      const transcriptItem = episode.transcripts.find(
        (item) => item.$.type === transcript.mimeType,
      )

      if (transcriptItem) {
        const transcriptData = await loadTranscript(transcriptItem.$.url)

        if (transcriptData) {
          episode.transcript = transcriptData
        }
      }
    }

    return episode
  }

  return {
    getFeed,
    getEpisode,
  }
}
