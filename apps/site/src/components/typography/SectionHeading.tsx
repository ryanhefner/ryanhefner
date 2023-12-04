import { Heading } from '@chakra-ui/react'

export const SectionHeading = ({ children, ...rest }) => (
  <Heading
    as="h3"
    fontSize={{ base: '2xl', lg: '3xl' }}
    fontWeight="semibold"
    {...rest}
  >
    {children}
  </Heading>
)
