import { Box, Text } from '@chakra-ui/react'

import { SiteLayout } from '../../components/layouts'
import { PageWrapper } from '../../components/site/PageWrapper'
import { PageHeading } from '../../components/typography'

const UpdatesIndexPage = () => (
  <PageWrapper>
    <PageHeading>Updates</PageHeading>
    <Box mt={16}>
      <Text fontSize="2xl" maxW="container.md"></Text>
    </Box>
  </PageWrapper>
)

UpdatesIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default UpdatesIndexPage
