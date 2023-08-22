import React from 'react'
import Image from 'next/image'
import * as icons from '@/assets/icons'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR' | 'DEFAULT'
  text: string | React.ReactNode
  showIcon?: boolean
}

export const Alert: React.FC<AlertProps> = (props) => {
  const { text, type, className, showIcon = true, ...restProps } = props

  const currentAlert = {
    SUCCESS: { className: 'alert alert-success', icon: icons.Success },
    INFO: { className: 'alert alert-info', icon: icons.Info },
    WARNING: { className: 'alert alert-warning', icon: icons.Warning },
    ERROR: { className: 'alert alert-error', icon: icons.Error },
    DEFAULT: { className: 'alert', icon: icons.Info }
  }[type]

  return (
    <div
      className={`${currentAlert.className} ${className || ''}`}
      {...restProps}
    >
      {showIcon && (
        <Image
          src={currentAlert.icon}
          width={30}
          height={30}
          alt='alert'
        />
      )}
      {text}
    </div>
  )
}
