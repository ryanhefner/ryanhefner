import { ReactNode } from 'react'

import { SiteLayout } from '../components/layouts'

const WithOssPage = () => {
  return null
}

WithOssPage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export default WithOssPage
