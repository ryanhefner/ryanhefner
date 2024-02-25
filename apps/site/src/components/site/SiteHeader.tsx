import { Flex, HStack, Text } from '@chakra-ui/react'
import { allThoughts, allUpdates } from 'contentlayer/generated'
import { Link } from '../base'

export const SiteHeader = () => (
  <Flex
    as="header"
    flexDir={{ base: 'column', md: 'row' }}
    alignItems={{ base: 'flex-start', md: 'center' }}
    justifyContent="space-between"
    w="100%"
    pos="sticky"
    top={0}
    zIndex={1}
    mixBlendMode="difference"
    pt={{ base: 6, md: 20 }}
    pb={{ base: 6 }}
    px={{ base: 6, sm: 10, md: 16, xl: 24 }}
  >
    <Link href="/" color="white">
      <HStack>
        <Text fontSize="lg" fontWeight="medium">
          Ryan Hefner - All Play
        </Text>
      </HStack>
    </Link>
    <Flex
      as="nav"
      flexWrap="wrap"
      columnGap={{ base: 3, md: 6 }}
      rowGap={0}
      color="white"
    >
      <Link href="/projects">
        <Text as="span" fontSize="lg">
          Projects
        </Text>
      </Link>
      {allThoughts.length ? (
        <Link href="/thoughts">
          <Text as="span" fontSize="lg">
            Thoughts
          </Text>
        </Link>
      ) : null}
      {allUpdates.length ? (
        <Link href="/updates">
          <Text as="span" fontSize="lg">
            Updates
          </Text>
        </Link>
      ) : null}
      <Link href="/about">
        <Text as="span" fontSize="lg">
          About
        </Text>
      </Link>
      <Link href="/now">
        <Text as="span" fontSize="lg">
          Now
        </Text>
      </Link>
    </Flex>
  </Flex>
)
