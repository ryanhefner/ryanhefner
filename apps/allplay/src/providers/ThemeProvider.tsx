'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { system } from '../styles/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
    >
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </NextThemesProvider>
  )
}
