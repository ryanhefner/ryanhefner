import { ReactElement, ViewTransition } from 'react'

import { Box, Center, Heading, Text } from '@chakra-ui/react'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'

const Custom404Page = () => (
  <ViewTransition>
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
          Sorry, nothing to see here.
        </Text>
        <Link href="/" color="blue.500" fontSize="3xl" mt={16}>
          Go home
        </Link>
      </Center>
    </Box>
  </ViewTransition>
)

Custom404Page.getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
)

export default Custom404Page
