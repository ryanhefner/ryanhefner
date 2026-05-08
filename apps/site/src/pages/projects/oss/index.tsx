import { Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'
import { BreadcrumbJsonLd, Schema } from 'react-structured'

import { Link } from '../../../components/base'
import { SiteLayout } from '../../../components/layouts'
import {
  ProjectGrid,
  ProjectGridItem,
  ProjectLink,
} from '../../../components/projects'
import { PageWrapper } from '../../../components/site'
import { PageHeading } from '../../../components/typography'
import { oss as projects } from '../../../data/projects'
import {
  getBreadcrumbData,
  getCollectionPageData,
} from '../../../utils/structured-data'

const TITLE = 'Projects / Open Source Software | Ryan Hefner - All Play'
const DESCRIPTION =
  'It has been fun writing and maintaing open source software. Here are some of my contributions to the developer community.'

const OSSIndexPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <Schema
      id="oss-collection-jsonld"
      type="CollectionPage"
      data={getCollectionPageData({
        title: TITLE,
        description: DESCRIPTION,
        url: '/projects/oss',
        items: projects,
      })}
    />
    <BreadcrumbJsonLd
      id="oss-breadcrumb-jsonld"
      data={getBreadcrumbData([
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: 'Open Source Software' },
      ])}
    />
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
