import React, { useState, useEffect } from 'react'

import { FaArrowUp } from 'react-icons/fa'

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
      className='fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-md transition duration-300 hover:bg-blue-600'
    >
      <FaArrowUp />
    </button>
  )
}

export { ScrollToTop }
