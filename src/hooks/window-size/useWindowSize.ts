import { useState, useEffect } from 'react'
import type { WindowSize, WindowSizeType } from './window-size.types'

export const useWindowSize = (): WindowSizeType => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowSize({ width: newWidth, height: window.innerHeight })
      setIsMobile(newWidth < 768)
      setIsTablet(newWidth >= 768 && newWidth < 1024)
      setIsDesktop(newWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowSize, isMobile, isTablet, isDesktop }
}

