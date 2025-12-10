import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { usePodcast } from 'use-podcast'

type SharePageProps = {
  body: string
  path: string
  title: string
}

const SharePage = ({ body, path, title }: SharePageProps) => {
  const borderColor = 'gray.600'
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
      <Flex flex={1} align="center" gap={12}>
        <Heading as="h3" fontSize="7xl" fontWeight={500} lineHeight="1.15">
          {body}
        </Heading>
        {path?.startsWith('/podcast') ? (
          <Image
            src="/assets/all-play.png"
            alt="All Play w/ Ryan Hefner (Cover Image)"
            width="35dvw"
          />
        ) : null}
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
  // eslint-disable-next-line
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })
  const feed = await getFeed()
  const episodePaths =
    feed.items?.map((item: any) => ({
      params: { slug: ['podcast', item.link.split('/').pop()] },
    })) ?? []

  return {
    paths: [...staticPaths, ...episodePaths],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const { slug } = params
  const path = `/${Array.isArray(slug) ? slug.join('/') : (slug ?? '')}`

  let title = ''
  let body = ''

  if (path.startsWith('/newsletter/')) {
    title = 'Newsletter'
    body = 'Subscribe and get weekly updates of what I am working on and into.'
  } else if (path.startsWith('/podcast/')) {
    // eslint-disable-next-line
    const { getFeed } = usePodcast({
      url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
    })
    const feed = await getFeed()

    const episode = feed?.items?.find(
      (item: any) => item.link.split('/').pop() === slug[1],
    )
    title = 'Podcast'
    body = episode?.title ?? ''
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
