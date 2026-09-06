export const themeTypography = {
  headingWeight: 'medium',
  buttonWeight: 'semibold',
} as const

export const themeTokens = {
  fonts: {
    body: { value: '"Suisse Intl", Arial, Helvetica, sans-serif' },
    heading: { value: '"Suisse Intl", Arial, Helvetica, sans-serif' },
    mono: { value: 'Suisse Intl Mono, monospace' },
    serif: { value: 'Suisse Works, serif' },
  },
  fontSizes: {
    '10xl': { value: '10.5rem' }, // Maintains the site's 1.333x type scale.
  },
  sizes: {
    container: {
      sm: { value: '640px' },
      md: { value: '768px' },
      lg: { value: '1024px' },
      xl: { value: '1280px' },
    },
  },
  colors: {
    black: { value: '#000' },
    white: { value: '#fff' },
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
      500: { value: '#FFE600' },
    },
  },
}

export const themeSemanticTokens = {
  colors: {
    blue: {
      fg: {
        value: {
          _light: '{colors.blue.500}',
          _dark: '{colors.blue.400}',
        },
      },
      muted: {
        value: {
          _light: '{colors.blue.200}',
          _dark: '{colors.blue.800}',
        },
      },
    },
    'bg.body': {
      value: { base: '{colors.white}', _dark: '{colors.black}' },
    },
    'text.body': {
      value: { base: '{colors.black}', _dark: '{colors.white}' },
    },
  },
}
