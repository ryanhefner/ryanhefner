import { Box, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { Link } from '../base'
import { PageWrapper } from '../site'
import { theme } from '../../styles'
import { nowPages } from '../../data/now'

export const NowLayout = ({ children }) => {
  const pathname = usePathname()
  const selectedBgColor = useColorModeValue('black', 'white')
  const borderColor = useColorModeValue('black', theme.colors.gray[700])

  return (
    <>
      {children}
      <PageWrapper>
        <Box>
          <Box borderBottom={`2px solid ${borderColor}`}>
            <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
              Now Archive
            </Heading>
          </Box>
          {nowPages.map((page, index) => (
            <Link key={page.date} href={`/now/${page.date}`}>
              <HStack borderBottom={`1px solid ${borderColor}`} py={2}>
                <Box
                  borderRadius="full"
                  boxSize={2}
                  border={`1px solid ${borderColor}`}
                  bgColor={
                    (index === 0 && pathname === '/now') ||
                    pathname.split('/').pop() === page.date
                      ? selectedBgColor
                      : 'transparent'
                  }
                  ml={2}
                />
                <Text
                  as="span"
                  fontFamily="mono"
                  fontSize="sm"
                >{`${page.date} - `}</Text>
                <Text as="span" fontWeight="medium">
                  {page.title}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
        <Box mt={{ base: 10, md: 10 }} mb={{ base: 10, md: 24 }}>
          <Text>
            What is this page?
            <br />
            This “Now” page was inspired by{` `}
            <Link
              href="https://sive.rs"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Derek Sivers
            </Link>
            . Find more, or submit your own, at{` `}
            <Link
              href="https://nownownow.com"
              rel="nofollow noreferrer noopener"
              target="_blank"
            >
              nownownow.com &rarr;
            </Link>
          </Text>
        </Box>
      </PageWrapper>
    </>
  )
}
