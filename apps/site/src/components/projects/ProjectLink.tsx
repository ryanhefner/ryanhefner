import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from '../base'

export const ProjectLink = ({
  description,
  imageUrl,
  name,
  url,
}: {
  description?: string
  imageUrl?: string
  name: string
  url?: string
}) => (
  <Link
    href={url}
    target={url.startsWith('http') ? '_blank' : '_self'}
    rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    <Box>
      {imageUrl && (
        <Image
          bgColor="black"
          // borderRadius="3xl"
          src={imageUrl}
          alt={name}
          w="full"
          aspectRatio="16 / 9"
          mb={5}
        />
      )}
      <Heading as="h3" fontSize="2xl" fontWeight="medium">
        {name}
      </Heading>
      {description && (
        <Text color="gray.500" fontSize="xl" mt={2}>
          {description}
        </Text>
      )}
    </Box>
  </Link>
)
