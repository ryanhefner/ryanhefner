import { readFile } from 'node:fs/promises'

import {
  type NewsletterEmailProps,
  renderNewsletterEmail,
  renderNewsletterEmailPlainText,
} from './newsletter.email'

export interface NewsletterMarkdownFileProps extends Omit<
  NewsletterEmailProps,
  'markdown'
> {
  markdownFile: string | URL
}

async function getNewsletterEmailProps({
  markdownFile,
  ...props
}: NewsletterMarkdownFileProps): Promise<NewsletterEmailProps> {
  const markdown = await readFile(markdownFile, 'utf8')

  return { ...props, markdown }
}

export async function renderNewsletterEmailFromMarkdownFile(
  props: NewsletterMarkdownFileProps,
) {
  return renderNewsletterEmail(await getNewsletterEmailProps(props))
}

export async function renderNewsletterEmailPlainTextFromMarkdownFile(
  props: NewsletterMarkdownFileProps,
) {
  return renderNewsletterEmailPlainText(await getNewsletterEmailProps(props))
}
