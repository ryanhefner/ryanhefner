import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

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
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioBufferMapRef = useRef<Map<string, AudioBuffer>>(new Map())

  const handleStateChange = useCallback(() => {
    if (audioContextRef.current) {
      onStateChange?.(audioContextRef.current.state)
    }
  }, [onStateChange])

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
    if (!audioContextRef.current) {
      audioContextRef.current = new window.AudioContext()
      audioContextRef.current.addEventListener('statechange', handleStateChange)
    }

    return audioContextRef.current
  }, [handleStateChange])

  const load = useCallback(
    (url: string): Promise<AudioBuffer | null> => {
      const loadAsync = async () => {
        const localAudioContext = audioContextRef.current ?? init()

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
    [init, onError],
  )

  const play = useCallback(
    (url: string, options?: PlayOptions) => {
      const { onEnded, onError: onErrorLocal, startOffset = 0 } = options || {}

      const playAsync = async () => {
        try {
          const localAudioContext = audioContextRef.current ?? init()

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
          source.start(0, startOffset)

          return { audioBuffer, audioBufferSourceNode: source }
        } catch (err) {
          onError?.(err)
          onErrorLocal?.(err)
          return null
        }
      }

      return playAsync()
    },
    [init, load, onError],
  )

  useEffect(() => {
    if (preloadAudio) {
      preloadAudio.forEach((url) => {
        load(url)
      })
    }
  }, [load, preloadAudio])

  const getAudioContext = useCallback(() => audioContextRef.current, [])

  return (
    <WebAudioContext.Provider
      value={{ getAudioContext, flush, getBuffer, init, load, play }}
    >
      {children}
    </WebAudioContext.Provider>
  )
}
