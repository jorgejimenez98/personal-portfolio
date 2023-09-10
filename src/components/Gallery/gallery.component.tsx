import Image from 'next/image'
import React, { useState } from 'react'


export const Gallery: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='carousel w-full'>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full${
            index === currentSlide ? ' block' : ' hidden'
          }`}
        >
          <div className='flex justify-center'>
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              width={300}
              height={150}
            />
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <button
              onClick={prevSlide}
              className='btn btn-circle'
              aria-label='Previous Slide'
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className='btn btn-circle'
              aria-label='Next Slide'
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
