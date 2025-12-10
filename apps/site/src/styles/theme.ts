import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { tagRecipe } from './theme.tag'

export const system = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens: {
        fonts: {
          body: { value: `Suisse Intl, sans-serif` },
          heading: { value: `Suisse Intl, sans-serif` },
          mono: { value: `Suisse Intl Mono, monospace` },
          serif: { value: `Suisse Works, serif` },
        },
        fontSizes: {
          '10xl': { value: '10.5rem' }, // Maintains 1.333x ratio from 8xl→9xl pattern
        },
        colors: {
          blue: {
            500: { value: 'oklch(53.12% 0.2731 262.59)' },
          },
          gray: {
            200: { value: '#ccc' },
            300: { value: '#aaa' },
            400: { value: '#999' },
            500: { value: '#888' },
            600: { value: '#666' },
            700: { value: '#333' },
            800: { value: '#222' },
            900: { value: '#111' },
          },
          green: {
            500: { value: '#13D93A' },
          },
          red: {
            400: { value: '#FE3E5A' },
            500: { value: '#F82343' },
          },
          yellow: {
            300: { value: '#F5FA1F' },
          },
        },
      },
      semanticTokens: {
        colors: {
          'bg.body': {
            value: { base: '{colors.white}', _dark: '{colors.black}' },
          },
          'text.body': {
            value: { base: '{colors.black}', _dark: '{colors.white}' },
          },
        },
      },
      recipes: {
        Tag: tagRecipe,
      },
    },
    globalCss: {
      html: {
        bg: '{colors.bg.body}',
        colorPalette: 'whiteAlpha',
      },
      body: {
        color: '{colors.text.body}',
        bg: '{colors.bg.body}',
      },
      '::selection': {
        bg: '{colors.yellow.300}',
        color: '{colors.black}',
      },
    },
  }),
)
