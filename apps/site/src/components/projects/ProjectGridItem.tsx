import { GridItem } from '@chakra-ui/react'

export const ProjectGridItem = ({ children }) => (
  <GridItem
    flexBasis={{
      base: '100%',
      md: '45%',
      lg: '30%',
      '2xl': '22%',
    }}
    pb={12}
  >
    {children}
  </GridItem>
)
