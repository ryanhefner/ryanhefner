import { Box, Heading, Text } from '@chakra-ui/react'
import { PageWrapper } from 'components/site'

const NowPage = () => (
  <PageWrapper>
    <Heading as="h1" fontSize={{ base: '6xl', md: '9xl' }} fontWeight="medium" lineHeight="none">
      Now
    </Heading>
    <Box  mt={16}>
      <Text fontSize="2xl" maxW="container.md">
        Ryan Hefner is a software engineer based out of Atlanta, GA, by way of Brooklyn, NY, and originally Toledo, OH.
        Constantly in pursuit of exploring new ideas
      </Text>
    </Box>
  </PageWrapper>
)

export default NowPage
