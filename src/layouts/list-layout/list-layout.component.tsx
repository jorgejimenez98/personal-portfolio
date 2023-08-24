import React, { FC, ReactNode } from 'react'

interface ListLayoutProps {
  children: ReactNode
  hasReverseContent?: boolean
}

export const ListLayout: FC<ListLayoutProps> = (props) => {
  const { children, hasReverseContent = true } = props

  return (
    <div className={`
      flex flex-wrap -mx-4 mt-6
      ${hasReverseContent ? 'flex-row-reverse' : 'flex-row'}
    `}>
      {children}
    </div>
  )
}
