import React from 'react'

import { Grid } from '@chakra-ui/react'

export const ProjectGrid = ({ children, showImages = false, ...props }) => (
  <Grid
    gap={{ base: 0, md: 5, lg: 10 }}
    mt={16}
    w="full"
    templateColumns={{
      base: 'repeat(1, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      '2xl': 'repeat(4, 1fr)',
    }}
    {...props}
  >
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { showImages }),
    )}
  </Grid>
)
