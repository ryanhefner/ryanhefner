import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useSearch } from './useSearch'
import { search } from './search'
import { saveRecentSearch } from './storage'
import type { SearchResult } from './types'

vi.mock('./search', () => ({ search: vi.fn() }))
vi.mock('./storage', () => ({ saveRecentSearch: vi.fn() }))

const items = [{ id: 'one', title: 'One', url: '/one' }]
const matches: SearchResult[] = [{ item: items[0], score: 1 }]

beforeEach(() => {
  vi.useFakeTimers()
  vi.mocked(search).mockReset().mockResolvedValue(matches)
  vi.mocked(saveRecentSearch).mockReset()
})
afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe('useSearch', () => {
  it('debounces across rerenders with a new inline config object', async () => {
    const { result } = renderHook(() => useSearch(items, { fuzzy: true }))
    act(() => result.current.setQuery('o'))
    await act(() => vi.advanceTimersByTimeAsync(100))
    act(() => result.current.setQuery('one'))
    await act(() => vi.advanceTimersByTimeAsync(300))
    expect(search).toHaveBeenCalledTimes(1)
    expect(search).toHaveBeenCalledWith(items, 'one', { fuzzy: true })
  })

  it('cancels a pending search when cleared', async () => {
    const { result } = renderHook(() => useSearch(items))
    act(() => result.current.setQuery('one'))
    act(() => result.current.clearSearch())
    await act(() => vi.advanceTimersByTimeAsync(300))
    expect(search).not.toHaveBeenCalled()
    expect(result.current.query).toBe('')
    expect(result.current.results).toEqual([])
  })

  it('ignores a search that resolves after clearing', async () => {
    let resolve!: (results: SearchResult[]) => void
    vi.mocked(search).mockReturnValueOnce(
      new Promise((done) => {
        resolve = done
      }),
    )
    const { result } = renderHook(() => useSearch(items))
    act(() => result.current.setQuery('one'))
    await act(() => vi.advanceTimersByTimeAsync(300))
    act(() => result.current.clearSearch())
    await act(async () => {
      resolve(matches)
    })
    expect(result.current.results).toEqual([])
    expect(result.current.isSearching).toBe(false)
    expect(saveRecentSearch).not.toHaveBeenCalled()
  })

  it('does not replace newer results with a slower old request', async () => {
    let resolve!: (results: SearchResult[]) => void
    vi.mocked(search).mockReturnValueOnce(
      new Promise((done) => {
        resolve = done
      }),
    )
    const { result } = renderHook(() => useSearch(items))
    act(() => result.current.setQuery('old'))
    await act(() => vi.advanceTimersByTimeAsync(300))
    act(() => result.current.setQuery('new'))
    await act(() => vi.advanceTimersByTimeAsync(300))
    await act(async () => {
      resolve([])
    })
    expect(result.current.results).toEqual(matches)
    expect(saveRecentSearch).toHaveBeenCalledTimes(1)
    expect(saveRecentSearch).toHaveBeenCalledWith('new')
  })

  it('cancels pending work on unmount', async () => {
    const { result, unmount } = renderHook(() => useSearch(items))
    act(() => result.current.setQuery('one'))
    unmount()
    await act(() => vi.advanceTimersByTimeAsync(300))
    expect(search).not.toHaveBeenCalled()
  })
})
