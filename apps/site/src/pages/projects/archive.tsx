import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from '../../components/base';
import { PageWrapper } from '../../components/site';

const ProjectsArchivePage = () => (
  <>
    <Head>
      <title>Ryan Hefner - All Play - Projects</title>
    </Head>
    <PageWrapper>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', md: '9xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        <Text as="span" color="gray.600">
          <Link href="/projects" passHref>
            <a>Projects</a>
          </Link>
        </Text>{' '}
        / Archive
      </Heading>
      <Flex mt={16} w="full" flexWrap="wrap">
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/oss">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                OSS
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Open source software contributions to the community.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/neighborgoods">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Neighborgoods
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Co-op owned ecommerce and curency platform.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/casters">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Casters
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Real-time communication and data streaming tools.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/socket-logs">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Socket Logs
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Real-time, remote console log viewer/recorder.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/pregraph">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Pregraph
              </Heading>
              <Text color="gray.500" fontSize="xl">
                GraphQL API analytics, caching, and federation tools.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/link-cards">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Link Cards
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Dynamically generated social share images.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/optimize-toolset">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Optimize Toolset
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Automated site performance and speed tests.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/beta-codes">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Beta Codes
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Tools to help you launch/grow your sites &amp; software
                products.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/pkgstats">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Pkg Stats
              </Heading>
              <Text color="gray.500" fontSize="xl">
                NPM package discovery and stats viewer.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/jam-sessions">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Jam Sessions
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Community of creators, makers, doers and thinkers.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/newsbetters">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Newsbetters
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Tools to help you manage and grow your newsletter subscribers.
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/ticktocktrack">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Tick Tock Track
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Time tracking for me, and you (but mostly, me).
              </Text>
            </Box>
          </Link>
        </Box>
        <Box
          flexBasis={{
            base: '100%',
            sm: '50%',
            md: '33.3%',
            lg: '25%',
            xl: '20%',
          }}
        >
          <Link href="/projects/playnice">
            <Box pb={16} pr={10}>
              <Heading
                as="h3"
                fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
                fontWeight="medium"
              >
                Play Nice
              </Heading>
              <Text color="gray.500" fontSize="xl">
                Project studio/consultancy overseeing all these bad boys.
              </Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </PageWrapper>
  </>
);

export default ProjectsArchivePage;
