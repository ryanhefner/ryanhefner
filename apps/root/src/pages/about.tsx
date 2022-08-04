import Head from 'next/head'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { ClientGrid, ClientGridItem } from 'components/clients'
import { PageWrapper } from 'components/site'
import { clients } from 'data/clients'

const TITLE = 'All about me | Ryan Hefner - All Play'
const DESCRIPTION = 'I’m a software engineer and product designer living in <s>Brooklyn, NY</s> Atlanta, GA.'

const AboutPage = () => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
    <PageWrapper>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', md: '9xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        About
      </Heading>
      <Box mt={16}>
        <Box maxW="container.md">
          <Text fontSize={{ base: 'xl', md: '2xl' }}>
            I’m a software engineer (by necessity) and product designer (by heart) based out of
            Atlanta, GA—by way of Brooklyn, NY—originally hailing from Toledo, OH.
            Constantly in pursuit of exploring new, but not always exciting, ideas
            <em> (has hammer, sees nails)</em>. I love crafting well designed
            and nicely coded software that gracefully solves the issue at hand,
            both for me and—I hope—others as well.
          </Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }} mt="8">
            If I am not writing code, coming up with more random project ideas, or
            solving my clients’ issues, you can find me hanging with my two kids,
            trying to find some surf in a <em>mostly</em> landlocked state, or getting
            lost while running trails or on the search for the next random skate spot.
          </Text>
        </Box>
      </Box>
      <Box mt={{ base: 16, md: 24 }} mb={16}>
        <Heading as="h3" fontWeight="medium">
          Clients
        </Heading>
        <ClientGrid>
          {clients.map((client) => <ClientGridItem key={client.imageUrl} {...client} />)}
        </ClientGrid>
      </Box>
      <Box my={16}>
        <Heading as="h3" fontWeight="medium">
          Elsewhere
        </Heading>
        <Text fontSize="3xl" mt={8}>
          <Link href="https://www.github.com/ryanhefner" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link> /{` `}
          <Link href="https://www.twitter.com/ryanhefner" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link> /{` `}
          <Link href="https://www.instagram.com/instagram" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link> /{` `}
          <Link href="https://www.dribbble.com/ryanhefner" target="_blank" rel="noopener noreferrer">
            Dribbble
          </Link> /{` `}
          <Link href="https://open.spotify.com/user/ryanhefner" target="_blank" rel="noopener noreferrer">
            Spotify
          </Link> /{` `}
          <Link href="https://www.vimeo.com/ryanhefner" target="_blank" rel="noopener noreferrer">
            Vimeo
          </Link>
        </Text>
      </Box>
      {/* <Flex mt={16}>
        <Box flexBasis={{ base: '100%', md: '50%' }}>
          <Heading as="h3" fontWeight="medium">
            Habits
          </Heading>
        </Box>
        <Box flexBasis={{ base: '100%', md: '50%' }}>
          <Heading as="h3" fontWeight="medium">
            Rituals
          </Heading>
        </Box>
      </Flex> */}
    </PageWrapper>
  </>
)

export default AboutPage
