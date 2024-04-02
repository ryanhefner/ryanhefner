import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
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
    'https://www.productapes.com',
    'https://github.com/accesscache',
    'https://github.com/playstack',
  ])

  return (
    <PageWrapper>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', sm: '7xl', md: '8xl', '2xl': '9xl' }}
        fontWeight="medium"
        letterSpacing={{ base: -2, md: -4 }}
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
          <ProjectGrid
            mt={6}
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
          >
            {activeProjects.map((project) => (
              <ProjectGridItem key={project.url}>
                <ProjectLink {...project} showImage />
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

IndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default IndexPage
