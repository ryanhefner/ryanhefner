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
    fontSize: 'md',
    fontWeight: 'semibold', // Match v2 default (v3 might default to 'medium')
    borderRadius: 'md', // Match v2 default
  },
  variants: {
    // Keep default variants but ensure base styles match v2
  },
  defaultVariants: {
    // Use v3 defaults for variant and size
  },
})
