import { createElement } from 'react'
import { render as renderMarkup } from 'chakra-email'

import { Emails, renderEmails } from '../emails'
import { NewsletterEmail, renderNewsletterEmail } from '../newsletter.email'
import { ThankYouEmail, renderThankYouEmail } from '../thank-you.email'
import { themeTokens, themeTypography } from '@ryanhefner/theme'
import { emailFontFamily, emailTheme } from '@ryanhefner/theme/email'

describe('shared email styling', () => {
  it('derives its palette and typography from the site tokens', () => {
    expect(emailTheme.tokens.colors.gray[700]).toBe(themeTokens.colors.gray[700])
    expect(emailTheme.tokens.fonts.body).toBe(themeTokens.fonts.body)
    expect(emailTheme.tokens.fonts.mono).toBe(themeTokens.fonts.body)
    expect(emailTheme.tokens.fonts.serif).toBe(themeTokens.fonts.body)
    expect(emailTheme.recipes.chakraEmailHeading.base.fontWeight).toBe(
      themeTypography.headingWeight,
    )
  })

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
    const colors = html.match(/#(?:[\da-f]{6}|[\da-f]{3})\b/gi) ?? []

    expect(colors.length).toBeGreaterThan(0)
    for (const raw of colors) {
      const color = raw.length === 4
        ? '#' + [...raw.slice(1)].map((value) => value.repeat(2)).join('')
        : raw
      expect(color.slice(1, 3).toLowerCase()).toBe(color.slice(3, 5).toLowerCase())
      expect(color.slice(3, 5).toLowerCase()).toBe(color.slice(5, 7).toLowerCase())
    }
    expect(html).not.toContain('oklch(')
    expect(html).not.toContain('var(--')
  })

  const modeTemplates = [
    ['welcome', createElement(Emails)],
    ['thank-you', createElement(ThankYouEmail)],
    ['newsletter', createElement(NewsletterEmail, {
      title: 'Dark-mode newsletter',
      markdown: '## Heading\n\nReadable text and a [link](https://allplay.fm).',
    })],
  ] as const

  it.each(modeTemplates)('renders %s on true black in dark mode', async (_, element) => {
    for (const colorMode of ['light', 'dark'] as const) {
      const html = await renderMarkup(element, { colorMode })
      const document = new DOMParser().parseFromString(html, 'text/html')
      const background = colorMode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
      const container = document.querySelector<HTMLElement>('table[role="presentation"]')

      expect(document.body.style.backgroundColor).toBe(background)
      expect(container?.style.backgroundColor).toBe(background)
      expect(document.body.style.color).not.toBe(background)
      expect(document.querySelector<HTMLElement>('h1')?.style.color).not.toBe(background)
      expect(document.querySelector<HTMLElement>('p')?.style.color).not.toBe(background)
    }
  })

  it.each(modeTemplates)('emits true-black system-mode CSS for %s', async (_, element) => {
    const html = await renderMarkup(element)
    const document = new DOMParser().parseFromString(html, 'text/html')
    const css = document.querySelector('style[data-chakra-email-color-mode]')?.textContent ?? ''
    const rules = new Map([...css.matchAll(/\.([\w-]+)\{([^}]+)\}/g)]
      .map((match) => [match[1], match[2]]))

    expect(css).toContain('@media (prefers-color-scheme: dark)')
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content'))
      .toBe('light dark')
    for (const element of [document.body, document.querySelector('table[role="presentation"]')]) {
      expect(element).not.toBeNull()
      expect([...element!.classList].some((name) =>
        /background-color:\s*#000(?:000)?\s*!important/.test(rules.get(name) ?? ''),
      )).toBe(true)
    }
  })
})
