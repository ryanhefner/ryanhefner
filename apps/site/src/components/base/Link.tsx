import { PropsWithChildren } from 'react'

import { Link as ChakraLink } from '@chakra-ui/react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

type LinkProps = PropsWithChildren & ChakraLinkProps & NextLinkProps

export const Link = ({
  children,
  href,
  // Next.js Link props
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  // HTML anchor props
  rel,
  target,
  title,
  // Chakra UI styling props go to ...rest
  ...rest
}: LinkProps) => (
  <ChakraLink asChild {...rest}>
    <NextLink
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      rel={rel}
      target={target}
      title={title}
    >
      {children}
    </NextLink>
  </ChakraLink>
)
