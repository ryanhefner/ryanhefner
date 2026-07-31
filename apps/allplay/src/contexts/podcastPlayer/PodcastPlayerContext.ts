import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import type { PodcastListEpisode } from '../../utils/podcast'

import { PlaybackOrder } from './PodcastPlayerProvider'

export const PodcastPlayerContext = createContext<{
  continuousPlayback?: boolean
  currentEpisode: PodcastListEpisode | null
  setCurrentEpisode: (episode: PodcastListEpisode) => void
  playbackOrder: PlaybackOrder
  setPlaybackOrder: Dispatch<SetStateAction<PlaybackOrder>>
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
  setCurrentEpisode: () => undefined,
  playbackOrder: PlaybackOrder.ASC,
  setPlaybackOrder: () => undefined,
  startTime: undefined,
  currentTime: 0,
  isPlaying: false,
  isEnded: false,
  getAudioBuffer: () => null,
  getAudioBufferSourceNode: () => null,
  seek: () => undefined,
})
