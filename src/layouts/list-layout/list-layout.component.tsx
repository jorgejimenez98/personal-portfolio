import React, { FC, ReactNode } from 'react'

export const ListLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-wrap -mx-4 mt-6 flex-row-reverse'>
      {children}
    </div>
  )
}
