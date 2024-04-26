import { ReactNode } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TransistorClient } from 'transistor-client'
import { NewsletterForm } from 'newsletter'

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
      <EpisodeList episodes={episodes} />
      <Box id="signup" mt={24}>
        <Heading as="h3">Subscribe to the newletter</Heading>
        <Text color="gray.400">
          Get updates when new episodes are posted, and other fun stuff that I
          am into.
        </Text>
        <NewsletterForm />
      </Box>
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
    episodes = response.data.sort((a: any, b: any) => {
      if (a.attributes.number > b.attributes.number) {
        return 1
      }

      if (a.attributes.number < b.attributes.number) {
        return -1
      }

      return 0
    })
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
