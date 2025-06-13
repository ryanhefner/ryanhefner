import { ReactElement, ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { LinkCard } from '@linkcards/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider, SiteMeta } from 'next-meta'
import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { Fathom } from '../libs/fathom'
import { theme } from '../styles'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'

const TITLE =
  'The online home of Ryan Hefner, Software Developer & Eternal Tinkerer'
const DESCRIPTION =
  'The online archive and playspace for Ryan Hefner, software developer and product designer, currently based in Atlanta, GA.'

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const path = router.asPath.split('?')[0]
  const isHome = path === '/' || path === '/index'
  const url = isHome ? siteUrl : `${siteUrl}${path}`
  const ogImageUrl = `${url}/social-image.png`

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
      <MetaProvider
        baseUrl={siteUrl}
        canonical={url}
        title={TITLE}
        description={DESCRIPTION}
        siteName="Ryan Hefner - All Play"
        twitterCreator="@ryanhefner"
        twitterSite="@ryanhefner"
        twitterCard="summary_large_image"
        type="website"
        url={path}
      >
        <SiteMeta imageUrl="https://www.ryanhefner.com/assets/ryan-hefner-social.jpg" />
        <LinkCard
          accountUrl={process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL}
          templateUrl={ogImageUrl}
          url={url}
          imageWidth={1200}
          imageHeight={630}
        />
        <ChakraProvider theme={theme}>
          <Fathom siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID} />
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </MetaProvider>
      <SpeedInsights />
    </>
  )
}

export default CustomApp
