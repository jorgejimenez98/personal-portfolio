/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ScrollToTop } from '@/components'
import { TheHeader } from '@/components/navbars'
import { useCookie } from '@/hooks'
import styles from './MainLayout.module.scss'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()
  const { value: selectedLanguage } = useCookie('language')

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(selectedLanguage)
    }
    changeLanguage()
  }, [selectedLanguage])

  return (
    <div className={styles.appWidth}>
      <TheHeader />
      <ScrollToTop />

      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
