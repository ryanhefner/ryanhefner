import type { SearchableItem, SearchConfig, SearchResult } from './types'

/**
 * Simple string matching search (no dependencies)
 */
export function simpleSearch<T extends SearchableItem>(
  items: T[],
  query: string,
  config: SearchConfig = {},
): SearchResult<T>[] {
  if (!query.trim()) {
    return []
  }

  const {
    maxResults = 20,
    titleWeight = 10,
    descriptionWeight = 3,
    tagWeight = 5,
  } = config

  const lowerQuery = query.toLowerCase()
  const queryTerms = lowerQuery.split(/\s+/).filter((term) => term.length > 0)

  const results: Array<{ item: T; score: number; matchedFields: string[] }> = []

  for (const item of items) {
    let score = 0
    const matchedFields: string[] = []

    // Check title matches
    const titleLower = item.title.toLowerCase()
    for (const term of queryTerms) {
      if (titleLower.includes(term)) {
        score += titleWeight
        if (!matchedFields.includes('title')) {
          matchedFields.push('title')
        }
      }
      if (titleLower.startsWith(term)) {
        score += titleWeight * 0.5 // Bonus for title starting with term
      }
    }

    // Check description matches
    if (item.description) {
      const descLower = item.description.toLowerCase()
      for (const term of queryTerms) {
        if (descLower.includes(term)) {
          score += descriptionWeight
          if (!matchedFields.includes('description')) {
            matchedFields.push('description')
          }
        }
      }
    }

    // Check tag matches
    if (item.tags && item.tags.length > 0) {
      for (const tag of item.tags) {
        const tagLower = tag.toLowerCase()
        for (const term of queryTerms) {
          if (tagLower.includes(term)) {
            score += tagWeight
            if (!matchedFields.includes('tags')) {
              matchedFields.push('tags')
            }
          }
        }
      }
    }

    if (score > 0) {
      results.push({ item, score, matchedFields })
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ item, score, matchedFields }) => ({
      item,
      score,
      matchedFields,
    }))
}

/**
 * Fuzzy search using Fuse.js (requires fuse.js to be installed)
 */
export async function fuzzySearch<T extends SearchableItem>(
  items: T[],
  query: string,
  config: SearchConfig = {},
): Promise<SearchResult<T>[]> {
  try {
    // Dynamic import to avoid requiring fuse.js if not installed
    const Fuse = (await import('fuse.js')).default

    const {
      maxResults = 20,
      threshold = 0.6,
      searchFields = ['title', 'description', 'tags'],
    } = config

    const fuse = new Fuse(items, {
      keys: searchFields.map((field) => ({
        name: field,
        weight:
          field === 'title'
            ? config.titleWeight || 10
            : field === 'tags'
              ? config.tagWeight || 5
              : config.descriptionWeight || 3,
      })),
      threshold,
      includeScore: true,
      includeMatches: true,
    })

    const results = fuse.search(query)

    return results.slice(0, maxResults).map((result) => ({
      item: result.item,
      score: result.score ? 1 - result.score : 0, // Convert Fuse score (0-1, lower is better) to our score (higher is better)
      matchedFields: result.matches?.map((m) => m.key || '') || [],
    }))
  } catch (error) {
    // Fallback to simple search if fuse.js is not available
    console.warn('Fuse.js not available, falling back to simple search', error)
    return simpleSearch(items, query, config)
  }
}

/**
 * Main search function that chooses between simple and fuzzy search
 */
export function search<T extends SearchableItem>(
  items: T[],
  query: string,
  config: SearchConfig = {},
): SearchResult<T>[] | Promise<SearchResult<T>[]> {
  if (config.fuzzy) {
    return fuzzySearch(items, query, config)
  }
  return simpleSearch(items, query, config)
}
