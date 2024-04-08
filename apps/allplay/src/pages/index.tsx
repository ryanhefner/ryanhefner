import { ReactNode, useCallback, useEffect, useState } from 'react'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { useTransistor } from 'react-transistor-fm'
import { useWebAudioContext } from 'react-web-audio'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts/SiteLayout'
import { AudioPlayer } from '../components/media'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

const IndexPage = () => {
  const [currentAudioSourceNode, setCurrentAudioSourceNode] =
    useState<AudioBufferSourceNode | null>(null)
  const [currentUrl, setCurrentUrl] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [episodes, setEpisodes] = useState([])

  const { client } = useTransistor()
  const { audioContext, play } = useWebAudioContext()

  useEffect(() => {
    const asyncFetch = async () => {
      if (client && SHOW_ID) {
        client
          .episodes(SHOW_ID)
          .then((response) => {
            setEpisodes(response.data)
            console.debug(response.data)
          })
          .catch(console.error)
      }
    }

    asyncFetch()
  }, [client])

  const handlePlayClick = useCallback(
    (url: string) => {
      const playAsync = async () => {
        setCurrentUrl(url)

        const audioBufferSourceNode = await play(url)
        setCurrentAudioSourceNode(audioBufferSourceNode)
      }

      if (currentUrl === url && currentAudioSourceNode) {
        currentAudioSourceNode.stop()
        setCurrentAudioSourceNode(null)
      } else {
        playAsync()
      }
    },
    [currentAudioSourceNode, currentUrl, play],
  )

  useEffect(() => {
    let raf: number | null

    const tick = () => {
      setCurrentTime(audioContext?.currentTime ?? 0)

      raf = requestAnimationFrame(tick)
    }

    raf = audioContext ? requestAnimationFrame(tick) : null

    return () => {
      if (raf) {
        cancelAnimationFrame(raf)
      }
    }
  }, [audioContext])

  return (
    <Flex
      flexDir="column"
      flex={1}
      h="full"
      px={{ base: 4, md: 8 }}
      py={{ base: 12, md: 24 }}
    >
      <Text
        color="gray.400"
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="normal"
        letterSpacing={-1.2}
        lineHeight={1.2}
      >
        Welcome to All Play! This is where I,{' '}
        <Link color="white" href="https://www.ryanhefner.com">
          Ryan Hefner
        </Link>
        , share what I am doing and the things I am getting into. You can follow
        along by listening to the podcast{' '}
        <Link color="white" href="/episodes">
          episodes
        </Link>{' '}
        or reading the{' '}
        <Link color="white" href="/newsletters">
          newsletters
        </Link>
        .
        <br />
        <br />
        If you like what you hear, please{' '}
        <Link color="white" href="/subscribe">
          subscribe
        </Link>{' '}
        in your favorite podcatcher. And, if you’re into what I am writing,
        please{' '}
        <Link color="white" href="signup">
          sign up
        </Link>{' '}
        for the newsletter.
      </Text>
      <Flex flexDir="column" mt={24} gap={2}>
        <Heading as="h2" color="gray.400" fontSize="lg" mb={2}>
          Episodes
        </Heading>
        {episodes.map((episode, index) => (
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
      <Flex flexDir="column" mt={24}>
        <Heading as="h2" color="gray.400" fontSize="lg" mb={4}>
          Newsletters
        </Heading>
        {episodes.map((episode) => (
          <Link
            key={episode.id}
            href={`/episodes/${episode.attributes.slug}`}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Flex
              borderBottom="1px solid"
              borderColor="gray.800"
              justifyContent="space-between"
              py={4}
            >
              <Text fontSize="md">{episode.attributes.title}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}

IndexPage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export default IndexPage
