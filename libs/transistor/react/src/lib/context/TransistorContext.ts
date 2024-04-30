import { createContext } from 'react'

import { TransistorClient } from 'transistor-client'

type TransistorContextValue = {
  client?: TransistorClient
}

export const TransistorContext = createContext<TransistorContextValue>({
  client: undefined,
})
