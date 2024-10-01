import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

type MaruqeeProps = PropsWithChildren & {
  defaultOffset?: number
  pause?: boolean
  reverse?: boolean
  speed?: number
}

/**
 * react-marquease
 */
const Marquee = forwardRef(
  (
    {
      children,
      defaultOffset = 0,
      reverse = false,
      pause = false,
      speed = 1,
      ...rest
    }: MaruqeeProps,
    ref,
  ) => {
    const [mounted, setMounted] = useState(false)
    const [clientHeight, setClientHeight] = useState(null)
    const [clientWidth, setClientWidth] = useState(null)

    const localRef = useRef(null)
    const animationRef = useRef(null)
    const childrenRef = useRef(null)
    const marqueeRef = useRef(null)

    useImperativeHandle(ref, () => localRef.current, [])

    useEffect(() => {
      setMounted(true)
    }, [])

    useEffect(() => {
      if (mounted) {
        const handleResize = () => {
          setClientHeight(childrenRef.current?.clientHeight || 0)
          setClientWidth(childrenRef.current?.clientWidth || 0)
        }

        window.addEventListener('resize', handleResize)
        setClientHeight(childrenRef.current?.clientHeight || 0)
        setClientWidth(childrenRef.current?.clientWidth || 0)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }
    }, [mounted])

    useEffect(() => {
      const relativeSpeed = ((clientWidth / 60) * 1000) / speed

      animationRef.current = marqueeRef.current?.animate(
        [
          { transform: 'translateX(0px)' },
          {
            transform: `translateX(${reverse ? `${clientWidth}px` : `-${clientWidth}px`})`,
          },
        ],
        { duration: relativeSpeed, iterations: Infinity },
      )
    }, [clientWidth, reverse, speed])

    useEffect(() => {
      if (animationRef.current) {
        if (pause) {
          animationRef.current.pause()
        } else {
          animationRef.current.play()
        }
      }
    }, [pause])

    const childClones = useMemo(() => {
      if (typeof window === 'undefined') return null

      const cloneCount = Math.max(
        2,
        clientWidth ? Math.ceil(window.innerWidth / (clientWidth / 2)) : 0,
      )

      const direction = reverse ? 1 : -1

      return Array(cloneCount)
        .fill(0)
        .map((item, index) => (
          <div
            key={`marquee-clone-${index}`}
            data-marquee-child={index}
            style={{
              position: 'absolute',
              top: 0,
              right: reverse ? 0 : 'auto',
              transform: `translateX(${
                clientWidth * index * direction * -1
              }px)`,
            }}
          >
            {children}
          </div>
        ))
    }, [children, clientWidth, reverse])

    if (!mounted) return null

    return (
      <div
        ref={localRef}
        {...rest}
        style={{
          position: 'relative',
          height: clientHeight,
          overflow: 'hidden',
        }}
      >
        <div
          ref={childrenRef}
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        >
          {children}
        </div>
        <div aria-hidden="true" data-qa="scroller" ref={marqueeRef}>
          {childClones}
        </div>
      </div>
    )
  },
)

Marquee.displayName = 'Marquee'

export default Marquee
