import React from 'react'

export interface ModalProps {
  isVisible: boolean
  children: React.ReactNode
  handleClose?: () => void
  footer?: React.ReactNode
  footerProps?: {
    cancelLabel: string
  }
}
