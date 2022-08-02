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
    <Link href="/" passHref>
      <a>
        <HStack>
          {/* <Box display="inline-block" borderRadius="full" bgColor="black" w={2} h={2} /> */}
          <Text fontSize="lg" fontWeight="medium">Ryan Hefner - All Play</Text>
        </HStack>
      </a>
    </Link>
    <HStack as="nav" spacing={{ base: 3, md: 6 }} mr={{ base: 0, md: 10 }}>
      <Link href="/projects" passHref>
        <a>
          <Text as="span" fontSize="lg">Projects</Text>
        </a>
      </Link>
      {/* <Link href="/thoughts" passHref>
        <a>
          <Text as="span" fontSize="lg">Thoughts</Text>
        </a>
      </Link> */}
      <Link href="/about" passHref>
        <a>
          <Text as="span" fontSize="lg">About</Text>
        </a>
      </Link>
      <Link href="/now" passHref>
        <a>
          <Text as="span" fontSize="lg">Now</Text>
        </a>
      </Link>
    </HStack>
  </Flex>
)
