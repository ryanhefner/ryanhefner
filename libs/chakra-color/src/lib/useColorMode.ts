import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useColorMode() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    colorMode: mounted && resolvedTheme === 'dark' ? 'dark' : 'light',
    toggleColorMode: () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    },
    setColorMode: setTheme,
  }
}

export function useColorModeValue<T>(lightValue: T, darkValue: T): T {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return lightValue // Default to light during SSR
  }

  return resolvedTheme === 'dark' ? darkValue : lightValue
}
