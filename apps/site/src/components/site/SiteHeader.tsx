import { Flex, HStack, Text } from '@chakra-ui/react'
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
    isolation="isolate"
    // mixBlendMode="screen"
    pt={{ base: 6, md: 20 }}
    pb={{ base: 6 }}
    px={{ base: 6, sm: 10, md: 16, xl: 24 }}
  >
    <Link href="/">
      <HStack>
        {/* <Box display="inline-block" borderRadius="full" bgColor="black" w={2} h={2} /> */}
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
      mr={{ base: 0, md: 10 }}
    >
      <Link href="/projects">
        <Text as="span" fontSize="lg">
          Projects
        </Text>
      </Link>
      <Link href="/thoughts">
        <Text as="span" fontSize="lg">
          Thoughts
        </Text>
      </Link>
      <Link href="/updates">
        <Text as="span" fontSize="lg">
          Updates
        </Text>
      </Link>
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
