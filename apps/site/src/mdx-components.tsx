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

export const mdxComponents = ({
  borderColor = 'black',
  codeBg,
  codeColor,
}) => ({
  a: (props) => (
    <chakra.a
      color="blue.500"
      _hover={{ textDecoration: 'underline' }}
      {...props}
    />
  ),
  blockquote: ({ children }) => (
    <Box
      py={{ base: 4, md: 8 }}
      pl={{ base: 8, md: 12 }}
      pos="relative"
      fontFamily="serif"
      fontSize={{ base: '4xl', md: '6xl' }}
      fontStyle="italic"
      letterSpacing={{ base: -1, md: -2 }}
      lineHeight={1.2}
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
              borderRadius={4}
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
                      <chakra.span
                        fontFamily="mono"
                        fontSize="xs"
                        opacity={0.3}
                        mr="4"
                      >
                        {i + 1}
                      </chakra.span>
                      {/* {showLines && (
                  )} */}
                      {line.map((token, key) => (
                        <chakra.span
                          key={key}
                          fontFamily="mono"
                          fontSize="sm"
                          {...getTokenProps({ token, key })}
                        />
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
        borderRadius={4}
        color={codeColor}
        colorScheme="whiteAlpha"
        px={1}
        py={1}
        {...props}
      />
    )
  },
  del: (props) => <Text as="del" textDecoration="line-through" {...props} />,
  h1: ({ children }) => (
    <PageHeading
      fontSize={{ base: '7xl', md: '10xl' }}
      // maxW="container.xl"
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
      fontSize={
        children === 'Footnotes'
          ? { base: 'xl', md: '2xl' }
          : { base: '5xl', md: '7xl' }
      }
      fontWeight="medium"
      letterSpacing={children === 'Footnotes' ? 0 : -2}
      maxW="container.md"
      mt={{ base: 8, md: 16 }}
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
      letterSpacing={-1}
      maxW="container.md"
      mt={{ base: 8, md: 12 }}
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
      mt={{ base: 8, md: 12 }}
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
      mt={{ base: 6, md: 10 }}
      mb={4}
      mx="auto"
      w="full"
    >
      {children}
    </Heading>
  ),
  img: (props) => <Image w="100%" alt="" {...props} />,
  li: (props) => (
    <ListItem
      fontSize={
        props?.id?.startsWith('user-content-fn')
          ? { base: 'sm', md: 'md' }
          : undefined
      }
      {...props}
    />
  ),
  ol: (props) => (
    <OrderedList
      fontSize={{ base: 'xl', md: '2xl' }}
      maxW="container.md"
      my={6}
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
      borderRadius={4}
      maxW="container.lg"
      mx="auto"
      my={4}
      w="100%"
    >
      {children}
    </Box>
  ),
  Subheading: (props) => (
    <Heading
      fontFamily="serif"
      fontSize={{ base: '2xl', md: '4xl' }}
      fontStyle="italic"
      fontWeight="normal"
      letterSpacing={{ base: -1, md: -2 }}
      maxW="container.lg"
      mt={{ base: -8, md: -12 }}
      mb={{ base: 16, md: 24 }}
      mx="auto"
      {...props}
    />
  ),
  ul: (props) => (
    <UnorderedList
      fontSize={{ base: 'xl', md: '2xl' }}
      maxW="container.md"
      my={6}
      mx="auto"
      pl={12}
      w="full"
      {...props}
    />
  ),
})

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const codeBg = useColorModeValue('gray.100', 'gray.800')
  const codeColor = useColorModeValue('black', 'white')

  return {
    ...mdxComponents({ codeBg, codeColor }),
    ...components,
  }
}
