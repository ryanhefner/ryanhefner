import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TransistorClient } from 'transistor-client'

import { SiteLayout } from '../../components/layouts'
import { AudioPlayer } from '../../components/media'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

const EpisodesIndexPage = ({
  episodes = [],
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Flex
      flexDir="column"
      flex={1}
      h="full"
      px={{ base: 4, md: 8 }}
      py={{ base: 12, md: 24 }}
    >
      <Flex flexDir="column" mt={24} gap={1.5}>
        <Heading as="h2" color="gray.400" fontSize="lg" mb={2}>
          Episodes
        </Heading>
        {episodes.map((episode: any, index: number) => (
          <AudioPlayer
            key={episode.id}
            duration={episode.attributes.duration}
            isPlaying={index === 0}
            slug={episode.attributes.slug}
            title={episode.attributes.title}
            url={episode.attributes.media_url}
          />
        ))}
      </Flex>
    </Flex>
  )
}

EpisodesIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export const getStaticProps = (async () => {
  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })
  let episodes = []

  try {
    const response = await transistorClient.episodes(SHOW_ID as string)
    episodes = response.data
  } catch (err) {
    console.error(err)
  }

  return {
    props: {
      episodes,
    },
  }
}) satisfies GetStaticProps<{ episodes: any[] }>

export default EpisodesIndexPage
