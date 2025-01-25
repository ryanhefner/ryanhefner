import { Flex, Heading, Text } from '@chakra-ui/react'

import { Link } from '../base'

export const SiteHeader = () => (
  <>
    <Flex
      bgColor="red.500"
      color="white"
      justifyContent="center"
      py={2}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2}
    >
      <Link
        href="https://youtube.com/playlist?list=PLuFdIOfmEGP0xvjt2yng9FErsMTVTk1Of&si=H0RpnIlvOhwg5Q2j"
        isExternal
      >
        <Text>Watch the latest episodes on YouTube</Text>
      </Link>
    </Flex>
    <Flex
      as="header"
      flexDir="column"
      mixBlendMode="difference"
      pos="sticky"
      px={{ base: 4, md: 8 }}
      pt={{ base: 16 }}
      top={0}
      w="100%"
      zIndex={1}
    >
      <Flex alignItems="center" gap={8}>
        <Link href="/">
          <Heading fontSize="lg">— All Play</Heading>
        </Link>
        <Link href="/podcast">
          <Text fontSize="lg">Podcast</Text>
        </Link>
        <Link href="/newsletter">
          <Text fontSize="lg">Newsletter</Text>
        </Link>
      </Flex>
    </Flex>
  </>
)
