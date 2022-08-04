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

  const metaUrl = `${location.origin}${location.pathname}`

  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['ryanhefner.com', 'www.ryanhefner.com'],
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
        <meta property="og:site_name" content="https://www.ryanhefner.com" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content="https://www.ryanhefner.com/assets/ryan-hefner-peace.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ryanhefner" />
        <meta name="twitter:image" content="https://www.ryanhefner.com/assets/ryan-hefner-peace.jpg" />
        <meta name="twitter:url" content={metaUrl} />
        <link rel="canonical" href={metaUrl} />
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
