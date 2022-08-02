import { mode } from '@chakra-ui/theme-tools'
import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Tag } from './theme.tag'

export const theme = extendTheme(
  {
    colors: {
      blue: {
        [500]: '#235EF8',
      },
    },
    components: {
      Tag,
    },
    styles: {
      global: (props) => ({
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
    }
  },
  withDefaultColorScheme({ colorScheme: 'whiteAlpha' }),
  baseTheme,
)
