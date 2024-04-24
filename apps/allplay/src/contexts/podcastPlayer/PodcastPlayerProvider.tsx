import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { PodcastPlayerContext } from './PodcastPlayerContext'
import { useWebAudioContext } from 'react-web-audio'

type PodcastPlayerProviderProps = PropsWithChildren

export enum PlaybackOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const PodcastPlayerProvider = ({
  children,
}: PodcastPlayerProviderProps) => {
  const [lastEpisode, setLastEpisode] = useState<any>(null)
  const [currentEpisode, _setCurrentEpisode] = useState<any>(null)
  const [playbackOrder, setPlaybackOrder] = useState<PlaybackOrder>(
    PlaybackOrder.ASC,
  )
  const [startTime, setStartTime] = useState<number | undefined>()
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const audioBufferSourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | undefined>()

  const { play: playContext } = useWebAudioContext()

  const play = useCallback((url: string, startOffset: number = 0) => {
    const asyncPlay = async () => {
      const playResponse = await playContext(url, {
        onEnded: () => {
          // console.debug('onEnded')
          // setIsEnded(true)
          // setIsPlaying(false)
        },
        startOffset: startOffset / 1000,
      })

      if (playResponse) {
        setIsPlaying(true)
        setStartTime(Date.now() - startOffset)
        const { audioBuffer, audioBufferSourceNode } = playResponse
        audioBufferRef.current = audioBuffer
        audioBufferSourceNodeRef.current = audioBufferSourceNode
        return
      }

      console.warn('No playResponse for: ', url)
    }

    return asyncPlay()
  }, [])

  useEffect(() => {
    if (currentEpisode) {
      play(currentEpisode.attributes.media_url)
    }
  }, [currentEpisode, play])

  useEffect(() => {
    clearTimeout(intervalRef.current)

    if (!isEnded && isPlaying && startTime) {
      intervalRef.current = setInterval(() => {
        const nextTime = Date.now() - startTime
        setCurrentTime(nextTime)

        if (nextTime >= currentEpisode.attributes.duration * 1000) {
          clearInterval(intervalRef.current)
          setIsEnded(true)
          setIsPlaying(false)
          setCurrentTime(0)
        }
      }, 250)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [currentEpisode, isEnded, isPlaying, startTime])

  const setCurrentEpisode = useCallback(
    (value: any) => {
      let newEpisode = false
      _setCurrentEpisode((prevState: any) => {
        if (!prevState || prevState.id !== value.id) {
          setLastEpisode(value)
          setCurrentTime(0)
          setIsPlaying(false)
          setIsEnded(false)
          audioBufferSourceNodeRef.current?.stop()
          newEpisode = true
          return value
        }

        return prevState
      })

      if (!newEpisode) {
        if (isPlaying) {
          setIsPlaying(false)
          audioBufferSourceNodeRef.current?.stop()
        } else if (currentEpisode) {
          setIsEnded(false)
          play(currentEpisode.attributes.media_url, currentTime)
        }
      }
    },
    [currentEpisode, currentTime, isPlaying, play],
  )

  const getAudioBuffer = useCallback(() => audioBufferRef.current, [])
  const getAudioBufferSourceNode = useCallback(
    () => audioBufferSourceNodeRef.current,
    [],
  )
  const seek = useCallback(
    (url: string, offset: number) => {
      audioBufferSourceNodeRef.current?.stop()
      setIsEnded(false)
      play(url, offset)
    },
    [play],
  )

  return (
    <PodcastPlayerContext.Provider
      value={{
        currentEpisode,
        setCurrentEpisode,
        playbackOrder,
        setPlaybackOrder,
        startTime,
        currentTime,
        isPlaying,
        isEnded,
        getAudioBuffer,
        getAudioBufferSourceNode,
        seek,
      }}
    >
      {children}
    </PodcastPlayerContext.Provider>
  )
}
