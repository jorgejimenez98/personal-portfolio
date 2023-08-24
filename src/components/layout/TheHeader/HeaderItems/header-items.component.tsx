import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { header_ids } from '@/lib/constants'

export const HeaderItemList: React.FC = () => {
  const { t } = useTranslation()

  const headerItems = [
    { label: t('Header.About'), link: header_ids.about_me },
    { label: t('Header.Experience'), link: header_ids.expertise },
    { label: t('Header.Projects'), link: header_ids.projects },
    { label: t('Header.Education'), link: header_ids.education },
    { label: t('Header.Contact'), link: header_ids.contact },
  ]

  return headerItems.map((item, idx) => (
    <li key={idx}>
      <Link href={`#${item.link}`} passHref>
        {item.label}
      </Link>
    </li>
  ))
}
