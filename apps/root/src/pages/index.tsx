import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { ProjectLink } from 'components/projects'
import { PageWrapper } from 'components/site'
import { getProjectsByUrls } from 'data/projects'

const IndexPage = () => {
  const activeProjects = getProjectsByUrls(['https://www.pregraph.com'])

  return (
    <PageWrapper>
      <Heading as="h1" fontSize={{ base: '6xl', md: '9xl' }} fontWeight="medium" lineHeight="none">
        Ryan Hefner<br />
        <Text color="gray.600">
          Software Engineer + Eternal Tinkerer
        </Text>
      </Heading>
      <Flex flexDir={{ base: 'column', md: 'row' }} w="full" mt={32}>
        <Box flexBasis={{ base: '100%', md: '50%' }}>
          <Link href="/projects">
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="medium">
              Active Projects
            </Heading>
          </Link>
          <Box my={8}>
            {activeProjects.map((project) => (
              <ProjectLink key={project.url} {...project} />
            ))}
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
}

export default IndexPage
