import { Box, Text } from '@chakra-ui/react'
import { useColorModeValue } from 'chakra-color'
import { UTCDateMini } from '@date-fns/utc'
import { Now } from 'contentlayer/generated'
import { format } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { SiteMeta } from 'next-meta'

import { PageWrapper } from '../../components/site'
import { PageHeading } from '../../components/typography'
import { mdxComponents } from '../../mdx-components'

interface NowPageProps {
  description?: string
  now: Now
  title?: string
}

const NowPage = ({ description, now, title }: NowPageProps) => {
  const codeBg = useColorModeValue('gray.100', 'gray.800')
  const codeColor = useColorModeValue('black', 'white')

  const MDXContent = useMDXComponent(now.body.code)

  return (
    <>
      <SiteMeta
        title={title ?? now.title}
        description={description ?? now.description}
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
        <MDXContent components={mdxComponents({ codeBg, codeColor })} />
      </Box>
    </>
  )
}

export default NowPage
