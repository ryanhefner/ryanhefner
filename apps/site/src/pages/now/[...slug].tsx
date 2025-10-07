import { ViewTransition } from 'react'
import { UTCDateMini } from '@date-fns/utc'
import { Now, allNows } from 'contentlayer/generated'
import { format } from 'date-fns'

import { NowLayout } from '../../components/layouts'
import { NowPage } from '../../components/pages'

const NowPageIndex = ({ now }: { now: Now }) => (
  <ViewTransition>
    <NowPage now={now} />
  </ViewTransition>
)

NowPageIndex.getLayout = (page) => <NowLayout>{page}</NowLayout>

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
