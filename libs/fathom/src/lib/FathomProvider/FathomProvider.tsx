import { PropsWithChildren, useCallback, useEffect } from 'react'
import * as Fathom from 'fathom-client'
import type { EventOptions, LoadOptions, PageViewOptions } from 'fathom-client'
import { FathomContext } from '../FathomContext'

export interface FathomProviderProps extends PropsWithChildren {
  client?: any
  clientOptions?: LoadOptions
  disableDefaultTrack?: boolean
  siteId?: string
  trackDefaultOptions?: EventOptions
}

const FathomProvider = ({
  children,
  client = Fathom,
  clientOptions,
  disableDefaultTrack,
  siteId,
  trackDefaultOptions,
}: FathomProviderProps) => {
  // const { pathname } = useLocation()

  const blockTrackingForMe = useCallback(() => {
    return client.blockTrackingForMe()
  }, [])

  const enableTrackingForMe = useCallback(() => {
    return client.enableTrackingForMe()
  }, [client])

  const isTrackingEnabled = useCallback(() => {
    return client.isTrackingEnabled()
  }, [client])

  const load = useCallback(
    (siteId: string, clientOptions?: LoadOptions) => {
      return client.load(siteId, clientOptions)
    },
    [client],
  )

  const setSite = useCallback(
    (siteId: string) => {
      return client.setSite(siteId)
    },
    [client],
  )

  const trackEvent = useCallback(
    (category: string, options?: EventOptions) => {
      return client.trackEvent(category, options)
    },
    [client],
  )

  const trackPageview = useCallback(
    (options?: PageViewOptions) => {
      return client.trackPageview(options)
    },
    [client],
  )

  useEffect(() => {
    if (siteId) {
      load(siteId, clientOptions)
    }
  }, [clientOptions, load, siteId])

  // useEffect(() => {
  //   if (siteId && !disableDefaultTrack) {
  //     trackPageview()
  //   }
  // }, [disableDefaultTrack, siteId, trackPageview])

  return (
    <FathomContext.Provider
      value={{
        blockTrackingForMe,
        enableTrackingForMe,
        isTrackingEnabled,
        load,
        setSite,
        trackEvent,
        trackPageview,
      }}
    >
      {children}
    </FathomContext.Provider>
  )
}

FathomProvider.displayName = 'FathomProvider'

export default FathomProvider
