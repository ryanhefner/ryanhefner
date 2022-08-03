import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { ProjectGrid, ProjectGridItem, ProjectLink } from 'components/projects'
import { PageWrapper } from 'components/site'
import { oss as projects } from 'data/projects'

const OSSIndexPage = () => (
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
)

export default OSSIndexPage
