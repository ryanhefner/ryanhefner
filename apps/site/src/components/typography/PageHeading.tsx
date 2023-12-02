import { Heading } from '@chakra-ui/react'

export const PageHeading = ({ children, ...rest }) => (
  <Heading
    as="h1"
    fontSize={{ base: '6xl', sm: '7xl', md: '12xl' }}
    fontWeight="medium"
    lineHeight="none"
    ml={{ base: 0, md: -4 }}
    {...rest}
  >
    {children}
  </Heading>
)
