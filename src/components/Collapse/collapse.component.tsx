import React from 'react'

interface CollapseProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Collapse: React.FC<CollapseProps> = ({ children, title, className }) => {
  return (
    <div
      tabIndex={0}
      className={`
        collapse w-full pl-3 pr-3 pb-2
        collapse-arrow ${className || ''}
      `}
    >
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium opacity-70'>
        {title}
      </div>
      <div className='collapse-content'>
        {children}
      </div>
    </div>
  )
}
