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

  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const audioBufferSourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | undefined>()

  const { play } = useWebAudioContext()

  useEffect(() => {
    const asyncPlay = async () => {
      setIsPlaying(true)

      if (currentTime && audioBufferSourceNodeRef.current) {
        return
      }

      const playResponse = await play(currentEpisode.attributes.media_url)

      if (playResponse) {
        setStartTime(Date.now())
        const { audioBuffer, audioBufferSourceNode } = playResponse
        audioBufferRef.current = audioBuffer
        audioBufferSourceNodeRef.current = audioBufferSourceNode
        return
      }

      console.debug('No playResponse for: ', currentEpisode)
    }

    if (!isPlaying && currentEpisode) {
      asyncPlay()
    }
  }, [currentEpisode, currentTime, isPlaying, play])

  useEffect(() => {
    clearTimeout(intervalRef.current)

    if (isPlaying && startTime) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(Date.now() - startTime)
      }, 250)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isPlaying, startTime])

  const setCurrentEpisode = useCallback(
    (value: any) => {
      let newEpisode = false
      _setCurrentEpisode((prevState: any) => {
        if (!prevState || prevState.id !== value.id) {
          setLastEpisode(value)
          setCurrentTime(0)
          setIsPlaying(false)
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
        } else {
          setIsPlaying(true)
          audioBufferSourceNodeRef.current?.start(currentTime)
        }
      }
    },
    [currentTime, isPlaying],
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
      }}
    >
      {children}
    </PodcastPlayerContext.Provider>
  )
}
