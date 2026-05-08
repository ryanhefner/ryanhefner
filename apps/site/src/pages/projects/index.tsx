import { SiteMeta } from 'next-meta'
import { BreadcrumbJsonLd, Schema } from 'react-structured'

import { SiteLayout } from '../../components/layouts'
import {
  ProjectGrid,
  ProjectGridItem,
  ProjectLink,
} from '../../components/projects'
import { PageWrapper } from '../../components/site'
import { PageHeading } from '../../components/typography'
import { projects } from '../../data/projects'
import {
  getBreadcrumbData,
  getCollectionPageData,
} from '../../utils/structured-data'

const TITLE = 'Projects | Ryan Hefner - All Play'
const DESCRIPTION =
  'Some of the projects I’ve had the pleasure to build/contribute to.'

const ProjectsPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <Schema
      id="projects-collection-jsonld"
      type="CollectionPage"
      data={getCollectionPageData({
        title: TITLE,
        description: DESCRIPTION,
        url: '/projects',
        items: projects,
      })}
    />
    <BreadcrumbJsonLd
      id="projects-breadcrumb-jsonld"
      data={getBreadcrumbData([
        { name: 'Home', url: '/' },
        { name: 'Projects' },
      ])}
    />
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
