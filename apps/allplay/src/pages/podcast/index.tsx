import { ReactNode } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd, Schema } from 'react-structured'
import { usePodcast } from 'use-podcast'

import { SiteLayout } from '../../components/layouts'
import { EpisodeList } from '../../components/media/EpisodeList'
import { Podcatchers } from '../../components/podcast'
import { feeds } from '../../data/feeds'
import {
  type PodcastListEpisode,
  getPodcastListEpisodes,
} from '../../utils/podcast'
import {
  ALLPLAY_PODCAST_DESCRIPTION,
  getBreadcrumbData,
  getPodcastPageData,
} from '../../utils/structured-data'

const EpisodesIndexPage = ({
  episodes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageMeta title="Podcast" description={ALLPLAY_PODCAST_DESCRIPTION}>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="All Play w/ Ryan Hefner"
          href="https://feeds.transistor.fm/allplay"
        />
      </PageMeta>
      <Schema
        id="podcast-page-jsonld"
        type="CollectionPage"
        data={getPodcastPageData()}
      />
      <BreadcrumbJsonLd
        id="podcast-breadcrumb-jsonld"
        data={getBreadcrumbData([
          { name: 'Home', url: '/' },
          { name: 'Podcast' },
        ])}
      />
      <Flex
        flexDir="column"
        flex={1}
        h="full"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 24 }}
        w="full"
      >
        <Podcatchers feeds={feeds} />
        <EpisodeList episodes={episodes} mt={24} />
      </Flex>
      <Box
        id="signup"
        pos="relative"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 16 }}
      >
        <Heading as="h3">Subscribe to the newsletter</Heading>
        <Text color="gray.400">
          Get updates when new episodes are posted, and other fun stuff that I
          am into.
        </Text>
        <NewsletterForm />
      </Box>
    </>
  )
}

EpisodesIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export const getStaticProps = (async ({ revalidateReason }) => {
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })

  const feed = await getFeed({ forceRefresh: revalidateReason !== 'build' })

  return { props: { episodes: getPodcastListEpisodes(feed) } }
}) satisfies GetStaticProps<{ episodes: PodcastListEpisode[] }>

export default EpisodesIndexPage
