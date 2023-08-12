import React, { useState, useContext } from 'react'
import Image from 'next/image'

import { LigthIcon } from '@/assets/icons'
import styles from './change-theme.module.scss'
import { UiContext } from '@/context/ui'

const ChangeTheme: React.FC = () => {
  const { selectedTheme, setAppTheme } = useContext(UiContext)
  const [isChecked, setIsChecked] = useState<boolean>(selectedTheme === 'dark')


  const handleThemeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.target.checked
    setAppTheme(isChecked ? 'dark' : 'ligth')
    setIsChecked(isChecked)
  }

  return (
    <label className={styles['theme-switch']}>
      <input
        type='checkbox'
        onChange={handleThemeChange}
        checked={isChecked}
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
