import {
  theme as baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { Heading } from './theme.heading'
import { Tag } from './theme.tag'

export const theme = extendTheme(
  {
    fonts: {
      body: `Suisse Intl, sans-serif`,
      heading: `Suisse Intl, sans-serif`,
      mono: `Suisse Intl Mono, monospace`,
      serif: `Suisse Works, serif`,
    },
    fontSizes: { '10xl': '10rem', '11xl': '11rem', '12xl': '12rem' },
    colors: {
      blue: { [500]: '#235EF8' },
      gray: {
        [300]: '#aaa',
        [400]: '#999',
        [500]: '#888',
        [600]: '#666',
        [700]: '#333',
        [800]: '#222',
        [900]: '#111',
      },
      green: { [500]: '#13D93A' },
      red: { [500]: '#F82327' },
      yellow: { [300]: '#F5FA1F' },
    },
    components: { Heading, Tag },
    styles: {
      global: (props: any) => ({
        html: { bg: mode('black', 'white')(props) },
        body: {
          color: mode('white', 'black')(props),
          bg: mode('black', 'white')(props),
        },
        '::selection': { bg: 'yellow.300', color: 'black' },
      }),
    },
    config: {
      ...baseTheme.config,
      cssVarPrefix: 'system',
      useSystemColorMode: false,
      initialColorMode: 'dark',
    },
  },
  withDefaultColorScheme({ colorScheme: 'whiteAlpha' }),
  baseTheme,
)
