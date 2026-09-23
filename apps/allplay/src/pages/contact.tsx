import { type ReactElement } from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import { PageMeta } from 'next-meta'
import { BreadcrumbJsonLd } from 'react-structured'

import { Link } from '../components/base'
import { SiteLayout } from '../components/layouts'
import { getBreadcrumbData } from '../utils/structured-data'

const TITLE = 'Contact All Play'
const DESCRIPTION =
  'How to contact Ryan Hefner about the All Play podcast, newsletter, and projects discussed on the show.'

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
    <Box flex="1" maxW="container.lg" px={{ base: 4, md: 8 }} py={24}>
      <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }}>
        Contact
      </Heading>
      <Text color="gray.300" fontSize={{ base: 'xl', md: '2xl' }} mt={10}>
        The best way to reach All Play is to email Ryan Hefner at{' '}
        <Link href="mailto:hi@ryanhefner.com">hi@ryanhefner.com</Link>. Feedback
        about an episode, thoughtful topic suggestions, questions about the
        publication, and potential podcast or project collaborations are all
        welcome. Include a descriptive subject and any relevant episode,
        article, or project link so there is enough context to respond.
      </Text>

      <Heading as="h2" mt={16}>
        Products and open-source projects
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        All Play documents products and tools, but it is not the support desk
        for every project mentioned on the show. For a bug, feature request, or
        usage question about an open-source package, use the issue tracker in
        that project’s GitHub repository. Keeping technical discussion there
        makes the answer discoverable and gives maintainers and other users a
        chance to contribute. Send private security concerns by email instead of
        posting them publicly.
      </Text>

      <Heading as="h2" mt={16}>
        Podcast and newsletter
      </Heading>
      <Text color="gray.400" fontSize="xl" mt={4}>
        If audio playback or a listening-platform link is not working, mention
        the episode title and the app or browser involved. Newsletter messages
        include an unsubscribe link for subscription changes. For a privacy
        question or a request involving information you submitted directly,
        email the address above and describe the request. Response times can
        vary when Ryan is focused on active product work or family time.
      </Text>
    </Box>
  </>
)

ContactPage.getLayout = (page: ReactElement) => <SiteLayout>{page}</SiteLayout>

export default ContactPage
