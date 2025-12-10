import { PropsWithChildren, ViewTransition } from 'react'

import { Flex } from '@chakra-ui/react'

import { Link } from '../base'
import { SiteFooter } from '../site/SiteFooter'
import { SiteHeader } from '../site/SiteHeader'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout = ({ children }: SiteLayoutProps) => (
  <Flex as="main" flexDir="column" minH="100dvh" w="full">
    <Link
      href="#main-content"
      position="absolute"
      top={-10}
      left={0}
      bg="red.500"
      color="white"
      px={4}
      py={2}
      zIndex={1000}
      _focus={{ top: 0 }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'white',
        outlineOffset: '2px',
      }}
    >
      Skip to main content
    </Link>
    <SiteHeader />
    <Flex id="main-content" flexDir="column" flex={1} tabIndex={-1}>
      <ViewTransition>{children}</ViewTransition>
    </Flex>
    <SiteFooter />
  </Flex>
)
