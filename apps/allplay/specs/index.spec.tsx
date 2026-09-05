import { ChakraProvider } from '@chakra-ui/react'
import { render, screen, within } from '@testing-library/react'

import Index from '../src/pages/index'
import { system } from '../src/styles/theme'

jest.mock('react-marquease', () => ({
  __esModule: true,
  default: ({ children }) => children,
}))

describe('Index', () => {
  it('introduces All Play and exposes podcast and newsletter navigation', () => {
    render(
      <ChakraProvider value={system}>
        <Index episodes={[]} />
      </ChakraProvider>,
    )
    const introduction = screen.getByRole('heading', { level: 1 })
    expect(introduction.textContent).toContain('Welcome to All Play!')
    expect(
      within(introduction)
        .getByRole('link', { name: 'podcast', exact: true })
        .getAttribute('href'),
    ).toBe('/podcast')
    expect(
      within(introduction)
        .getByRole('link', { name: 'newsletter', exact: true })
        .getAttribute('href'),
    ).toBe('/newsletter')
  })
})
