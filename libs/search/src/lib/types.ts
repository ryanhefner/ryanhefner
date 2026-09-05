/**
 * Base interface for searchable items
 */
export interface SearchableItem {
  /** Unique identifier for the item */
  id: string
  /** Title of the item */
  title: string
  /** Description or excerpt */
  description?: string
  /** URL or path to the item */
  url: string
  /** Date string (ISO format recommended) */
  date?: string
  /** Tags or categories */
  tags?: string[]
  /** Additional metadata for search */
  metadata?: Record<string, unknown>
}

/**
 * Search result with relevance score
 */
export interface SearchResult<T extends SearchableItem = SearchableItem> {
  /** The matched item */
  item: T
  /** Relevance score (higher is better) */
  score: number
  /** Matched fields */
  matchedFields?: string[]
}

/**
 * Search configuration options
 */
export interface SearchConfig {
  /** Maximum number of results to return */
  maxResults?: number
  /** Enable fuzzy matching */
  fuzzy?: boolean
  /** Fuzzy search threshold (0-1, lower = more fuzzy) */
  threshold?: number
  /** Weight for title matches */
  titleWeight?: number
  /** Weight for description matches */
  descriptionWeight?: number
  /** Weight for tag matches */
  tagWeight?: number
  /** Fields to search */
  searchFields?: string[]
}

/**
 * Default search configuration
 */
export const DEFAULT_SEARCH_CONFIG: Required<SearchConfig> = {
  maxResults: 20,
  fuzzy: false,
  threshold: 0.6,
  titleWeight: 10,
  descriptionWeight: 3,
  tagWeight: 5,
  searchFields: ['title', 'description', 'tags'],
}
