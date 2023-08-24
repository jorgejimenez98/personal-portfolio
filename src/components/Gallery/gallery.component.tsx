import Image from 'next/image'
import React from 'react'

export const Gallery: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  return (
    <div className='max-w-lg p-4 space-x-4 carousel carousel-center bg-neutral rounded-box'>
      {imageUrls.map((url, idx) => (
        <Image
          src={url}
          alt='image'
          width={200}
          height={160}
          key={idx}
          className='rounded-box bg-contain'
        />
      ))}
    </div>
  )
}
