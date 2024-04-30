import { ReactNode } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TransistorClient } from 'transistor-client'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts/SiteLayout'
import { EpisodeList } from '../components/media/EpisodeList'
import { Podcatchers } from '../components/podcast/Podcatchers'

const SHOW_ID = process.env.NEXT_PUBLIC_TRANSISTOR_SHOW_ID

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
  episodes = [],
  show = null,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Flex
      flexDir="column"
      flex={1}
      h="full"
      px={{ base: 4, md: 8 }}
      py={{ base: 12, md: 24 }}
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
        , share what I am doing and the things I am getting into. You can follow
        along by listening to the{' '}
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
      <EpisodeList mt={24} episodes={episodes} />
      <Podcatchers show={show} mt={24} />
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
      <Box id="signup" mt={24}>
        <Heading as="h3">Subscribe to the newletter</Heading>
        <Text color="gray.400">
          Get updates when new episodes are posted, and other fun stuff that I
          am into.
        </Text>
        <NewsletterForm />
      </Box>
    </Flex>
  )
}

IndexPage.getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>

export const getStaticProps = (async () => {
  const transistorClient = new TransistorClient({
    apiKey: process.env.TRANSISTOR_API_KEY,
  })
  let episodes = []
  let show = null

  try {
    const [showResponse, episodesResponse] = await Promise.all([
      transistorClient.show(SHOW_ID as string),
      transistorClient.episodes(SHOW_ID as string),
    ])
    show = showResponse?.data
    episodes = episodesResponse?.data.sort((a: any, b: any) => {
      if (a.attributes.number > b.attributes.number) {
        return 1
      }

      if (a.attributes.number < b.attributes.number) {
        return -1
      }

      return 0
    })
  } catch (err) {
    console.error(err)
  }

  return {
    props: {
      episodes,
      show,
    },
  }
}) satisfies GetStaticProps<{ episodes: any[]; show: any }>

export default IndexPage
