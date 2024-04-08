import { useRef } from 'react'

import { chakra } from '@chakra-ui/react'
// @ts-expect-error No types
import Canvas from 'react-canvas-wrapper'

const ChakraCanvas = chakra(Canvas)

type WaveformProps = {
  buffer: AudioBuffer
  currentTime: number
  duration: number
}

export const Waveform = ({ buffer, currentTime, duration }: WaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return <ChakraCanvas ref={canvasRef} />
}
