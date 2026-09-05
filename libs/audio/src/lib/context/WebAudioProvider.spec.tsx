import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useWebAudioContext } from '../hooks/useWebAudioContext'
import { WebAudioProvider } from './WebAudioProvider'

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('WebAudioProvider', () => {
  it('seeks the current source back to zero', async () => {
    const { result } = renderHook(useWebAudioContext, {
      wrapper: WebAudioProvider,
    })
    const url = 'https://example.com/episode.mp3'
    await act(() => result.current.play(url))
    const audio = document.querySelector('audio')!
    audio.currentTime = 90
    await act(() => result.current.play(url, { startOffset: 0 }))
    expect(audio.currentTime).toBe(0)
  })

  it('honors a starting position when switching sources', async () => {
    const { result } = renderHook(useWebAudioContext, {
      wrapper: WebAudioProvider,
    })
    await act(() =>
      result.current.play('https://example.com/episode.mp3', {
        startOffset: 45,
      }),
    )
    expect(document.querySelector('audio')!.currentTime).toBe(45)
  })
})
