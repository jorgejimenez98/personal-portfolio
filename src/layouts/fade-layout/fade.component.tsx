import React from 'react'
import styles from './fade.module.scss'

export const FadeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.fade}>
      {children}
    </div>
  )
}
