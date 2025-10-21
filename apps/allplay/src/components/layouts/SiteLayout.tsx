import { PropsWithChildren, ViewTransition } from 'react'

import { Flex } from '@chakra-ui/react'

import { SiteFooter } from '../site/SiteFooter'
import { SiteHeader } from '../site/SiteHeader'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout = ({ children }: SiteLayoutProps) => (
  <Flex as="main" flexDir="column" minH="100dvh" w="full">
    <SiteHeader />
    <Flex flexDir="column" flex={1}>
      <ViewTransition>{children}</ViewTransition>
    </Flex>
    <SiteFooter />
  </Flex>
)
