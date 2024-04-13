import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import { SiteLayout } from '../../components/layouts'

const EpisodesIndexPage = () => {
  return (
    <Flex>
      <Heading>Episodes</Heading>
    </Flex>
  )
}

EpisodesIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export default EpisodesIndexPage
