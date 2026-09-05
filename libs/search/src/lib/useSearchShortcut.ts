import { useEffect } from 'react'
import { useRouter } from 'next/router'

export interface UseSearchShortcutOptions {
  /** Search page path */
  searchPath?: string
  /** Keyboard shortcut key (default: '/') */
  shortcutKey?: string
  /** Disable the shortcut */
  disabled?: boolean
}

/**
 * Hook to add keyboard shortcut for search
 * Press "/" (or custom key) to navigate to search page
 */
export function useSearchShortcut(
  options: UseSearchShortcutOptions = {},
): void {
  const router = useRouter()
  const {
    searchPath = '/search',
    shortcutKey = '/',
    disabled = false,
  } = options

  useEffect(() => {
    if (disabled) {
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger if user is typing in an input/textarea
      const isTyping =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable

      // Don't trigger if user is already on search page
      if (router.pathname === searchPath) {
        return
      }

      // Press shortcut key to navigate to search
      if (
        e.key === shortcutKey &&
        !isTyping &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey
      ) {
        e.preventDefault()
        router.push(searchPath)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [router, searchPath, shortcutKey, disabled])
}
