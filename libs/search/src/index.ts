// Types
export type { SearchableItem, SearchResult, SearchConfig } from './lib/types'

// Core search functions
export { search, simpleSearch, fuzzySearch } from './lib/search'

// Hooks
export { useSearch } from './lib/useSearch'
export { useSearchShortcut } from './lib/useSearchShortcut'
export { useRecentSearches } from './lib/useRecentSearches'

// Utilities
export { highlightText, highlightTextReact } from './lib/highlight'
export {
  getRecentSearches,
  saveRecentSearch,
  clearRecentSearches,
  removeRecentSearch,
} from './lib/storage'
