import { Box, Flex, Heading, HStack, Tag, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { PageWrapper } from 'components/site'

const OSSIndexPage = () => (
  <PageWrapper>
    <Heading as="h1" fontSize={{ base: '6xl', md: '9xl' }} fontWeight="medium" lineHeight="none">
      <Text as="span" color="gray.600"><Link href="/projects" passHref><a>Projects</a></Link></Text> / Open Source Software
    </Heading>
    <Flex mt={16} w="full" flexWrap="wrap">
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/oss">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">quiktime</Heading>
            <Text color="gray.500" fontSize="xl">Condensed duration time formatting.</Text>
            <HStack>
              <Tag>Javascript / Node</Tag>
            </HStack>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/socket-logs">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Socket Logs</Heading>
            <Text color="gray.500" fontSize="xl">Real-time, remote console log viewer/recorder.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/pregraph">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Pregraph</Heading>
            <Text color="gray.500" fontSize="xl">GraphQL API analytics and optimization tools.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/link-cards">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Link Cards</Heading>
            <Text color="gray.500" fontSize="xl">Dynamically generated social share images.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/optimize-toolset">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Optimize Toolset</Heading>
            <Text color="gray.500" fontSize="xl">Automated site performance and speed tests.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/beta-codes">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Beta Codes</Heading>
            <Text color="gray.500" fontSize="xl">Tools to help you launch/grow your software products.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/pkgstats">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Pkg Stats</Heading>
            <Text color="gray.500" fontSize="xl">NPM package discovery and stats viewer.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/jam-sessions">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Jam Sessions</Heading>
            <Text color="gray.500" fontSize="xl">Community of creators, makers, doers and thinkers.</Text>
          </Box>
        </Link>
      </Box>
      <Box flexBasis={{ base: '100%', md: '25%', lg: '20%' }}>
        <Link href="/projects/newsbetters">
          <Box pb={16} pr={10}>
            <Heading as="h3" fontWeight="medium">Newsbetters</Heading>
            <Text color="gray.500" fontSize="xl">Tools to help you manage and grow your newsletter subscribers.</Text>
          </Box>
        </Link>
      </Box>
    </Flex>
  </PageWrapper>
)

export default OSSIndexPage
