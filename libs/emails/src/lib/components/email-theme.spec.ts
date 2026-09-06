import { renderEmails } from '../emails'
import { renderNewsletterEmail } from '../newsletter.email'
import { renderThankYouEmail } from '../thank-you.email'
import { emailFontFamily } from './email-theme'

describe('shared email styling', () => {
  const templates = [
    ['welcome', () => renderEmails()],
    ['thank-you', () => renderThankYouEmail()],
    [
      'newsletter',
      () =>
        renderNewsletterEmail({
          title: 'Newsletter',
          markdown:
            '## Heading\n\nA [link](https://allplay.fm) and `inline code`.\n\n' +
            '> A quote\n\n```js\nconst example = true\n```',
        }),
    ],
  ] as const

  it.each(templates)('uses only the sans-serif stack in %s', async (_, render) => {
    const document = new DOMParser().parseFromString(await render(), 'text/html')
    const expected = document.createElement('span')
    expected.style.fontFamily = emailFontFamily

    expect(document.body.style.fontFamily).toBe(expected.style.fontFamily)
    for (const element of document.querySelectorAll<HTMLElement>('[style]')) {
      if (element.style.fontFamily) {
        expect(element.style.fontFamily).toBe(expected.style.fontFamily)
      }
    }
    for (const element of document.querySelectorAll<HTMLElement>('h1, h2, code, pre')) {
      expect(element.style.fontFamily).toBe(expected.style.fontFamily)
    }
  })

  it.each(templates)('keeps %s colors neutral', async (_, render) => {
    const html = await render()
    const colors = html.match(/#[\da-f]{6}\b/gi) ?? []

    expect(colors.length).toBeGreaterThan(0)
    for (const color of colors) {
      expect(color.slice(1, 3).toLowerCase()).toBe(color.slice(3, 5).toLowerCase())
      expect(color.slice(3, 5).toLowerCase()).toBe(color.slice(5, 7).toLowerCase())
    }
  })
})
