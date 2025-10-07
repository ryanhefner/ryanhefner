import { ReactNode, ViewTransition } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { usePodcast } from 'use-podcast'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts/SiteLayout'
import { EpisodeList } from '../components/media/EpisodeList'
import { Podcatchers } from '../components/podcast/Podcatchers'
import { feeds } from '../data/feeds'

// const newsletters = [
//   {
//     id: 3,
//     slug: '/002-stacking-packages',
//     title: '002 – Stacking the Packages',
//   },
//   {
//     id: 2,
//     slug: '/001-focusing-distractions',
//     title: '001 – Focusing Distractions',
//   },
//   {
//     id: 1,
//     slug: '/000-welcome',
//     title: '000 – Welcome to, All Play!',
//   },
// ]

const IndexPage = ({
  feed,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ViewTransition>
      <Flex
        flexDir="column"
        flex={1}
        h="full"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 24 }}
        w="full"
      >
        <Text
          color="gray.400"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="normal"
          letterSpacing={-1.2}
          lineHeight={1.2}
        >
          Welcome to All Play! This is where I,{' '}
          <Link color="white" href="https://www.ryanhefner.com">
            Ryan Hefner
          </Link>
          , share what I am doing and the things I am getting into. You can
          follow along by listening to the{' '}
          <Link color="white" href="/podcast">
            podcast
          </Link>{' '}
          or reading the{' '}
          <Link color="white" href="/newsletter">
            newsletter
          </Link>
          .
          <br />
          <br />
          If you like what you hear, please{' '}
          <Link color="white" href="#subscribe">
            subscribe
          </Link>{' '}
          in your favorite podcatcher. And, if you’re into what I am writing,
          please{' '}
          <Link color="white" href="#signup">
            sign up
          </Link>{' '}
          for the newsletter.
        </Text>
        <EpisodeList mt={24} episodes={feed.items} />
        <Podcatchers feeds={feeds} mt={24} />
        {/* <Flex flexDir="column" mt={24}>
          <Heading as="h2" color="gray.400" fontSize="lg" mb={4}>
            Newsletters
          </Heading>
          {newsletters.map((newsletter: any) => (
            <Link
              key={newsletter.id}
              href={`/newsletter${newsletter.slug}`}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Flex
                borderBottom="1px solid"
                borderColor="gray.800"
                justifyContent="space-between"
                py={4}
              >
                <Text fontSize="md">{newsletter.title}</Text>
              </Flex>
            </Link>
          ))}
        </Flex> */}
      </Flex>
      <Box
        id="signup"
        pos="relative"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 16 }}
      >
        <Heading as="h3">Subscribe to the newsletter</Heading>
        <Text color="gray.400">
          Get updates when new episodes are posted, and other fun stuff that I
          am into.
        </Text>
        <NewsletterForm />
      </Box>
    </ViewTransition>
  )
}

IndexPage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export const getStaticProps = (async () => {
  const { getFeed } = usePodcast({
    url: process.env.NEXT_PUBLIC_PODCAST_FEED_URL,
  })

  const feed = await getFeed()

  return { props: { feed } }
}) satisfies GetStaticProps<{ feed: any }>

export default IndexPage
