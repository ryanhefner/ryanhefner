import { useRouter } from 'next/router'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { theme } from '../../styles'

const SharePage = () => {
  const router = useRouter()

  const { slug } = router.query

  const path = Array.isArray(slug) ? slug.join('/') : slug

  let title
  let body

  switch (path) {
    case 'about':
      title = 'About'
      body =
        'I’m a designer, developer, and entrepreneur living in Portland, Oregon.'
      break

    case 'withoss':
      title = 'Made w/ OSS'
      body = 'The open-source software I use to build this site.'
      break

    case 'projects':
      title = 'Projects'
      body = 'Projects I’ve worked on over the years.'
      break

    case 'projects/oss':
      title = 'Projects / Open Source Software'
      body = 'My open-source software contributions.'
      break

    case 'thoughts':
      title = 'Thoughts'
      body = 'A collection of thoughts, ideas, and notes.'
      break

    case 'now':
      title = 'Now'
      body = 'What I’m focusing on right now.'
      break

    default:
      title = ''
      body = 'Software Engineer + Eternal Tinkerer'
      break
  }

  const borderColor = theme.colors.gray[600]
  return (
    <Flex
      flexDir="column"
      bgColor="black"
      color="white"
      h="100%"
      minH="100vh"
      p={12}
    >
      <Flex justify="space-between">
        <Heading as="h1" fontSize="3xl" fontWeight={500} lineHeight="none">
          Ryan Hefner – All Play
        </Heading>
        <Heading as="h2" fontSize="3xl" fontWeight={500} lineHeight="none">
          {title}
        </Heading>
      </Flex>
      <Flex flex={1} align="center">
        <Heading as="h3" fontSize="8xl" fontWeight={500} lineHeight="1.15">
          {body}
        </Heading>
      </Flex>
      <Flex
        fontFamily="mono"
        justify="space-between"
        borderTop={`1px solid ${borderColor}`}
        fontSize="2xl"
        pt={12}
      >
        <Text>@ryanhefner</Text>
        <Text>{`ryanhefner.com${path === '/' ? '' : `/${path}`}`}</Text>
      </Flex>
    </Flex>
  )
}

export default SharePage
