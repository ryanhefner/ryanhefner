import { ChakraProvider } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { render, screen, within } from '@testing-library/react'

import Index, { getStaticProps } from '../src/pages/index'
import { system } from '../src/styles/theme'
import type { GetStaticPropsContext } from 'next'

const getFeed = jest.fn().mockResolvedValue({ items: [] })
jest.mock('use-podcast', () => ({ usePodcast: () => ({ getFeed }) }))

jest.mock('react-marquease', () => ({
  __esModule: true,
  default: ({ children }: PropsWithChildren) => children,
}))

describe('Index', () => {
  it.each(['build', 'on-demand', 'stale'] as const)(
    'uses the correct freshness policy for %s generation',
    async (revalidateReason) => {
      await getStaticProps({ revalidateReason } as GetStaticPropsContext)
      expect(getFeed).toHaveBeenLastCalledWith({
        forceRefresh: revalidateReason !== 'build',
      })
    },
  )
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
        .getByRole('link', { name: 'podcast' })
        .getAttribute('href'),
    ).toBe('/podcast')
    expect(
      within(introduction)
        .getByRole('link', { name: 'newsletter' })
        .getAttribute('href'),
    ).toBe('/newsletter')
  })
})
