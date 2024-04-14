import { createContext } from 'react'

export type PlayOptions = {
  onEnded?: () => void
  onError?: (error: Error | unknown) => void
  startOffset?: number
}

type WebAudioContextValues = {
  audioContext?: AudioContext | null
  flush: (url: string) => boolean
  getBuffer: (url: string) => AudioBuffer | undefined
  init: () => AudioContext | null
  load: (url: string) => Promise<AudioBuffer | null>
  play: (
    url: string,
    options?: PlayOptions | undefined,
  ) => Promise<{
    audioBuffer: AudioBuffer
    audioBufferSourceNode: AudioBufferSourceNode
  } | null>
}

export const WebAudioContext = createContext<WebAudioContextValues>({
  audioContext: null,
  flush: (url: string) => false,
  getBuffer: (url: string) => undefined,
  init: () => null,
  load: (url: string) => Promise.resolve(null),
  play: (url: string) => Promise.resolve(null),
})
