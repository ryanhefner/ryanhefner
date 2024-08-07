import { Flex, Heading, Text } from '@chakra-ui/react'

import { Link } from '../base'

export const SiteHeader = () => (
  <Flex
    as="header"
    gap={8}
    alignItems="center"
    mixBlendMode="difference"
    pos="sticky"
    px={{ base: 4, md: 8 }}
    pt={{ base: 6, md: 12 }}
    top={0}
    w="100%"
    zIndex={1}
  >
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
)
