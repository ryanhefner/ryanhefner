import Head from 'next/head'
import { Box, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { PageWrapper } from '../components/site'
import { PageHeading } from '../components/typography'

const TITLE = 'What I’m working on now | Ryan Hefner - All Play'
const DESCRIPTION = 'A break-down of things that I’m focusing on right now. A listing of projects that are in-development, on-going initiatives, and upcoming projects that are on the horizon.'

const NowPage = () => (
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
      <PageHeading>Now</PageHeading>
      <Box my={16}>
        <Text fontFamily="mono">
          <Text as="span" fontSize="xs" fontWeight="medium" textTransform="uppercase">Updated</Text><br />
          August 3rd, 2022 — from Atlanta, GA
        </Text>
      </Box>
      <Box my={16}>
        <Heading as="h3" fontWeight="medium">
          Create/updating this site
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
          I made the mistake of building my last portfolio in a technology that
          I didn’t have the time to keep up and maintain. This version is way more
          stripped down, although should be generally easier to maintain as well,
          as I continue to build this out and flesh out more areas/information to add.<br />
          <br />
          I will be posting more here as new updates make it to the site.
        </Text>
        <Heading as="h3" fontWeight="medium" mt={16}>
          Shiny new product:{` `}
          <Link
            color="blue.500"
            href="https://www.pregraph.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Pregraph
          </Link>
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
          After working across several apps that have all either implemented—or
          are utilizing—GraphQL APIs, I have come across some common issues/areas
          that could be added to make them easier to analyze, optimize, and expand.<br />
          <br />
          The first tool to get the gears flowing was releasing a general purpose
          Apollo Link,{` `}
          <Link
            color="blue.500"
            href="https://github.com/pregraph/apollo-link-performance"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            apollo-link-performance
          </Link>,{` `}
          for logging GraphQL API requests to your current analytics service. With
          more features to make their way into that link shortly.
        </Text>
        <Heading as="h3" fontWeight="medium" mt={16}>
          Personal goals
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
          <UnorderedList>
            <ListItem>Save weekends for kids</ListItem>
            <ListItem>Get final home renovations projects done, so we can move in</ListItem>
            <ListItem>Daily trail run (weekdays)</ListItem>
            <ListItem>Daily rowing session (weekdays)</ListItem>
          </UnorderedList>
        </Text>
      </Box>
      <Box pt={{ base: 10, md: 10 }} pb={{ base: 10, md: 24 }}>
        <Text>
          What is this page?<br />
          This “Now” page was inspired by{` `}
          <Link
            href="https://sive.rs"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Derek Sivers
          </Link>. Find more, or submit your own, at{` `}
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

export default NowPage
