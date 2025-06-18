import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useWebAudioContext } from 'react-web-audio'

import { PodcastPlayerContext } from './PodcastPlayerContext'

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

  const { play: playContext, pause: pauseContext } = useWebAudioContext()

  const play = useCallback((url: string, startOffset = 0) => {
    const asyncPlay = async () => {
      const playResponse = await playContext(url, {
        onEnded: () => {
          setIsEnded(true)
          setIsPlaying(false)
          setCurrentTime(0)
        },
        startOffset: startOffset / 1000,
      })

      if (playResponse) {
        setIsPlaying(true)
        setStartTime(Date.now() - startOffset)
        setCurrentTime(startOffset)

        const { audioRef } = playResponse

        if (audioRef) {
          audioRef.addEventListener('timeupdate', () => {
            setCurrentTime(
              audioRef.currentTime ? audioRef.currentTime * 1000 : 0,
            )
          })
        }
        return
      }

      console.warn('No playResponse for: ', url)
    }

    return asyncPlay()
  }, [])

  useEffect(() => {
    if (currentEpisode) {
      play(currentEpisode.enclosure.url)
    }
  }, [currentEpisode, play])

  const setCurrentEpisode = useCallback(
    (value: any) => {
      let newEpisode = false
      _setCurrentEpisode((prevState: any) => {
        if (!prevState || prevState.guid !== value.guid) {
          pauseContext()
          setLastEpisode(value)
          setCurrentTime(0)
          setIsPlaying(false)
          setIsEnded(false)
          // audioBufferSourceNodeRef.current?.stop()
          newEpisode = true
          return value
        }

        return prevState
      })

      if (!newEpisode) {
        if (isPlaying) {
          setIsPlaying(false)
          // audioBufferSourceNodeRef.current?.stop()
          pauseContext()
        } else if (currentEpisode) {
          setIsEnded(false)
          play(currentEpisode.enclosure.url, currentTime)
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
      pauseContext()
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
