import { Center, Text } from '@chakra-ui/react'
import { Link } from 'components/base'
import { PageWrapper } from 'components/site'
import { PageHeading } from 'components/typography'

const Custom404Page = () => (
  <PageWrapper pos="relative">
    <Center
      pos={{ base: 'relative', md: 'absolute' }}
      top={0}
      left={0}
      w="full"
      height="full"
      flexDir="column"
      textAlign="center"
      pb={{ base: 16, md: 32 }}
    >
      <Text fontWeight="semibold">404</Text>
      <PageHeading>You peeking in on me!?</PageHeading>
      <Text fontSize="2xl" mt={16}>Sorry, nothing to see here.</Text>
      <Link href="/" color="blue.500" fontSize="3xl" mt={16}>Go home</Link>
    </Center>
  </PageWrapper>
)

export default Custom404Page
