import { useCallback, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Marquee from 'react-marquease'
import { Link } from '../base'
import { SiteHeader, SiteFooter } from '../site'

export const SiteLayout = ({ children }) => {
  const [pauseMarquee, setPauseMarquee] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setPauseMarquee(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPauseMarquee(false)
  }, [])

  return (
    <>
      <Flex as="main" flexDir="column" minH="100vh" w="full">
        <SiteHeader />
        {children}
        <SiteFooter />
      </Flex>
      <Box
        bgColor="blue.500"
        py={3}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Marquee pause={pauseMarquee} speed={1.3}>
          <Text color="white" fontSize="3xl" whiteSpace="nowrap">
            |{` `}
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
            /{` `}
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
            {` `}|
          </Text>
        </Marquee>
      </Box>
    </>
  )
}
