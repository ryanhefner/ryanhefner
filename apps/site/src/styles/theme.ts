import {
  theme as baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { Tag } from './theme.tag'

export const theme = extendTheme(
  {
    fonts: {
      body: `Suisse Intl, sans-serif`,
      heading: `Suisse Intl, sans-serif`,
      mono: `Suisse Intl Mono, monospace`,
      serif: `Suisse Works, serif`,
    },
    fontSizes: {
      '10xl': '10rem',
      '11xl': '11rem',
      '12xl': '12rem',
    },
    colors: {
      blue: {
        [500]: '#235EF8',
      },
      gray: {
        [500]: '#888',
        [600]: '#666',
        [700]: '#333',
      },
      yellow: {
        [300]: '#F5FA1F',
      },
    },
    components: {
      Tag,
    },
    styles: {
      global: (props) => ({
        html: {
          bg: 'blue.500',
        },
        body: {
          color: mode('black', 'white')(props),
          bg: mode('white', 'black')(props),
        },
        '::selection': {
          bg: 'yellow.300',
          color: 'black',
        },
      }),
    },
    config: {
      ...baseTheme.config,
      cssVarPrefix: 'system',
      useSystemColorMode: true,
    },
  },
  withDefaultColorScheme({ colorScheme: 'whiteAlpha' }),
  baseTheme,
)
