import React, { useContext } from 'react'
import { TheHeader } from '@/components/navbars'
import styles from './MainLayout.module.scss'
import { UiContext } from '@/context/ui'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { selectedTheme } = useContext(UiContext)

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
