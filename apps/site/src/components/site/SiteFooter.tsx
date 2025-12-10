import { Box, Flex, HStack, Icon, Image, Text, chakra } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from 'chakra-color'
import { ImRss } from 'react-icons/im'

import { Link } from '../base'

const Break = chakra('br')

export const SiteFooter = () => {
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue('black', 'white')
  const color = useColorModeValue('white', 'black')

  return (
    <Flex
      as="footer"
      bgColor={bgColor}
      color={color}
      flexDir={{ base: 'column-reverse', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      py={{ base: 6 }}
      px={{ base: 6, sm: 10, md: 16, xl: 24 }}
      w="full"
    >
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        gap={{ base: 3, md: 6 }}
        flexDir={{ base: 'column', md: 'row-reverse' }}
      >
        <HStack alignItems="center" gap={4}>
          <Link href="/withoss">
            <Image
              alt="With OSS"
              src="/assets/oss.svg"
              h={6}
              filter={colorMode === 'light' ? '' : 'invert(1)'}
            />
          </Link>
          <Link href="/feeds" lineHeight={0}>
            <Icon as={ImRss} w={5} h={5} />
          </Link>
        </HStack>
        <Text fontFamily="mono" fontSize="sm">
          <Text as="span">
            &copy;2004—{`${new Date().getFullYear()}`} — Ryan Hefner.{' '}
          </Text>
          <Break display={{ base: 'block', md: 'none' }} />
          May all your days be rad 🤙.
        </Text>
      </Flex>
      <HStack gap={{ base: 3, md: 6 }} mb={{ base: 5, md: 0 }}>
        <Link
          href="https://www.github.com/ryanhefner"
          target="_blank"
          rel="me authn noopener noreferrer"
          title="@ryanhefner on GitHub"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            GitHub
          </Text>
        </Link>
        <Link
          href="https://bsky.app/profile/ryanhefner.com"
          target="_blank"
          rel="me noopener noreferrer"
          title="@ryanhefner.com on Bluesky"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            Bluesky
          </Text>
        </Link>
        <Link
          href="https://mastodon.social/@ryanhefner"
          target="_blank"
          rel="me noopener noreferrer"
          title="@ryanhefner on Mastodon"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">
            Mastodon
          </Text>
        </Link>
      </HStack>
    </Flex>
  )
}
