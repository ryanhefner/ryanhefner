import { Flex, Heading, Text } from '@chakra-ui/react'
import { theme } from '../styles'

const SharePage = () => {
  const borderColor = theme.colors.gray[600]
  return (
    <Flex
      flexDir="column"
      bgColor="black"
      color="white"
      h="100%"
      minH="100vh"
      p={24}
    >
      <Flex justify="space-between">
        <Heading as="h1" fontSize="6xl" fontWeight={500} lineHeight="none">
          Ryan Hefner – All Play
        </Heading>
        <Heading as="h2" fontSize="6xl" fontWeight={500} lineHeight="none">
          Thoughts - Year in Review 2023
        </Heading>
      </Flex>
      <Flex flex={1} align="center">
        <Heading as="h3" fontSize="12xl" fontWeight={500} lineHeight="none">
          Sharing the highs and lows from working at a slow-growth startup.
        </Heading>
      </Flex>
      <Flex
        fontFamily="mono"
        justify="space-between"
        borderTop={`1px solid ${borderColor}`}
        fontSize="4xl"
        pt={24}
      >
        <Text>@ryanhefner</Text>
        <Text>ryanhefner.com/thoughts/year-in-review-2023</Text>
      </Flex>
    </Flex>
  )
}

export default SharePage
