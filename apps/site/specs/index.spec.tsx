import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'

import Index from '../src/pages/index'
import { system } from '../src/styles/theme'

jest.mock('react-marquease', () => ({
  __esModule: true,
  default: ({ children }) => children,
}))

// The home-page unit test exercises its content, independently of article layouts.
jest.mock('../src/components/layouts', () => ({
  SiteLayout: ({ children }) => children,
}))

describe('Index', () => {
  it('introduces Ryan and links to active projects', () => {
    render(
      <ChakraProvider value={system}>
        <Index />
      </ChakraProvider>,
    )
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Ryan Hefner',
    )
    expect(
      screen
        .getByRole('link', { name: 'Active Projects' })
        .getAttribute('href'),
    ).toBe('/projects')
  })
})
