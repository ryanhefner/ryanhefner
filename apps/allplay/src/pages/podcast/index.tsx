import { ReactNode } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SiteMeta } from 'next-meta'
import { usePodcast } from 'use-podcast'

import { SiteLayout } from '../../components/layouts'
import { EpisodeList } from '../../components/media/EpisodeList'
import { Podcatchers } from '../../components/podcast'
import { feeds } from '../../data/feeds'

const EpisodesIndexPage = ({
  feed,
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
        w="full"
      >
        <Podcatchers feeds={feeds} />
        <EpisodeList episodes={feed.items} mt={24} />
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

export const getStaticProps = (async () => {
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })

  const feed = await getFeed()

  return { props: { feed } }
}) satisfies GetStaticProps<{ feed: any }>

export default EpisodesIndexPage
