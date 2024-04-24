import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Waveform } from '@waveforms/react'
import Timecode from 'react-timecode'

import { Link } from '../base'
import { PlayButton, PlayButtonSize } from '../buttons'
import { PodcastPlayerContext } from '../../contexts'

export enum AudioPlayerSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}

type AudioPlayerProps = {
  disableLink?: boolean
  duration: number
  isSelected?: boolean
  size?: AudioPlayerSize
  slug: string
  title?: string
  url: string
  onPlay?: () => void
}

export const AudioPlayer = ({
  disableLink,
  duration,
  isSelected,
  size,
  slug,
  title,
  url,
  onPlay,
}: AudioPlayerProps) => {
  const [waveformWidth, setWaveformWidth] = useState(0)
  const [waveformHeight, setWaveformHeight] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragPercent, setDragPercent] = useState(0)

  const dragRef = useRef<HTMLDivElement>(null)

  const { seek } = useContext(PodcastPlayerContext)

  const { currentTime, getAudioBuffer, isPlaying } =
    useContext(PodcastPlayerContext)

  useEffect(() => {
    const handleResize = () => {
      setWaveformWidth(dragRef.current?.clientWidth ?? 0)
      setWaveformHeight(dragRef.current?.clientHeight ?? 0)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handlePlayClick = useCallback(() => {
    onPlay?.()
  }, [onPlay])

  const audioBuffer = useMemo(() => getAudioBuffer(), [isPlaying, url])

  const handleMouseDown = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true)
    },
    [],
  )

  useEffect(() => {
    const handleMouseMove = (evt: MouseEvent | Event) => {
      const event = evt as MouseEvent

      if (dragRef.current) {
        let percent = 0

        const { left: dragRefLeft, right: dragRefRight } =
          dragRef.current.getBoundingClientRect()

        if (event.clientX > dragRefLeft && event.clientX < dragRefRight) {
          percent = Math.max(
            0,
            Math.min(
              1,
              (event.clientX - dragRefLeft) / dragRef.current.clientWidth,
            ),
          )
        } else if (event.clientX > dragRefRight) {
          percent = 1
        }

        setDragPercent(percent)
        seek(url, duration * 1000 * percent)
      }
    }

    const handleMouseUp = (evt: Event | MouseEvent) => {
      setIsDragging(false)
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('pointerup', handleMouseUp)
    }

    if (isDragging) {
      window.addEventListener('pointermove', handleMouseMove)
      window.addEventListener('pointerup', handleMouseUp)
    } else {
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('pointerup', handleMouseUp)
    }
  }, [isDragging])

  const scrubberOffset = useMemo(
    () =>
      isDragging
        ? `calc(${dragPercent * 100}% - 3px)`
        : `calc(${Math.min(1, Math.max(0, currentTime / (duration * 1000))) * 100}% - 3px)`,
    [currentTime, dragPercent, duration, isDragging],
  )

  return (
    <Flex
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
        isActive={isSelected}
        isPlaying={isSelected && isPlaying}
        m={2}
        mr={0}
        size={
          size === AudioPlayerSize.LARGE
            ? PlayButtonSize.LARGE
            : PlayButtonSize.SMALL
        }
      />
      <Flex ref={dragRef} flex={1} pos="relative" ml={2}>
        <Link
          href={`/episodes/${slug}`}
          flex={1}
          h={10}
          _hover={{
            textDecoration: 'none',
          }}
          pointerEvents={disableLink ? 'none' : 'initial'}
          userSelect={isDragging ? 'none' : 'initial'}
        >
          {isSelected && audioBuffer ? (
            <Waveform
              audioBuffer={audioBuffer}
              color={isSelected ? '#ddd' : '#333'}
              zIndex={0}
              height={waveformHeight}
              width={waveformWidth}
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
            overflow="clip"
          >
            <Text
              fontSize="md"
              overflow="clip"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              w={isSelected ? 'calc(100% - 114px)' : 'calc(100% - 50px)'}
            >
              {title ?? ''}
            </Text>
            <HStack spacing={1} mr={5}>
              {isSelected ? (
                <>
                  <Text
                    fontFamily="monospace"
                    fontSize={size === AudioPlayerSize.LARGE ? 'xl' : 'md'}
                  >
                    <Timecode
                      format="mm:ss"
                      time={
                        isDragging ? duration * 1000 * dragPercent : currentTime
                      }
                    />
                  </Text>
                  <Text
                    fontFamily="monospace"
                    fontSize={size === AudioPlayerSize.LARGE ? 'xl' : 'md'}
                  >
                    /
                  </Text>
                </>
              ) : null}
              <Text
                fontFamily="monospace"
                fontSize={size === AudioPlayerSize.LARGE ? 'xl' : 'md'}
              >
                <Timecode format="mm:ss" time={duration * 1000} />
              </Text>
            </HStack>
          </Flex>
        </Link>
        {isSelected ? (
          <Box
            bg="red.500"
            borderRadius="sm"
            boxShadow="lg"
            pos="absolute"
            top="-5px"
            h="calc(100% + 10px)"
            w="3px"
            cursor="grab"
            zIndex={2}
            onPointerDown={handleMouseDown}
            pointerEvents="all"
            style={{
              left: scrubberOffset,
            }}
            _before={{
              content: '" "',
              display: 'block',
              w: 3,
              h: 'full',
              pos: 'absolute',
              top: 0,
              left: -3,
            }}
            _after={{
              content: '" "',
              display: 'block',
              w: 3,
              h: 'full',
              pos: 'absolute',
              top: 0,
              left: '3px',
            }}
          />
        ) : null}
      </Flex>
    </Flex>
  )
}
