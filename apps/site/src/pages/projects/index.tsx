import { SiteMeta } from 'next-meta'
import { SiteLayout } from '../../components/layouts'
import {
  ProjectGrid,
  ProjectGridItem,
  ProjectLink,
} from '../../components/projects'
import { PageWrapper } from '../../components/site'
import { projects } from '../../data/projects'
import { PageHeading } from '../../components/typography'

const TITLE = 'Projects | Ryan Hefner - All Play'
const DESCRIPTION =
  'Some of the projects I’ve had the pleasure to build/contribute to.'

const ProjectsPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <PageWrapper>
      <PageHeading>Projects</PageHeading>
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

ProjectsPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default ProjectsPage
