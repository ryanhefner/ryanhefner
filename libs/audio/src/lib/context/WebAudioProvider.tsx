import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { WebAudioContext } from './WebAudioContext'
import type { PlayOptions } from './WebAudioContext'

interface WebAudioProviderProps extends PropsWithChildren {
  onError?: (error: Error | unknown) => void
  onStateChange?: (state?: AudioContextState) => void
  preloadAudio?: string[]
}

export const WebAudioProvider = ({
  children,
  preloadAudio,
  onError,
  onStateChange,
}: WebAudioProviderProps) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const audioBufferMapRef = useRef<Map<string, AudioBuffer>>(new Map())

  const handleStateChange = useCallback(() => {
    if (audioContext) {
      onStateChange?.(audioContext.state)
    }
  }, [audioContext, onStateChange])

  const flush = useCallback((url: string) => {
    if (audioBufferMapRef.current?.has(url)) {
      audioBufferMapRef.current.delete(url)
      return true
    }

    return false
  }, [])

  const getBuffer = useCallback((url: string) => {
    return audioBufferMapRef.current?.get(url)
  }, [])

  const init = useCallback(() => {
    if (!audioContext) {
      const localAudioContext = new window.AudioContext()
      localAudioContext.addEventListener('statechange', handleStateChange)

      setAudioContext(localAudioContext)

      return localAudioContext
    }

    return audioContext
  }, [audioContext, handleStateChange])

  const load = useCallback(
    (url: string): Promise<AudioBuffer | null> => {
      const loadAsync = async () => {
        const localAudioContext = audioContext ?? init()

        if (audioBufferMapRef.current.has(url)) {
          return null
        }

        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error, status = ${response.status}`)
            }

            return response.arrayBuffer()
          })
          .then((buffer) => {
            return localAudioContext.decodeAudioData(buffer)
          })
          .then((decodedData) => {
            audioBufferMapRef.current?.set(url, decodedData)
            return decodedData
          })
          .catch((err) => {
            onError?.(err)
            return null
          })
      }

      return loadAsync()
    },
    [audioContext, init, onError],
  )

  const play = useCallback(
    (url: string, options?: PlayOptions) => {
      const { onEnded, onError: onErrorLocal, startOffset = 0 } = options || {}

      const playAsync = async () => {
        try {
          const localAudioContext = audioContext ?? init()

          if (localAudioContext.state === 'suspended') {
            await localAudioContext.resume()
          }

          const audioBuffer =
            audioBufferMapRef.current.get(url) ?? (await load(url))

          if (!audioBuffer) {
            return null
          }

          const source = localAudioContext.createBufferSource()
          source.buffer = audioBuffer
          source.connect(localAudioContext.destination)
          if (onEnded) {
            source.addEventListener('ended', onEnded)
          }
          source.start(startOffset)

          return { audioBuffer, audioBufferSourceNode: source }
        } catch (err) {
          onError?.(err)
          onErrorLocal?.(err)
          return null
        }
      }

      return playAsync()
    },
    [audioContext, init, load, onError],
  )

  useEffect(() => {
    if (preloadAudio) {
      preloadAudio.forEach((url) => {
        load(url)
      })
    }
  }, [load, preloadAudio])

  return (
    <WebAudioContext.Provider
      value={{ audioContext, flush, getBuffer, init, load, play }}
    >
      {children}
    </WebAudioContext.Provider>
  )
}
