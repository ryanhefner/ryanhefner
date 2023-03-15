'use client'

import { Suspense, useEffect } from 'react'
import { load, trackPageview } from 'fathom-client'
import { usePathname, useSearchParams } from 'next/navigation'

interface FathomProps {
  siteId?: string
  includedDomains?: string[]
}

const TrackPageView = ({ siteId, includedDomains }: FathomProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (siteId) {
      load(siteId, { includedDomains })
    }
  }, [siteId, includedDomains])

  useEffect(() => {
    if (siteId) {
      trackPageview()
    }
  }, [pathname, searchParams, siteId])

  return null
}

const Fathom = ({
  siteId,
  includedDomains = ['ryanhenfer.com', 'www.ryanhefner.com'],
}: FathomProps) => (
  <Suspense fallback={null}>
    <TrackPageView {...{ siteId, includedDomains }} />
  </Suspense>
)

export default Fathom
