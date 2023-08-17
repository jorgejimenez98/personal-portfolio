import React from 'react'

export const CustomAvatar: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...restProps }) => {
  return (
    <div
      className='
        w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200
        cursor-pointer inline-block text-lg leading-10 text-white
        mx-1 relative text-center user-select-none transition duration-200 ease-in
        hover:blur-sm
      '
      {...restProps}
    >
      {children}
    </div>
  )
}
