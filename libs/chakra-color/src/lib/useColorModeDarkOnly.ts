// Simplified version for dark-only apps
export function useColorMode() {
  return {
    colorMode: 'dark' as const,
    toggleColorMode: () => {
      // No-op for dark-only app
    },
    setColorMode: () => {
      // No-op for dark-only app
    },
  }
}

export function useColorModeValue<T>(_lightValue: T, darkValue: T): T {
  return darkValue
}
