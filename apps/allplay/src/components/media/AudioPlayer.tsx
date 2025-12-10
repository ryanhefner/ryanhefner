import {
  RefObject,
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

import { PodcastPlayerContext } from '../../contexts'
import { Link } from '../base'
import { PlayButton, PlayButtonSize } from '../buttons'

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

const getDragPercent = (
  event: PointerEvent | React.PointerEvent<HTMLDivElement>,
  ref: RefObject<HTMLDivElement | null>,
) => {
  let percent = 0

  if (!ref.current) {
    return percent
  }

  const { left: refLeft, right: refRight } = ref.current.getBoundingClientRect()

  if (event.clientX > refLeft && event.clientX < refRight) {
    percent = Math.max(
      0,
      Math.min(1, (event.clientX - refLeft) / ref.current.clientWidth),
    )
  } else if (event.clientX > refRight) {
    percent = 1
  }

  return percent
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

  const dragRef = useRef<HTMLDivElement | null>(null)

  const { seek } = useContext(PodcastPlayerContext)

  const { currentTime, getAudioBuffer, isPlaying, isEnded } =
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
    (evt: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(true)
      const percent = getDragPercent(evt, dragRef)
      setDragPercent(percent)
      seek(url, duration * 1000 * percent)
    },
    [seek, url],
  )

  const handleKeyDown = useCallback(
    (evt: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isSelected) return

      const step = 0.05 // 5% per keypress
      let newPercent = Math.min(1, Math.max(0, currentTime / (duration * 1000)))

      switch (evt.key) {
        case 'ArrowLeft':
          evt.preventDefault()
          newPercent = Math.max(0, newPercent - step)
          seek(url, duration * 1000 * newPercent)
          break
        case 'ArrowRight':
          evt.preventDefault()
          newPercent = Math.min(1, newPercent + step)
          seek(url, duration * 1000 * newPercent)
          break
        case 'Home':
          evt.preventDefault()
          seek(url, 0)
          break
        case 'End':
          evt.preventDefault()
          seek(url, duration * 1000)
          break
      }
    },
    [currentTime, duration, isSelected, seek, url],
  )

  useEffect(() => {
    const handleMouseMove = (evt: PointerEvent | Event) => {
      const percent = getDragPercent(evt as PointerEvent, dragRef)
      setDragPercent(percent)
      // seek(url, duration * 1000 * percent)
    }

    const handleMouseUp = (evt: PointerEvent | Event) => {
      setIsDragging(false)
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('pointerup', handleMouseUp)
      const percent = getDragPercent(evt as PointerEvent, dragRef)
      setDragPercent(percent)
      seek(url, duration * 1000 * percent)
    }

    if (isDragging) {
      window.addEventListener('pointermove', handleMouseMove)
      window.addEventListener('pointerup', handleMouseUp)
    } else {
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('pointerup', handleMouseUp)
    }
  }, [duration, isDragging, seek, url])

  const scrubberOffset = useMemo(
    () =>
      isDragging
        ? `calc(${dragPercent * 100}% - 3px)`
        : isEnded
          ? 'calc(100% - 3px)'
          : `calc(${Math.min(1, Math.max(0, currentTime / (duration * 1000))) * 100}% - 3px)`,
    [currentTime, dragPercent, duration, isDragging, isEnded],
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
      <Flex
        ref={dragRef}
        flex={1}
        pos="relative"
        ml={2}
        role="slider"
        aria-label="Audio playback position"
        aria-valuemin={0}
        aria-valuemax={duration * 1000}
        aria-valuenow={currentTime}
        aria-valuetext={`${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')} of ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`}
        tabIndex={isSelected ? 0 : -1}
        onKeyDown={handleKeyDown}
        onPointerDown={handleMouseDown}
        cursor={isSelected ? 'pointer' : 'default'}
      >
        <Link
          href={`/podcast/${slug}`}
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
            <HStack gap={1} mr={5}>
              {isSelected ? (
                <>
                  <Text
                    fontFamily="monospace"
                    fontSize={size === AudioPlayerSize.LARGE ? 'xl' : 'md'}
                  >
                    <Timecode
                      format="mm:ss"
                      time={
                        isDragging
                          ? duration * 1000 * dragPercent
                          : isEnded
                            ? duration * 1000
                            : currentTime
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
            boxShadow="sm"
            pos="absolute"
            top={size === AudioPlayerSize.LARGE ? '-15px' : '-5px'}
            h={
              size === AudioPlayerSize.LARGE
                ? 'calc(100% + 30px)'
                : 'calc(100% + 10px)'
            }
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
