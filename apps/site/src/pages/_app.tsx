import { ReactElement, ReactNode } from 'react'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider } from 'next-meta'
import { FathomProvider } from 'react-fathom'
import { NextFathomTrackViewPages } from 'react-fathom/next'
import { Graph } from 'react-structured'

import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { ThemeProvider } from '../providers/ThemeProvider'
import {
  getRyanHefnerLinkCardImage,
  getRyanHefnerSiteGraphData,
  normalizeSiteUrl,
} from '../utils/structured-data'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const siteUrl = normalizeSiteUrl()

const TITLE =
  'The online home of Ryan Hefner, Software Developer & Eternal Tinkerer'
const DESCRIPTION =
  'The online archive and play space for Ryan Hefner, software developer and product designer, currently based in Atlanta, GA.'

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const routePath = router.asPath.split(/[?#]/)[0]
  const path = routePath === '/index' ? '/' : routePath
  const image = getRyanHefnerLinkCardImage(path)

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="author self" href="https://www.ryanhefner.com/" />
        <link
          rel="webmention"
          href="https://webmention.io/www.ryanhefner.com/webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/www.ryanhefner.com/xmlrpc"
        />
        <meta name="fediverse:creator" content="@ryanhefner@mastodon.social" />
        <meta
          name="fediverse:url"
          content="https://mastodon.social/@ryanhefner"
        />
        <meta name="fediverse:username" content="ryanhefner" />
        <meta name="fediverse:domain" content="mastodon.social" />
        <meta name="fediverse:instance" content="Mastodon" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${siteUrl}/feeds/all/rss.xml`}
          title="Ryan Hefner — All: Feed"
        />
      </Head>
      <Graph id="ryan-hefner-site-jsonld" data={getRyanHefnerSiteGraphData()} />
      <MetaProvider
        baseUrl={siteUrl}
        canonical={path}
        title={TITLE}
        description={DESCRIPTION}
        images={image ? [image] : undefined}
        locale="en_US"
        siteName="Ryan Hefner - All Play"
        twitter={{
          card: 'summary_large_image',
          creator: '@ryanhefner',
          site: '@ryanhefner',
        }}
        type="website"
        url={path}
      >
        <FathomProvider
          clientOptions={{
            includedDomains: ['ryanhefner.com', 'www.ryanhefner.com'],
          }}
          siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID}
        >
          <NextFathomTrackViewPages />
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </FathomProvider>
      </MetaProvider>
      <SpeedInsights />
    </>
  )
}

export default CustomApp
