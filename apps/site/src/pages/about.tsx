import { Box, Heading, Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'
// import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
// import * as reactSpring from '@react-spring/three'
// import * as drei from '@react-three/drei'
// import * as fiber from '@react-three/fiber'
import { Link } from '../components/base'
import { ClientGrid, ClientGridItem } from '../components/clients'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { clients } from '../data/clients'

const TITLE = 'Some more about me'
const DESCRIPTION =
  'I’m a software engineer and product designer living in <s>Brooklyn, NY</s> Atlanta, GA.'

const AboutPage = () => (
  <>
    <SiteMeta title={TITLE} description={DESCRIPTION} />
    <PageWrapper position="relative">
      <Box
        display="block"
        width="20px"
        height="140px"
        bg="blue.500"
        position="absolute"
        top="45px"
        left={0}
      >
        {/* <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'absolute',
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false"
          />
        </ShaderGradientCanvas> */}
      </Box>
      <Heading
        as="h1"
        fontSize={{ base: '6xl', md: '12xl' }}
        fontWeight="medium"
        lineHeight="none"
      >
        About
      </Heading>
      <Box mt={16}>
        <Box maxW="container.md">
          <Text fontSize={{ base: 'xl', md: '2xl' }}>
            I’m a software engineer (by necessity) and product designer (by
            heart) based out of Atlanta, GA—by way of Brooklyn, NY—originally
            hailing from the Toledo, OH area. Constantly in pursuit of exploring
            new, but not always exciting, ideas
            <em> (has hammer, sees nails)</em>. I love crafting well designed
            and nicely coded software that gracefully solves the issue at hand,
            both for me and—I hope—others as well.
          </Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }} mt="8">
            If I am not writing code, coming up with more random project ideas,
            or solving my clients’ issues, you can find me hanging with my two
            kids, trying to find some surf in a <em>mostly</em> landlocked
            state, or getting lost while running trails or on the search for the
            next random skate spot.
          </Text>
        </Box>
      </Box>
      <Box mt={{ base: 16, md: 24 }} mb={16}>
        <Heading as="h3" fontWeight="medium">
          Clients
        </Heading>
        <ClientGrid>
          {clients.map((client) => (
            <ClientGridItem key={client.imageUrl} {...client} />
          ))}
        </ClientGrid>
      </Box>
      <Box my={16}>
        <Heading as="h3" fontWeight="medium">
          Elsewhere
        </Heading>
        <Text fontSize="3xl" mt={8}>
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
