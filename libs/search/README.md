# Search Library

A reusable search library for Content Collections-based Next.js applications with fuzzy search, highlighting, and recent searches support.

## Features

- ✅ **Simple & Fuzzy Search**: Choose between fast string matching or fuzzy search with Fuse.js
- ✅ **Highlighting**: Highlight matching terms in search results
- ✅ **Recent Searches**: Track and display recent searches with localStorage
- ✅ **Keyboard Shortcuts**: `/` key to quickly navigate to search
- ✅ **TypeScript**: Fully typed with TypeScript
- ✅ **Configurable**: Customize weights, thresholds, and search fields
- ✅ **Debounced**: Built-in debouncing for smooth search experience

## Installation

The library is already configured in the monorepo. To use fuzzy search, install Fuse.js:

```bash
pnpm add fuse.js
```

## Usage

### Basic Search Hook

```tsx
import { useSearch, type SearchableItem } from 'search'

interface MyContent extends SearchableItem {
  type: 'post' | 'page'
}

const MySearchPage = () => {
  const items: MyContent[] = [
    {
      id: '1',
      title: 'My Post',
      description: 'A great post',
      url: '/posts/my-post',
      date: '2024-01-01',
      tags: ['react', 'nextjs'],
    },
  ]

  const { query, results, isSearching, setQuery } = useSearch(items, {
    fuzzy: true, // Enable fuzzy search
    maxResults: 20,
  })

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      {isSearching && <div>Searching...</div>}
      {results.map((result) => (
        <div key={result.item.id}>
          <h3>{result.item.title}</h3>
          <p>Score: {result.score}</p>
        </div>
      ))}
    </div>
  )
}
```

### Keyboard Shortcut

```tsx
import { useSearchShortcut } from 'search'

const App = () => {
  // Press "/" to navigate to /search
  useSearchShortcut({ searchPath: '/search' })

  return <YourApp />
}
```

### Recent Searches

```tsx
import { useRecentSearches } from 'search'

const SearchPage = () => {
  const { recentSearches, clearRecentSearches } = useRecentSearches()

  return (
    <div>
      <h2>Recent Searches</h2>
      {recentSearches.map((query) => (
        <button key={query} onClick={() => setQuery(query)}>
          {query}
        </button>
      ))}
      <button onClick={clearRecentSearches}>Clear</button>
    </div>
  )
}
```

### Highlighting

```tsx
import { highlightTextReact } from 'search'

const SearchResult = ({ title, query }) => {
  const highlighted = highlightTextReact(title, query)

  return <h3>{highlighted.map((part, i) => (typeof part === 'string' ? part : <mark key={i}>{part.text}</mark>))}</h3>
}
```

## API Reference

### Types

#### `SearchableItem`

Base interface for searchable content:

```typescript
interface SearchableItem {
  id: string
  title: string
  description?: string
  url: string
  date?: string
  tags?: string[]
  metadata?: Record<string, unknown>
}
```

#### `SearchConfig`

Configuration options:

```typescript
interface SearchConfig {
  maxResults?: number // Default: 20
  fuzzy?: boolean // Default: false
  threshold?: number // Default: 0.6 (for fuzzy search)
  titleWeight?: number // Default: 10
  descriptionWeight?: number // Default: 3
  tagWeight?: number // Default: 5
  searchFields?: string[] // Default: ['title', 'description', 'tags']
}
```

### Hooks

#### `useSearch<T>(items, config?)`

Main search hook with debouncing and recent searches.

**Returns:**

- `query: string` - Current search query
- `results: SearchResult<T>[]` - Search results
- `isSearching: boolean` - Loading state
- `setQuery: (query: string) => void` - Update query
- `clearSearch: () => void` - Clear search
- `search: (query: string) => Promise<void>` - Manual search

#### `useSearchShortcut(options?)`

Add keyboard shortcut for search navigation.

**Options:**

- `searchPath?: string` - Path to search page (default: '/search')
- `shortcutKey?: string` - Keyboard shortcut (default: '/')
- `disabled?: boolean` - Disable shortcut

#### `useRecentSearches()`

Manage recent searches.

**Returns:**

- `recentSearches: string[]` - Array of recent queries
- `addRecentSearch: (query: string) => void` - Add to recent
- `clearRecentSearches: () => void` - Clear all
- `removeRecentSearch: (query: string) => void` - Remove one

### Functions

#### `search<T>(items, query, config?)`

Perform search (simple or fuzzy).

#### `simpleSearch<T>(items, query, config?)`

Fast string matching search (no dependencies).

#### `fuzzySearch<T>(items, query, config?)`

Fuzzy search using Fuse.js (requires fuse.js).

#### `highlightText(text, query, className?)`

Highlight matching terms in HTML string.

#### `highlightTextReact(text, query)`

Highlight matching terms for React rendering.

## Examples

See `apps/site/src/pages/search.tsx` for a complete implementation example.
