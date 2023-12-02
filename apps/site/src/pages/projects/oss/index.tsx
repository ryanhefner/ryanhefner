import { Heading, Text } from '@chakra-ui/react'
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

const TITLE = 'Projects / Open Source Software | Ryan Hefner - All Play'
const DESCRIPTION =
  'It has been fun writing and maintaing open source software. Here are some of my contributions to the developer community.'

const OSSIndexPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <PageWrapper>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', md: '12xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        <Text as="span" color="gray.600">
          <Link href="/projects">Projects</Link>
        </Text>{' '}
        / Open–Source Software
      </Heading>
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
