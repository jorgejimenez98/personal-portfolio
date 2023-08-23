/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ScrollToTop } from '@/components'
import { TheFooter, TheHeader } from '@/components/layout'
import { useCookie } from '@/hooks'
import styles from './main-layout.module.scss'

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()
  const { value: selectedLanguage } = useCookie('language')

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(selectedLanguage)
    }
    changeLanguage()
  }, [selectedLanguage])

  return (
    <React.Fragment>
      <TheHeader />
      <ScrollToTop />

      <main className={styles.content}>
        {children}
      </main>

      <TheFooter />
    </React.Fragment>
  )
}
