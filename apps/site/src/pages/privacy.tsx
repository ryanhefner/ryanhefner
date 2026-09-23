import { Box, Text } from '@chakra-ui/react'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd } from 'react-structured'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading, SectionHeading } from '../components/typography'
import { getBreadcrumbData } from '../utils/structured-data'

const TITLE = 'Privacy'
const DESCRIPTION =
  'How ryanhefner.com handles analytics, newsletter subscriptions, technical logs, and external services.'

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
    <PageWrapper>
      <PageHeading>Privacy</PageHeading>
      <Box mt={16} maxW="container.md">
        <Text fontSize="sm" fontFamily="mono" color="gray.500">
          Last updated August 27, 2026
        </Text>
        <Text fontSize="xl" mt={6}>
          This is Ryan Hefner’s personal site. You can browse it without
          creating an account, and I do not sell personal information. This page
          explains the limited information that may be processed when you visit
          the site, subscribe to the newsletter, contact me, or interact with
          links and services connected to the site.
        </Text>

        <Box mt={12}>
          <SectionHeading>Analytics and performance</SectionHeading>
          <Text fontSize="xl" mt={3}>
            The site uses Fathom Analytics to understand aggregate traffic and
            Vercel Speed Insights to measure site performance. These services
            may process information such as the requested page, referring site,
            browser or device characteristics, approximate location, and request
            timing. I use this information to understand which parts of the site
            are useful and to find reliability or performance problems—not to
            build advertising profiles.
          </Text>
        </Box>

        <Box mt={12}>
          <SectionHeading>Newsletter and email</SectionHeading>
          <Text fontSize="xl" mt={3}>
            If you subscribe to the newsletter, the email address and optional
            first name you provide are sent to Resend and stored in the mailing
            audience used to deliver updates. Newsletter messages include a way
            to unsubscribe. If you email me directly, your message and contact
            details are retained as needed to read and respond to the
            conversation.
          </Text>
        </Box>

        <Box mt={12}>
          <SectionHeading>Hosting and connected services</SectionHeading>
          <Text fontSize="xl" mt={3}>
            Vercel hosts this site and may process ordinary server-log data,
            including IP addresses, user agents, requested URLs, timestamps, and
            response details, for delivery, security, and debugging. The site
            also uses Webmention.io to receive public webmentions and pingbacks.
            Links to GitHub, social networks, podcasts, products, and other
            external sites are governed by those services’ own privacy policies.
          </Text>
        </Box>

        <Box mt={12}>
          <SectionHeading>Your choices</SectionHeading>
          <Text fontSize="xl" mt={3}>
            You can browse without joining the newsletter, unsubscribe using the
            link in any newsletter message, and control browser storage or
            privacy settings through your browser. To ask a question about this
            policy or request removal of information you submitted directly,
            email <Link href="mailto:hi@ryanhefner.com">hi@ryanhefner.com</Link>
            .
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  </>
)

PrivacyPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default PrivacyPage
