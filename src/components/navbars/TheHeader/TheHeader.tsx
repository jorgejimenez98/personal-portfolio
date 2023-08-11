import React from 'react'
import styles from './TheHeader.module.scss'

const TheHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.submenus}>
        <ul>
          <li>Submenú 1</li>
          <li>Submenú 2</li>
          <li>Submenú 3</li>
        </ul>
      </nav>
    </header>
  )
}

export default TheHeader