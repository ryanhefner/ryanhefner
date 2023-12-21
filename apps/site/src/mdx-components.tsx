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
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { Highlight, themes } from 'prism-react-renderer'
import { PageHeading } from './components/typography'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const codeBg = useColorModeValue('gray.100', 'gray.800')
  const codeColor = useColorModeValue('black', 'white')

  return {
    blockquote: ({ children }) => (
      <Box
        py={{ base: 4, md: 8 }}
        pl={{ base: 8, md: 12 }}
        pos="relative"
        fontFamily="serif"
        fontSize={{ base: '4xl', md: '6xl' }}
        fontStyle="italic"
        letterSpacing={{ base: -1, md: -2 }}
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
    code: (props) => {
      return props.className ? (
        <Highlight
          code={props.children.toString()}
          language={props.className.replace('language-', '')}
          theme={themes.nightOwl}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Box
              borderRadius={3}
              fontSize="md"
              fontFamily="mono"
              data-language={props.className.replace('language-', '')}
            >
              <Box
                as="pre"
                className={className}
                borderRadius={3}
                overflowX="auto"
                style={style}
                py={3}
              >
                {tokens
                  .filter((line, i, array) =>
                    line.length === 1 && line[0].empty && i === array.length - 1
                      ? false
                      : true,
                  )
                  .map((line, i) => {
                    const lineProps = getLineProps({ line, key: i })
                    return (
                      <chakra.div key={i} px="3" {...lineProps}>
                        <chakra.span opacity={0.3} mr="4" fontSize="xs">
                          {i + 1}
                        </chakra.span>
                        {/* {showLines && (
                      )} */}
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </chakra.div>
                    )
                  })}
              </Box>
            </Box>
          )}
        </Highlight>
      ) : (
        <Code
          bgColor={codeBg}
          borderRadius={3}
          color={codeColor}
          colorScheme="whiteAlpha"
          px={1}
          py={1}
          {...props}
        />
      )
    },
    h1: ({ children }) => (
      <PageHeading
        fontSize={{ base: '7xl', md: '10xl' }}
        maxW="container.xl"
        mt={{ base: 12, md: 16 }}
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
        fontSize={{ base: '5xl', md: '7xl' }}
        fontWeight="medium"
        letterSpacing={-3}
        maxW="container.md"
        mt={{ base: 12, md: 16 }}
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
        letterSpacing={-2}
        maxW="container.md"
        mt={{ base: 12, md: 16 }}
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
        color="gray.500"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="medium"
        letterSpacing={-1}
        maxW="container.md"
        mt={{ base: 12, md: 16 }}
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
        color="gray.500"
        fontSize={{ base: 'xl', md: '3xl' }}
        fontWeight="medium"
        letterSpacing={-1}
        maxW="container.md"
        mt={{ base: 12, md: 16 }}
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
        borderRadius={3}
        maxW="container.md"
        mx="auto"
        my={4}
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
