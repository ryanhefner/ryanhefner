import React, { Fragment } from 'react'

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { SiteMeta } from 'next-meta'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading } from '../components/typography'
import { withOss } from '../data/oss'
import { useColorMode, useColorModeValue } from 'chakra-color'
import { cleanUrl } from '../utils'

const TITLE = 'Made w/ Open-Source Software'
const DESCRIPTION =
  'A listing of the open-source software I use to build this site.'

const OssPage = () => {
  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue('black', 'gray.700')

  return (
    <>
      <SiteMeta description={DESCRIPTION} title={TITLE} />
      <PageWrapper>
        <Flex
          align={{ base: 'flex-start', xl: 'center' }}
          flexDir={{ base: 'column', xl: 'row' }}
          gap={12}
          justify={{ base: 'flex-start', xl: 'space-between' }}
        >
          <PageHeading ml={0}>
            w
            <Text as="span" display="inline-block">
              /
            </Text>
            <Image
              display="inline-block"
              src="/assets/oss.svg"
              alt="Open-Source Software"
              filter={colorMode === 'dark' ? '' : 'invert(1)'}
              h={{ base: 24, md: 32 }}
              ml={3}
            />
          </PageHeading>
          <Text as="p" fontSize={{ base: 'lg', md: '2xl' }} maxW="container.sm">
            In an attempt for transparency, and paying respect for the hard work
            of the open-source community, here is a list of the open-source
            software I use to build this site.
          </Text>
        </Flex>
        <Flex flexDir="column" my={24}>
          <Box borderBottom={`2px solid ${borderColor}`}>
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
              Open-source Software
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

OssPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default OssPage
