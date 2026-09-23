import { Center, Flex, Text } from '@chakra-ui/react'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading } from '../components/typography'

const Custom404Page = () => (
  <PageWrapper pos="relative">
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
      <PageHeading fontSize={{ base: '6xl', sm: '7xl', md: '9xl' }}>
        You peeking in on me!?
      </PageHeading>
      <Text fontSize="2xl" mt={16}>
        Sorry, nothing to see here. Try one of these instead.
      </Text>
      <Flex
        as="nav"
        aria-label="Page recovery"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ base: 4, md: 8 }}
        fontSize={{ base: '2xl', md: '3xl' }}
        mt={16}
      >
        <Link href="/" color="blue.500">
          Home
        </Link>
        <Link href="/projects" color="blue.500">
          Projects
        </Link>
        <Link href="/about" color="blue.500">
          About
        </Link>
        <Link href="/contact" color="blue.500">
          Contact
        </Link>
      </Flex>
      <Text fontFamily="mono" fontSize="sm" mt={10}>
        Agents can also check <Link href="/llms.txt">llms.txt</Link> or the{' '}
        <Link href="/sitemap.xml">sitemap</Link>.
      </Text>
    </Center>
  </PageWrapper>
)

Custom404Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default Custom404Page
