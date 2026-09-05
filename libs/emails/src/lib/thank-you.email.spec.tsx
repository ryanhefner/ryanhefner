import {
  renderThankYouEmail,
  renderThankYouEmailPlainText,
} from './thank-you.email'

describe('ThankYouEmail', () => {
  it('renders a personalized, email-safe thank-you message', async () => {
    const html = await renderThankYouEmail({
      firstName: 'Ryan',
      unsubscribeUrl: 'https://example.com/unsubscribe',
    })

    expect(html).toContain('Thanks for subscribing, Ryan!')
    expect(html).toContain('https://allplay.fm/newsletter')
    expect(html).toContain('https://example.com/unsubscribe')
    expect(html).toContain('background-color:#EF4444')
  })

  it('renders an anonymous plain-text alternative', async () => {
    const text = await renderThankYouEmailPlainText()

    expect(text).toContain('Thanks for subscribing!')
    expect(text).toContain('Visit the newsletter')
    expect(text).toContain('Thanks,\nRyan')
  })
})
