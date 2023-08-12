import React from 'react'
import Image from 'next/image'
import { LigthIcon } from '@/assets/icons'
import styles from './change-theme.module.scss'

const ChangeTheme: React.FC = () => {
  return (
    <label className={styles['theme-switch']}>
      <input
        type='checkbox'
        className={styles['theme-switch__checkbox']}
      />
      <div className={styles['theme-switch__container']}>
        <div className={styles['theme-switch__clouds']}/>
        <div className={styles['theme-switch__stars-container']}>
          <Image
            src={LigthIcon}
            alt='Ligth icon'
            width={20} height={20}
          />
        </div>
        <div className={styles['theme-switch__circle-container']}>
          <div className={styles['theme-switch__sun-moon-container']}>
            <div className={styles['theme-switch__moon']}>
              <div className={styles['theme-switch__spot']} />
              <div className={styles['theme-switch__spot']} />
              <div className={styles['theme-switch__spot']} />
            </div>
          </div>
        </div>
      </div>
    </label>
  )
}

export default ChangeTheme
