import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MenuIcon } from '@/assets/icons'
import { useWindowSize } from '@/hooks'
import ChangeLanguage from '@/components/ChangeLanguage/change-language.component'
import ChangeTheme from '@/components/ChangeTheme/change-theme.component'
import { CustomLogo } from '@/components/CustomLogo/custom-logo.component'
import HeaderItemList from './HeaderItems/header-items.component'
import styles from './header.module.scss'

export const TheHeader: React.FC = () => {
  const { isMobile } = useWindowSize()

  return (
    <nav className={`navbar ${styles.header}`}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <Image
              src={MenuIcon}
              alt='Menu Icon'
              width={20} height={20}
            />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <HeaderItemList />
          </ul>
        </div>
        <Link href={'/'}>
          <CustomLogo text={!isMobile ? 'Jorge Jimenez' : 'Jj'} />
        </Link>
      </div>
      <div className='navbar-end'>
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <HeaderItemList />
          </ul>
        </div>

        <ChangeLanguage />

        <ChangeTheme />
      </div>
    </nav>
  )
}
