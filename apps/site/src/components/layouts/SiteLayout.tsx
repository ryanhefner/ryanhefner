import { PropsWithChildren, ViewTransition, useCallback, useState } from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import Marquee from 'react-marquease'

import { Link } from '../base'
import { SiteFooter, SiteHeader } from '../site'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [pauseMarquee, setPauseMarquee] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setPauseMarquee(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPauseMarquee(false)
  }, [])

  return (
    <>
      <Flex as="main" flexDir="column" minH="100dvh" w="full">
        <SiteHeader />
        <ViewTransition>{children}</ViewTransition>
        <SiteFooter />
      </Flex>
      <Box
        bgColor="blue.500"
        py={3}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        w="full"
      >
        <Marquee pause={pauseMarquee} speed={0.5}>
          <Text color="white" fontSize="3xl" whiteSpace="nowrap">
            |{` `}
            <Link
              href="https://www.github.com/ryanhefner"
              target="_blank"
              title="@ryanhefner on GitHub"
              rel="me noopener noreferrer nofollow"
            >
              GitHub
            </Link>{' '}
            /{` `}
            <Link
              href="https://bsky.app/profile/ryanhefner.com"
              target="_blank"
              rel="me noopener noreferrer"
              title="@ryanhefner.com on Bluesky"
            >
              Bluesky
            </Link>{' '}
            /{` `}
            <Link
              href="https://www.twitter.com/ryanhefner"
              target="_blank"
              title="@ryanhefner on Twitter"
              rel="me noopener noreferrer nofollow"
            >
              Twitter
            </Link>{' '}
            /{` `}
            <Link
              href="https://posts.cv/ryanhefner"
              target="_blank"
              title="@ryanhefner on posts.cv"
              rel="me noopener noreferrer nofollow"
            >
              Posts.cv
            </Link>{' '}
            |{` `}
            <Link
              href="https://read.cv/ryanhefner"
              target="_blank"
              title="@ryanhefner on read.cv"
              rel="me noopener noreferrer nofollow"
            >
              Read.cv
            </Link>{' '}
            /{` `}
            <Link
              href="https://www.instagram.com/instagram"
              target="_blank"
              title="@ryanhefner on Instagram"
              rel="me noopener noreferrer nofollow"
            >
              Instagram
            </Link>{' '}
            |{` `}
            <Link
              href="https://www.threads.net/@ryanhefner"
              target="_blank"
              title="@ryanhefner on Threads"
              rel="me noopener noreferrer"
            >
              Threads
            </Link>
            {` `}/{` `}
            <Link
              href="https://www.dribbble.com/ryanhefner"
              target="_blank"
              title="@ryanhefner on Dribbble"
              rel="me noopener noreferrer nofollow"
            >
              Dribbble
            </Link>{' '}
            /{` `}
            <Link
              href="https://open.spotify.com/user/ryanhefner"
              target="_blank"
              title="@ryanhefner on Spotify"
              rel="me noopener noreferrer nofollow"
            >
              Spotify
            </Link>{' '}
            /{` `}
            <Link
              href="https://www.twitch.tv/ryanhefner"
              target="_blank"
              title="@ryanhefner on Twitch"
              rel="me noopener noreferrer"
            >
              Twitch
            </Link>{' '}
            /{` `}
            <Link
              href="https://www.youtube.com/@ryan_hefner"
              target="_blank"
              title="@ryan_hefner on YouTube"
              rel="me noopener noreferrer"
            >
              YouTube
            </Link>{' '}
            /{` `}
            <Link
              href="https://www.vimeo.com/ryanhefner"
              target="_blank"
              title="@ryanhefner on Vimeo"
              rel="me noopener noreferrer nofollow"
            >
              Vimeo
            </Link>
            {` `}|
          </Text>
        </Marquee>
      </Box>
    </>
  )
}
