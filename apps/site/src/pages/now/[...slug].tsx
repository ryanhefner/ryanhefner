import { format } from 'date-fns'
import { allNows, Now } from 'contentlayer/generated'
import { NowLayout } from '../../components/layouts'
import { NowPage } from '../../components/pages'

const NowPageIndex = ({ now }: { now: Now }) => {
  return <NowPage now={now} />
}

NowPageIndex.getLayout = (page) => <NowLayout>{page}</NowLayout>

export const getStaticPaths = async () => {
  const paths = allNows.map((now) => ({
    params: { slug: [format(now.date, 'yyyy-MM-dd')] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const now = allNows.find(
    (now) => format(now.date, 'yyyy-MM-dd') === params.slug[0],
  )

  return {
    props: {
      now,
    },
  }
}

export default NowPageIndex
