import { Center, Image } from '@chakra-ui/react';

export const ClientGridItem = ({ name, imageUrl }) => (
  <Center
    flexBasis={{ base: '50%', md: '33.3%', lg: '20%' }}
    minH={{ base: 120, md: 180 }}
  >
    <Image alt={name} src={imageUrl} w={{ base: '75%', md: '50%' }} />
  </Center>
);
