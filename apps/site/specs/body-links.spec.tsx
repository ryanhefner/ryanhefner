import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@ryanhefner/theme/site'
import { render } from '@testing-library/react'

import { SiteLayout } from '../src/components/layouts/SiteLayout'

jest.mock('react-marquease', () => ({
  __esModule: true,
  default: ({ children }) => children,
}))

jest.mock('../src/components/site', () => ({
  SiteHeader: () => (
    <header>
      <p>
        <a href="/">Header</a>
      </p>
    </header>
  ),
  SiteFooter: () => (
    <footer>
      <p>
        <a href="/contact">Footer</a>
      </p>
    </footer>
  ),
}))

describe('body-copy links', () => {
  const originalObserver = globalThis.IntersectionObserver

  beforeAll(() => {
    globalThis.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  afterAll(() => {
    globalThis.IntersectionObserver = originalObserver
  })

  it('emits a blue rule matching copy but not navigation, buttons, or linked cards', () => {
    const { container } = render(
      <ChakraProvider value={system}>
        <SiteLayout>
          <p>
            <a href="/contact">Paragraph</a>
          </p>
          <p>
            <a href="/projects/oss">
              <code>Package</code>
            </a>
          </p>
          <ul>
            <li>
              <a href="/now">List</a>
            </li>
          </ul>
          <blockquote>
            <a href="/thoughts">Quote</a>
          </blockquote>
          <dl>
            <dd>
              <a href="/about">Definition</a>
            </dd>
          </dl>
          <figure>
            <figcaption>
              <a href="/projects">Caption</a>
            </figcaption>
          </figure>
          <nav>
            <ul>
              <li>
                <a href="/">Navigation</a>
              </li>
            </ul>
          </nav>
          <p>
            <a href="/contact" role="button">
              Button
            </a>
          </p>
          <a href="/projects">
            <p>Linked card</p>
          </a>
        </SiteLayout>
      </ChakraProvider>,
    )
    // Emotion inserts rules through the CSSOM in the browser environment.
    const css = Array.from(document.styleSheets)
      .flatMap((sheet) => Array.from(sheet.cssRules, (rule) => rule.cssText))
      .join('\n')
    const rules = Array.from(
      css.matchAll(
        /([^{}]+)\{\s*color:\s*var\(--chakra-colors-blue-fg\);?\s*\}/g,
      ),
    )
    const bodyRule = rules.find(([rule]) => rule.includes(':where(p,'))

    expect(bodyRule).toBeDefined()
    expect(
      Array.from(container.querySelectorAll(bodyRule![1])).map(
        (link) => link.textContent,
      ),
    ).toEqual([
      'Paragraph',
      'Package',
      'List',
      'Quote',
      'Definition',
      'Caption',
    ])

    const codeRule = Array.from(
      css.matchAll(/([^{}]+)\{\s*color:\s*inherit;?\s*\}/g),
    ).find(([rule]) => rule.includes(':where(p,') && rule.includes(' code'))
    expect(codeRule).toBeDefined()
    expect(container.querySelector(codeRule![1])?.textContent).toBe('Package')
  })
})
