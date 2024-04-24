import { ReactNode, useCallback, useContext } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import Markdown from 'react-markdown'
import Timecode from 'react-timecode'
import remarkGfm from 'remark-gfm'
import { TransistorClient } from 'transistor-client'
import TurndownService from 'turndown'

import { SiteLayout } from '../../components/layouts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AudioPlayer, AudioPlayerSize } from '../../components/media'
import { PodcastPlayerContext } from '../../contexts'
import { mdxComponents } from '../../mdx-components'
import { EpisodeList } from '../../components/media/EpisodeList'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

const EpisodePage = ({
  episode,
  episodes,
  transcript,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.debug(episode)

  const { currentEpisode, setCurrentEpisode } = useContext(PodcastPlayerContext)

  const handlePlay = useCallback(() => {
    setCurrentEpisode(episode)
  }, [episode, setCurrentEpisode])

  return (
    <Flex
      flexDir="column"
      gap={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 12 }}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '7xl' }}
          letterSpacing={-1}
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
          url={episode.attributes.media_url}
          onPlay={handlePlay}
        />
      </Box>
      <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: 24, md: 32 }}>
        <Box
          flex="0 0 30%"
          alignSelf="flex-start"
          pos={{ base: 'relative', md: 'sticky' }}
          top={{ base: 16, md: 24 }}
        >
          <Heading as="h2" fontSize="lg">
            Show Notes
          </Heading>
          <Flex flexDir="column" mt={{ base: 3, md: 4 }} gap={6}>
            {/* <MDXContent
              components={mdxComponents({
                codeBg: 'gray.800',
                codeColor: 'white',
              })}
            /> */}
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
      <EpisodeList
        episodes={episodes.filter((item: any) => item.id !== episode.id)}
        mt={24}
        title="More Episodes"
      />
    </Flex>
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
    fallback: false,
  }
}

export const getStaticProps = (async ({ params }) => {
  const { slug } = params || {}

  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })

  let episode = null
  let episodes = []
  let transcript = null

  if (SHOW_ID) {
    episodes = await transistorClient
      .episodes(SHOW_ID)
      .then((response) => response.data)
    episode = episodes.find((item: any) => item.attributes.slug === slug?.[0])

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
      transcript,
    },
  }
}) satisfies GetStaticProps<{ episode: any; episodes: any[]; transcript: any }>

export default EpisodePage
