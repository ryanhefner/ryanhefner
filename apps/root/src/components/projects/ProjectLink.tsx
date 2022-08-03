import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'

export const ProjectLink = ({ description, name, url }) => (
  <Link
    href={url}
    target={url.startsWith('http') ? '_blank' : '_self'}
    rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    <Box pb={16} pr={10}>
      <Heading
        as="h3"
        fontSize={{ base: '4xl', md: '2xl', lg: '4xl' }}
        fontWeight="medium"
      >
        {name}
      </Heading>
      {description && (
        <Text color="gray.500" fontSize="xl">
          {description}
        </Text>
      )}
    </Box>
  </Link>
)
