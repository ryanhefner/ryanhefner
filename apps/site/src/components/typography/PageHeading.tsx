import { Heading } from '@chakra-ui/react';

export const PageHeading = ({ children, ...rest }) => (
  <Heading
    as="h1"
    fontSize={{ base: '6xl', sm: '7xl', md: '8xl', xl: '9xl' }}
    fontWeight="medium"
    lineHeight="none"
    {...rest}
  >
    {children}
  </Heading>
);
