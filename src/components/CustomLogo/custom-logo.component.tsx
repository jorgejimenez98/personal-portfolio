import React from 'react'
import styles from './custom-logo.module.scss'

const CustomLogo: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles['logo']}>
      <span className={styles['grey-color']}> &lt;</span>
      <span className={styles['logo-name']}>{text}</span>
      <span className={styles['grey-color']}>/&gt;</span>
    </div>
  )
}

export default CustomLogo
