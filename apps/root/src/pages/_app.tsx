import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import * as Fathom from 'fathom-client'
import { SiteLayout } from 'components/layouts'
import { theme } from 'styles'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['ryanhefner.com'],
    })

    const handleRouteChangeComplete = () => {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

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
