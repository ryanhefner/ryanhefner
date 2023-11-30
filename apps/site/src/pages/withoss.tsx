import React, { Fragment } from 'react'
import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'
import { Link } from '../components/base'
import { PageWrapper } from '../components/site'
import { withOss } from '../data/oss'
import { cleanUrl } from '../utils'
import { theme } from '../styles'

const TITLE = 'Made w/ Open-Source Software'
const DESCRIPTION =
  'A listing of the open-source software I use to build this site.'

const OssPage = () => {
  const borderColor = useColorModeValue('black', theme.colors.gray[700])

  return (
    <>
      <SiteMeta description={DESCRIPTION} title={TITLE} />
      <PageWrapper>
        <Heading
          as="h1"
          fontSize={{ base: '6xl', md: '9xl' }}
          fontWeight="medium"
          lineHeight="none"
        >
          w/
          <Image
            display="inline-block"
            src="/oss.svg"
            alt="Open-Source Software"
            filter="invert(1)"
            h={{ base: 24, md: 32 }}
            ml={3}
          />
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
