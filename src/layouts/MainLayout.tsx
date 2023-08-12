import React from 'react'
import { TheHeader } from '@/components/navbars'
import styles from './MainLayout.module.scss'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className={styles.appWidth}>
      <TheHeader />

      <main className={styles.content}>
        {children}
      </main>

    </div>
  )
}

export default MainLayout
