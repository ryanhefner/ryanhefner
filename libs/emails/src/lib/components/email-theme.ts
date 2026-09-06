import type { ThemeInput } from 'chakra-email'

export const emailFontFamily = '"Suisse Intl", Arial, Helvetica, sans-serif'

// Keep every component recipe on the same sans-serif stack, including code.
export const emailTheme = {
  tokens: {
    fonts: {
      sans: { value: emailFontFamily },
      body: { value: emailFontFamily },
      heading: { value: emailFontFamily },
      mono: { value: emailFontFamily },
      serif: { value: emailFontFamily },
    },
    colors: {
      gray: {
        50: { value: '#FAFAFA' },
        100: { value: '#F5F5F5' },
        200: { value: '#E5E5E5' },
        300: { value: '#D4D4D4' },
        400: { value: '#A3A3A3' },
        500: { value: '#737373' },
        600: { value: '#525252' },
        700: { value: '#404040' },
        800: { value: '#262626' },
        900: { value: '#171717' },
      },
    },
  },
  semanticTokens: {
    colors: {
      accent: {
        DEFAULT: { value: '{colors.gray.900}' },
        fg: { value: '{colors.gray.900}' },
        subtle: { value: '{colors.gray.100}' },
        contrast: { value: '{colors.white}' },
      },
    },
  },
} satisfies ThemeInput
