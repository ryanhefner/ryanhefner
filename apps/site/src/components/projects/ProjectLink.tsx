import { Box, Heading, Image, Text } from '@chakra-ui/react'

import { Link } from '../base'
import { CopyRight } from '../typography'

export const ProjectLink = ({
  description,
  imageUrl,
  name,
  showImage,
  url,
}: {
  description?: string
  imageUrl?: string
  name: string
  showImage?: boolean
  url?: string
}) => (
  <Link
    href={url}
    target={url.startsWith('http') ? '_blank' : '_self'}
    rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    <Box>
      {imageUrl && showImage ? (
        <Image
          bgColor="gray.200"
          src={imageUrl}
          alt={name}
          w="full"
          aspectRatio="16 / 9"
          mb={5}
        />
      ) : null}
      <Heading as="h3" fontSize="xl" fontWeight="medium">
        {name}
      </Heading>
      {description && (
        <Text
          color="gray.500"
          fontSize="xl"
          lineHeight="1.2"
          maxW="full"
          mt={0.5}
          wordBreak="break-word"
        >
          <CopyRight
            copy={description}
            optimalLength={100}
            minimalLength={70}
          />
        </Text>
      )}
    </Box>
  </Link>
)
