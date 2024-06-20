import {
  Box,
  Flex,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { UTCDateMini } from '@date-fns/utc'
import { Thought, allThoughts } from 'contentlayer/generated'
import { format } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { SiteMeta } from 'next-meta'
import slugify from 'slugify'

import { mdxComponents } from '../../mdx-components'
import { Link } from '../base'
import { PageWrapper } from '../site'

import { SiteLayout } from './SiteLayout'

interface PostLayoutProps {
  thought?: Thought
}

export const PostLayout = ({ thought }: PostLayoutProps) => {
  const borderColor = useColorModeValue('black', 'white')
  const codeBg = useColorModeValue('gray.100', 'gray.800')
  const codeColor = useColorModeValue('black', 'white')
  const tagColor = useColorModeValue('black', 'white')
  const tagOutlineColor = useColorModeValue('black', 'white')

  const MDXContent = useMDXComponent(thought.body.code)

  const moreThoughts = allThoughts
    .filter((item) => item.slug !== thought.slug)
    .sort((a, b) => {
      if (a.date > b.date) return -1
      if (a.date < b.date) return 1
      return 0
    })

  return (
    <>
      <SiteMeta title={thought.title} description={thought.description} />
      <SiteLayout>
        <PageWrapper fontSize={{ base: 'lg', md: 'xl' }} pb={24}>
          <Flex
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="medium"
            justifyContent="space-between"
            // maxW="container.xl"
            mx="auto"
            // pos="relative"
            // zIndex={1}
            w="full"
          >
            <Link href="/thoughts">Thoughts /</Link>
          </Flex>
          <MDXContent components={mdxComponents({ codeBg, codeColor })} />
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            maxW="container.lg"
            mx="auto"
            w="full"
            mt={24}
            borderTop={`1px solid ${borderColor}`}
            // borderBottom={`2px solid ${borderColor}`}
            py={6}
            gap={{ base: 6, md: 4 }}
          >
            <VStack alignItems="flex-start" fontFamily="mono" spacing={0}>
              <Text color="gray.500" fontSize="xs" textTransform="uppercase">
                Posted
              </Text>
              <Text fontSize="md" whiteSpace="nowrap">
                {format(new UTCDateMini(thought.date), 'MMM dd, yyyy')}
              </Text>
            </VStack>
            {/* <VStack alignItems="flex-start" spacing={1}>
              <Text
                color="gray.500"
                display={{ base: 'block', md: 'none' }}
                fontFamily="mono"
                fontSize="xs"
                textTransform="uppercase"
              >
                Tags
              </Text>
              <Flex flexWrap="wrap" gap={2}>
                {thought?.tags?.map((tag) => (
                  <Link key={tag} href={`/tags/${slugify(tag.toLowerCase())}`}>
                    <Tag
                      borderRadius="full"
                      color={tagColor}
                      fontSize="lg"
                      px={3}
                      py={2}
                      outlineColor={tagOutlineColor}
                      outlineOffset={-1}
                      variant="outline"
                      _hover={{
                        bgColor: 'blue.500',
                        color: 'white',
                        outlineColor: 'blue.500',
                      }}
                    >
                      {tag}
                    </Tag>
                  </Link>
                ))}
              </Flex>
            </VStack> */}
          </Flex>
          {moreThoughts.length ? (
            <Box mt={24} mx="auto">
              <Heading
                as="h3"
                borderBottom={`2px solid ${borderColor}`}
                fontSize="xl"
                fontWeight="semibold"
                pb={3}
              >
                More Thoughts
              </Heading>
              {moreThoughts.map((item, index) => (
                <Link key={item.date} href={`/thoughts/${item.slug}`}>
                  <HStack
                    borderBottom={`1px solid ${borderColor}`}
                    py={2}
                    spacing={{ base: 3, md: 4 }}
                  >
                    <Text as="span" fontFamily="mono" fontSize="sm">
                      {format(new UTCDateMini(item.date), 'yyyy-MM-dd')}
                    </Text>
                    <Text as="span" fontSize="lg" fontWeight="medium">
                      {item.title}
                    </Text>
                  </HStack>
                </Link>
              ))}
            </Box>
          ) : null}
        </PageWrapper>
      </SiteLayout>
    </>
  )
}
