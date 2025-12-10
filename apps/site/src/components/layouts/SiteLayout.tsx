import {
  PropsWithChildren,
  ViewTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import Marquee from 'react-marquease'

import { Link } from '../base'
import { SiteFooter, SiteHeader } from '../site'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [pauseMarquee, setPauseMarquee] = useState(false)
  const [isInViewport, setIsInViewport] = useState(true)
  const marqueeContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    setPauseMarquee(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPauseMarquee(false)
  }, [])

  // Intersection Observer to detect when Marquee is outside viewport
  useEffect(() => {
    const container = marqueeContainerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting)
        })
      },
      {
        // Trigger when element is completely outside viewport
        threshold: 0,
        // Add a small root margin to account for partial visibility
        rootMargin: '0px',
      },
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Flex as="main" flexDir="column" minH="100dvh" w="full">
        <Link
          href="#main-content"
          position="absolute"
          top={-10}
          left={0}
          bg="blue.500"
          color="white"
          px={4}
          py={2}
          zIndex={1000}
          _focus={{ top: 0 }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: 'white',
            outlineOffset: '2px',
          }}
        >
          Skip to main content
        </Link>
        <SiteHeader />
        <Flex id="main-content" flexDir="column" flex={1} tabIndex={-1}>
          <ViewTransition>{children}</ViewTransition>
        </Flex>
        <SiteFooter />
      </Flex>
      <Box
        ref={marqueeContainerRef}
        bgColor="blue.500"
        py={3}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        w="full"
      >
        <Marquee pause={pauseMarquee || !isInViewport} speed={0.5}>
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
