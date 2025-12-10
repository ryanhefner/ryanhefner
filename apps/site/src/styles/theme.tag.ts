import { defineSlotRecipe } from '@chakra-ui/react'

export const tagRecipe = defineSlotRecipe({
  slots: ['container'],
  base: {
    container: {},
  },
  variants: {
    variant: {
      outline: {
        container: {
          borderColor: '#000',
          color: '#000',
          _dark: {
            borderColor: '#fff',
            color: '#fff',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})
