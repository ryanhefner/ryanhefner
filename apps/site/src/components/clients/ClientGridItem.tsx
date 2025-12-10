import { GridItem, Image } from '@chakra-ui/react'
import { useColorMode } from 'chakra-color'

export const ClientGridItem = ({ name, imageUrl }) => {
  const { colorMode } = useColorMode()

  return (
    <GridItem
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH={{ base: 120, md: 180 }}
      w="full"
    >
      <Image
        alt={name}
        src={imageUrl}
        w={{ base: '75%', md: '50%' }}
        filter={colorMode === 'light' ? '' : 'invert(1)'}
      />
    </GridItem>
  )
}
