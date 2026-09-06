import {
  Body,
  ChakraEmailProvider,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  render,
  renderPlainText,
} from 'chakra-email'

import { emailTheme } from './components/email-theme'

export interface EmailsProps {
  recipientName?: string
}

export const previewProps = {
  recipientName: 'Ryan',
} satisfies EmailsProps

export const previewVariants = {
  Anonymous: {
    recipientName: '',
  },
} satisfies Record<string, Partial<EmailsProps>>

export function Emails({ recipientName }: EmailsProps) {
  const greeting = recipientName ? `Welcome, ${recipientName}!` : 'Welcome!'

  return (
    <ChakraEmailProvider theme={emailTheme}>
      <Html lang="en">
        <Head>
          <title>Welcome to Emails!</title>
        </Head>
        <Preview>Welcome to Emails!</Preview>
        <Body bg="white" color="gray.900" fontFamily="sans" m={0} py={8}>
          <Container bg="white" maxW="600px" mx="auto" p={8}>
            <Heading as="h1" fontSize="2xl" mb={4}>
              {greeting}
            </Heading>
            <Text color="gray.700" m={0}>
              Welcome to Emails!
            </Text>
          </Container>
        </Body>
      </Html>
    </ChakraEmailProvider>
  )
}

export function renderEmails(props: EmailsProps = {}) {
  return render(<Emails {...props} />, { pretty: true })
}

export function renderEmailsPlainText(props: EmailsProps = {}) {
  return renderPlainText(<Emails {...props} />)
}

export default Emails
