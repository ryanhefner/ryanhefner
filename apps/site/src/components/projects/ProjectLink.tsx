import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from '../base'
import { CopyRight } from '../typography'

export const ProjectLink = ({
  description,
  imageUrl,
  name,
  showImages,
  url,
}: {
  description?: string
  imageUrl?: string
  name: string
  showImages?: boolean
  url?: string
}) => (
  <Link
    href={url}
    target={url.startsWith('http') ? '_blank' : '_self'}
    rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    <Box>
      {imageUrl && showImages ? (
        <Image
          bgColor="black"
          // borderRadius="3xl"
          src={imageUrl}
          alt={name}
          w="full"
          aspectRatio="16 / 9"
          mb={5}
        />
      ) : null}
      <Heading as="h3" fontSize="2xl" fontWeight="medium">
        {name}
      </Heading>
      {description && (
        <Text color="gray.500" fontSize="xl" mt={2}>
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
