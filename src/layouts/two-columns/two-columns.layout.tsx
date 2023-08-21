import React, { ReactNode } from 'react'

const TwoColumnLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const childrens = React.Children.toArray(children)

  return (
    <div className='flex flex-col lg:mt-10 sm:flex-row'>
      <div className='flex-1 w-full sm:w-1/2'>
        {childrens[0]}
      </div>
      <div className='flex-1 w-full sm:w-1/2'>
        {childrens[1]}
      </div>
    </div>
  )
}

export { TwoColumnLayout }
