import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { NewsletterForm } from 'newsletter'

export const PageWrapper = ({ children, ...rest }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const formVariant = useColorModeValue('light', 'dark')
  const textColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <>
      <Box
        flex="1"
        py={{ base: 6, sm: 10, md: 16, xl: 24 }}
        px={{ base: 6, sm: 10, md: 16, xl: 24 }}
        w="full"
        {...rest}
      >
        {children}
      </Box>
      <Box
        id="signup"
        bg={bgColor}
        py={{ base: 12, md: 16, xl: 24 }}
        px={{ base: 6, sm: 10, md: 16, xl: 24 }}
        w="full"
        pos="relative"
      >
        <Heading as="h3">Subscribe to the —All Play newsletter</Heading>
        <Text color={textColor}>
          Get updates when I publish new episodes, and post about other fun
          stuff that I’m into.
        </Text>
        <NewsletterForm variant={formVariant} />
      </Box>
    </>
  )
}
