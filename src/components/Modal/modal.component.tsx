import React from 'react'
import type { ModalProps } from './modal.props'

export const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, children, handleClose } = props
  return isVisible && (
    <div className='modal modal-open modal-mask'>
      <div className='modal-box'>
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={handleClose}
        >✕</button>

        <div className='mt-5'>
          {children}
        </div>
      </div>
    </div>
  )
}
