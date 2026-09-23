const RECENT_SEARCHES_KEY = 'search:recent'
const MAX_RECENT_SEARCHES = 10

/**
 * Get recent searches from localStorage
 */
export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY)
    if (stored) {
      return JSON.parse(stored) as string[]
    }
  } catch (error) {
    console.warn('Failed to get recent searches from localStorage', error)
  }

  return []
}

/**
 * Save a search query to recent searches
 */
export function saveRecentSearch(query: string): void {
  if (typeof window === 'undefined' || !query.trim()) {
    return
  }

  try {
    const recent = getRecentSearches()
    // Remove if already exists
    const filtered = recent.filter(
      (q) => q.toLowerCase() !== query.toLowerCase(),
    )
    // Add to beginning
    const updated = [query, ...filtered].slice(0, MAX_RECENT_SEARCHES)
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
  } catch (error) {
    console.warn('Failed to save recent search to localStorage', error)
  }
}

/**
 * Clear recent searches
 */
export function clearRecentSearches(): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY)
  } catch (error) {
    console.warn('Failed to clear recent searches from localStorage', error)
  }
}

/**
 * Remove a specific search from recent searches
 */
export function removeRecentSearch(query: string): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const recent = getRecentSearches()
    const updated = recent.filter(
      (q) => q.toLowerCase() !== query.toLowerCase(),
    )
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
  } catch (error) {
    console.warn('Failed to remove recent search from localStorage', error)
  }
}
