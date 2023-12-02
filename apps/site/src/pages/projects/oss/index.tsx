import { Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'
import { Link } from '../../../components/base'
import { SiteLayout } from '../../../components/layouts'
import {
  ProjectGrid,
  ProjectGridItem,
  ProjectLink,
} from '../../../components/projects'
import { PageWrapper } from '../../../components/site'
import { oss as projects } from '../../../data/projects'
import { PageHeading } from '../../../components/typography'

const TITLE = 'Projects / Open Source Software | Ryan Hefner - All Play'
const DESCRIPTION =
  'It has been fun writing and maintaing open source software. Here are some of my contributions to the developer community.'

const OSSIndexPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <PageWrapper>
      <PageHeading>
        <Text as="span" color="gray.600">
          <Link href="/projects">Projects</Link>
        </Text>{' '}
        / Open–Source Software
      </PageHeading>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectGridItem key={project.url}>
            <ProjectLink {...project} />
          </ProjectGridItem>
        ))}
      </ProjectGrid>
    </PageWrapper>
  </>
)

OSSIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default OSSIndexPage
