import { renderEmails, renderEmailsPlainText } from './emails'

describe('Emails', () => {
  it('renders email-safe HTML with inline styles', async () => {
    const html = await renderEmails({ recipientName: 'Ryan' })

    expect(html).toContain('<!DOCTYPE html PUBLIC')
    expect(html).toContain('Welcome, Ryan!')
    expect(html).toContain('background-color:#fff')
  })

  it('renders a plain-text alternative', async () => {
    const text = await renderEmailsPlainText()

    expect(text).toContain('Welcome!')
    expect(text).toContain('Welcome to Emails!')
  })
})
