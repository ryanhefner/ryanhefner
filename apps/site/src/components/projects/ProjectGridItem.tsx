import React from 'react'
import { GridItem } from '@chakra-ui/react'

export const ProjectGridItem = ({ children, showImages = false }) => (
  <GridItem pb={12}>{React.cloneElement(children, { showImages })}</GridItem>
)
