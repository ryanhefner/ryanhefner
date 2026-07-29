'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { PostkitProvider } from '@postkit/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { ryanHefnerPostkitTheme } from '../styles/postkit-theme'
import { system } from '../styles/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Preserve the app-wide Chakra context while Postkit layers its recipes. */}
      <ChakraProvider value={system}>
        <PostkitProvider system={system} theme={ryanHefnerPostkitTheme}>
          {children}
        </PostkitProvider>
      </ChakraProvider>
    </NextThemesProvider>
  )
}
