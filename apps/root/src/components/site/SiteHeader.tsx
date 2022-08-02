import { Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'components/base'

export const SiteHeader = () => (
  <Flex
    as="header"
    flexDir={{ base: 'column', md: 'row' }}
    alignItems={{ base: 'flex-start', md: 'center' }}
    justifyContent="space-between"
    w="100%"
    pt={{ base: 6, md: 20 }}
    pb={{ base: 6 }}
    px={{ base: 6, md: 24 }}
  >
    <Link href="/">
      <HStack>
        {/* <Box display="inline-block" borderRadius="full" bgColor="black" w={2} h={2} /> */}
        <Text fontSize="lg" fontWeight="medium">Ryan Hefner - All Play</Text>
      </HStack>
    </Link>
    <HStack as="nav" spacing={{ base: 3, md: 6 }} mr={{ base: 0, md: 10 }}>
      <Link href="/projects">
        <Text as="span" fontSize="lg">Projects</Text>
      </Link>
      {/* <Link href="/thoughts">
        <Text as="span" fontSize="lg">Thoughts</Text>
      </Link> */}
      <Link href="/about">
        <Text as="span" fontSize="lg">About</Text>
      </Link>
      <Link href="/now">
        <Text as="span" fontSize="lg">Now</Text>
      </Link>
    </HStack>
  </Flex>
)
