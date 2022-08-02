import { Box,Center, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { PageWrapper } from 'components/site'

const AboutPage = () => (
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
          for me and—I hope—others as well.
        </Text>
        <Text fontSize={{ base: 'xl', md: '2xl' }} mt="8">
          If I am not writing code, coming up with more random ideas, or solving
          my clients’ issues, you can find me hanging with my two kids, trying
          to find some surf in a <em>mostly</em> landlocked state, or getting
          lost while running trails or on the search for the next random skate spot.
        </Text>
      </Box>
    </Box>
    <Box my={16}>
      <Heading as="h3" fontWeight="medium">
        Clients
      </Heading>
      <Flex flexWrap="wrap">
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="AIGA" src="/assets/clients/aiga.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Apple" src="/assets/clients/apple.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="AT&amp;T" src="/assets/clients/at-and-t.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="DirecTV" src="/assets/clients/directv.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="EA Sports" src="/assets/clients/ea-sports.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Electronic Arts" src="/assets/clients/ea.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="GoodRx" src="/assets/clients/goodrx.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="NBC" src="/assets/clients/nbc.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Nintendo" src="/assets/clients/nintendo.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Ohio University" src="/assets/clients/ohio-university.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Oscar" src="/assets/clients/oscar.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Spotify" src="/assets/clients/spotify.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Vimeo" src="/assets/clients/vimeo.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
        <Center flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }} minH={{ base: 120, md: 180, lg: 180 }}>
          <Image alt="Warner Brothers" src="/assets/clients/warner-bros.svg" w={{ base: '75%', lg: '50%' }} />
        </Center>
      </Flex>
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
)

export default AboutPage
