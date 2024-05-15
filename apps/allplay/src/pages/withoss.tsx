import React, { Fragment, ReactElement } from 'react'

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { withOss } from '../data/oss'
import { cleanUrl } from '../utils'

const TITLE = 'Made w/ Open-Source Software'
const DESCRIPTION =
  'A listing of the open-source software I use to build this site.'

const OssPage = () => {
  return (
    <>
      <SiteMeta description={DESCRIPTION} title={TITLE} />
      <Box flex="1" px={{ base: 4, md: 8 }} py={{ base: 12, md: 24 }}>
        <Flex
          align={{ base: 'flex-start', xl: 'center' }}
          flexDir={{ base: 'column', xl: 'row' }}
          gap={12}
          justify={{ base: 'flex-start', xl: 'space-between' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '6xl', sm: '8xl', md: '9xl', '2xl': '10xl' }}
            ml={0}
          >
            w
            <Text as="span" display="inline-block">
              /
            </Text>
            <Image
              display="inline-block"
              src="/assets/oss.svg"
              alt="Open-Source Software"
              h={{ base: 24, md: 32 }}
              ml={3}
            />
          </Heading>
          <Text as="p" fontSize={{ base: 'lg', md: '2xl' }} maxW="container.sm">
            In an attempt for transparency, and paying respect for the hard work
            of the open-source community, here is a list of the open-source
            software I use to build this site.
          </Text>
        </Flex>
        <Flex flexDir="column" my={24}>
          <Box borderBottom="2px solid" borderColor="gray.800">
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
              Open-source Software
            </Heading>
          </Box>
          {withOss.map((project) => (
            <Flex
              key={project.name}
              flexDir={{ base: 'column', md: 'row' }}
              borderBottom="1px solid"
              borderColor="gray.800"
              py={{ base: 6, md: 4 }}
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
      </Box>
    </>
  )
}

OssPage.getLayout = (page: ReactElement) => <SiteLayout>{page}</SiteLayout>

export default OssPage
