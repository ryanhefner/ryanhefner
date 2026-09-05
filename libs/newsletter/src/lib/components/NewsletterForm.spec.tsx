import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { NewsletterForm } from './NewsletterForm'

vi.mock('react-marquease', () => ({ default: ({ children }) => children }))

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('NewsletterForm', () => {
  it.each(['provider', 'network'])(
    'shows a retry message after a %s failure',
    async (failure) => {
      const fetch = vi.fn()
      if (failure === 'provider')
        fetch.mockResolvedValue({
          ok: false,
          json: async () => ({ success: false }),
        })
      else fetch.mockRejectedValue(new Error('Offline'))
      vi.stubGlobal('fetch', fetch)
      const { container } = render(
        <ChakraProvider value={defaultSystem}>
          <NewsletterForm />
        </ChakraProvider>,
      )
      fireEvent.change(screen.getByRole('textbox', { name: /Email/ }), {
        target: { value: 'reader@example.com' },
      })
      fireEvent.submit(container.querySelector('form')!)
      expect((await screen.findByRole('alert')).textContent).toContain(
        'Please try again',
      )
      expect(screen.getByRole('button').hasAttribute('disabled')).toBe(false)
    },
  )
})
