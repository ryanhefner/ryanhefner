'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { PostkitProvider } from '@postkit/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { allplayPostkitTheme } from '../styles/postkit-theme'
import { system } from '../styles/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
    >
      <ChakraProvider value={system}>
        <PostkitProvider system={system} theme={allplayPostkitTheme}>
          {children}
        </PostkitProvider>
      </ChakraProvider>
    </NextThemesProvider>
  )
}
