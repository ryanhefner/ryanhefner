import type { ComponentProps } from 'react'

import { Heading } from '@chakra-ui/react'
import { createPostkitNextComponents } from '@postkit/next'
import type { MDXComponents } from 'mdx/types'

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
    // Existing articles use this site-specific MDX element.
    Subheading,
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
