import { Box } from '@chakra-ui/react'

export const ProjectGridItem = ({ children }) => (
  <Box
    flexBasis={{
      base: '100%',
      md: '50%',
      lg: '33.3%',
      xl: '25%',
      '2xl': '20%',
    }}
    pr={{ base: 0, md: 5, lg: 10 }}
    pb={16}
  >
    {children}
  </Box>
)
