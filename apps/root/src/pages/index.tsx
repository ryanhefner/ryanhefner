import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { ProjectLink } from 'components/projects'
import { PageWrapper } from 'components/site'

const IndexPage = () => (
  <PageWrapper>
    <Heading as="h1" fontSize={{ base: '6xl', md: '9xl' }} fontWeight="medium" lineHeight="none">
      Ryan Hefner<br />
      <Text color="gray.600">
        Software Engineer + Eternal Tinkerer
      </Text>
    </Heading>
    <Flex flexDir={{ base: 'column', md: 'row' }} w="full" mt={16}>
      <Box flexBasis={{ base: '100%', md: '50%' }} mb={16}>
        <Link href="/projects">
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="medium">
            Active Projects
          </Heading>
        </Link>
        <Box my={8}>
          <ProjectLink
            name="Pregraph"
            description="GraphQL API analytics, caching, and federation tools."
            slug="/projects/pregraph"
          />
        </Box>
      </Box>
      {/* <Box flexBasis={{ base: '100%', md: '50%' }} mb={16}>
        <Link href="/thoughts">
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="medium">
            Recent Thoughts
          </Heading>
        </Link>
      </Box> */}
    </Flex>
  </PageWrapper>
)

export default IndexPage
