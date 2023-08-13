import { useTranslation } from 'next-i18next'
import React from 'react'

const HeaderItemList: React.FC = () => {
  const { t } = useTranslation()

  const headerItems = [
    { label: t('Header.Projects') },
    { label: t('Header.Experience') },
    { label: t('Header.Education') },
  ]

  return headerItems.map((item, idx) => (
    <li key={idx}><a>{item.label}</a></li>
  ))
}

export default HeaderItemList
