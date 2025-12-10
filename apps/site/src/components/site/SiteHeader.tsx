import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { allUpdates } from 'contentlayer/generated'

import { Link } from '../base'

export const SiteHeader = () => (
  <Flex
    as="header"
    flexDir={{ base: 'column', md: 'row' }}
    alignItems={{ base: 'flex-start', md: 'center' }}
    justifyContent="space-between"
    w="100%"
    pos="sticky"
    top={0}
    zIndex={1}
    mixBlendMode="difference"
    pt={{ base: 6, md: 20 }}
    pb={{ base: 6 }}
    px={{ base: 6, sm: 10, md: 16, xl: 24 }}
  >
    <HStack>
      <div id="hcard-Ryan-Hefner" className="vcard">
        <Link
          href={
            process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'
          }
          className="h-card url fn p-author u-url u-uid"
          color="white"
          rel="author"
        >
          <Text fontSize="lg" fontWeight="medium">
            Ryan Hefner
          </Text>
        </Link>
        <Image
          src="/assets/ryan-hefner-peace.jpg"
          className="photo author-icon"
          display="none"
          alt="photo of Ryan Hefner"
        />
        <Text className="p-note" display="none">
          Software Developer and Eternal Tinkerer
        </Text>
        <Box className="org" display="none">
          Commune Software
        </Box>
        <Link href="mailto:hi@ryanhefner.com" className="email" display="none">
          hi@ryanhefner.com
        </Link>
        <Link
          href="https://www.github.com/ryanhefner"
          rel="me"
          title="@ryanhefner on GitHub"
          display="none"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            GitHub
          </Text>
        </Link>
        <Link
          href="https://bsky.app/profile/ryanhefner.com"
          rel="me"
          title="@ryanhefner.com on Bluesky"
          display="none"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            Bluesky
          </Text>
        </Link>
        <Link
          href="https://mastodon.social/@ryanhefner"
          rel="me"
          title="@ryanhefner on Mastodon"
          display="none"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            Mastodon
          </Text>
        </Link>
      </div>
      <Text color="white">{` — `}</Text>
      <Link href="https://www.allplay.fm" color="white">
        <Text fontSize="lg" fontWeight="medium">
          All Play
        </Text>
      </Link>
    </HStack>
    <Flex
      as="nav"
      flexWrap="wrap"
      columnGap={{ base: 3, md: 6 }}
      rowGap={0}
      color="white"
    >
      <Link href="/projects" display="inline">
        <Text as="span" fontSize="lg">
          Projects
        </Text>
      </Link>
      {/* Thoughts hidden per user request - not yet ready for public access */}
      {/* {allThoughts.length ? (
        <Link href="/thoughts" display="inline">
          <Text as="span" fontSize="lg">
            Thoughts
          </Text>
        </Link>
      ) : null} */}
      {allUpdates.length ? (
        <Link href="/updates" display="inline">
          <Text as="span" fontSize="lg">
            Updates
          </Text>
        </Link>
      ) : null}
      <Link href="/about" display="inline">
        <Text as="span" fontSize="lg">
          About
        </Text>
      </Link>
      <Link href="/now" display="inline">
        <Text as="span" fontSize="lg">
          Now
        </Text>
      </Link>
    </Flex>
  </Flex>
)
