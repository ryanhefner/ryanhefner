import { ReactNode } from 'react'

import { SiteLayout } from '../../components/layouts'

const EpisodesIndexPage = () => {
  return null
}

EpisodesIndexPage.getLayout = (page: ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export default EpisodesIndexPage
