import NextLink from 'next/link'
import { chakra, Link as ChakraLink } from '@chakra-ui/react'

const ChakraNextLink = chakra(NextLink)

export const Link = ({ children, href, ...rest }) => (
  <ChakraNextLink href={href} passHref legacyBehavior>
    <ChakraLink {...rest}>{children}</ChakraLink>
  </ChakraNextLink>
)
