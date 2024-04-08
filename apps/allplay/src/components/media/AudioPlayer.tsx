import { useCallback, useEffect, useState } from 'react'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Timecode from 'react-timecode'
import { useWebAudioContext } from 'react-web-audio'

import { Link } from '../base'
import { PlayButton } from '../buttons'

type AudioPlayerProps = {
  duration: number
  isPlaying?: boolean
  slug: string
  title: string
  url: string
  onPlay?: (url: string) => void
  onProgress?: (time: number) => void
}

export const AudioPlayer = ({
  duration,
  isPlaying,
  slug,
  title,
  url,
  onProgress,
}: AudioPlayerProps) => {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)
  const [currentTime, setCurrentState] = useState(0)

  const { audioContext, load, play } = useWebAudioContext()

  useEffect(() => {
    const loadAsync = async () => {
      const buffer = await load(url)
      setAudioBuffer(buffer)
    }

    loadAsync()
  }, [load, url])

  const handlePlayClick = useCallback((url: string) => {
    const playAsync = async () => {}

    playAsync()
  }, [])

  return (
    <Flex
      // borderBottom="1px solid"
      // borderColor="gray.800"
      alignItems="center"
      bg={isPlaying ? 'white' : 'gray.900'}
      borderRadius="full"
      color={isPlaying ? 'black' : 'white'}
      gap={3}
      justifyContent="space-between"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: isPlaying ? 'gray.100' : 'gray.800',
      }}
    >
      <PlayButton
        onClick={() => handlePlayClick(url)}
        isPlaying={isPlaying}
        m={2}
        mr={0}
      />
      <Link
        href={`/episodes/${slug}`}
        flex={1}
        pos="relative"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex justifyContent="space-between">
          <Text fontSize="md">{title}</Text>
          <HStack spacing={1} mr={5}>
            {isPlaying ? (
              <>
                <Text>
                  <Timecode format="mm:ss" time={currentTime * 1000} />
                </Text>
                <Text>/</Text>
              </>
            ) : null}
            <Text fontFamily="monospace" fontSize="md">
              <Timecode format="mm:ss" time={duration * 1000} />
            </Text>
          </HStack>
        </Flex>
        {isPlaying ? (
          <Box
            bg="red.500"
            borderRadius="sm"
            boxShadow="lg"
            pos="absolute"
            top="-15px"
            left={`${(currentTime / duration) * 100}%`}
            h="calc(100% + 30px)"
            w={1}
            cursor="grab"
          />
        ) : null}
      </Link>
    </Flex>
  )
}
