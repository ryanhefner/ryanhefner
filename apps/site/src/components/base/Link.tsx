import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, href, ...rest }) => (
  <ChakraLink as={NextLink} href={href} {...rest}>
    {children}
  </ChakraLink>
)
