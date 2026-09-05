import { useEffect, useState } from 'react'

import {
  getRecentSearches,
  saveRecentSearch,
  clearRecentSearches,
  removeRecentSearch,
} from './storage'

/**
 * Hook for managing recent searches
 */
export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [])

  const addRecentSearch = (query: string) => {
    saveRecentSearch(query)
    setRecentSearches(getRecentSearches())
  }

  const clearRecent = () => {
    clearRecentSearches()
    setRecentSearches([])
  }

  const removeRecent = (query: string) => {
    removeRecentSearch(query)
    setRecentSearches(getRecentSearches())
  }

  return {
    recentSearches,
    addRecentSearch,
    clearRecentSearches: clearRecent,
    removeRecentSearch: removeRecent,
  }
}
