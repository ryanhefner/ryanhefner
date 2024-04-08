import { ReactElement, ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { LinkCard } from '@linkcards/next'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider } from 'next-meta'
import { TransistorProvider } from 'react-transistor-fm'
import { WebAudioProvider } from 'react-web-audio'
import { TransistorClient } from 'transistor-client'
import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { theme } from '../styles'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ryanhefner.com'

const TITLE =
  'Documenting my thoughts and process as I, Ryan Hefner, build products and tools'
const DESCRIPTION =
  'Subscribe to the All Play newsletter, and listen to the All Play podcast episodes, sharing updates on the process, tools, and attempts I make as I build products and open-source tools.'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const transistorClient = new TransistorClient({ apiUrl: '/api/transistor' })

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const path = router.asPath.split('?')[0]
  const isHome = path === '/'
  const url = isHome ? siteUrl : `${siteUrl}${path}`
  const ogImageUrl = `${url}/social-image.jpg`
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
      <MetaProvider
        baseUrl={siteUrl}
        title={TITLE}
        description={DESCRIPTION}
        siteName="All Play"
        twitterCreator="@ryanhefner"
        twitterSite="@allplayfm"
        twitterCard="summary_large_image"
        url={path}
      >
        <LinkCard
          accountUrl={process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL}
          templateUrl={ogImageUrl}
          url={url}
          imageWidth={1200}
          imageHeight={630}
        />
        <ChakraProvider theme={theme}>
          <TransistorProvider client={transistorClient}>
            <WebAudioProvider>
              {getLayout(<Component {...pageProps} />)}
            </WebAudioProvider>
          </TransistorProvider>
        </ChakraProvider>
      </MetaProvider>
    </>
  )
}

export default CustomApp
