import {
  Blockquote,
  Code,
  Heading,
  Hr,
  Img,
  Link,
  List,
  ListItem,
  Pre,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from 'chakra-email'
import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components = {
  h1: ({ children }) => (
    <Heading as="h1" fontSize="3xl" lineHeight="short" mb={5} mt={8}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" fontSize="2xl" lineHeight="short" mb={4} mt={8}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" fontSize="xl" lineHeight="short" mb={3} mt={6}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" fontSize="lg" lineHeight="short" mb={3} mt={6}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading as="h5" fontSize="md" lineHeight="short" mb={3} mt={5}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading as="h6" fontSize="sm" lineHeight="short" mb={3} mt={5}>
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text color="gray.700" lineHeight="tall" mb={5} mt={0}>
      {children}
    </Text>
  ),
  a: ({ children, href }) =>
    href ? (
      <Link color="brand.500" href={href}>
        {children}
      </Link>
    ) : (
      <Text as="span">{children}</Text>
    ),
  ul: ({ children }) => (
    <List as="ul" color="gray.700" mb={5} mt={0} pl={6}>
      {children}
    </List>
  ),
  ol: ({ children }) => (
    <List as="ol" color="gray.700" mb={5} mt={0} pl={6}>
      {children}
    </List>
  ),
  li: ({ children }) => (
    <ListItem lineHeight="tall" mb={2}>
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => (
    <Blockquote borderColor="brand.500" color="gray.700" my={6} pl={5}>
      {children}
    </Blockquote>
  ),
  code: ({ children }) => (
    <Code bg="gray.100" borderRadius="base" fontSize="sm" px={1}>
      {children}
    </Code>
  ),
  pre: ({ children }) => (
    <Pre bg="gray.900" color="gray.50" mb={6} p={5}>
      {children}
    </Pre>
  ),
  hr: () => <Hr borderColor="gray.200" my={8} />,
  img: ({ alt, height, src, width }) =>
    typeof src === 'string' ? (
      <Img
        alt={alt ?? ''}
        height={height}
        src={src}
        width={width}
        maxW="full"
      />
    ) : null,
  strong: ({ children }) => (
    <Text as="span" fontWeight="bold">
      {children}
    </Text>
  ),
  em: ({ children }) => (
    <Text as="span" style={{ fontStyle: 'italic' }}>
      {children}
    </Text>
  ),
  del: ({ children }) => (
    <Text as="span" textDecoration="line-through">
      {children}
    </Text>
  ),
  table: ({ children }) => (
    <Table mb={6} width="full">
      {children}
    </Table>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tfoot: ({ children }) => <TableFoot>{children}</TableFoot>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (
    <TableHeader bg="gray.100" borderColor="gray.200" p={3} textAlign="left">
      {children}
    </TableHeader>
  ),
  td: ({ children }) => (
    <TableCell borderColor="gray.200" p={3}>
      {children}
    </TableCell>
  ),
  caption: ({ children }) => (
    <TableCaption color="gray.500" fontSize="sm" mb={2}>
      {children}
    </TableCaption>
  ),
} satisfies Components

const allowedElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'a',
  'ul',
  'ol',
  'li',
  'blockquote',
  'code',
  'pre',
  'hr',
  'img',
  'strong',
  'em',
  'del',
  'br',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
  'caption',
]

export function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <Markdown
      allowedElements={allowedElements}
      components={components}
      remarkPlugins={[remarkGfm]}
      skipHtml
      unwrapDisallowed
    >
      {markdown}
    </Markdown>
  )
}
