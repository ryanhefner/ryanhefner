import { useContext } from 'react'

import { WebAudioContext } from '../context/WebAudioContext'

export const useWebAudioContext = () => {
  const context = useContext(WebAudioContext)

  return context
}
