import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import { SiteLayout } from '../../components/layouts'

const NewslettersIndexPage = () => {
  return (
    <Flex>
      <Heading>Newsletters</Heading>
    </Flex>
  )
}

NewslettersIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export default NewslettersIndexPage
