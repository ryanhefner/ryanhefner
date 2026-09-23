import { UTCDateMini } from '@date-fns/utc'
import { Now, allNows } from 'content-collections'
import { format } from 'date-fns'

import { NowLayout, SiteLayout } from '../../components/layouts'
import { NowPage } from '../../components/pages'

const NowPageIndex = ({ now }: { now: Now }) => {
  return <NowPage now={now} />
}

NowPageIndex.getLayout = (page) => (
  <SiteLayout>
    <NowLayout>{page}</NowLayout>
  </SiteLayout>
)

export const getStaticPaths = async () => {
  const paths = allNows.map((now) => ({
    params: { slug: [format(new UTCDateMini(now.date), 'yyyy-MM-dd')] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const now = allNows.find(
    (now) => format(new UTCDateMini(now.date), 'yyyy-MM-dd') === params.slug[0],
  )

  return {
    props: {
      now,
    },
  }
}

export default NowPageIndex
