import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { analytics } from '../../firebase.config'

import { TheHeader } from '@/components/navbars'
import styles from './MainLayout.module.scss'
import { UiContext } from '@/context/ui'
import { logEvent } from 'firebase/analytics'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { selectedTheme } = useContext(UiContext)
  const { route } = useRouter()

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', { page_path: route })
    }
  }, [route])

  return (
    <div data-theme={selectedTheme}>
      <div className={styles.appWidth}>
        <TheHeader />

        <main className={styles.content}>
          {children}
        </main>

      </div>
    </div>
  )
}

export default MainLayout
