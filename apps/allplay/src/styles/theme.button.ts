import { defineRecipe } from '@chakra-ui/react'

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
    fontWeight: 'semibold', // Match v2 default (v3 might default to 'medium')
  },
})
