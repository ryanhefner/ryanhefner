import type { ComponentProps } from 'react'

import { Heading } from '@chakra-ui/react'
import { createPostkitNextComponents } from '@postkit/next'
import { createPostkitRemarkPlugins } from '@postkit/react'
import type { MDXComponents } from 'mdx/types'
import type { Components as MarkdownComponents } from 'react-markdown'

const Subheading = (props: ComponentProps<typeof Heading>) => (
  <Heading
    fontFamily="serif"
    fontSize={{ base: '2xl', md: '4xl' }}
    fontStyle="italic"
    fontWeight="normal"
    letterSpacing={{ base: -1, md: -2 }}
    maxW="container.lg"
    mt={{ base: -8, md: -12 }}
    mb={{ base: 16, md: 24 }}
    mx="auto"
    {...props}
  />
)

export const mdxComponents = createPostkitNextComponents({
  components: {
    Subheading,
  },
})

// react-markdown owns the raw Markdown render pass while Postkit supplies the
// element and directive components.
export const markdownComponents = mdxComponents as MarkdownComponents

export const markdownRemarkPlugins = createPostkitRemarkPlugins({
  postkit: {
    output: 'hast',
  },
})

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return createPostkitNextComponents({
    components: {
      Subheading,
      ...components,
    },
  })
}
