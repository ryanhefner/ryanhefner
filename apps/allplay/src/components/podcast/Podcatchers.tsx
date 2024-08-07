import {
  Box,
  ChakraProps,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
} from '@chakra-ui/react'

import { Link } from '../base'

interface PodcatchersProps extends ChakraProps {
  size?: 'sm' | 'md' | 'lg'
  feeds: any[]
  title?: string
}

export const Podcatchers = ({
  size,
  feeds,
  title = 'Listen in your favorite podcatcher',
  ...rest
}: PodcatchersProps) => (
  <Box id="subscribe" {...rest}>
    <Heading fontSize={size === 'sm' ? 'lg' : undefined}>{title}</Heading>
    <Grid
      gap={size === 'sm' ? 6 : 12}
      maxW="container.md"
      mt={6}
      templateColumns={{
        base: 'repeat(4, 1fr)',
        md: 'repeat(6, 1fr)',
      }}
    >
      {feeds.map((feed) => (
        <GridItem key={feed.title}>
          <Link href={feed.url} title={`Listen to All Play on ${feed.title}`}>
            {feed.icon && typeof feed.icon !== 'string' ? (
              <Icon as={feed.icon} w="full" h="full" />
            ) : (
              <Image
                src={feed.icon}
                alt={`Listen to All Play on ${feed.title}`}
                w="100%"
              />
            )}
          </Link>
        </GridItem>
      ))}
    </Grid>
  </Box>
)
