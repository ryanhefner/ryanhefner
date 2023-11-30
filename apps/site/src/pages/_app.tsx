import { ReactElement, ReactNode, useMemo } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaProvider } from 'next-meta'
import { SiteLayout } from '../components/layouts'
import { Fathom } from '../libs/fathom'
import { theme } from '../styles'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const TITLE =
  'The online home of Ryan Hefner, Software Engineer & Eternal Tinkerer'
const DESCRIPTION =
  'The online archive and playspace for Ryan Hefner, software engineer and product designer, currently based in Atlanta, GA.'

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const metaUrl = useMemo(
    () => `https://www.ryanhefner.com${router.asPath.split('?')[0]}`,
    [router.asPath],
  )

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
      <MetaProvider
        baseUrl="https://www.ryanhefner.com"
        imageUrl="https://www.ryanhefner.com/assets/ryan-hefner-social.jpg"
        title={TITLE}
        description={DESCRIPTION}
        siteName="Ryan Hefner - All Play"
        twitterCreator="@ryanhefner"
        twitterSite="@ryanhefner"
        twitterCard="summary_large_image"
        url={metaUrl}
      >
        <ChakraProvider theme={theme}>
          <SiteLayout>
            <Fathom siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID} />
            {getLayout(<Component {...pageProps} />)}
          </SiteLayout>
        </ChakraProvider>
      </MetaProvider>
    </>
  )
}

export default CustomApp
