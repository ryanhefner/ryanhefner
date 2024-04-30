import {
  Box,
  ChakraProps,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react'
import { Link } from '../base'

interface PodcatchersProps extends ChakraProps {
  show: any
}

export const Podcatchers = ({ show, ...rest }: PodcatchersProps) => (
  <Box id="subscribe" {...rest}>
    <Heading>Listen in your favorite podcatcher</Heading>
    <Grid
      gap={12}
      maxW="container.md"
      mt={6}
      templateColumns={{
        base: 'repeat(4, 1fr)',
        md: 'repeat(5, 1fr)',
        lg: 'repeat(5, 1fr)',
      }}
    >
      <GridItem>
        <Link
          href={show.attributes.apple_podcasts ?? ''}
          title="Listen to All Play on Apple Podcasts"
        >
          <Image
            src="/assets/apple-podcasts.svg"
            alt="Listen to All Play on Apple Podcasts"
            w="100%"
          />
        </Link>
      </GridItem>
      <GridItem>
        <Link
          href={show.attributes.spotify ?? ''}
          title="Listen to All Play on Spotify"
        >
          <Image
            src="/assets/spotify.svg"
            alt="Listen to All Play on Spotify"
            w="100%"
          />
        </Link>
      </GridItem>
      <GridItem>
        <Link
          href={show.attributes.overcast ?? ''}
          title="Listen to All Play in Overcast"
        >
          <Image
            src="/assets/overcast.svg"
            alt="Listen to All Play in Overcast"
            w="100%"
          />
        </Link>
      </GridItem>
      <GridItem>
        <Link
          href={show.attributes.amazon_music ?? ''}
          title="Listen to All Play on Amazon Music"
        >
          <Image
            src="/assets/amazon-music.png"
            alt="Listen to All Play on Amazon Music"
            w="100%"
          />
        </Link>
      </GridItem>
      <GridItem>
        <Link
          href={show.attributes.pocket_casts ?? ''}
          title="Listen to All Play in Pocket Casts"
        >
          <Image
            src="/assets/pocket-casts.svg"
            alt="Listen to All Play in Pocket Casts"
            w="100%"
          />
        </Link>
      </GridItem>
    </Grid>
  </Box>
)
