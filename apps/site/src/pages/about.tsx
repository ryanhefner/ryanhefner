import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'

// import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
// import * as reactSpring from '@react-spring/three'
// import * as drei from '@react-three/drei'
// import * as fiber from '@react-three/fiber'
import { Link } from '../components/base'
import { ClientGrid, ClientGridItem } from '../components/clients'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading, SectionHeading } from '../components/typography'
import { clients } from '../data/clients'

const TITLE = 'Some more about me'
const DESCRIPTION =
  'I’m a software developer and product designer living in <s>Brooklyn, NY</s> Atlanta, GA.'

const AboutPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <PageWrapper>
      <PageHeading>About</PageHeading>
      <Box mt={16}>
        <Box fontSize="xl" maxW="container.md">
          <Text>
            I’m a software developer (by necessity) and product designer (by
            heart) based out of Atlanta, GA—by way of Brooklyn, NY—originally
            hailing from the Toledo, OH area. Constantly in pursuit of exploring
            new, but not always exciting, ideas
            <em> (has hammer, sees nails)</em>. I love crafting well designed
            and nicely coded software that gracefully solves the issue at hand,
            both for me and—I hope—others as well.
          </Text>
          <Text mt="8">
            If I am not writing code, coming up with more random project ideas,
            or solving my clients’ issues, you can find me hanging with my two
            kids, trying to find some surf in a <em>mostly</em> landlocked
            state, or getting lost while running trails or on the search for the
            next random skate spot.
          </Text>
        </Box>
      </Box>
      <Box mt={{ base: 16, md: 24 }} mb={16}>
        <SectionHeading>Podcasts</SectionHeading>
        <Text color="gray.500" fontSize="xl" maxW="container.md">
          In order to share a bit more about what I am working on, I have
          started a few podcasts. You can listen to them on your favorite
          podcatcher.
        </Text>
        <Grid
          gap={{ base: 5, lg: 10 }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(5, 1fr)',
          }}
          mt={8}
        >
          <GridItem>
            <Link href="https://www.allplay.fm" target="_blank">
              <Image
                src="/assets/podcasts/all-play.png"
                alt="All Play w/ Ryan Hefner"
                w="full"
              />
            </Link>
          </GridItem>
          <GridItem>
            <Link href="https://www.transmits.io/podcast" target="_blank">
              <Image
                src="/assets/podcasts/transmits.png"
                alt="Tranmists — The Podcast"
                w="full"
              />
            </Link>
          </GridItem>
        </Grid>
      </Box>
      <Box mt={{ base: 16, md: 24 }} mb={16}>
        <SectionHeading>Clients</SectionHeading>
        <ClientGrid>
          {clients.map((client) => (
            <ClientGridItem key={client.imageUrl} {...client} />
          ))}
        </ClientGrid>
      </Box>
      <Box my={16}>
        <SectionHeading>Elsewhere</SectionHeading>
        <Text fontSize="2xl" mt={8}>
          <Link
            href="https://www.github.com/ryanhefner"
            target="_blank"
            title="@ryanhefner on GitHub"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>{' '}
          /{` `}
          <Link
            href="https://www.twitter.com/ryanhefner"
            target="_blank"
            title="@ryanhefner on Twitter"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{' '}
          /{` `}
          <Link
            href="https://posts.cv/ryanhefner"
            target="_blank"
            title="@ryanhefner on posts.cv"
            rel="noopener noreferrer"
          >
            Posts.cv
          </Link>{' '}
          |{` `}
          <Link
            href="https://read.cv/ryanhefner"
            target="_blank"
            title="@ryanhefner on read.cv"
            rel="noopener noreferrer"
          >
            Read.cv
          </Link>{' '}
          /{` `}
          <Link
            href="https://www.instagram.com/instagram"
            target="_blank"
            title="@ryanhefner on Instagram"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>{' '}
          |{` `}
          <Link
            href="https://www.threads.net/@ryanhefner"
            target="_blank"
            title="@ryanhefner on Threads"
            rel="noopener noreferrer"
          >
            Threads
          </Link>
          {` `}/{` `}
          <Link
            href="https://www.dribbble.com/ryanhefner"
            target="_blank"
            title="@ryanhefner on Dribbble"
            rel="noopener noreferrer"
          >
            Dribbble
          </Link>{' '}
          /{` `}
          <Link
            href="https://open.spotify.com/user/ryanhefner"
            target="_blank"
            title="@ryanhefner on Spotify"
            rel="noopener noreferrer"
          >
            Spotify
          </Link>{' '}
          /{` `}
          <Link
            href="https://www.vimeo.com/ryanhefner"
            target="_blank"
            title="@ryanhefner on Vimeo"
            rel="noopener noreferrer"
          >
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

AboutPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default AboutPage
