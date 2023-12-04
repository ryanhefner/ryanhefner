import { Grid } from '@chakra-ui/react'

export const ClientGrid = ({ children }) => (
  <Grid
    templateColumns={{
      base: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(5, 1fr)',
    }}
  >
    {children}
  </Grid>
)
