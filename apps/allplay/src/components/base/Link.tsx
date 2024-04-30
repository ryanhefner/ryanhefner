import { MouseEvent, PropsWithChildren, useCallback } from 'react'

import { Link as ChakraLink } from '@chakra-ui/react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

type LinkProps = PropsWithChildren & ChakraLinkProps

export const Link = ({ children, href, ...rest }: LinkProps) => {
  const handleClick = useCallback(
    (evt: MouseEvent) => {
      if (href?.startsWith('#')) {
        evt.preventDefault()

        const target = document.querySelector(href)
        window.scrollTo({
          top: target?.getBoundingClientRect().top,
          left: 0,
          behavior: 'smooth',
        })
      }
    },
    [href],
  )

  return (
    <ChakraLink as={NextLink} href={href} onClick={handleClick} {...rest}>
      {children}
    </ChakraLink>
  )
}
