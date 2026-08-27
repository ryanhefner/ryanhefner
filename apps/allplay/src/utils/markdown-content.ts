import { usePodcast } from 'use-podcast'

import { feeds } from '../data/feeds'
import { withOss } from '../data/oss'

import { getEpisodeAudioUrl, isPlayablePodcastEpisode } from './podcast'
import {
  ALLPLAY_PODCAST_DESCRIPTION,
  ALLPLAY_PODCAST_FEED_URL,
  getEpisodeDescription,
} from './structured-data'

const SITE_URL = 'https://www.allplay.fm'

export type MarkdownDocument = {
  body: string
  status: number
}

const renderDocument = ({
  content,
  description,
  path,
  title,
}: {
  content: string
  description?: string
  path: string
  title: string
}) =>
  [
    `# ${title}`,
    description ? `> ${description}` : '',
    content.trim(),
    `Canonical URL: ${SITE_URL}${path === '/' ? '' : path}`,
  ]
    .filter(Boolean)
    .join('\n\n')

const staticDocuments: Record<string, () => string> = {
  '/': () =>
    renderDocument({
      title: 'All Play',
      description:
        'An independent podcast and newsletter by Ryan Hefner about building products and open-source tools.',
      path: '/',
      content: `All Play documents the ideas, process, tools, experiments, and pitfalls involved in building products and open-source software. Ryan shares the work while it is happening through podcast episodes and newsletter posts.

All Play is a media publication, not a social network, SaaS product, or paid membership service. It has no user accounts or pricing tiers.

## Explore

- [About All Play](${SITE_URL}/about)
- [Podcast episodes](${SITE_URL}/podcast)
- [Newsletter](${SITE_URL}/newsletter)
- [Contact](${SITE_URL}/contact)
- [Privacy](${SITE_URL}/privacy)
- [Agent guidance](${SITE_URL}/llms.txt)
- [XML sitemap](${SITE_URL}/sitemap.xml)

## Listen and subscribe

- [Podcast RSS feed](${ALLPLAY_PODCAST_FEED_URL})
- [Apple Podcasts](https://podcasts.apple.com/us/podcast/all-play-w-ryan-hefner/id1744906646)
- [Spotify](https://open.spotify.com/show/0HpMRKrH0HOCHrIebJhmci)`,
    }),
  '/about': () =>
    renderDocument({
      title: 'About All Play',
      description:
        'All Play is Ryan Hefner’s independent podcast and newsletter about building products, software, and open-source tools.',
      path: '/about',
      content: `All Play is an independent podcast and newsletter created and hosted by [Ryan Hefner](https://www.ryanhefner.com). It documents the ideas, decisions, tools, experiments, and occasional wrong turns involved in building products and open-source software.

## What you’ll find here

The podcast archive includes episode notes, audio, transcripts when available, and links to listen in common podcast apps. The newsletter provides written updates and another way to follow new work. Topics commonly include product development, interface design, software engineering, developer tooling, independent publishing, and the practical tradeoffs behind shipping an idea.

## What All Play is not

All Play is a publication—not a social network, SaaS product, or paid membership platform. There are no All Play user accounts or pricing tiers. Products discussed on the show have their own official sites, documentation, and support channels.

## About Ryan

Ryan is a software developer and product designer who builds products and open-source tools. Find more of his work at [ryanhefner.com](https://www.ryanhefner.com) and [GitHub](https://github.com/ryanhefner).`,
    }),
  '/contact': () =>
    renderDocument({
      title: 'Contact All Play',
      description:
        'How to contact Ryan Hefner about the All Play podcast, newsletter, and projects discussed on the show.',
      path: '/contact',
      content: `Email Ryan Hefner at [hi@ryanhefner.com](mailto:hi@ryanhefner.com). Feedback about an episode, thoughtful topic suggestions, questions about the publication, and potential podcast or project collaborations are welcome. Include a descriptive subject and any relevant episode, article, or project link.

## Products and open-source projects

For a bug, feature request, or usage question about an open-source package discussed on the show, use the issue tracker in that project’s GitHub repository. Keeping technical discussion there makes the answer discoverable and gives maintainers and other users a chance to contribute. Send private security concerns by email instead of posting them publicly.

## Podcast and newsletter

For audio problems, mention the episode title and the app or browser involved. Newsletter messages include an unsubscribe link. Email privacy questions or requests involving information you submitted directly to the address above.`,
    }),
  '/newsletter': () =>
    renderDocument({
      title: 'All Play newsletter',
      description:
        'Written updates about Ryan Hefner’s products, tools, experiments, and new All Play podcast episodes.',
      path: '/newsletter',
      content: `The All Play newsletter provides written updates from Ryan Hefner and notifications when new podcast episodes are published. Subscribe on the [HTML newsletter page](${SITE_URL}/newsletter).

Newsletter messages include an unsubscribe link. All Play does not offer paid plans, memberships, or user accounts.`,
    }),
  '/privacy': () =>
    renderDocument({
      title: 'Privacy',
      description:
        'How the All Play website handles analytics, newsletter subscriptions, technical logs, podcast services, and external links.',
      path: '/privacy',
      content: `Last updated August 27, 2026.

All Play is a public podcast and newsletter. You can browse the site and listen to public episodes without creating an account, and All Play does not sell personal information.

## Analytics and hosting

The All Play website uses Fathom Analytics to understand aggregate site traffic. Vercel hosts the site and may process ordinary request and server-log information for delivery, reliability, debugging, and security.

## Newsletter and email

When you subscribe, the email address and optional first name you provide are sent to Resend and stored in the audience used to deliver All Play updates. Newsletter messages include an unsubscribe link. Direct email messages and contact details are retained as needed to read and respond.

## Podcast and external services

Transistor hosts and distributes the podcast feed and audio. Podcast apps, YouTube, social networks, and other external sites apply their own privacy policies.

## Your choices

You can browse without subscribing, unsubscribe through any newsletter message, and control browser privacy settings. Email [hi@ryanhefner.com](mailto:hi@ryanhefner.com) with questions or requests concerning information you submitted directly.`,
    }),
  '/withoss': () =>
    renderDocument({
      title: 'Made with open-source software',
      description:
        'Key open-source packages used to build the All Play website.',
      path: '/withoss',
      content: withOss
        .map(
          ({ description, name, urls }) =>
            `- **${name}** — ${description} ${urls.map((url) => `[Source](${url})`).join(' · ')}`,
        )
        .join('\n'),
    }),
}

