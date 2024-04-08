import { useContext } from 'react'

import { TransistorContext } from '../context/TransistorContext'

type UseTransistorOptions = {}

export const useTransistor = (options?: UseTransistorOptions) => {
  const { client } = useContext(TransistorContext)

  return { client }
}
