import { useCallback, useContext, useRef, useState } from 'react'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Timecode from 'react-timecode'

import { Link } from '../base'
import { PlayButton } from '../buttons'

import { Waveform } from './Waveform'
import { PodcastPlayerContext } from '../../contexts'

type AudioPlayerProps = {
  duration: number
  isSelected?: boolean
  slug: string
  title: string
  url: string
  onPlay?: () => void
}

export const AudioPlayer = ({
  duration,
  isSelected,
  slug,
  title,
  url,
  onPlay,
}: AudioPlayerProps) => {
  const [waveformWidth, setWaveformWidth] = useState(0)
  const [waveformHeight, setWaveformHeight] = useState(0)

  const linkRef = useRef<HTMLDivElement>(null)

  const { currentTime, isPlaying } = useContext(PodcastPlayerContext)

  const handlePlayClick = useCallback(() => {
    onPlay?.()
  }, [onPlay])

  return (
    <Flex
      // borderBottom="1px solid"
      // borderColor="gray.800"
      alignItems="center"
      bg={isSelected ? 'white' : 'gray.900'}
      borderRadius="full"
      color={isSelected ? 'black' : 'white'}
      gap={1}
      justifyContent="space-between"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: isSelected ? 'gray.100' : 'gray.800',
      }}
    >
      <PlayButton
        flex="0 0 auto"
        onClick={handlePlayClick}
        isPlaying={isSelected && isPlaying}
        m={2}
        mr={0}
      />
      <Link
        href={`/episodes/${slug}`}
        flex={1}
        pl={2}
        pos="relative"
        _hover={{
          textDecoration: 'none',
        }}
      >
        {isSelected ? (
          <Waveform
            color={isSelected ? '#ddd' : '#333'}
            slug={slug}
            zIndex={0}
            height={`${waveformHeight}px`}
            width={`${waveformWidth}px`}
          />
        ) : null}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          zIndex={1}
          pos="absolute"
          top={0}
          right={0}
          bottom={0}
          left={2}
          ref={linkRef}
        >
          <Text fontSize="md">{title}</Text>
          <HStack spacing={1} mr={5}>
            {isSelected ? (
              <>
                <Text fontFamily="monospace" fontSize="md">
                  <Timecode format="mm:ss" time={currentTime} />
                </Text>
                <Text fontFamily="monospace" fontSize="md">
                  /
                </Text>
              </>
            ) : null}
            <Text fontFamily="monospace" fontSize="md">
              <Timecode format="mm:ss" time={duration * 1000} />
            </Text>
          </HStack>
        </Flex>
        {isSelected ? (
          <Box
            bg="red.500"
            borderRadius="sm"
            boxShadow="lg"
            pos="absolute"
            top="-2px"
            left={`${(currentTime / (duration * 1000)) * 100}%`}
            h="calc(100% + 4px)"
            w="3px"
            cursor="grab"
            zIndex={2}
          />
        ) : null}
      </Link>
    </Flex>
  )
}
