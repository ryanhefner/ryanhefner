import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TransistorClient } from 'transistor-client'

import { SiteLayout } from '../../components/layouts'
import { EpisodeList } from '../../components/media/EpisodeList'

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
      <EpisodeList mt={24} episodes={episodes} />
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
