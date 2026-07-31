// import {
//   Box,
//   Heading,
//   ListItem,
//   OrderedList,
//   Text,
//   UnorderedList,
// } from '@chakra-ui/react'
// import { PageMeta } from 'next-meta'
// import { FootnoteLink, Link } from '../../components/base'
// import { PageWrapper } from '../../components/site'
// import { PageHeading } from '../../components/typography'
// import { ProjectLink } from '../../constants'
import { allNows } from 'content-collections'

import { NowLayout } from '../../components/layouts'
import { NowPage } from '../../components/pages'

const TITLE = 'What I’m working on, now'
const DESCRIPTION =
  'A break-down of things that I’m focusing on right now. A listing of projects that are in-development, on-going initiatives, and upcoming projects that are on the horizon.'

const NowPageIndex = ({ now }) => (
  <NowPage description={DESCRIPTION} now={now} title={TITLE} url="/now" />
)

NowPageIndex.getLayout = (page) => <NowLayout>{page}</NowLayout>

export const getStaticProps = async () => {
  const now = allNows.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })[0]

  return {
    props: {
      now,
    },
  }
}

export default NowPageIndex
