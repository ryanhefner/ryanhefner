import { Heading } from '@chakra-ui/react'

export const PageHeading = ({ children, ...rest }) => (
  <Heading
    as="h1"
    fontSize={{ base: '6xl', sm: '9xl', xl: '12xl' }}
    fontWeight="medium"
    letterSpacing={{ base: -3, md: -5 }}
    lineHeight={1}
    ml={{ base: 0, md: -4 }}
    {...rest}
  >
    {children}
  </Heading>
)
