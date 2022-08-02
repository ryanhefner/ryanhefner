import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { SiteLayout } from 'components/layouts'
import { theme } from 'styles'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>All Play - The online home of Ryan Hefner, Software Engineer &amp; Eternal Tinkerer</title>
      </Head>
      <ChakraProvider theme={theme}>
        <SiteLayout>
          {getLayout(<Component {...pageProps} />)}
        </SiteLayout>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
