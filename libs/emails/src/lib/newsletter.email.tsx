import { Heading, Link, Text, render, renderPlainText } from 'chakra-email'

import { EmailShell } from './components/email-shell'
import { MarkdownContent } from './components/markdown-content'

export interface NewsletterEmailProps {
  issueUrl?: string
  markdown: string
  preheader?: string
  title: string
  unsubscribeUrl?: string
}

const sampleMarkdown = `
## What I’m working on

I’ve been exploring how small, focused tools can make publishing on the open web feel a little more fun.

- A fresh podcast episode
- Notes from a work in progress
- A few useful links worth sharing

> Make things, learn in public, and keep the web weird.

[Listen to All Play](https://allplay.fm/podcast)
`.trim()

export const previewProps = {
  issueUrl: 'https://allplay.fm/newsletter/sample-issue',
  markdown: sampleMarkdown,
  preheader: 'New work, recent finds, and updates from All Play.',
  title: 'Notes from the workbench',
  unsubscribeUrl: 'https://example.com/unsubscribe',
} satisfies NewsletterEmailProps

export function NewsletterEmail({
  issueUrl,
  markdown,
  preheader,
  title,
  unsubscribeUrl,
}: NewsletterEmailProps) {
  return (
    <EmailShell
      preview={preheader ?? title}
      title={title}
      unsubscribeUrl={unsubscribeUrl}
    >
      <Heading as="h1" fontSize="3xl" lineHeight="short" mb={6} mt={0}>
        {title}
      </Heading>
      <MarkdownContent markdown={markdown} />
      {issueUrl ? (
        <Text color="gray.500" fontSize="sm" lineHeight="base" mb={0} mt={8}>
          Prefer reading on the web?{' '}
          <Link color="gray.700" href={issueUrl}>
            View this issue online
          </Link>
          .
        </Text>
      ) : null}
    </EmailShell>
  )
}

export function renderNewsletterEmail(props: NewsletterEmailProps) {
  return render(<NewsletterEmail {...props} />, { pretty: true })
}

export function renderNewsletterEmailPlainText(props: NewsletterEmailProps) {
  return renderPlainText(<NewsletterEmail {...props} />)
}

export default NewsletterEmail
