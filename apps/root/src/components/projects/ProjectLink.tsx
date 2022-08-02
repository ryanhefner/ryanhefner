import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'components/base'

export const ProjectLink = ({ description, name, slug }) => (
  <Link href={slug}>
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
