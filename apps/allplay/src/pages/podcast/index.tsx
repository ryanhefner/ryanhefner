import { ReactNode } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TransistorClient } from 'transistor-client'
import { NewsletterForm } from 'newsletter'
import { SiteMeta } from 'next-meta'

import { SiteLayout } from '../../components/layouts'
import { EpisodeList } from '../../components/media/EpisodeList'
import { Podcatchers } from '../../components/podcast'
import { sleep } from '../../utils'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

const EpisodesIndexPage = ({
  episodes = [],
  show = null,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SiteMeta
        title={`Podcast`}
        description="Documenting the ideas, process and pitfalls that go into building products and open-source software and tools."
      >
        <link
          rel="alternate"
          type="application/rss+xml"
          title="All Play w/ Ryan Hefner"
          href="https://feeds.transistor.fm/allplay"
        />
      </SiteMeta>
      <Flex
        flexDir="column"
        flex={1}
        h="full"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 24 }}
      >
        <Podcatchers show={show} />
        <EpisodeList episodes={episodes} mt={24} />
        <Box id="signup" mt={24}>
          <Heading as="h3">Subscribe to the newletter</Heading>
          <Text color="gray.400">
            Get updates when new episodes are posted, and other fun stuff that I
            am into.
          </Text>
          <NewsletterForm />
        </Box>
      </Flex>
    </>
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
  let show = null

  try {
    const [showResponse, episodesResponse] = await Promise.all([
      transistorClient.show(SHOW_ID as string),
      transistorClient.episodes(SHOW_ID as string),
    ])

    // Throttle pages, since Transistor introduced a new rate-limit
    await sleep(10000)

    show = showResponse?.data
    episodes = episodesResponse?.data.sort((a: any, b: any) => {
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
      show,
    },
  }
}) satisfies GetStaticProps<{ episodes: any[] }>

export default EpisodesIndexPage
