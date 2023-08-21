import React, { useState, useEffect } from 'react'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window?.scrollY > 100)
  }

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return isVisible && (
    <button
      onClick={scrollToTop}
      className='
      fixed bottom-4 right-4 w-10 h-10 bg-blue-500 text-white rounded-full
      shadow-md transition duration-300 hover:bg-blue-600 flex items-center
      justify-center z-50
      '
    >
      <i className='fas fa-arrow-up'></i>
    </button>
  )
}

export { ScrollToTop }
