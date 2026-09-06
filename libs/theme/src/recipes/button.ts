import { defineRecipe } from '@chakra-ui/react'

import { themeTypography } from '../tokens'

/**
 * Button recipe to match Chakra UI v2 defaults
 * v2 defaults:
 * - fontWeight: 'semibold'
 * - borderRadius: 'md'
 * - No textTransform by default
 */
export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: 'xs',
    textStyle: 'md',
    fontSize: 'md', // Match v2 default
    fontWeight: themeTypography.buttonWeight,
  },
})
