import { ComponentStyleConfig } from '@chakra-ui/react'

export const Tag: ComponentStyleConfig = {
  variants: {
    outline: {
      container: {
        borderColor: 'black',
        color: 'black',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
