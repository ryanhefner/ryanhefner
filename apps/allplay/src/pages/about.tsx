import { type ReactElement } from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd } from 'react-structured'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { getBreadcrumbData } from '../utils/structured-data'

const TITLE = 'About All Play'
const DESCRIPTION =
  'All Play is Ryan Hefner’s independent podcast and newsletter about building products, software, and open-source tools.'

const AboutPage = () => (
  <>
    <PageMeta title={TITLE} description={DESCRIPTION} />
    <BreadcrumbJsonLd
      id="about-breadcrumb-jsonld"
      data={getBreadcrumbData([{ name: 'Home', url: '/' }, { name: 'About' }])}
    />
    <Box flex="1" maxW="container.lg" px={{ base: 4, md: 8 }} py={24}>
      <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }}>
        About All Play
      </Heading>
      <Text color="gray.300" fontSize={{ base: 'xl', md: '2xl' }} mt={10}>
        All Play is an independent podcast and newsletter created and hosted by{' '}
        <Link href="https://www.ryanhefner.com">Ryan Hefner</Link>. It documents
        the ideas, decisions, tools, experiments, and occasional wrong turns
        involved in building products and open-source software. Episodes and
        posts are working notes from the process rather than a polished formula
        for how every project should be made.
      </Text>

      <Heading as="h2" mt={16}>
        What you’ll find here
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        The podcast archive includes episode notes, audio, transcripts when
        available, and links to listen in common podcast apps. The newsletter
        provides written updates and another way to follow new work. Topics
        commonly include product development, interface design, software
        engineering, developer tooling, independent publishing, and the
        practical tradeoffs behind shipping an idea.
      </Text>

      <Heading as="h2" mt={16}>
        What All Play is not
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        All Play is a publication—not a social network, SaaS product, or paid
        membership platform. There are no All Play user accounts or pricing
        tiers. Public episodes can be played here or through the{' '}
        <Link href="https://feeds.transistor.fm/allplay">podcast feed</Link>,
        and the newsletter is available by email. Products discussed on the show
        have their own official sites, documentation, and support channels.
      </Text>

      <Heading as="h2" mt={16}>
        About Ryan
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        Ryan is a software developer and product designer who builds products
        and open-source tools. All Play is his place to share the process while
        it is still happening. You can find more of his work on{' '}
        <Link href="https://www.ryanhefner.com">ryanhefner.com</Link> and{' '}
        <Link href="https://github.com/ryanhefner">GitHub</Link>, or use the{' '}
        <Link href="/contact">contact page</Link> to get in touch.
      </Text>
    </Box>
  </>
)

AboutPage.getLayout = (page: ReactElement) => <SiteLayout>{page}</SiteLayout>

export default AboutPage
