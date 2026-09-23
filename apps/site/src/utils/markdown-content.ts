// eslint-disable-next-line @nx/enforce-module-boundaries -- Build-generated content collection module.
import { allNows, allThoughts } from 'content-collections'

import { withOss } from '../data/oss'
import { oss, projects } from '../data/projects'

const SITE_URL = 'https://www.ryanhefner.com'

const HOME_PROJECT_URLS = [
  'https://www.opengraphs.com',
  'https://www.skylounge.social',
  'https://www.starterpacks.net',
]

export type MarkdownDocument = {
  body: string
  status: number
}

const absoluteUrl = (url: string) =>
  url.startsWith('/') ? `${SITE_URL}${url}` : url

const renderItems = (
  items: Array<{ description?: string; name: string; url: string }>,
) =>
  items
    .map(
      ({ description, name, url }) =>
        `- [${name}](${absoluteUrl(url)})${description ? ` — ${description}` : ''}`,
    )
    .join('\n')

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
      title: 'Ryan Hefner',
      description: 'Software Developer + Eternal Tinkerer',
      path: '/',
      content: `Ryan Hefner is a software developer and product designer based in Atlanta, Georgia. This personal site is an archive and play space for his products, open-source software, podcasts, and updates.

## Active projects

${renderItems(
  HOME_PROJECT_URLS.map((url) =>
    projects.find((project) => project.url === url),
  ).filter((project): project is (typeof projects)[number] => Boolean(project)),
)}

## Explore

- [Projects](${SITE_URL}/projects)
- [Open-source software](${SITE_URL}/projects/oss)
- [About Ryan](${SITE_URL}/about)
- [What Ryan is working on now](${SITE_URL}/now)
- [Contact](${SITE_URL}/contact)`,
    }),
  '/about': () =>
    renderDocument({
      title: 'About Ryan Hefner',
      description:
        'Ryan Hefner is a software developer and product designer living in Atlanta, Georgia, by way of Brooklyn, New York.',
      path: '/about',
      content: `Ryan is a software developer by necessity and product designer by heart. He enjoys crafting well-designed, nicely coded software that gracefully solves the issue at hand for himself and, he hopes, others as well.

He builds products at [Commune Software](https://commune.software), publishes open-source tools, and explores ideas spanning product development, design, developer tooling, the open web, and online communities.

When he is not writing code, developing project ideas, or helping clients, he spends time with his two kids, looks for surf in a mostly landlocked state, runs trails, and searches for the next skate spot.

## Podcasts

- [All Play](https://www.allplay.fm)
- [Transmits](https://www.transmits.io/podcast)
- [Jam Sessions](https://www.jamsessions.fm)

## Elsewhere

- [GitHub](https://github.com/ryanhefner)
- [Bluesky](https://bsky.app/profile/ryanhefner.com)
- [YouTube](https://www.youtube.com/@ryan_hefner)`,
    }),
  '/contact': () =>
    renderDocument({
      title: 'Contact Ryan Hefner',
      description:
        'How to contact Ryan Hefner about products, consulting, podcasts, and open-source software.',
      path: '/contact',
      content: `The best way to reach Ryan is by email at [hi@ryanhefner.com](mailto:hi@ryanhefner.com). Include the relevant product or project name, useful URLs, and a short description of what you are trying to accomplish.

For consulting or collaboration inquiries, include context about the project, timing, and where you think Ryan can help. Podcast conversations and other thoughtful reasons to say hello are welcome as well.

## Open-source support

For bugs, feature requests, and usage questions about an open-source package, use the issue tracker in that package's GitHub repository so the discussion remains useful to other users. Send private security concerns by email rather than opening a public issue.

Response times may vary when Ryan is focused on a project or spending time with family.`,
    }),
  '/feeds': () =>
    renderDocument({
      title: 'Feeds',
      description: 'RSS and Atom feeds available from RyanHefner.com.',
      path: '/feeds',
      content: `- [RSS](${SITE_URL}/feeds/all/rss.xml)
- [JSON Feed](${SITE_URL}/feeds/all/rss.json)
- [Atom](${SITE_URL}/feeds/all/atom.xml)`,
    }),
  '/privacy': () =>
    renderDocument({
      title: 'Privacy',
      description:
        'How RyanHefner.com handles analytics, newsletter subscriptions, technical logs, and external services.',
      path: '/privacy',
      content: `Last updated August 27, 2026.

This is Ryan Hefner's personal site. You can browse it without creating an account, and Ryan does not sell personal information.

## Analytics and performance

The site uses Fathom Analytics to understand aggregate traffic and Vercel Speed Insights to measure performance. These services may process the requested page, referring site, browser or device characteristics, approximate location, and request timing to identify useful content and reliability or performance problems.

## Newsletter and email

If you subscribe, the email address and optional first name you provide are sent to Resend and stored in the mailing audience used to deliver updates. Newsletter messages include an unsubscribe link. Direct email messages and contact details are retained as needed to read and respond to the conversation.

## Hosting and connected services

Vercel hosts this site and may process ordinary server-log data for delivery, security, and debugging. Webmention.io receives public webmentions and pingbacks. External sites linked here apply their own privacy policies.

## Your choices

You can browse without subscribing, unsubscribe from any newsletter message, and control browser privacy settings. Email [hi@ryanhefner.com](mailto:hi@ryanhefner.com) with privacy questions or requests concerning information you submitted directly.`,
    }),
  '/projects': () =>
    renderDocument({
      title: 'Projects',
      description:
        'Projects Ryan Hefner has designed, developed, or contributed to.',
      path: '/projects',
      content: renderItems(projects),
    }),
  '/projects/archive': () =>
    renderDocument({
      title: 'Project archive',
      description: 'An archive of projects Ryan Hefner has worked on.',
      path: '/projects/archive',
      content: `Browse the current [projects index](${SITE_URL}/projects) or Ryan's [GitHub repositories](https://github.com/ryanhefner?tab=repositories) for actively maintained work.`,
    }),
  '/projects/oss': () =>
    renderDocument({
      title: 'Open-source software',
      description:
        'Open-source software Ryan Hefner has published or contributed to.',
      path: '/projects/oss',
      content: renderItems(oss),
    }),
  '/thoughts': () =>
    renderDocument({
      title: 'Thoughts',
      description: 'Articles and longer-form writing by Ryan Hefner.',
      path: '/thoughts',
      content: renderItems(
        allThoughts.map(({ description, title, url }) => ({
          description,
          name: title,
          url,
        })),
      ),
    }),
  '/updates': () =>
    renderDocument({
      title: 'Updates',
      description: 'Project and site updates from Ryan Hefner.',
      path: '/updates',
      content: `No public updates are currently listed. See [Now](${SITE_URL}/now) for the latest longer-form update.`,
    }),
  '/withoss': () =>
    renderDocument({
      title: 'Made with open-source software',
      description: 'Key open-source packages used to build RyanHefner.com.',
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

const findContentDocument = (path: string) => {
  const content = [...allNows, ...allThoughts].find(
    (document) => document.url === path,
  )

  if (!content) return undefined

  return renderDocument({
    title: content.title,
    description: content.description,
    path,
    content: content.content,
  })
}

const getNowIndex = () => {
  const latest = [...allNows].sort((a, b) => b.date.localeCompare(a.date))[0]

  if (!latest) return undefined

  return renderDocument({
    title: 'What I’m working on, now',
    description:
      'Projects, initiatives, and ideas Ryan Hefner is currently focusing on.',
    path: '/now',
    content: latest.content,
  })
}

export const getMarkdownDocument = (
  requestedPath: string,
): MarkdownDocument => {
  const path = normalizePath(requestedPath)
  const body =
    staticDocuments[path]?.() ??
    (path === '/now' ? getNowIndex() : findContentDocument(path))

  if (body) return { body, status: 200 }

  return {
    status: 404,
    body: `# Page not found

The requested path, \`${path}\`, does not exist on RyanHefner.com.

## Try one of these destinations

- [Home](${SITE_URL})
- [Projects](${SITE_URL}/projects)
- [About Ryan](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Agent guidance](${SITE_URL}/llms.txt)
- [XML sitemap](${SITE_URL}/sitemap.xml)`,
  }
}
