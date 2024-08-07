import Parser from 'rss-parser'
import TurndownService from 'turndown'

const parser = new Parser({
  customFields: {
    item: [['podcast:transcript', 'transcripts', { keepArray: true }]],
  },
})

let feed: any

type UsePodcastOptions = {
  url?: string
}

type GetFeedOptions = {
  orderEpisodes: 'ASC' | 'DESC'
}

type GetEpisodeOptions = {
  convertDescriptionToMarkdown: boolean
  slug: string
  transcript?: {
    mimeType: string
  }
}

export const usePodcast = ({ url }: UsePodcastOptions) => {
  const loadFeed = async () => {
    if (!url) {
      console.warn('No podcast feed URL provided.')
      return Promise.resolve(null)
    }

    if (feed) {
      return feed
    }

    return await parser.parseURL(url)
  }

  const loadTranscript = async (url: string, mimeType = 'application/json') => {
    const response = await fetch(url)

    if (!response) {
      console.warn('No transcript data found.')
      return null
    }

    const data = await response.json()

    return data
  }

  const getFeed = async (options?: GetFeedOptions): Promise<any> => {
    const { orderEpisodes } = { ...{ orderEpisodes: 'ASC' }, ...options }
    const feed = await loadFeed()

    if (!feed) {
      return null
    }

    const tempFeed = { ...feed }

    if (orderEpisodes === 'ASC') {
      tempFeed.items = tempFeed.items.reverse()
    }

    return tempFeed
  }

  const getEpisode = async ({
    convertDescriptionToMarkdown,
    slug,
    transcript,
  }: GetEpisodeOptions) => {
    const feed = await loadFeed()

    if (!feed) {
      return null
    }

    const episode = feed.items.find(
      (item: any) => item.link.split('/').pop() === slug,
    )

    if (!episode) {
      return null
    }

    if (convertDescriptionToMarkdown) {
      const turndownService = new TurndownService()
      episode.descriptionMarkdown = turndownService.turndown(episode.content)
    }

    if (transcript?.mimeType && episode.transcripts) {
      const transcriptItem = episode.transcripts.find(
        (item: any) => item.$.type === transcript.mimeType,
      )

      if (transcriptItem) {
        const transcriptData = await loadTranscript(
          transcriptItem.$.url,
          transcript.mimeType,
        )
        episode.transcript = transcriptData
      }
    }

    return episode
  }

  return {
    getFeed,
    getEpisode,
  }
}
