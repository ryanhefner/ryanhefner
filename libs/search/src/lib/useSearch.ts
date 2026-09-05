import { useCallback, useEffect, useRef, useState } from 'react'

import type { SearchableItem, SearchConfig, SearchResult } from './types'
import { search } from './search'
import { saveRecentSearch } from './storage'

/**
 * Hook for performing search with debouncing and recent searches
 */
export function useSearch<T extends SearchableItem>(
  items: T[],
  config: SearchConfig = {},
) {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<SearchResult<T>[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const requestId = useRef(0)

  const cancelPendingSearch = useCallback(() => {
    clearTimeout(timer.current)
    timer.current = undefined
    return ++requestId.current
  }, [])

  useEffect(
    () => () => {
      cancelPendingSearch()
    },
    [cancelPendingSearch],
  )

  // Memoize search function
  const executeSearch = useCallback(
    async (searchQuery: string, id: number) => {
      try {
        const searchResults = await Promise.resolve(
          search(items, searchQuery, config),
        )
        if (id !== requestId.current) return
        setResults(searchResults)

        // Save to recent searches
        saveRecentSearch(searchQuery)
      } catch (error) {
        if (id !== requestId.current) return
        console.error('Search error:', error)
        setResults([])
      } finally {
        if (id === requestId.current) setIsSearching(false)
      }
    },
    [items, config],
  )

  const performSearch = useCallback(
    async (searchQuery: string) => {
      const id = cancelPendingSearch()
      if (!searchQuery.trim()) {
        setResults([])
        setIsSearching(false)
        return
      }
      setIsSearching(true)
      await executeSearch(searchQuery, id)
    },
    [cancelPendingSearch, executeSearch],
  )

  const handleQueryChange = useCallback(
    (newQuery: string) => {
      const id = cancelPendingSearch()
      setQuery(newQuery)
      if (!newQuery.trim()) {
        setResults([])
        setIsSearching(false)
        return
      }
      setIsSearching(true)
      timer.current = setTimeout(() => {
        timer.current = undefined
        void executeSearch(newQuery, id)
      }, 300)
    },
    [cancelPendingSearch, executeSearch],
  )

  const clearSearch = useCallback(() => {
    cancelPendingSearch()
    setQuery('')
    setResults([])
    setIsSearching(false)
  }, [cancelPendingSearch])

  return {
    query,
    results,
    isSearching,
    setQuery: handleQueryChange,
    clearSearch,
    search: performSearch,
  }
}
