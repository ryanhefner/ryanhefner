import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { headingRecipe } from './theme.heading'
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
          '10xl': { value: '10rem' },
          '11xl': { value: '11rem' },
          '12xl': { value: '12rem' },
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
            400: { value: '#FE3B3F' },
            500: { value: '#F82327' },
          },
          yellow: {
            300: { value: '#F5FA1F' },
          },
        },
      },
      recipes: {
        Heading: headingRecipe,
      },
      slotRecipes: {
        Tag: tagRecipe,
      },
    },
    globalCss: {
      html: {
        bg: '{colors.black}',
      },
      body: {
        color: '{colors.white}',
        bg: '{colors.black}',
      },
      '::selection': {
        bg: '{colors.yellow.300}',
        color: '{colors.black}',
      },
    },
  }),
)
