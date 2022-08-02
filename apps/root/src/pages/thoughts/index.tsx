import { Box, Heading, Text } from '@chakra-ui/react'
import { PageWrapper } from 'components/site/PageWrapper'

const ThoughtsIndexPage = () => (
  <PageWrapper>
    <Heading
      as="h1"
      fontSize={{ base: '6xl', md: '9xl' }}
      fontWeight="medium"
      lineHeight="none"
    >
      Thoughts
    </Heading>
    <Box  mt={16}>
      <Text fontSize="2xl" maxW="container.md">

      </Text>
    </Box>
  </PageWrapper>
)

export default ThoughtsIndexPage
