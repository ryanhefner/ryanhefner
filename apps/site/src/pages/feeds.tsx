import fs from 'fs'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { allNows } from 'contentlayer/generated'
import { Feed } from 'feed'
import { SiteMeta } from 'next-meta'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading, SectionHeading } from '../components/typography'

const FeedsPage = () => {
  return (
    <>
      <SiteMeta
        title="Feeds to subscribe to"
        description="RSS feeds you can subscribe to from the site."
      />
      <PageWrapper>
        <PageHeading>Feeds</PageHeading>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          w="full"
          mt={{ base: 16, md: 24 }}
        >
          <Box flexBasis={{ base: 'full' }}>
            <SectionHeading>All</SectionHeading>
            <HStack color="gray.500" gap={4}>
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
    </>
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

  // Thoughts excluded per user request - not yet ready for public access
  const items = [...allNows]

  await Promise.all(
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
      .map(async (item) => {
        const content = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeStringify)
          .process(item.body.raw)

        feed.addItem({
          title: item.title,
          id: `${SITE_URL}${item.url}`,
          link: `${SITE_URL}${item.url}`,
          description: item.description,
          content: content.toString(),
          date: new Date(item.date),
        })

        return Promise.resolve()
      }),
  )

  fs.writeFileSync('./public/feeds/all/rss.xml', feed.rss2())
  fs.writeFileSync('./public/feeds/all/rss.json', feed.json1())
  fs.writeFileSync('./public/feeds/all/atom.xml', feed.atom1())

  return {
    props: {},
  }
}

export default FeedsPage
