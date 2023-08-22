import React from 'react'
import type { ModalProps } from './modal.props'
import { useTranslation } from 'next-i18next'

export const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, children, footer, footerProps, handleClose } = props
  const { t } = useTranslation()

  return isVisible && (
    <div
      className='modal modal-open modal-mask'
      onClick={handleClose}
    >
      <div className='modal-box'>
        {children}

        {footer ? footer : (
          <div className='modal-action'>
            <label
              className='btn'
              onClick={handleClose}
            >
              {footerProps?.cancelLabel || t('General.Close') }
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
