import React from 'react'

interface InvisibleLinkProps  {
  id: string
  className?: string
}

const InvisibleLink: React.FC<InvisibleLinkProps> = ({ id, className }) => {

  const CLASS_NAME = [
    className,
    'h-0 w-0 relative bottom-28'
  ].join(' ')

  return <div id={id}  className={CLASS_NAME} />
}

export { InvisibleLink }
