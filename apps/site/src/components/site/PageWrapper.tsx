import { Box } from '@chakra-ui/react';

export const PageWrapper = ({ children, ...rest }) => (
  <Box
    flex="1"
    py={{ base: 6 }}
    px={{ base: 6, sm: 10, md: 16, xl: 24 }}
    {...rest}
  >
    {children}
  </Box>
);
