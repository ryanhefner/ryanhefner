import { Flex, HStack, Tag, Text, VStack } from '@chakra-ui/react'
import { Link } from '../base'
import { PageWrapper } from '../site'
import { SiteLayout } from './SiteLayout'

export const PostLayout = ({ children }) => {
  return (
    <SiteLayout>
      <PageWrapper fontSize="xl" pb={24}>
        <Flex
          fontWeight="medium"
          justifyContent="space-between"
          maxW="container.xl"
          mx="auto"
          pos="relative"
          zIndex={1}
          w="full"
        >
          <Link href="/thoughts">Thoughts /</Link>
        </Flex>
        {children}
        <Flex
          justifyContent="space-between"
          maxW="container.lg"
          mx="auto"
          w="full"
          mt={24}
          borderTop="2px solid black"
          pt={6}
        >
          <VStack alignItems="flex-start" spacing={0}>
            <Text color="gray.600" fontSize="md">
              Posted
            </Text>
            <Text fontFamily="mono" fontSize="md">
              Dec 19, 2023
            </Text>
          </VStack>
          <Flex
            flexWrap="wrap"
            justifyContent={{ base: 'flex-end', md: 'flex-start' }}
            gap={2}
          >
            <Link href="/tags/open-source-software">
              <Tag
                borderRadius="full"
                color="black"
                fontSize="lg"
                px={3}
                py={2}
                outlineColor="black"
                outlineOffset={-1}
                variant="outline"
                _hover={{
                  bgColor: 'blue.500',
                  color: 'white',
                  outlineColor: 'blue.500',
                }}
              >
                Open-source Software
              </Tag>
            </Link>
            <Link href="/tags/react">
              <Tag
                borderRadius="full"
                color="black"
                fontSize="lg"
                px={3}
                py={2}
                outlineColor="black"
                outlineOffset={-1}
                variant="outline"
                _hover={{
                  bgColor: 'blue.500',
                  color: 'white',
                  outlineColor: 'blue.500',
                }}
              >
                React
              </Tag>
            </Link>
            <Link href="/tags/next-js">
              <Tag
                borderRadius="full"
                color="black"
                fontSize="lg"
                px={3}
                py={2}
                outlineColor="black"
                outlineOffset={-1}
                variant="outline"
                _hover={{
                  bgColor: 'blue.500',
                  color: 'white',
                  outlineColor: 'blue.500',
                }}
              >
                NextJS
              </Tag>
            </Link>
          </Flex>
        </Flex>
      </PageWrapper>
    </SiteLayout>
  )
}
