import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from '../components/base'
import {
  ProjectGrid,
  ProjectGridItem,
  ProjectLink,
} from '../components/projects'
import { PageWrapper } from '../components/site'
import { SectionHeading } from '../components/typography'
import { getProjectsByUrls } from '../data/projects'

const IndexPage = () => {
  const activeProjects = getProjectsByUrls([
    'https://casters.io',
    'https://www.pregraph.com',
  ])

  return (
    <PageWrapper>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', sm: '7xl', md: '8xl', xl: '9xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        Ryan Hefner
        <br />
        <Text color="gray.600">Software Engineer + Eternal Tinkerer</Text>
      </Heading>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w="full"
        mt={{ base: 16, md: 24 }}
      >
        <Box flexBasis={{ base: 'full' }}>
          <Link href="/projects">
            <SectionHeading>Active Projects</SectionHeading>
          </Link>
          <ProjectGrid>
            {activeProjects.map((project) => (
              <ProjectGridItem key={project.url}>
                <ProjectLink {...project} />
              </ProjectGridItem>
            ))}
          </ProjectGrid>
        </Box>
        {/* <Box flexBasis={{ base: '100%', md: '50%' }} mb={16}>
          <Link href="/thoughts">
            <SectionHeading>Recent Thoughts</SectionHeading>
          </Link>
        </Box> */}
      </Flex>
    </PageWrapper>
  )
}

export default IndexPage
