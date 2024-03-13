import { Heading } from '@chakra-ui/react'

export const SectionHeading = ({ children, ...rest }) => (
  <Heading
    as="h3"
    fontSize={{ base: 'xl', lg: '2xl' }}
    fontWeight="semibold"
    {...rest}
  >
    {children}
  </Heading>
)
