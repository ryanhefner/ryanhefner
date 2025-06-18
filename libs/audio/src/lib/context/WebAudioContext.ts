import { createContext } from 'react'

export type PlayOptions = {
  onEnded?: (event?: Event) => void
  onError?: (error: Error | unknown) => void
  startOffset?: number
}

type WebAudioContextValues = {
  getAudioContext: () => AudioContext | null
  flush: (url: string) => boolean
  getBuffer: (url: string) => AudioBuffer | undefined
  init: () => AudioContext | null
  load: (url: string) => Promise<AudioBuffer | null>
  pause: () => void
  play: (
    url: string,
    options?: PlayOptions | undefined,
  ) => Promise<{
    audioRef: HTMLAudioElement | null
  } | null>
}

export const WebAudioContext = createContext<WebAudioContextValues>({
  getAudioContext: () => null,
  flush: (url: string) => false,
  getBuffer: (url: string) => undefined,
  init: () => null,
  load: (url: string) => Promise.resolve(null),
  pause: () => {},
  play: (url: string) => Promise.resolve(null),
})
