/**
 * Highlight matching terms in text
 */
export function highlightText(
  text: string,
  query: string,
  className = 'search-highlight',
): string {
  if (!query.trim()) {
    return text
  }

  const queryTerms = query
    .split(/\s+/)
    .filter((term) => term.length > 0)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape regex special chars

  if (queryTerms.length === 0) {
    return text
  }

  const regex = new RegExp(`(${queryTerms.join('|')})`, 'gi')
  return text.replace(
    regex,
    (match) => `<mark class="${className}">${match}</mark>`,
  )
}

/**
 * Highlight matching terms in text and return React-compatible structure
 */
export function highlightTextReact(
  text: string,
  query: string,
): Array<string | { type: 'mark'; text: string }> {
  if (!query.trim()) {
    return [text]
  }

  const queryTerms = query
    .split(/\s+/)
    .filter((term) => term.length > 0)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  if (queryTerms.length === 0) {
    return [text]
  }

  const regex = new RegExp(`(${queryTerms.join('|')})`, 'gi')
  const parts: Array<string | { type: 'mark'; text: string }> = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }

    // Add highlighted match
    parts.push({
      type: 'mark',
      text: match[0],
    })

    lastIndex = regex.lastIndex
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : [text]
}
