import { Flex, Heading, Text } from '@chakra-ui/react'
import { allNows } from 'contentlayer/generated'
import { allThoughts } from 'contentlayer/generated'
import { allUpdates } from 'contentlayer/generated'

import { theme } from '../../styles'

type SharePageProps = {
  body: string
  path: string
  title: string
}

const SharePage = ({ body, path, title }: SharePageProps) => {
  const borderColor = theme.colors.gray[600]
  return (
    <Flex
      flexDir="column"
      bgColor="black"
      color="white"
      h="100%"
      minH="100vh"
      p={12}
    >
      <Flex justify="space-between">
        <Heading as="h1" fontSize="2xl" fontWeight={500} lineHeight="none">
          Ryan Hefner – All Play
        </Heading>
        <Heading as="h2" fontSize="2xl" fontWeight={500} lineHeight="none">
          {title}
        </Heading>
      </Flex>
      <Flex flex={1} align="center">
        <Heading as="h3" fontSize="8xl" fontWeight={500} lineHeight="1.15">
          {body}
        </Heading>
      </Flex>
      <Flex
        fontFamily="mono"
        justify="space-between"
        borderTop={`1px solid ${borderColor}`}
        fontSize="xl"
        pt={12}
      >
        <Text>@ryanhefner</Text>
        <Text>{`ryanhefner.com${!path || path === '/' ? '' : `${path}`}`}</Text>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths = async () => {
  const staticPaths = [
    {
      params: {
        slug: [''],
      },
    },
    {
      params: {
        slug: ['/'],
      },
    },
    {
      params: {
        slug: ['about'],
      },
    },
    {
      params: {
        slug: ['now'],
      },
    },
    {
      params: {
        slug: ['projects'],
      },
    },
    {
      params: {
        slug: ['projects', 'oss'],
      },
    },
    {
      params: {
        slug: ['thoughts'],
      },
    },
    {
      params: {
        slug: ['withoss'],
      },
    },
  ]

  const nowPaths = allNows.map((now) => ({
    params: {
      slug: ['now', now.slug],
    },
  }))

  const thoughtPaths = allThoughts.map((thought) => ({
    params: {
      slug: ['thoughts', thought.slug],
    },
  }))

  const updatePaths = allUpdates.map((update) => ({
    params: {
      slug: ['updates', update.slug],
    },
  }))

  return {
    paths: [...staticPaths, ...nowPaths, ...thoughtPaths, ...updatePaths],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const path = `/${Array.isArray(slug) ? slug.join('/') : slug ?? ''}`

  let title = ''
  let body = ''

  if (path.startsWith('/now')) {
    const now = allNows.find((now) => now.slug === slug[1])
    title = 'Now'
    body = now?.title ?? ''
  } else if (path.startsWith('/thoughts')) {
    const thought = allThoughts.find((thought) => thought.slug === slug[1])
    title = 'Thoughts'
    body = thought?.title ?? ''
  } else {
    switch (path) {
      case 'about':
        title = 'About'
        body =
          'I’m a software engineer and product designer living in Atlanta, GA.'
        break

      case 'withoss':
        title = 'Made w/ OSS'
        body = 'The open-source software I use to build this site.'
        break

      case 'projects':
        title = 'Projects'
        body = 'Projects I’ve worked on over the years.'
        break

      case 'projects/oss':
        title = 'Projects / Open Source Software'
        body = 'My open-source software contributions.'
        break

      case 'thoughts':
        title = 'Thoughts'
        body = 'A collection of thoughts, ideas, and notes.'
        break

      case 'now':
        title = 'Now'
        body = 'What I’m focusing on right now.'
        break

      default:
        title = ''
        body = 'Software Engineer + Eternal Tinkerer'
        break
    }
  }

  return {
    props: {
      title,
      body,
      path,
    },
  }
}

export default SharePage
