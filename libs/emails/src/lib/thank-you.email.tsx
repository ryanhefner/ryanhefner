import { Button, Heading, Text, render, renderPlainText } from 'chakra-email'

import { EmailShell } from './components/email-shell'

export interface ThankYouEmailProps {
  firstName?: string
  newsletterUrl?: string
  unsubscribeUrl?: string
}

export const previewProps = {
  firstName: 'Ryan',
  newsletterUrl: 'https://allplay.fm/newsletter',
  unsubscribeUrl: 'https://example.com/unsubscribe',
} satisfies ThankYouEmailProps

export const previewVariants = {
  Anonymous: {
    firstName: '',
  },
} satisfies Record<string, Partial<ThankYouEmailProps>>

export function ThankYouEmail({
  firstName,
  newsletterUrl = 'https://allplay.fm/newsletter',
  unsubscribeUrl,
}: ThankYouEmailProps) {
  const greeting = firstName
    ? `Thanks for subscribing, ${firstName}!`
    : 'Thanks for subscribing!'

  return (
    <EmailShell
      preview="You’re subscribed to the All Play newsletter."
      title="Thanks for subscribing to All Play"
      unsubscribeUrl={unsubscribeUrl}
    >
      <Heading as="h1" fontSize="3xl" lineHeight="short" mb={5} mt={0}>
        {greeting}
      </Heading>
      <Text color="gray.700" fontSize="lg" lineHeight="tall" mb={5}>
        You’re on the list. I’ll send you new podcast episodes, notes from
        things I’m building, and other useful or interesting finds.
      </Text>
      <Text color="gray.700" lineHeight="tall" mb={7}>
        In the meantime, you can catch up on previous issues and see what’s new
        with All Play.
      </Text>
      <Button
        href={newsletterUrl}
        bg="brand.500"
        color="white"
        size="lg"
      >
        Visit the newsletter
      </Button>
      <Text color="gray.700" lineHeight="tall" mb={0} mt={8}>
        Thanks,
        <br />
        Ryan
      </Text>
    </EmailShell>
  )
}

export function renderThankYouEmail(props: ThankYouEmailProps = {}) {
  return render(<ThankYouEmail {...props} />, { pretty: true })
}

export function renderThankYouEmailPlainText(props: ThankYouEmailProps = {}) {
  return renderPlainText(<ThankYouEmail {...props} />)
}

export default ThankYouEmail
