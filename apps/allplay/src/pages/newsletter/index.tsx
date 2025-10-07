import { ReactNode, ViewTransition } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'

import { SiteLayout } from '../../components/layouts'

const NewslettersIndexPage = () => {
  return (
    <ViewTransition>
      <Flex flexDir="column" flex={1} h="full" w="full">
        <Box
          id="signup"
          mt={24}
          pos="relative"
          px={{ base: 4, md: 8 }}
          py={{ base: 12, md: 16 }}
        >
          <Heading as="h3">Subscribe to the newsletter</Heading>
          <Text color="gray.400">
            Get updates when new episodes are posted, and other fun stuff that I
            am into.
          </Text>
          <NewsletterForm />
        </Box>
      </Flex>
    </ViewTransition>
  )
}

NewslettersIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export default NewslettersIndexPage
