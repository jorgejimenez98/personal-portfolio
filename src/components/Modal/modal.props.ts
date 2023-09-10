import React from 'react'

export interface ModalProps {
  isVisible: boolean
  children: React.ReactNode
  handleClose?: () => void
}
