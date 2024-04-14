import { useCallback, useEffect, useRef, useState } from 'react'

import { ChakraProps } from '@chakra-ui/react'
// import Canvas from 'react-canvas-wrapper'
import WaveformData from 'waveform-data'

interface WaveformProps extends ChakraProps {
  color?: string
  height?: string
  slug: string
  width?: string
}

export const Waveform = ({
  color = '#ddd',
  height,
  slug,
  width,
}: WaveformProps) => {
  const [initialized, setInitialized] = useState(false)
  const [waveform, setWaveform] = useState<any>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawWaveform = useCallback(() => {
    const scaleY = (amplitude: number, height: number) => {
      const range = 256
      const offset = 128

      return height - ((amplitude + offset) * height) / range
    }

    const ctx = canvasRef.current?.getContext('2d')

    if (canvasRef.current && ctx) {
      ctx.fillStyle = color
      ctx.strokeStyle = color
      ctx.beginPath()

      const channel = waveform.channel(0)

      // Loop forwards, drawing the upper half of the waveform
      for (let x = 0; x < waveform.length; x++) {
        const val = channel.max_sample(x)

        ctx.lineTo(x + 0.5, scaleY(val, canvasRef.current.height) + 0.5)
      }

      // Loop backwards, drawing the lower half of the waveform
      for (let x = waveform.length - 1; x >= 0; x--) {
        const val = channel.min_sample(x)

        ctx.lineTo(x + 0.5, scaleY(val, canvasRef.current.height) + 0.5)
      }

      ctx.closePath()
      ctx.stroke()
      ctx.fill()
    }
  }, [color, waveform])

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      fetch(`/waveforms/${slug}.json`)
        .then((response) => response.json())
        .then((json) => WaveformData.create(json))
        .then((waveform) => {
          // console.log(`Waveform has ${waveform.channels} channels`)
          // console.log(`Waveform has length ${waveform.length} points`)
          setWaveform(waveform)
        })
    }
  }, [drawWaveform, initialized, slug])

  useEffect(() => {
    if (waveform) {
      drawWaveform()
    }
  }, [drawWaveform, height, waveform, width])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ zIndex: 0 }}
    />
  )
}
