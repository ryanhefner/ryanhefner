import { Fragment } from 'react'
import Head from 'next/head'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

import { Link } from '../components/base'
import { PageWrapper } from '../components/site'
import { withOss } from '../data/oss'
import { cleanUrl } from '../utils'
import { theme } from '../styles'

const TITLE = 'Made w/ Open-Source Software | Ryan Hefner - All Play'
const DESCRIPTION =
  'A listing of the open-source software I use to build this site.'

const OssPage = () => {
  const borderColor = useColorModeValue('black', theme.colors.gray[700])

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <PageWrapper>
        <Heading
          as="h1"
          fontSize={{ base: '6xl', md: '9xl' }}
          fontWeight="medium"
          lineHeight="none"
        >
          w/ OSS
        </Heading>
        <Text
          as="p"
          fontSize={{ base: 'lg', md: '2xl' }}
          mt={12}
          maxW="container.md"
        >
          In an attempt for transparency, and paying respect for the hard work
          of the open-source community, here is a list of the open-source
          software I use to build this site.
        </Text>
        <Flex flexDir="column" my={24}>
          <Box borderBottom={`2px solid ${borderColor}`}>
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
              Open-Source Software
            </Heading>
          </Box>
          {withOss.map((project) => (
            <Flex
              key={project.name}
              flexDir={{ base: 'column', md: 'row' }}
              borderBottom={`1px solid ${borderColor}`}
              py={{ base: 6, md: 2 }}
            >
              <Text flexBasis={{ base: 'auto', md: '200' }} fontWeight="medium">
                {project.name}
              </Text>
              <Text flex={1}>{project.description}</Text>
              <Box mt={{ base: 6, md: 0 }}>
                {project.urls.map((url, index) => (
                  <Fragment key={url}>
                    {index > 0 && (
                      <Text as="span" fontFamily="mono" fontSize="md">
                        {' '}
                        /{' '}
                      </Text>
                    )}
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <Text as="span" fontFamily="mono" fontSize="sm">
                        {cleanUrl(url)}
                      </Text>
                    </Link>
                  </Fragment>
                ))}
              </Box>
            </Flex>
          ))}
        </Flex>
      </PageWrapper>
    </>
  )
}

export default OssPage
