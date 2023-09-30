import { ReactElement, ReactNode, useMemo } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
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
  'All Play - The online home of Ryan Hefner, Software Engineer & Eternal Tinkerer'
const DESCRIPTION =
  'The online archive and playspace for Ryan Hefner, software engineer and product designer, currently based in Atlanta, GA.'

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const metaUrl = useMemo(
    () => `https://www.ryanhefner.com${router.asPath.split('?')[0]}`,
    [router.asPath]
  )

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="https://www.ryanhefner.com" />
        <meta property="og:url" content={metaUrl} />
        <meta
          property="og:image"
          content="https://www.ryanhefner.com/assets/ryan-hefner-social.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ryanhefner" />
        <meta
          name="twitter:image"
          content="https://www.ryanhefner.com/assets/ryan-hefner-social.jpg"
        />
        <meta name="twitter:url" content={metaUrl} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link rel="canonical" href={metaUrl} />
      </Head>
      <ChakraProvider theme={theme}>
        <SiteLayout>
          <Fathom siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID} />
          {getLayout(<Component {...pageProps} />)}
        </SiteLayout>
      </ChakraProvider>
    </>
  )
}

export default CustomApp
