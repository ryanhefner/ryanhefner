import { Box, Text } from '@chakra-ui/react'
import { UTCDateMini } from '@date-fns/utc'
import { Now } from 'contentlayer/generated'
import { format } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd, Schema } from 'react-structured'

import { PageHeading } from '../../components/typography'
import { mdxComponents } from '../../mdx-components'
import {
  getBreadcrumbData,
  getNowPageData,
  getRyanHefnerLinkCardImage,
} from '../../utils/structured-data'

interface NowPageProps {
  description?: string
  now: Now
  title?: string
  url?: string
}

const NowPage = ({ description, now, title, url = now.url }: NowPageProps) => {
  const MDXContent = useMDXComponent(now.body.code)
  const pageTitle = title ?? now.title
  const image = getRyanHefnerLinkCardImage(
    url,
    `Social card for “${pageTitle}” by Ryan Hefner`,
  )

  return (
    <>
      <PageMeta
        title={pageTitle}
        description={description ?? now.description}
        images={image ? [image] : undefined}
      />
      <Schema
        id="now-page-jsonld"
        type="WebPage"
        data={getNowPageData(now, title, description, url)}
      />
      <BreadcrumbJsonLd
        id="now-breadcrumb-jsonld"
        data={getBreadcrumbData([
          { name: 'Home', url: '/' },
          { name: 'Now', url: '/now' },
          { name: format(new UTCDateMini(now.date), 'MMMM do, yyyy') },
        ])}
      />
      <PageHeading>Now</PageHeading>
      <Box my={16}>
        <Text fontFamily="mono">
          <Text
            as="span"
            fontSize="xs"
            fontWeight="medium"
            textTransform="uppercase"
          >
            Updated
          </Text>
          <br />
          {format(new UTCDateMini(now.date), 'MMMM do, yyyy')}
          <br />
          <Text as="span" color="gray.600">
            {`via ${now.location ?? 'Atlanta, GA'}`}
          </Text>
        </Text>
      </Box>
      <Box fontSize={{ base: 'lg', md: 'xl' }} my={16} maxW="container.md">
        <MDXContent components={mdxComponents} />
      </Box>
    </>
  )
}

export default NowPage
