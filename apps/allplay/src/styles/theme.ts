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
      blue: { [500]: 'oklch(53.12% 0.2731 262.59)' },
      gray: {
        [200]: '#ccc',
        [300]: '#aaa',
        [400]: '#999',
        [500]: '#888',
        [600]: '#666',
        [700]: '#333',
        [800]: '#222',
        [900]: '#111',
      },
      green: { [500]: '#13D93A' },
      red: { [400]: '#FE3B3F', [500]: '#F82327' },
      yellow: { [300]: '#F5FA1F' },
    },
    components: { Heading, Tag },
    styles: {
      global: (props: any) => ({
        html: { bg: mode('black', 'black')(props) },
        body: {
          color: mode('white', 'white')(props),
          bg: mode('black', 'black')(props),
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
