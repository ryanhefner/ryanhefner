import { Heading } from '@chakra-ui/react';

export const SectionHeading = ({ children, ...rest }) => (
  <Heading
    as="h3"
    fontSize={{ base: '4xl', lg: '5xl' }}
    fontWeight="medium"
    {...rest}
  >
    {children}
  </Heading>
);
