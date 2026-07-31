import { ReactNode, useCallback, useContext } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageMeta } from 'next-meta'
import Markdown from 'react-markdown'
import { BreadcrumbJsonLd, Schema } from 'react-structured'
import Timecode from 'react-timecode'
import { usePodcast } from 'use-podcast'

import { SiteLayout } from '../../components/layouts'
import { AudioPlayer, AudioPlayerSize } from '../../components/media'
import { EpisodeList } from '../../components/media/EpisodeList'
import { Podcatchers } from '../../components/podcast'
import { PodcastPlayerContext } from '../../contexts'
import { feeds } from '../../data/feeds'
import { markdownComponents, markdownRemarkPlugins } from '../../mdx-components'
import {
  type PlayablePodcastEpisode,
  type PodcastListEpisode,
  getEpisodeAudioUrl,
  getPodcastListEpisodes,
  isPlayablePodcastEpisode,
} from '../../utils/podcast'
import {
  ALLPLAY_PODCAST_TITLE,
  absoluteUrl,
  getBreadcrumbData,
  getEpisodeDescription,
  getEpisodeEmbedUrl,
  getEpisodeShareUrl,
  getPodcastEpisodeData,
  parsePodcastDuration,
} from '../../utils/structured-data'

const EpisodePage = ({
  episode,
  episodes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { currentEpisode, setCurrentEpisode } = useContext(PodcastPlayerContext)

  const handlePlay = useCallback(() => {
    setCurrentEpisode(episode)
  }, [episode, setCurrentEpisode])

  const shareUrl = getEpisodeShareUrl(episode)
  const embedUrl = getEpisodeEmbedUrl(episode)
  const oembedUrl =
    shareUrl &&
    `https://share.transistor.fm/oembed?url=${encodeURIComponent(shareUrl)}`
  const description = getEpisodeDescription(episode)
  const audioUrl = getEpisodeAudioUrl(episode)
  const audioDuration = parsePodcastDuration(episode.itunes.duration)
  const artworkUrl = absoluteUrl('/assets/all-play.png')

  return (
    <>
      <PageMeta
        title={`Episode: ${episode?.title ?? 'N/A'} - Podcast`}
        description={description}
        audio={
          audioUrl
            ? [
                {
                  album: ALLPLAY_PODCAST_TITLE,
                  artist: 'Ryan Hefner',
                  duration: audioDuration,
                  title: episode.title,
                  type: episode.enclosure?.type ?? 'audio/mpeg',
                  url: audioUrl,
                },
              ]
            : undefined
        }
        images={[
          {
            alt: `All Play w/ Ryan Hefner artwork for “${episode.title}”`,
            height: 1024,
            type: 'image/png',
            url: artworkUrl,
            width: 1024,
          },
        ]}
        twitter={{
          card: embedUrl ? 'player' : 'summary_large_image',
          ...(embedUrl
            ? { player: { url: embedUrl, width: '500', height: '180' } }
            : {}),
        }}
      >
        <link
          key="rss-xml"
          rel="alternate"
          type="application/rss+xml"
          title="All Play w/ Ryan Hefner"
          href="https://feeds.transistor.fm/allplay"
        />
        {oembedUrl && (
          <>
            <link
              key="json-oembed"
              rel="alternate"
              type="application/json+oembed"
              title={episode.title}
              href={oembedUrl}
            />
            <link
              key="xml-oembed"
              rel="alternate"
              type="text/xml+oembed"
              title={episode.title}
              href={oembedUrl}
            />
          </>
        )}
      </PageMeta>
      <Schema
        id="podcast-episode-jsonld"
        type="PodcastEpisode"
        data={getPodcastEpisodeData(episode)}
      />
      <BreadcrumbJsonLd
        id="podcast-episode-breadcrumb-jsonld"
        data={getBreadcrumbData([
          { name: 'Home', url: '/' },
          { name: 'Podcast', url: '/podcast' },
          { name: episode.title },
        ])}
      />
      <Flex
        flexDir="column"
        gap={{ base: 10, md: 16 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 16 }}
        w="full"
      >
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '7xl' }}
            letterSpacing={{ base: -1, md: -2 }}
          >
            {episode?.title ?? 'No episode title'}
          </Heading>
        </Box>
        <Box>
          <AudioPlayer
            duration={parseInt(String(episode.itunes.duration ?? 0), 10)}
            isSelected={currentEpisode?.guid === episode.guid}
            size={AudioPlayerSize.LARGE}
            slug={episode.link.split('/').pop() ?? episode.guid}
            url={audioUrl ?? episode.enclosure.url}
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
            <Podcatchers size="sm" feeds={feeds} title="Listen on" />
            <Heading as="h2" fontSize="lg" mt={12}>
              Show Notes
            </Heading>
            <Flex flexDir="column" mt={{ base: 3, md: 4 }} gap={6}>
              <Markdown
                components={markdownComponents}
                remarkPlugins={markdownRemarkPlugins}
              >
                {episode.descriptionMarkdown}
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
              {episode.transcript?.segments?.map((segment, index) => (
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

EpisodePage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export const getStaticPaths = async () => {
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })

  const feed = await getFeed()

  const paths =
    feed?.items.flatMap((item) => {
      const slug = item.link?.split('/').pop()

      return slug ? [{ params: { slug: [slug] } }] : []
    }) ?? []

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = (async ({ params }) => {
  const { slug } = params || {}

  const { getEpisode, getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })

  const feed = await getFeed()
  if (!slug?.[0]) {
    return { notFound: true }
  }

  const episode = await getEpisode({
    slug: slug[0],
    convertDescriptionToMarkdown: true,
    transcript: { mimeType: 'application/json' },
  })

  if (!isPlayablePodcastEpisode(episode)) {
    return { notFound: true }
  }

  return {
    props: {
      episode,
      episodes: getPodcastListEpisodes(feed),
    },
  }
}) satisfies GetStaticProps<{
  episode: PlayablePodcastEpisode
  episodes: PodcastListEpisode[]
}>

export default EpisodePage
