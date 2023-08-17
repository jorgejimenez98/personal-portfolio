import React, { Fragment } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { TwoColumnLayout } from '@/layouts'
import { SocialMedia } from '@/types'
import SocialMediaAccounts from '@/containers/social-media/social-media.component'
import { IMAGES } from '@/lib/constants'

const IntroductionContent: React.FC<{ socialMedias: SocialMedia[] }> = ({ socialMedias }) => {
  const { t } = useTranslation()
  const fullYears = new Date().getFullYear() - 2019

  return (
    <TwoColumnLayout>
      <Fragment>
        <div className='flex items-center w-full bg-blend-color'>
          <h1 className='mr-5 text-4xl text-center font-bold lg:text-7xl lg:text-start lg:mt-16'>
            {t('Intro.Hello')}
          </h1>
        </div>
        <p className='mt-5 text-xl text-center opacity-40 lg:text-start lg:mt-10 lg:text-3xl'>
          {t('Intro.Description', { years: fullYears })}
        </p>

        <div className='mt-5 lg:mt-8'>
          <SocialMediaAccounts socialMedias={socialMedias} />
        </div>
      </Fragment>

      <Fragment>
        <div className='flex justify-center'>
          <Image
            src={IMAGES.PROFILE}
            width={550}
            height={550}
            className='mask mask-squircle shadow-md'
            alt='main-image'
          />
        </div>
      </Fragment>
    </TwoColumnLayout>
  )
}

export default IntroductionContent
