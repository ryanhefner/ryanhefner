import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { buttonRecipe } from './recipes/button'
import { headingRecipe } from './recipes/heading'
import { tagRecipe } from './recipes/tag'
import { themeSemanticTokens, themeTokens } from './tokens'

export const siteConfig = defineConfig({
  theme: {
    tokens: themeTokens,
    semanticTokens: themeSemanticTokens,
    recipes: {
      button: buttonRecipe,
      heading: headingRecipe,
    },
    slotRecipes: { tag: tagRecipe },
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
})

export const system = createSystem(defaultConfig, siteConfig)
