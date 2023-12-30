import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { format } from 'date-fns'
import { UTCDateMini } from '@date-fns/utc'
import { allThoughts } from 'contentlayer/generated'
import { Link } from '../../components/base'
import { PageWrapper } from '../../components/site/PageWrapper'
import { SiteLayout } from '../../components/layouts'
import { PageHeading } from '../../components/typography'
import { theme } from '../../styles'

const ThoughtsIndexPage = () => {
  const borderColor = useColorModeValue('black', theme.colors.gray[700])

  return (
    <PageWrapper>
      <PageHeading ml={0}>Thoughts</PageHeading>
      <Box mt={16} borderTop={`2px solid ${borderColor}`}>
        {allThoughts
          .sort((a, b) => {
            if (a.date > b.date) return -1
            if (a.date < b.date) return 1
            return 0
          })
          .map((item, index) => (
            <Link key={item.date} href={`/thoughts/${item.slug}`}>
              <HStack
                borderBottom={`1px solid ${borderColor}`}
                align="flex-start"
                fontSize={{ base: 'lg', md: 'xl' }}
                py={2.5}
                spacing={{ base: 3, md: 4 }}
              >
                {/* <Box
                  borderRadius="full"
                  boxSize={2}
                  border={`1px solid ${borderColor}`}
                  bgColor="transparent"
                  flex="0 0 auto"
                  ml={2}
                  my={1.5}
                /> */}
                <Text
                  as="span"
                  flex="0 0 auto"
                  fontFamily="mono"
                  fontSize={{ base: 'sm', md: 'md' }}
                  lineHeight={1.875}
                >
                  {format(new UTCDateMini(item.date), 'yyyy-MM-dd')}
                </Text>
                <Text as="span" fontWeight="medium">
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
