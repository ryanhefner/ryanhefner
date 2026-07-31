import { createLinkCardImage } from '@linkcards/next'
import type { Image } from 'next-meta'
import type { GraphData, SchemaData } from 'react-structured'

const DEFAULT_ALLPLAY_SITE_URL = 'https://www.allplay.fm'

export const ALLPLAY_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ALLPLAY_SITE_URL

export const ALLPLAY_PODCAST_FEED_URL =
  process.env.NEXT_PUBLIC_PODCAST_FEED_URL ??
  'https://feeds.transistor.fm/allplay'

export const ALLPLAY_PODCAST_TITLE = 'All Play w/ Ryan Hefner'

export const ALLPLAY_PODCAST_DESCRIPTION =
  'Documenting the ideas, process and pitfalls that go into building products and open-source software and tools.'

const ryanHefnerPersonId = 'https://www.ryanhefner.com/#person'

const podcastLinks = [
  'https://podcasts.apple.com/us/podcast/all-play-w-ryan-hefner/id1744906646?uo=4',
  'https://music.amazon.com/podcasts/9cc10c94-b61c-45c9-9dc3-47da6ec088f2/all-play-w-ryan-hefner',
  'https://overcast.fm/itunes1744906646',
  'https://pca.st/9rgrbhmc',
  'https://open.spotify.com/show/0HpMRKrH0HOCHrIebJhmci',
  ALLPLAY_PODCAST_FEED_URL,
]

type BreadcrumbItem = {
  name: string
  url?: string
}

export const normalizeSiteUrl = (siteUrl = ALLPLAY_SITE_URL) => {
  try {
    const url = new URL(siteUrl)

    return url.hostname ? url.origin : DEFAULT_ALLPLAY_SITE_URL
  } catch {
    return DEFAULT_ALLPLAY_SITE_URL
  }
}

export const absoluteUrl = (path: string, siteUrl = ALLPLAY_SITE_URL) => {
  const baseUrl = `${normalizeSiteUrl(siteUrl)}/`

  try {
    return new URL(path, baseUrl).toString()
  } catch {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    return `${normalizeSiteUrl(siteUrl)}${normalizedPath}`
  }
}

export const getAllPlayLinkCardImage = (path: string): Image | undefined => {
  const url = absoluteUrl(path)
  const templateUrl = `${url.replace(/\/$/, '')}/social-image.png`

  return createLinkCardImage({
    accountUrl: process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL,
    imageAlt: 'All Play',
    imageHeight: 630,
    imageType: 'image/png',
    imageWidth: 1200,
    templateUrl,
    url,
  })
}

const stripMarkup = (value: string) =>
  value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const truncate = (value: string, length: number) =>
  value.length > length ? `${value.substring(0, length - 3)}...` : value

const toIsoDate = (value?: string) => {
  if (!value) {
    return undefined
  }

  const date = new Date(value)

  return Number.isNaN(date.getTime()) ? value : date.toISOString()
}

export const getEpisodeSlug = (episode: any) =>
  episode?.link?.split('/').filter(Boolean).pop()

export const getEpisodeUrl = (episode: any) =>
  absoluteUrl(`/podcast/${getEpisodeSlug(episode)}`)

export const getEpisodeAudioUrl = (episode: any) =>
  episode?.enclosure?.url
    ? `${episode.enclosure.url}?src=allplay.fm`
    : undefined

export const getEpisodeDescription = (episode: any) => {
  const description =
    episode?.contentSnippet ??
    episode?.descriptionMarkdown ??
    episode?.content ??
    episode?.description ??
    ''

  return truncate(stripMarkup(description), 300)
}

export const parsePodcastDuration = (duration: unknown) => {
  if (typeof duration === 'number' && Number.isFinite(duration)) {
    return duration
  }

  if (typeof duration !== 'string') {
    return undefined
  }

  if (duration.includes(':')) {
    return duration
      .split(':')
      .map((part) => Number.parseInt(part, 10))
      .filter((part) => Number.isFinite(part))
      .reduce((total, part) => total * 60 + part, 0)
  }

  const seconds = Number.parseInt(duration, 10)

  return Number.isFinite(seconds) ? seconds : undefined
}

export const secondsToIsoDuration = (seconds?: number) => {
  if (!seconds) {
    return undefined
  }

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}${
    remainingSeconds || (!hours && !minutes) ? `${remainingSeconds}S` : ''
  }`
}

export const getAllPlaySiteGraphData = (): GraphData => {
  const siteUrl = normalizeSiteUrl()

  return {
    '@graph': [
      {
        '@type': 'Person',
        '@id': ryanHefnerPersonId,
        name: 'Ryan Hefner',
        url: 'https://www.ryanhefner.com',
        sameAs: [
          'https://github.com/ryanhefner',
          'https://bsky.app/profile/ryanhefner.com',
          'https://mastodon.social/@ryanhefner',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'All Play',
        url: siteUrl,
        description:
          'Updates on the process, tools, and attempts Ryan Hefner makes while building products and open-source tools.',
        publisher: { '@id': ryanHefnerPersonId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'PodcastSeries',
        '@id': `${siteUrl}/podcast#series`,
        name: ALLPLAY_PODCAST_TITLE,
        description: ALLPLAY_PODCAST_DESCRIPTION,
        url: `${siteUrl}/podcast`,
        image: `${siteUrl}/assets/all-play.png`,
        webFeed: ALLPLAY_PODCAST_FEED_URL,
        author: { '@id': ryanHefnerPersonId },
        publisher: { '@id': ryanHefnerPersonId },
        sameAs: podcastLinks,
      },
    ],
  }
}

export const getBreadcrumbData = (
  items: BreadcrumbItem[],
): SchemaData<'BreadcrumbList'> => ({
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url ? { item: absoluteUrl(item.url) } : {}),
  })),
})

export const getPodcastPageData = (): SchemaData<'CollectionPage'> => {
  const siteUrl = normalizeSiteUrl()
  const url = `${siteUrl}/podcast`

  return {
    '@id': `${url}#collection-page`,
    name: 'Podcast',
    description: ALLPLAY_PODCAST_DESCRIPTION,
    url,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@id': `${siteUrl}/podcast#series` },
  }
}

export const getPodcastEpisodeData = (
  episode: any,
): SchemaData<'PodcastEpisode'> => {
  const siteUrl = normalizeSiteUrl()
  const url = getEpisodeUrl(episode)
  const audioUrl = getEpisodeAudioUrl(episode)
  const duration = secondsToIsoDuration(
    parsePodcastDuration(episode?.itunes?.duration),
  )

  return {
    '@id': `${url}#podcast-episode`,
    name: episode.title,
    description: getEpisodeDescription(episode),
    url,
    datePublished: toIsoDate(episode.isoDate ?? episode.pubDate),
    partOfSeries: { '@id': `${siteUrl}/podcast#series` },
    ...(duration ? { duration } : {}),
    ...(episode?.itunes?.episode
      ? { episodeNumber: episode.itunes.episode }
      : {}),
    ...(audioUrl
      ? {
          audio: {
            '@type': 'AudioObject',
            '@id': `${url}#audio`,
            name: episode.title,
            contentUrl: audioUrl,
            encodingFormat: episode?.enclosure?.type ?? 'audio/mpeg',
            ...(duration ? { duration } : {}),
          },
        }
      : {}),
  }
}
