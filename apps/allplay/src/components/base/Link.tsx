import { PropsWithChildren } from 'react'

import { Link as ChakraLink } from '@chakra-ui/react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

type LinkProps = PropsWithChildren & ChakraLinkProps

export const Link = ({ children, href, ...rest }: LinkProps) => (
  <ChakraLink as={NextLink} href={href} {...rest}>
    {children}
  </ChakraLink>
)
