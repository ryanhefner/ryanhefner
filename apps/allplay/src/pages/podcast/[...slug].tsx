import { ReactNode, useCallback, useContext } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SiteMeta } from 'next-meta'
import Markdown from 'react-markdown'
import Timecode from 'react-timecode'
import remarkGfm from 'remark-gfm'
import { TransistorClient } from 'transistor-client'
import TurndownService from 'turndown'

import { SiteLayout } from '../../components/layouts'
import { AudioPlayer, AudioPlayerSize } from '../../components/media'
import { PodcastPlayerContext } from '../../contexts'
import { mdxComponents } from '../../mdx-components'
import { EpisodeList } from '../../components/media/EpisodeList'
import { Podcatchers } from '../../components/podcast'
import { sleep } from '../../utils'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

const EpisodePage = ({
  episode,
  episodes,
  show,
  transcript,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { currentEpisode, setCurrentEpisode } = useContext(PodcastPlayerContext)

  const handlePlay = useCallback(() => {
    setCurrentEpisode(episode)
  }, [episode, setCurrentEpisode])

  return (
    <>
      <SiteMeta
        title={`Episode: ${episode?.attributes?.title ?? 'N/A'} - Podcast`}
        description={
          episode?.attributes?.description
            ? episode?.attributes?.description_markdown.length > 300
              ? `${episode.attributes.description_markdown.substring(0, 297)}...`
              : episode.attributes.description_markdown
            : ''
        }
        audioUrl={`${episode?.attributes?.media_url}?src=allplay.fm`}
        audioType="audio/mpeg"
        twitter={{
          card: 'player',
          // image: {
          //   url: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/all-play-cover.png`,
          // },
          player: {
            url: episode.attributes.share_url,
            width: '500',
            height: '180',
          },
        }}
      >
        <link
          rel="alternate"
          type="application/rss+xml"
          title="All Play w/ Ryan Hefner"
          href="https://feeds.transistor.fm/allplay"
        />
        <link
          rel="alternate"
          type="application/json+oembed"
          title={episode.attributes.title}
          href={`https://share.transistor.fm/oembed?format=json&url=${encodeURIComponent(episode.attributes.share_url)}`}
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          title={episode.attributes.title}
          href={`https://share.transistor.fm/oembed?format=xml&url=${encodeURIComponent(episode.attributes.share_url)}`}
        />
      </SiteMeta>
      <Flex
        flexDir="column"
        gap={{ base: 8, md: 12 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 12 }}
        w="full"
      >
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '7xl' }}
            letterSpacing={{ base: -1, md: -2 }}
          >
            {episode?.attributes?.title ?? 'No episode title'}
          </Heading>
        </Box>
        <Box>
          <AudioPlayer
            duration={episode.attributes.duration}
            isSelected={currentEpisode?.id === episode.id}
            size={AudioPlayerSize.LARGE}
            slug={episode.attributes.slug}
            url={`${episode.attributes.media_url}?src=allplay.fm`}
            onPlay={handlePlay}
          />
        </Box>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 24, md: 32 }}
        >
          <Box
            flex="0 0 30%"
            alignSelf="flex-start"
            pos={{ base: 'relative', md: 'sticky' }}
            top={{ base: 0, md: 24 }}
          >
            <Podcatchers size="sm" show={show} title="Listen on" />
            <Heading as="h2" fontSize="lg" mt={12}>
              Show Notes
            </Heading>
            <Flex flexDir="column" mt={{ base: 3, md: 4 }} gap={6}>
              <Markdown
                components={mdxComponents({
                  codeBg: 'gray.800',
                  codeColor: 'white',
                })}
                remarkPlugins={[remarkGfm as any]}
              >
                {episode.attributes.description_markdown}
              </Markdown>
            </Flex>
          </Box>
          <Box flex={1}>
            <Heading
              as="h2"
              fontSize="lg"
              pos="sticky"
              top={{ base: 16, md: 24 }}
            >
              Transcript
            </Heading>
            <Flex flexDir="column" mt={{ base: 3, md: 4 }} gap={6}>
              {transcript?.segments?.map((segment: any, index: number) => (
                <Flex key={`segment-${index}`} gap={8}>
                  <Box>
                    {/* <Text color="gray.400">{segment.speaker}</Text> */}
                    <Text
                      color="gray.400"
                      fontFamily="monospace"
                      fontSize="sm"
                      mt="3px"
                      pos="sticky"
                      top={{ base: 24, md: 32 }}
                      whiteSpace="nowrap"
                    >
                      <Timecode
                        format="mm:ss"
                        time={parseInt(segment.startTime, 10) * 1000}
                      />{' '}
                      -{' '}
                      <Timecode
                        format="mm:ss"
                        time={parseInt(segment.endTime, 10) * 1000}
                      />
                    </Text>
                  </Box>
                  <Text color="gray.400" fontSize="md">
                    {segment.body}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
        <EpisodeList episodes={episodes} mt={24} title="More Episodes" />
        <Box id="#signup" mt={24}>
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

EpisodePage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export const getStaticPaths = async () => {
  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  const episodes = await transistorClient.episodes(SHOW_ID as string)
  const paths =
    episodes.data?.map((item: any) => ({
      params: { slug: [item.attributes.slug] },
    })) ?? []

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = (async ({ params }) => {
  const { slug } = params || {}

  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  let episode = null
  let episodes = []
  let show = null
  let transcript = null

  if (SHOW_ID) {
    const [showResponse, episodesResponse] = await Promise.all([
      transistorClient.show(SHOW_ID),
      transistorClient.episodes(SHOW_ID),
    ])

    // Throttle pages, since Transistor introduced a new rate-limit
    await sleep(10000)

    episodes = episodesResponse.data.sort((a: any, b: any) => {
      if (a.attributes.number > b.attributes.number) {
        return 1
      }

      if (a.attributes.number < b.attributes.number) {
        return -1
      }

      return 0
    })
    episode = episodes.find((item: any) => item.attributes.slug === slug?.[0])
    show = showResponse?.data

    if (episode) {
      const turndownService = new TurndownService()
      episode.attributes.description_markdown = turndownService.turndown(
        episode.attributes.description,
      )
    }

    const transcriptRef = episode?.attributes.transcripts.find(
      (item: any) => item.format === 'json',
    )

    if (transcriptRef?.url) {
      transcript = await axios
        .get(transcriptRef.url, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.data)
    }
  }

  return {
    props: {
      episode,
      episodes,
      show,
      transcript,
    },
  }
}) satisfies GetStaticProps<{ episode: any; episodes: any[]; transcript: any }>

export default EpisodePage
