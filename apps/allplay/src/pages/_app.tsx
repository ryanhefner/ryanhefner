import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider } from 'next-meta'
import { FathomProvider } from 'react-fathom'
import { NextFathomTrackViewPages } from 'react-fathom/next'
import { Graph } from 'react-structured'
import { WebAudioProvider } from 'react-web-audio'

import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { PodcastPlayerProvider } from '../contexts/podcastPlayer'
import { ThemeProvider } from '../providers/ThemeProvider'
import {
  getAllPlayLinkCardImage,
  getAllPlaySiteGraphData,
  normalizeSiteUrl,
} from '../utils/structured-data'

const siteUrl = normalizeSiteUrl()

const TITLE = 'All Play — A podcast and newsletter by Ryan Hefner'
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

  const routePath = router.asPath.split(/[?#]/)[0]
  const path = routePath === '/index' ? '/' : routePath
  const image = getAllPlayLinkCardImage(path)
  const getLayout = Component.getLayout || ((page) => page)

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
        <meta name="apple-itunes-app" content="app-id=1744906646" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={process.env.NEXT_PUBLIC_PODCAST_FEED_URL}
          title="All Play w/ Ryan Hefner — Podcast Feed"
        />
      </Head>
      <Graph id="all-play-site-jsonld" data={getAllPlaySiteGraphData()} />
      <MetaProvider
        baseUrl={siteUrl}
        canonical={path}
        title={TITLE}
        description={DESCRIPTION}
        images={image ? [image] : undefined}
        locale="en_US"
        siteName="All Play"
        twitter={{
          card: 'summary_large_image',
          creator: '@ryanhefner',
          site: '@allplayfm',
        }}
        type="website"
        url={path}
      >
        <FathomProvider
          clientOptions={{
            includedDomains: ['allplay.fm', 'www.allplay.fm'],
          }}
          siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID ?? ''}
        >
          <NextFathomTrackViewPages />
          <ThemeProvider>
            <WebAudioProvider>
              <PodcastPlayerProvider>
                {getLayout(<Component {...pageProps} />)}
              </PodcastPlayerProvider>
            </WebAudioProvider>
          </ThemeProvider>
        </FathomProvider>
      </MetaProvider>
    </>
  )
}

export default CustomApp
