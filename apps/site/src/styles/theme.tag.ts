import { defineRecipe } from '@chakra-ui/react'

export const tagRecipe = defineRecipe({
  base: {},
  variants: {
    variant: {
      outline: {
        borderColor: '#000',
        color: '#000',
        _dark: {
          borderColor: '#fff',
          color: '#fff',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})
