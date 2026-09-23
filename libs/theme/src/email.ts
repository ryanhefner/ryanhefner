import type { ThemeInput } from 'chakra-email'

import { themeSemanticTokens, themeTokens, themeTypography } from './tokens'

export const emailFontFamily = themeTokens.fonts.body.value

// Share the site tokens without importing its CSS-variable/browser system.
// Email-specific adaptations keep every type role sans-serif and accents neutral.
export const emailTheme = {
  tokens: {
    ...themeTokens,
    fonts: {
      ...themeTokens.fonts,
      sans: themeTokens.fonts.body,
      mono: themeTokens.fonts.body,
      serif: themeTokens.fonts.body,
    },
    colors: {
      ...themeTokens.colors,
      gray: {
        // Fill the steps the site inherits from Chakra without tinted email fallbacks.
        50: { value: '#FAFAFA' },
        100: { value: '#F5F5F5' },
        ...themeTokens.colors.gray,
      },
    },
  },
  semanticTokens: {
    ...themeSemanticTokens,
    colors: {
      ...themeSemanticTokens.colors,
      bg: {
        DEFAULT: themeSemanticTokens.colors['bg.body'],
      },
      fg: {
        muted: {
          value: { _light: '{colors.gray.700}', _dark: '{colors.gray.300}' },
        },
        subtle: {
          value: { _light: '{colors.gray.500}', _dark: '{colors.gray.400}' },
        },
      },
      border: {
        outline: {
          value: { _light: '{colors.gray.300}', _dark: '{colors.gray.600}' },
        },
      },
      accent: {
        DEFAULT: {
          value: { _light: '{colors.gray.900}', _dark: '{colors.gray.50}' },
        },
        fg: {
          value: { _light: '{colors.gray.900}', _dark: '{colors.gray.50}' },
        },
        subtle: {
          value: { _light: '{colors.gray.100}', _dark: '{colors.gray.800}' },
        },
        contrast: {
          value: { _light: '{colors.white}', _dark: '{colors.black}' },
        },
      },
    },
  },
  recipes: {
    chakraEmailHeading: { base: { fontWeight: themeTypography.headingWeight } },
  },
  slotRecipes: {
    chakraEmailButton: {
      slots: ['root', 'cell', 'link'],
      base: { link: { fontWeight: themeTypography.buttonWeight } },
    },
  },
} satisfies ThemeInput
