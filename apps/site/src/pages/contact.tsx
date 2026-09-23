import { Box, Text } from '@chakra-ui/react'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd } from 'react-structured'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { PageWrapper } from '../components/site'
import { PageHeading, SectionHeading } from '../components/typography'
import { getBreadcrumbData } from '../utils/structured-data'

const TITLE = 'Contact'
const DESCRIPTION =
  'How to contact Ryan Hefner about products, consulting, podcasts, and open-source software.'

const ContactPage = () => (
  <>
    <PageMeta title={TITLE} description={DESCRIPTION} />
    <BreadcrumbJsonLd
      id="contact-breadcrumb-jsonld"
      data={getBreadcrumbData([
        { name: 'Home', url: '/' },
        { name: 'Contact' },
      ])}
    />
    <PageWrapper>
      <PageHeading>Contact</PageHeading>
      <Box mt={16} maxW="container.md">
        <Text fontSize="xl">
          The best way to reach me is by email at{' '}
          <Link href="mailto:hi@ryanhefner.com">hi@ryanhefner.com</Link>. I’m
          happy to hear from people interested in the products and tools I’m
          building, potential collaborations, consulting work, podcast
          conversations, or anything else that seems like a good reason to say
          hello.
        </Text>

        <Box mt={12}>
          <SectionHeading>Products and project work</SectionHeading>
          <Text fontSize="xl" mt={3}>
            If you’re reaching out about a product, include the product name,
            the URL or account involved, and a short description of what you’re
            trying to accomplish. For consulting or collaboration inquiries, a
            little context about the project, timing, and where you think I can
            help makes it much easier for me to respond thoughtfully.
          </Text>
        </Box>

        <Box mt={12}>
          <SectionHeading>Open-source support</SectionHeading>
          <Text fontSize="xl" mt={3}>
            For bugs, feature requests, and usage questions about an open-source
            package, please use the issue tracker in the package’s GitHub
            repository. Keeping technical discussion there gives other users a
            chance to find the answer, add context, and contribute a fix. For a
            private security concern, email me directly instead of opening a
            public issue.
          </Text>
        </Box>

        <Box mt={12}>
          <SectionHeading>Elsewhere</SectionHeading>
          <Text fontSize="xl" mt={3}>
            You can also follow me on{' '}
            <Link
              href="https://bsky.app/profile/ryanhefner.com"
              target="_blank"
            >
              Bluesky
            </Link>{' '}
            or browse my work on{' '}
            <Link href="https://github.com/ryanhefner" target="_blank">
              GitHub
            </Link>
            . I read everything that comes in, although response times can vary
            when I’m deep in a project or spending time with my family.
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  </>
)

ContactPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default ContactPage
