import type { ReactNode } from 'react'

import {
  Body,
  ChakraEmailProvider,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from 'chakra-email'

export interface EmailShellProps {
  children: ReactNode
  preview: string
  title: string
  unsubscribeUrl?: string
}

const allPlayEmailTheme = {
  tokens: {
    colors: {
      brand: {
        500: { value: '#EF4444' },
      },
    },
  },
}

export function EmailShell({
  children,
  preview,
  title,
  unsubscribeUrl,
}: EmailShellProps) {
  return (
    <ChakraEmailProvider theme={allPlayEmailTheme}>
      <Html lang="en">
        <Head>
          <title>{title}</title>
        </Head>
        <Preview>{preview}</Preview>
        <Body bg="gray.100" color="gray.900" fontFamily="sans" m={0} py={8}>
          <Container bg="white" maxW="600px" mx="auto" p={8}>
            <Heading as="h2" color="brand.500" fontSize="lg" mb={8} mt={0}>
              — All Play
            </Heading>
            {children}
            <Hr borderColor="gray.200" my={8} />
            <Text color="gray.500" fontSize="sm" lineHeight="base" m={0}>
              All Play is written by{' '}
              <Link color="gray.700" href="https://www.ryanhefner.com">
                Ryan Hefner
              </Link>
              .
              {unsubscribeUrl ? (
                <>
                  {' '}
                  You can{' '}
                  <Link color="gray.700" href={unsubscribeUrl}>
                    unsubscribe at any time
                  </Link>
                  .
                </>
              ) : null}
            </Text>
          </Container>
        </Body>
      </Html>
    </ChakraEmailProvider>
  )
}
