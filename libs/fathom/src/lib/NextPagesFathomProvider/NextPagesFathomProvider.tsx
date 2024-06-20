import { trackPageview } from 'fathom-client'
import Router from 'next/router'

import { FathomProvider, FathomProviderProps } from '../FathomProvider'

type NextPagesFathomProviderProps = FathomProviderProps

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    trackPageview()
  }
})

const NextPagesFathomProvider = ({
  children,
  clientOptions,
  siteId,
  ...rest
}: NextPagesFathomProviderProps) => {
  return (
    <FathomProvider {...{ clientOptions, siteId, ...rest }}>
      {children}
    </FathomProvider>
  )
}

NextPagesFathomProvider.displayName = 'NextPagesFathomProvider'

export default NextPagesFathomProvider
