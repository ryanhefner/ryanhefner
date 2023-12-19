import type { MDXComponents } from 'mdx/types'
import {
  Box,
  Code,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { PageHeading } from './components/typography'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    blockquote: ({ children }) => (
      <Box
        py={8}
        pl={12}
        pos="relative"
        fontFamily="serif"
        fontSize={{ base: '4xl', md: '6xl' }}
        fontStyle="italic"
        lineHeight="none"
        maxW="container.md"
        mx="auto"
        w="full"
        _before={{
          content: '" "',
          bgColor: 'blue.500',
          w: 2,
          pos: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {children}
      </Box>
    ),
    code: (props) => (
      <Code
        bgColor="black"
        borderRadius="sm"
        color="white"
        colorScheme="blackAlpha"
        variant="solid"
        whiteSpace="normal"
        px={2}
        py={1}
        {...props}
      />
    ),
    h1: ({ children }) => (
      <PageHeading
        fontSize={{ base: '7xl', md: '10xl' }}
        maxW="container.xl"
        mb={{ base: 16, md: 24 }}
        ml="auto"
        mx="auto"
        w="full"
      >
        {children}
      </PageHeading>
    ),
    h2: ({ children }) => (
      <Heading
        as="h2"
        fontSize={{ base: '4xl', md: '6xl' }}
        fontWeight="medium"
        maxW="container.md"
        mt={{ base: 16, md: 24 }}
        mb={4}
        mx="auto"
        w="full"
      >
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading
        as="h3"
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="medium"
        maxW="container.md"
        mt={{ base: 16, md: 24 }}
        mb={4}
        mx="auto"
        w="full"
      >
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading
        as="h4"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="medium"
        maxW="container.md"
        mt={{ base: 16, md: 24 }}
        mb={4}
        mx="auto"
        w="full"
      >
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading
        as="h5"
        fontSize={{ base: 'xl', md: '3xl' }}
        fontWeight="medium"
        maxW="container.md"
        mt={{ base: 16, md: 24 }}
        mb={4}
        mx="auto"
        w="full"
      >
        {children}
      </Heading>
    ),
    img: (props) => <Image w="100%" alt="" {...props} />,
    li: (props) => <ListItem {...props} />,
    ol: (props) => (
      <OrderedList
        maxW="container.md"
        my={4}
        mx="auto"
        pl={12}
        w="full"
        {...props}
      />
    ),
    p: (props) => (
      <Text maxW="container.md" my={4} mx="auto" w="full" {...props} />
    ),
    pre: ({ children }) => (
      <Box
        as="pre"
        bgColor="black"
        borderRadius="sm"
        maxW="container.md"
        mx="auto"
        my={0}
        w="100%"
      >
        {children}
      </Box>
    ),
    ul: (props) => (
      <UnorderedList
        maxW="container.md"
        my={4}
        mx="auto"
        pl={12}
        w="full"
        {...props}
      />
    ),
    ...components,
  }
}
