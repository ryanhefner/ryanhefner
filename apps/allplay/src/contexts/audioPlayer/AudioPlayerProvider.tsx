import { PropsWithChildren } from 'react'

import { AudioPlayerContext } from './AudioPlayerContext'

type AudioPlayerProviderProps = PropsWithChildren

export const AudioPlayerProvider = ({ children }: AudioPlayerProviderProps) => {
  return (
    <AudioPlayerContext.Provider value={null}>
      {children}
    </AudioPlayerContext.Provider>
  )
}
