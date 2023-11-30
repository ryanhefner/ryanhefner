import { Flex } from '@chakra-ui/react'

export const ProjectGrid = ({ children, ...props }) => (
  <Flex mt={16} w="full" flexWrap="wrap" {...props}>
    {children}
  </Flex>
)
