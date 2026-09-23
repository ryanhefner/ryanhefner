import { resolve } from 'node:path'

import { renderNewsletterEmailFromMarkdownFile } from './newsletter-file'
import {
  renderNewsletterEmail,
  renderNewsletterEmailPlainText,
} from './newsletter.email'

const props = {
  markdown: `
## This week

Read the **latest update** and visit [All Play](https://allplay.fm).

- One useful link
- One new idea

| Item | Status |
| --- | --- |
| Markdown | Ready |

<script>alert('not email content')</script>
`.trim(),
  title: 'Notes from the workbench',
}

describe('NewsletterEmail', () => {
  it('renders supported Markdown into email-safe components', async () => {
    const html = await renderNewsletterEmail(props)

    expect(html).toContain('Notes from the workbench')
    expect(html).toContain('<h2')
    expect(html).toContain('This week')
    expect(html).toContain('href="https://allplay.fm"')
    expect(html).toContain('<ul')
    expect(html).toContain('<table')
    expect(html).toContain('Markdown')
    expect(html).not.toContain('<script>')
    expect(html).not.toContain("alert('not email content')")
  })

  it('renders a plain-text alternative from Markdown', async () => {
    const text = await renderNewsletterEmailPlainText(props)

    expect(text).toContain('This week')
    expect(text).toContain('latest update')
    expect(text).toContain('https://allplay.fm')
  })

  it('loads the newsletter body from a referenced Markdown file', async () => {
    const html = await renderNewsletterEmailFromMarkdownFile({
      markdownFile: resolve('libs/emails/src/lib/__fixtures__/newsletter.md'),
      title: 'A file-backed newsletter',
    })

    expect(html).toContain('A file-backed newsletter')
    expect(html).toContain('A Markdown-powered issue')
    expect(html).toContain('This content was loaded from a referenced')
  })
})
