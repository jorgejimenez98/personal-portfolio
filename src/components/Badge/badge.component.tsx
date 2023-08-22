import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'GHOST'
  text: string
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  type,
  className,
  ...restProps
}) => {

  const badgeClasses = {
    DEFAULT: 'badge',
    PRIMARY: 'badge badge-primary',
    SECONDARY: 'badge badge-secondary',
    ACCENT: 'badge badge-accent',
    GHOST: 'badge badge-ghost'
  }[type]

  return (
    <div
      className={`${badgeClasses} ${className || ''}`}
      {...restProps}
    >
      {text}
    </div>
  )
}
