/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './change-theme.module.scss'

import { AppTheme } from '@/types'
import { LigthIcon } from '@/assets/icons'
import Cookies from 'js-cookie'

const ChangeTheme: React.FC = () => {
  const selectedTheme = Cookies.get('theme') as AppTheme
  const [isChecked, setIsChecked] = useState<boolean>(selectedTheme === 'dark')
  const htmlTheme = document.documentElement.getAttribute('data-theme')

  useEffect(() => {
    if (!selectedTheme) {
      setHtmlTheme('cupcake')
      Cookies.set('theme', 'cupcake')
    } else if (selectedTheme !== htmlTheme) {
      setHtmlTheme(selectedTheme)
      setIsChecked(selectedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    setIsChecked(selectedTheme === 'dark')
  }, [selectedTheme])

  const handleThemeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.target.checked
    const newValue: AppTheme = isChecked ? 'dark' : 'cupcake'
    setIsChecked(isChecked)
    Cookies.set('theme', newValue)
    setHtmlTheme(newValue)
  }

  const setHtmlTheme = (theme: AppTheme) => {
    document.documentElement.setAttribute('data-theme', theme)
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
