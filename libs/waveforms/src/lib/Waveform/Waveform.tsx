import { useEffect, useRef } from 'react'

import { ChakraProps } from '@chakra-ui/react'

interface WaveformProps extends ChakraProps {
  audioBuffer: AudioBuffer
  color: string
  width: number
  height: number
}

export const Waveform = ({
  audioBuffer,
  color,
  width,
  height,
}: WaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const context = canvas.getContext('2d')

      if (context) {
        // Clear canvas
        context.clearRect(0, 0, width, height)

        // Draw waveform
        const data = audioBuffer.getChannelData(0)
        const step = Math.ceil(data.length / width)
        const amp = height / 2

        context.fillStyle = color
        context.lineWidth = 1
        context.strokeStyle = color

        context.beginPath()

        for (let i = 0; i < width; i++) {
          let min = 1.0
          let max = -1.0

          for (let j = 0; j < step; j++) {
            const sample = data[i * step + j]

            if (sample < min) {
              min = sample
            }
            if (sample > max) {
              max = sample
            }
          }

          const x = i
          const y = (1 + min) * amp
          const height = Math.max(1, (max - min) * amp)

          context.moveTo(x, y)
          context.lineTo(x, y + height)
        }

        context.stroke()
      }
    }
  }, [audioBuffer, width, height])

  return <canvas ref={canvasRef} width={width} height={height} />
}
