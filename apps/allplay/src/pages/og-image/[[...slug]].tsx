import { Flex, Heading, Text } from '@chakra-ui/react'
import { TransistorClient } from 'transistor-client'

import { theme } from '../../styles'
import { sleep } from '../../utils'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

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
          —All Play
        </Heading>
        <Heading as="h2" fontSize="2xl" fontWeight={500} lineHeight="none">
          {title}
        </Heading>
      </Flex>
      <Flex flex={1} align="center">
        <Heading as="h3" fontSize="7xl" fontWeight={500} lineHeight="1.15">
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
        <Text>@allplayfm</Text>
        <Text>{`allplay.fm${!path || path === '/' ? '' : `${path}`}`}</Text>
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
        slug: ['newsletter'],
      },
    },
    {
      params: {
        slug: ['podcast'],
      },
    },
    {
      params: {
        slug: ['withoss'],
      },
    },
  ]

  // Podcast episode paths
  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  const episodes = await transistorClient.episodes(SHOW_ID as string)
  const episodePaths =
    episodes.data?.map((item: any) => ({
      params: { slug: ['podcast', item.attributes.slug] },
    })) ?? []

  return {
    paths: [...staticPaths, ...episodePaths],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const { slug } = params
  const path = `/${Array.isArray(slug) ? slug.join('/') : slug ?? ''}`

  let title = ''
  let body = ''

  if (path.startsWith('/newsletter/')) {
    title = 'Newsletter'
    body = 'Subscribe and get weekly updates of what I am working on and into.'
  } else if (path.startsWith('/podcast/')) {
    const transistorClient = new TransistorClient({
      apiKey: process.env.TRANSISTOR_API_KEY,
    })

    const episodes = await transistorClient.episodes(SHOW_ID as string)

    // Throttle pages, since Transistor introduced a new rate-limit
    await sleep(10000)

    const episode = episodes?.data?.find(
      (item: any) => item.attributes.slug === slug[1],
    )
    title = 'Podcast'
    body = episode?.attributes?.title ?? ''
  } else {
    switch (path) {
      case '/newsletter':
        title = 'Newsletter'
        body =
          'Subscribe and get weekly updates of what I am working on and into.'
        break

      case '/podcast':
        title = 'Podcast'
        body = 'Subscribe and listen in your favorite podcatcher.'
        break

      case '/withoss':
        title = 'Made w/ OSS'
        body = 'The open-source software I use to build this site.'
        break

      default:
        title = ''
        body =
          'Follow along as I, Ryan Hefner, build and share my process and thoughts.'
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
