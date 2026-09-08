import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@ryanhefner/theme/site'
import { render, screen } from '@testing-library/react'

import { SiteHeader } from '../src/components/site/SiteHeader'

jest.mock('content-collections', () => ({ allUpdates: [] }))

describe('SiteHeader', () => {
  it('keeps home navigation on the current origin even with a production site URL', () => {
    const previousUrl = process.env.NEXT_PUBLIC_SITE_URL
    process.env.NEXT_PUBLIC_SITE_URL = 'https://www.ryanhefner.com'

    try {
      render(
        <ChakraProvider value={system}>
          <SiteHeader />
        </ChakraProvider>,
      )

      const href = screen.getByRole('link', { name: 'Ryan Hefner' }).getAttribute('href')
      expect(href).toBe('/')
      expect(new URL(href!, 'https://ryanhefner.test/now').href)
        .toBe('https://ryanhefner.test/')
      expect(new URL(href!, 'https://www.ryanhefner.com/now').href)
        .toBe('https://www.ryanhefner.com/')
    } finally {
      if (previousUrl === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previousUrl
      }
    }
  })
})
