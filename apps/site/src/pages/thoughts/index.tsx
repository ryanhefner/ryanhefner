import { Box, Text } from '@chakra-ui/react'
import { PageWrapper } from '../../components/site/PageWrapper'
import { SiteLayout } from '../../components/layouts'
import { PageHeading } from '../../components/typography'

const ThoughtsIndexPage = () => (
  <PageWrapper>
    <PageHeading ml={0}>Thoughts</PageHeading>
    <Box mt={16}>
      <Text fontSize="2xl" maxW="container.md"></Text>
    </Box>
  </PageWrapper>
)

ThoughtsIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default ThoughtsIndexPage
