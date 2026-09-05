import { createLinkCardImage } from '@linkcards/next'
import type { Now, Thought } from 'content-collections'
import type { Image } from 'next-meta'
import type { GraphData, SchemaData } from 'react-structured'

const DEFAULT_RYAN_HEFNER_SITE_URL = 'https://www.ryanhefner.com'

export const RYAN_HEFNER_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_RYAN_HEFNER_SITE_URL

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

export const normalizeSiteUrl = (siteUrl = RYAN_HEFNER_SITE_URL) => {
  try {
    const url = new URL(siteUrl)

    return url.hostname ? url.origin : DEFAULT_RYAN_HEFNER_SITE_URL
  } catch {
    return DEFAULT_RYAN_HEFNER_SITE_URL
  }
}

export const absoluteUrl = (path: string, siteUrl = RYAN_HEFNER_SITE_URL) => {
  const baseUrl = `${normalizeSiteUrl(siteUrl)}/`

  try {
    return new URL(path, baseUrl).toString()
  } catch {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    return `${normalizeSiteUrl(siteUrl)}${normalizedPath}`
  }
}

export const getRyanHefnerLinkCardImage = (
  path: string,
  imageAlt = 'Ryan Hefner',
): Image | undefined => {
  const url = absoluteUrl(path)
  const templateUrl = `${url.replace(/\/$/, '')}/social-image.png`

  return createLinkCardImage({
    accountUrl: process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL,
    imageAlt,
    imageHeight: 630,
    imageType: 'image/png',
    imageWidth: 1200,
    templateUrl,
    url,
  })
}

const toIsoDate = (value: string | Date) => {
  const date = new Date(value)

  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString()
}

const socialImageUrl = (path: string, imageAlt?: string) => {
  const url = absoluteUrl(path)

  return (
    getRyanHefnerLinkCardImage(path, imageAlt)?.url ??
    `${url.replace(/\/$/, '')}/social-image.png`
  )
}

export const getRyanHefnerSiteGraphData = (): GraphData => {
  const siteUrl = normalizeSiteUrl()

  return {
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Ryan Hefner',
        description:
          'Software developer and product designer building products and open-source tools.',
        url: siteUrl,
        image: `${siteUrl}/assets/ryan-hefner-social.jpg`,
        jobTitle: ['Software Developer', 'Product Designer'],
        worksFor: {
          '@type': 'Organization',
          name: 'Commune Software',
          url: 'https://commune.software',
        },
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
        alternateName: 'RyanHefner.com',
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
  const modifiedAt = thought.updatedAt
    ? toIsoDate(thought.updatedAt)
    : undefined

  return {
    '@id': `${url}#blog-posting`,
    headline: thought.title,
    name: thought.title,
    description: thought.description,
    url,
    image: socialImageUrl(
      thought.url,
      `Social card for “${thought.title}” by Ryan Hefner`,
    ),
    datePublished: publishedAt,
    ...(modifiedAt ? { dateModified: modifiedAt } : {}),
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
  path = now.url,
): SchemaData<'WebPage'> => {
  const siteUrl = normalizeSiteUrl()
  const url = absoluteUrl(path)
  const updatedAt = toIsoDate(now.date)

  return {
    '@id': `${url}#web-page`,
    name: title,
    description,
    url,
    image: socialImageUrl(path, `Social card for “${title}” by Ryan Hefner`),
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
