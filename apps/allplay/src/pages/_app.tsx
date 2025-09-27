import { ReactElement, ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { LinkCard } from '@linkcards/next'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider } from 'next-meta'
import { NextPagesFathomProvider } from 'react-fathom'
import { WebAudioProvider } from 'react-web-audio'

import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { PodcastPlayerProvider } from '../contexts/podcastPlayer'
import { theme } from '../styles'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.allplay.fm'

const TITLE =
  'Follow along as I, Ryan Hefner, share my journey building products and tools'
const DESCRIPTION =
  'Subscribe to the All Play newsletter, and listen to the All Play podcast episodes, sharing updates on the process, tools, and attempts I make as I build products and open-source tools.'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const path = router.asPath.split('?')[0]
  const isHome = path === '/' || path === '/index'
  const url = isHome ? siteUrl : `${siteUrl}${path}`
  const ogImageUrl = `${url}/social-image.png`
  const getLayout = Component.getLayout || ((page) => page)
  const isPodcast = path.startsWith('/podcast')

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="webmention"
          href="https://webmention.io/www.ryanhefner.com/webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/www.ryanhefner.com/xmlrpc"
        />
      </Head>
      <MetaProvider
        baseUrl={siteUrl}
        canonical={url}
        title={TITLE}
        description={DESCRIPTION}
        image={{
          url: `${process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL}/${encodeURIComponent(url)}/social-image.png?url=${encodeURIComponent(url)}`,
          width: 1200,
          height: 630,
        }}
        siteName="All Play"
        twitter={{
          card: 'summary_large_image',
          creator: '@ryanhefner',
          site: '@allplayfm',
        }}
        type="website"
        url={path}
      >
        {/* <LinkCard
          accountUrl={process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL}
          templateUrl={ogImageUrl}
          url={url}
          imageWidth={1200}
          imageHeight={630}
        // /> */}
        <NextPagesFathomProvider
          clientOptions={{
            includedDomains: ['allplay.fm', 'www.allplay.fm'],
          }}
          siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID ?? ''}
        >
          <ChakraProvider theme={theme}>
            <WebAudioProvider>
              <PodcastPlayerProvider>
                {getLayout(<Component {...pageProps} />)}
              </PodcastPlayerProvider>
            </WebAudioProvider>
          </ChakraProvider>
        </NextPagesFathomProvider>
      </MetaProvider>
    </>
  )
}

export default CustomApp
