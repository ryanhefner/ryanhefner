import { createContext } from 'react'
import type { Dispatch } from 'react'
import { PlaybackOrder } from './PodcastPlayerProvider'

export const PodcastPlayerContext = createContext<{
  continuousPlayback?: boolean
  currentEpisode: any
  setCurrentEpisode: Dispatch<any>
  playbackOrder: PlaybackOrder
  setPlaybackOrder: Dispatch<any>
  startTime?: number
  currentTime: number
  isPlaying: boolean
  isEnded: boolean
  getAudioBuffer: () => AudioBuffer | null
  getAudioBufferSourceNode: () => AudioBufferSourceNode | null
  seek: (url: string, offset: number) => void
}>({
  continuousPlayback: true,
  currentEpisode: null,
  setCurrentEpisode: (value: any) => undefined,
  playbackOrder: PlaybackOrder.ASC,
  setPlaybackOrder: (value: any) => undefined,
  startTime: undefined,
  currentTime: 0,
  isPlaying: false,
  isEnded: false,
  getAudioBuffer: () => null,
  getAudioBufferSourceNode: () => null,
  seek: (url, offset) => {},
})
