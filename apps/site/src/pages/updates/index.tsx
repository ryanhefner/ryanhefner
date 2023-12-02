import { Box, Heading, Text } from '@chakra-ui/react'
import { PageWrapper } from '../../components/site/PageWrapper'
import { SiteLayout } from '../../components/layouts'

const UpdatesIndexPage = () => (
  <PageWrapper>
    <Heading
      as="h1"
      fontSize={{ base: '6xl', md: '12xl' }}
      fontWeight="medium"
      lineHeight="none"
      ml={{ base: 0, md: -4 }}
    >
      Updates
    </Heading>
    <Box mt={16}>
      <Text fontSize="2xl" maxW="container.md"></Text>
    </Box>
  </PageWrapper>
)

UpdatesIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default UpdatesIndexPage
