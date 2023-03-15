import { Flex } from '@chakra-ui/react'

export const ProjectGrid = ({ children }) => (
  <Flex mt={16} w="full" flexWrap="wrap">
    {children}
  </Flex>
)
