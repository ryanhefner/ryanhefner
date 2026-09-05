import { Heading } from '@chakra-ui/react'

export const SectionHeading = ({ children, ...rest }) => (
  <Heading
    as="h2"
    fontSize={{ base: 'xl', lg: '2xl' }}
    fontWeight="semibold"
    {...rest}
  >
    {children}
  </Heading>
)
