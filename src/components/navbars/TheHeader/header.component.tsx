import React from 'react'
import Image from 'next/image'
import { MenuIcon } from '@/assets/icons'
import HeaderItemList from './HeaderItems/header-items.component'
import ChangeTheme from '@/components/ChangeTheme/change-theme.component'
import ChangeLanguage from '@/components/ChangeLanguage/change-language.component'

const TheHeader: React.FC = () => {

  return (
    <div className='navbar bg-base-100'>
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
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
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
    </div>
  )
}

export default TheHeader
