import React from 'react'
import { TheHeader } from '@/components/navbars'
import styles from './MainLayout.module.scss'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <React.Fragment>
      <TheHeader />

      <main className={styles.content}>
        {children}
      </main>

    </React.Fragment>
  )
}

export default MainLayout
