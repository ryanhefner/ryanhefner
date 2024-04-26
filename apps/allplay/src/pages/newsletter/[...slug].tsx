import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import { SiteLayout } from '../../components/layouts'

const NewsletterPage = () => {
  return (
    <Flex>
      <Heading>Newsletter</Heading>
    </Flex>
  )
}

NewsletterPage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export default NewsletterPage
