import { ComponentStyleConfig } from '@chakra-ui/react'

export const Tag: ComponentStyleConfig = {
  variants: {
    outline: {
      borderColor: 'black',
      color: 'black',
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
