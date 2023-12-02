import React from 'react'
import { GridItem } from '@chakra-ui/react'

export const ProjectGridItem = ({ children, showImages = false }) => (
  <GridItem
    flexBasis={{
      base: '100%',
      md: '45%',
      lg: '30%',
      '2xl': '22%',
    }}
    pb={12}
  >
    {React.cloneElement(children, { showImages })}
  </GridItem>
)