const normalizePath = (path: string) => {
  const pathname = path.split(/[?#]/)[0]
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`

  return withLeadingSlash.length > 1
    ? withLeadingSlash.replace(/\/+$/, '')
    : withLeadingSlash
}

const renderPodcastLinks = () =>
  feeds.map(({ title, url }) => `- [${title}](${url})`).join('\n')

const getPodcastIndex = async () => {
  let episodeLinks = ''

  try {
    const { getFeed } = usePodcast({ url: ALLPLAY_PODCAST_FEED_URL })
    const feed = await getFeed()

    episodeLinks =
      feed?.items
        .flatMap((episode) => {
          const slug = episode.link?.split('/').filter(Boolean).pop()

          return slug && episode.title
            ? [`- [${episode.title}](${SITE_URL}/podcast/${slug})`]
            : []
        })
        .join('\n') ?? ''
  } catch {
    // The feed is supplementary; the index remains useful if it is unavailable.
  }

  return renderDocument({
    title: 'All Play podcast',
    description: ALLPLAY_PODCAST_DESCRIPTION,
    path: '/podcast',
    content: `All Play w/ Ryan Hefner documents the ideas, process, and pitfalls involved in building products and open-source software.

## Listen and subscribe

${renderPodcastLinks()}

${episodeLinks ? `## Episodes\n\n${episodeLinks}` : `Browse the [HTML episode archive](${SITE_URL}/podcast) for current episodes.`}`,
  })
}

const getPodcastEpisode = async (path: string) => {
  const slug = path.replace(/^\/podcast\//, '')

  if (!slug || slug.includes('/')) return undefined

  try {
    const { getEpisode } = usePodcast({ url: ALLPLAY_PODCAST_FEED_URL })
    const episode = await getEpisode({
      slug,
      convertDescriptionToMarkdown: true,
      transcript: { mimeType: 'application/json' },
    })

    if (!isPlayablePodcastEpisode(episode)) return undefined

    const audioUrl = getEpisodeAudioUrl(episode)
    const transcript = episode.transcript?.segments
      ?.map(
        ({ body, endTime, startTime }) =>
          `- **${startTime}–${endTime}:** ${body}`,
      )
      .join('\n')

    return renderDocument({
      title: episode.title,
      description: getEpisodeDescription(episode),
      path,
      content: `## Episode links

${audioUrl ? `- [Play or download the episode audio](${audioUrl})` : ''}
- [Podcast RSS feed](${ALLPLAY_PODCAST_FEED_URL})

## Show notes

${episode.descriptionMarkdown || episode.description || 'No show notes are available.'}

${transcript ? `## Transcript\n\n${transcript}` : 'A transcript is not available for this episode.'}`,
    })
  } catch {
    return undefined
  }
}

export const getMarkdownDocument = async (
  requestedPath: string,
): Promise<MarkdownDocument> => {
  const path = normalizePath(requestedPath)
  const body =
    staticDocuments[path]?.() ??
    (path === '/podcast'
      ? await getPodcastIndex()
      : path.startsWith('/podcast/')
        ? await getPodcastEpisode(path)
        : undefined)

  if (body) return { body, status: 200 }

  return {
    status: 404,
    body: `# Page not found

The requested path, \`${path}\`, does not exist on the All Play website.

## Try one of these destinations

- [Home](${SITE_URL})
- [About All Play](${SITE_URL}/about)
- [Podcast](${SITE_URL}/podcast)
- [Newsletter](${SITE_URL}/newsletter)
- [Contact](${SITE_URL}/contact)
- [Agent guidance](${SITE_URL}/llms.txt)
- [XML sitemap](${SITE_URL}/sitemap.xml)`,
  }
}
