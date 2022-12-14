import Head from 'next/head'
import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { ProjectGrid, ProjectGridItem, ProjectLink } from 'components/projects'
import { PageWrapper } from 'components/site'
import { oss as projects } from 'data/projects'

const TITLE = 'Projects / Open Source Software | Ryan Hefner - All Play'
const DESCRIPTION = 'It has been fun writing and maintaing open source software. Here are some of my contributions to the developer community.'

const OSSIndexPage = () => (
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
      <Heading
        as="h1"
        fontSize={{ base: '6xl', md: '9xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        <Text as="span" color="gray.600">
          <Link href="/projects">Projects</Link>
        </Text> / Open Source Software
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

export default OSSIndexPage
