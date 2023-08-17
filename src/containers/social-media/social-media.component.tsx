import React from 'react'
import Link from 'next/link'

import { CustomAvatar } from '@/components'
import { SocialMedia } from '@/types'

const SocialMediaAccounts: React.FC<{ socialMedias: SocialMedia[] }> = ({ socialMedias }) => {

  return (
    <div className='flex space-x-0 justify-center lg:justify-start'>
      {socialMedias.map((socialMedia, index) => (
        <Link
          passHref
          key={index}
          target='_blank'
          href={socialMedia.url}
        >
          <CustomAvatar
            style={{ backgroundColor: socialMedia.backgroundColor }}
          >
            <i className={socialMedia.iconClass}></i>
          </CustomAvatar>
        </Link>
      ))}
    </div>
  )
}

export default SocialMediaAccounts
