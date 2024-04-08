import { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import { SiteLayout } from '../../components/layouts'

const EpisodePage = () => {
  return (
    <Flex>
      <Heading>Episode</Heading>
    </Flex>
  )
}

EpisodePage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export default EpisodePage
