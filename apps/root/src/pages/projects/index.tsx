import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import { ProjectGrid, ProjectGridItem, ProjectLink } from '../../components/projects'
import { PageWrapper } from '../../components/site'
import { projects } from '../../data/projects'

const TITLE = 'Projects | Ryan Hefner - All Play'
const DESCRIPTION = 'Some of the projects I’ve had the pleasure to build/contribute to.'

const ProjectsPage = () => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
    <PageWrapper>
      <Heading as="h1" fontSize={{ base: '6xl', md: '9xl' }} fontWeight="medium" lineHeight="none">
        Projects
      </Heading>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectGridItem key={project.url}>
            <ProjectLink {...project} />
          </ProjectGridItem>
        ))}
      </ProjectGrid>
      {/* <Box pt={{ base: 10, md: 10 }} pb={{ base: 10, md: 24 }}>
        <Text>
          Curious about other stuff I have built?<br />
          <Link href="/projects/archive">
            <Text as="span">Check out the archive &rarr;</Text>
          </Link>
        </Text>
      </Box> */}
    </PageWrapper>
  </>
)

export default ProjectsPage
