import { ReactElement } from 'react'

import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'

const Custom404Page = () => (
  <Box
    flex="1"
    py={{ base: 6 }}
    px={{ base: 6, sm: 10, md: 16, xl: 24 }}
    pos="relative"
  >
    <Center
      pos={{ base: 'relative', md: 'absolute' }}
      top={0}
      left={0}
      w="full"
      height="full"
      flexDir="column"
      textAlign="center"
      pb={{ base: 16, md: 32 }}
    >
      <Text fontWeight="semibold">404</Text>
      <Heading fontSize={{ base: '6xl', sm: '7xl', md: '9xl' }}>
        You peeking in on me!?
      </Heading>
      <Text fontSize="2xl" mt={16}>
        That page doesn’t exist. Try one of these destinations instead.
      </Text>
      <Flex justify="center" flexWrap="wrap" gap={6} mt={16}>
        <Link href="/" color="blue.500" fontSize="xl">
          Home
        </Link>
        <Link href="/about" color="blue.500" fontSize="xl">
          About
        </Link>
        <Link href="/podcast" color="blue.500" fontSize="xl">
          Podcast
        </Link>
        <Link href="/newsletter" color="blue.500" fontSize="xl">
          Newsletter
        </Link>
        <Link href="/contact" color="blue.500" fontSize="xl">
          Contact
        </Link>
        <Link href="/llms.txt" color="blue.500" fontSize="xl">
          Agent guidance
        </Link>
        <Link href="/sitemap.xml" color="blue.500" fontSize="xl">
          Sitemap
        </Link>
      </Flex>
    </Center>
  </Box>
)

Custom404Page.getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
)

export default Custom404Page
