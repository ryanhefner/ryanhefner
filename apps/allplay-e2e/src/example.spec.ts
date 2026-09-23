import { expect, test } from '@playwright/test'

test('introduces All Play and links to the podcast and newsletter', async ({
  page,
}) => {
  await page.goto('/')

  const introduction = page.getByRole('heading', { level: 1 })
  await expect(introduction).toContainText('Welcome to All Play!')
  await expect(
    introduction.getByRole('link', { name: 'podcast', exact: true }),
  ).toHaveAttribute('href', '/podcast')
  await expect(
    introduction.getByRole('link', { name: 'newsletter', exact: true }),
  ).toHaveAttribute('href', '/newsletter')
})
