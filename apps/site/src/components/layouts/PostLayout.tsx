import { Flex, Tag, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Link } from '../base'
import { PageWrapper } from '../site'
import { SiteLayout } from './SiteLayout'

export const PostLayout = ({ children }) => {
  const borderColor = useColorModeValue('black', 'white')
  const tagColor = useColorModeValue('black', 'white')
  const tagOutlineColor = useColorModeValue('black', 'white')

  return (
    <SiteLayout>
      <PageWrapper fontSize={{ base: 'lg', md: 'xl' }} pb={24}>
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
          borderTop={`2px solid ${borderColor}`}
          pt={6}
        >
          <VStack alignItems="flex-start" fontFamily="mono" spacing={0}>
            <Text color="gray.600" fontSize="xs" textTransform="uppercase">
              Posted
            </Text>
            <Text fontSize="md">Dec 19, 2023</Text>
          </VStack>
          <Flex
            flexWrap="wrap"
            justifyContent={{ base: 'flex-end', md: 'flex-start' }}
            gap={2}
          >
            <Link href="/tags/open-source-software">
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
                Open-source Software
              </Tag>
            </Link>
            <Link href="/tags/react">
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
                React
              </Tag>
            </Link>
            <Link href="/tags/next-js">
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
                NextJS
              </Tag>
            </Link>
          </Flex>
        </Flex>
      </PageWrapper>
    </SiteLayout>
  )
}
