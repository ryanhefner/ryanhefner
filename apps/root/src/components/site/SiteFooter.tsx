import { Flex, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react'

export const SiteFooter = () => {
  const bgColor = useColorModeValue('black', 'white')
  const color = useColorModeValue('white', 'black')

  return (
    <Flex
      as="footer"
      bgColor={bgColor}
      color={color}
      flexDir={{ base: 'column-reverse', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      py={{ base: 6 }}
      px={{ base: 6, sm: 10, md: 16, xl: 24 }}
    >
      <Text fontFamily="mono" fontSize="sm">
        Ryan Hefner &copy; <Text as="span">2004 - {`${(new Date()).getFullYear()}`}. </Text>
        May all your days be rad 🤙.
      </Text>
      <HStack spacing={{ base: 3, md: 6 }} mb={{ base: 5, md: 0 }}>
        <Link
          href="https://www.github.com/ryanhefner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">GitHub</Text>
        </Link>
        <Link
          href="https://www.twitter.com/ryanhefner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as="span" fontFamily="mono" fontSize="sm">Twitter</Text>
        </Link>
      </HStack>
    </Flex>
  )
}
