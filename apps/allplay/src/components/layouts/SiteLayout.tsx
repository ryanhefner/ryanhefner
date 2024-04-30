import { PropsWithChildren, useMemo } from 'react'

import { Flex } from '@chakra-ui/react'
import { isSafari } from 'react-device-detect'

import { SiteFooter } from '../site/SiteFooter'
import { SiteHeader } from '../site/SiteHeader'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const minH = useMemo(() => {
    if (isSafari) {
      return '-webkit-fill-available'
    }

    return '100vh'
  }, [])

  return (
    <Flex as="main" flexDir="column" minH={minH} w="full">
      <SiteHeader />
      <Flex flexDir="column" flex={1}>
        {children}
      </Flex>
      <SiteFooter />
    </Flex>
  )
}
