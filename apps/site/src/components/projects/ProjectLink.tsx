import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from '../base';

export const ProjectLink = ({ description, name, url }) => (
  <Link
    href={url}
    target={url.startsWith('http') ? '_blank' : '_self'}
    rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    <Box>
      <Heading
        as="h3"
        fontSize={{ base: '4xl', md: '3xl', lg: '4xl' }}
        fontWeight="medium"
      >
        {name}
      </Heading>
      {description && (
        <Text color="gray.500" fontSize="xl" mt={2}>
          {description}
        </Text>
      )}
    </Box>
  </Link>
);
