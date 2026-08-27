import { type ReactElement } from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd } from 'react-structured'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { getBreadcrumbData } from '../utils/structured-data'

const TITLE = 'Privacy'
const DESCRIPTION =
  'How Allplay.fm handles analytics, newsletter subscriptions, technical logs, podcast services, and external links.'

const PrivacyPage = () => (
  <>
    <PageMeta title={TITLE} description={DESCRIPTION} />
    <BreadcrumbJsonLd
      id="privacy-breadcrumb-jsonld"
      data={getBreadcrumbData([
        { name: 'Home', url: '/' },
        { name: 'Privacy' },
      ])}
    />
    <Box flex="1" maxW="container.lg" px={{ base: 4, md: 8 }} py={24}>
      <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }}>
        Privacy
      </Heading>
      <Text color="gray.500" fontFamily="mono" fontSize="sm" mt={6}>
        Last updated August 27, 2026
      </Text>
      <Text color="gray.300" fontSize={{ base: 'xl', md: '2xl' }} mt={10}>
        All Play is a public podcast and newsletter. You can browse the site and
        listen to public episodes without creating an account, and All Play does
        not sell personal information. This page explains the limited data that
        may be processed when you visit the site, subscribe by email, contact
        Ryan, or use connected podcast and publishing services.
      </Text>

      <Heading as="h2" mt={16}>
        Analytics and hosting
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        Allplay.fm uses Fathom Analytics to understand aggregate site traffic.
        Fathom may process information such as the requested page, referring
        site, browser or device characteristics, and approximate location. The
        site is hosted by Vercel, which may process ordinary request and server
        log information—including IP addresses, user agents, timestamps, URLs,
        and response details—for delivery, reliability, debugging, and security.
      </Text>

      <Heading as="h2" mt={16}>
        Newsletter and direct email
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        When you subscribe, the email address and optional first name you
        provide are sent to Resend and stored in the audience used to deliver
        All Play updates. Newsletter messages include an unsubscribe link. If
        you email Ryan directly, your message and contact details are retained
        as needed to read, respond to, and maintain the conversation.
      </Text>

      <Heading as="h2" mt={16}>
        Podcast and external services
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        Transistor hosts and distributes the All Play podcast feed and audio.
        Podcast apps, YouTube, social networks, and other external sites linked
        from All Play apply their own privacy policies when you visit or use
        them. All Play does not control how those independent services process
        information.
      </Text>

      <Heading as="h2" mt={16}>
        Your choices
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        You can browse without subscribing, use a podcast app of your choice,
        unsubscribe through any newsletter message, and control browser privacy
        settings. To ask a question about this policy or request removal of
        information you submitted directly, email{' '}
        <Link href="mailto:hi@ryanhefner.com">hi@ryanhefner.com</Link>.
      </Text>
    </Box>
  </>
)

PrivacyPage.getLayout = (page: ReactElement) => <SiteLayout>{page}</SiteLayout>

export default PrivacyPage
