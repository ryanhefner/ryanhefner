import { ReactElement, ReactNode } from 'react'

import { LinkCard } from '@linkcards/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProvider } from 'next-meta'

import '@fontbase/suisse-intl'
import '@fontbase/suisse-mono'
import '@fontbase/suisse-works'

import { Fathom } from '../libs/fathom'
import { ThemeProvider } from '../providers/ThemeProvider'

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
      </Head>
      <MetaProvider
        baseUrl={siteUrl}
        canonical={url}
        title={TITLE}
        description={DESCRIPTION}
        siteName="Ryan Hefner - All Play"
        twitter={{
          card: 'summary_large_image',
          creator: '@ryanhefner',
          site: '@ryanhefner',
        }}
        type="website"
        url={path}
      >
        <LinkCard
          accountUrl={process.env.NEXT_PUBLIC_LINKCARDS_ACCOUNT_URL}
          templateUrl={ogImageUrl}
          url={url}
          imageWidth={1200}
          imageHeight={630}
        />
        <ThemeProvider>
          <Fathom siteId={process.env.NEXT_PUBLIC_FATHOM_SITE_ID} />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </MetaProvider>
      <SpeedInsights />
    </>
  )
}

export default CustomApp
