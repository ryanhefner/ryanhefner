import { Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { ImGithub, ImTwitter } from 'react-icons/im'

import { Link } from '../base'

export const SiteFooter = () => (
  <Flex
    alignItems={{ base: 'flex-start', md: 'center' }}
    flexDir={{ base: 'column-reverse', md: 'row' }}
    gap={3}
    justifyContent="space-between"
    px={{ base: 4, md: 8 }}
    py={{ base: 6, md: 12 }}
  >
    <HStack spacing={4} alignItems="center">
      <Text color="gray.400">
        {`© ${new Date().getFullYear()} — `}
        <Link color="white" href="https://www.ryanhefner.com">
          Ryan Hefner
        </Link>
      </Text>
      <Link href="/withoss">
        <Image src="/assets/oss.svg" alt="With OSS" h={5} />
      </Link>
    </HStack>
    <HStack spacing={4} alignItems="center">
      <Link
        href="https://twitter.com/ryanhefner"
        lineHeight={0.8}
        title="Follow @ryanhefner on Twitter"
      >
        <Icon as={ImTwitter} w={5} h={5} />
      </Link>
      <Link
        href="https://github.com/ryanhefner"
        lineHeight={0.8}
        title="Follow @ryanhefner on GitHub"
      >
        <Icon as={ImGithub} w={5} h={5} />
      </Link>
      <Link href="https://medium.com/allplay">
        <Image src="/assets/medium.svg" alt="All Play on Medium" h={5} />
      </Link>
      <Link href="https://allplay.substack.com">
        <Image src="/assets/substack.svg" alt="All Play on Substack" h={5} />
      </Link>
    </HStack>
  </Flex>
)
