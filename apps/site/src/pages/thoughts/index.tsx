import { Box, HStack, Text } from '@chakra-ui/react'
import { UTCDateMini } from '@date-fns/utc'
import { allThoughts } from 'contentlayer/generated'
import { format } from 'date-fns'

import { Link } from '../../components/base'
import { SiteLayout } from '../../components/layouts'
import { PageWrapper } from '../../components/site/PageWrapper'
import { PageHeading } from '../../components/typography'

const ThoughtsIndexPage = () => {
  return (
    <PageWrapper>
      <PageHeading ml={0}>Thoughts</PageHeading>
      <Box
        mt={16}
        borderTop="2px solid"
        borderColor="black"
        _dark={{ borderColor: 'gray.700' }}
      >
        {allThoughts
          .sort((a, b) => {
            if (a.date > b.date) return -1
            if (a.date < b.date) return 1
            return 0
          })
          .map((item, index) => (
            <Link
              key={item.date}
              href={`/thoughts/${item.slug}`}
              display="block"
            >
              <HStack
                borderBottom="1px solid"
                borderColor="black"
                _dark={{ borderColor: 'gray.700' }}
                align={{ base: 'flex-start', md: 'center' }}
                fontSize={{ base: 'lg', md: 'xl' }}
                py={2.5}
                gap={{ base: 3, md: 4 }}
              >
                <Text
                  as="span"
                  flex="0 0 auto"
                  fontFamily="mono"
                  fontSize={{ base: 'sm', md: 'md' }}
                  lineHeight={1.875}
                >
                  {format(new UTCDateMini(item.date), 'yyyy-MM-dd')}
                </Text>
                <Text as="span" fontSize="lg" fontWeight="medium">
                  {item.title}
                </Text>
              </HStack>
            </Link>
          ))}
      </Box>
    </PageWrapper>
  )
}

ThoughtsIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default ThoughtsIndexPage
