import React from 'react'
import { useTranslation } from 'next-i18next'

export const TheFooter: React.FC = () => {
  const { t } = useTranslation()
  const actualYear = new Date().getFullYear()

  return (
    <footer className='p-10 footer bg-base-200 text-base-content footer-center'>
      <div>
        <p>{t('Footer.Text', { year: actualYear })}</p>
      </div>
    </footer>
  )
}
