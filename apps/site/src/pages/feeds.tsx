import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Feed } from 'feed'
import fs from 'fs'
import { allNows, allThoughts } from 'contentlayer/generated'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading, SectionHeading } from '../components/typography'

const FeedsPage = () => {
  return (
    <PageWrapper>
      <PageHeading>Feeds</PageHeading>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w="full"
        mt={{ base: 16, md: 24 }}
      >
        <Box flexBasis={{ base: 'full' }}>
          <SectionHeading>All</SectionHeading>
          <HStack color="gray.500" spacing={4}>
            <Link href="/feeds/all/rss.xml">
              <Text>XML</Text>
            </Link>
            <Link href="/feeds/all/rss.json">
              <Text>JSON</Text>
            </Link>
            <Link href="/feeds/all/atom.xml">
              <Text>ATOM</Text>
            </Link>
          </HStack>
        </Box>
      </Flex>
    </PageWrapper>
  )
}

FeedsPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export const getStaticProps = async () => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

  const feedOptions = {
    title: 'Ryan Hefner | All | RSS Feed',
    description: 'Welcome to this blog posts!',
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/assets/ryan-hefner-social.jpg`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ryan Hefner`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${SITE_URL}/feeds/all/rss.xml`,
      json: `${SITE_URL}/feeds/all/rss.json`,
      atom: `${SITE_URL}/feeds/all/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  const items = [...allNows, ...allThoughts]

  items
    .sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1
      }

      if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1
      }

      return 0
    })
    .map((item) => {
      feed.addItem({
        title: item.title,
        id: `${SITE_URL}${item.url}`,
        link: `${SITE_URL}${item.url}`,
        description: item.description,
        date: new Date(item.date),
      })
    })

  fs.writeFileSync('./public/feeds/all/rss.xml', feed.rss2())
  fs.writeFileSync('./public/feeds/all/rss.json', feed.json1())
  fs.writeFileSync('./public/feeds/all/atom.xml', feed.atom1())

  return {
    props: {},
  }
}

export default FeedsPage
