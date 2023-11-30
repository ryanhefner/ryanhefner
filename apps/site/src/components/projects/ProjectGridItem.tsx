import { Box } from '@chakra-ui/react'

export const ProjectGridItem = ({ children }) => (
  <Box
    flexBasis={{
      base: '100%',
      md: '50%',
      lg: '33.3%',
      '2xl': '25%',
    }}
    pr={{ base: 0, md: 5, lg: 10 }}
    pb={16}
  >
    {children}
  </Box>
)
