import { Box } from '@chakra-ui/react'

export const ProjectGridItem = ({ children }) => (
  <Box flexBasis={{ base: '100%', sm: '50%', md: '33.3%', lg: '25%', xl: '20%' }}>
    {children}
  </Box>
)
