import type { Now, Thought } from 'contentlayer/generated'
import type { GraphData, SchemaData } from 'react-structured'

export const RYAN_HEFNER_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'

const profileUrls = [
  'https://github.com/ryanhefner',
  'https://bsky.app/profile/ryanhefner.com',
  'https://mastodon.social/@ryanhefner',
  'https://twitter.com/ryanhefner',
  'https://www.threads.net/@ryanhefner',
  'https://www.dribbble.com/ryanhefner',
  'https://open.spotify.com/user/ryanhefner',
  'https://www.twitch.tv/ryanhefner',
  'https://www.youtube.com/@ryan_hefner',
  'https://www.vimeo.com/ryanhefner',
]

type BreadcrumbItem = {
  name: string
  url?: string
}

type CollectionItem = {
  description?: string
  name: string
  url: string
}

export const normalizeSiteUrl = (siteUrl = RYAN_HEFNER_SITE_URL) =>
  siteUrl.replace(/\/$/, '')

export const absoluteUrl = (path: string, siteUrl = RYAN_HEFNER_SITE_URL) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const baseUrl = normalizeSiteUrl(siteUrl)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}

const toIsoDate = (value: string | Date) => {
  const date = new Date(value)

  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString()
}

const socialImageUrl = (path: string) => `${absoluteUrl(path)}/social-image.png`

export const getRyanHefnerSiteGraphData = (): GraphData => {
  const siteUrl = normalizeSiteUrl()

  return {
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Ryan Hefner',
        url: siteUrl,
        image: `${siteUrl}/assets/ryan-hefner-social.jpg`,
        jobTitle: ['Software Developer', 'Product Designer'],
        homeLocation: {
          '@type': 'Place',
          name: 'Atlanta, GA',
        },
        sameAs: profileUrls,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Ryan Hefner',
        alternateName: 'Ryan Hefner - All Play',
        description:
          'The online archive and play space for Ryan Hefner, software developer and product designer.',
        url: siteUrl,
        publisher: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en-US',
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

export const getProfilePageData = (
  title: string,
  description: string,
): SchemaData<'ProfilePage'> => {
  const siteUrl = normalizeSiteUrl()

  return {
    '@id': `${siteUrl}/about#profile-page`,
    name: title,
    description,
    url: `${siteUrl}/about`,
    mainEntity: { '@id': `${siteUrl}/#person` },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }
}

export const getThoughtData = (thought: Thought): SchemaData<'BlogPosting'> => {
  const siteUrl = normalizeSiteUrl()
  const url = absoluteUrl(thought.url)
  const publishedAt = toIsoDate(thought.date)

  return {
    '@id': `${url}#blog-posting`,
    headline: thought.title,
    name: thought.title,
    description: thought.description,
    url,
    image: socialImageUrl(thought.url),
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: { '@id': `${siteUrl}/#person` },
    publisher: { '@id': `${siteUrl}/#person` },
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntityOfPage: { '@id': url },
    ...(thought.tags?.length ? { keywords: thought.tags } : {}),
  }
}

export const getNowPageData = (
  now: Now,
  title = now.title,
  description = now.description,
): SchemaData<'WebPage'> => {
  const siteUrl = normalizeSiteUrl()
  const url = absoluteUrl(now.url)
  const updatedAt = toIsoDate(now.date)

  return {
    '@id': `${url}#web-page`,
    name: title,
    description,
    url,
    image: socialImageUrl(now.url),
    dateModified: updatedAt,
    author: { '@id': `${siteUrl}/#person` },
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#person` },
  }
}

export const getCollectionPageData = ({
  description,
  items,
  title,
  url,
}: {
  description: string
  items: CollectionItem[]
  title: string
  url: string
}): SchemaData<'CollectionPage'> => {
  const siteUrl = normalizeSiteUrl()
  const pageUrl = absoluteUrl(url)

  return {
    '@id': `${pageUrl}#collection-page`,
    name: title,
    description,
    url: pageUrl,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.url),
      })),
    },
  }
}
