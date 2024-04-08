import { PropsWithChildren, useState } from 'react'

import { TransistorClient } from 'transistor-client'

import { TransistorContext } from './TransistorContext'

interface TransistorProviderProps extends PropsWithChildren {
  client: TransistorClient
}

export const TransistorProvider = ({
  children,
  client: clientProp,
}: TransistorProviderProps) => {
  const [client, setClient] = useState(clientProp)

  return (
    <TransistorContext.Provider value={{ client }}>
      {children}
    </TransistorContext.Provider>
  )
}
