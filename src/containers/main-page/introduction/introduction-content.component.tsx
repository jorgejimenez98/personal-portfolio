import React, { Fragment } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { TwoColumnLayout } from '@/layouts'
import { useWindowSize } from '@/hooks'
import { SocialMedia } from '@/types'
import SocialMediaAccounts from '@/containers/social-media/social-media.component'

const IntroductionContent: React.FC<{ socialMedias: SocialMedia[] }> = ({ socialMedias }) => {
  const { t } = useTranslation()
  const { isMobile } = useWindowSize()
  const fullYears = new Date().getFullYear() - 2019

  return (
    <TwoColumnLayout>
      <Fragment>
        <div className='flex items-center w-full bg-blend-color'>
          <h1 className='mr-5 text-4xl text-center lg:text-6xl lg:text-start'>
            {t('Intro.Hello')}
          </h1>
          {!isMobile && (
            <Image
              src='https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif'
              alt='hand-hello'
              className='lg:hidden'
              height={60}
              width={60}
            />
          )}
        </div>
        <p className='mt-5 text-xl text-center lg:text-start'>
          {t('Intro.Description', { years: fullYears })}
        </p>

        <div className='mt-4'>
          <SocialMediaAccounts socialMedias={socialMedias} />
        </div>
      </Fragment>

      <Fragment>
        Photo Here...
      </Fragment>
    </TwoColumnLayout>
  )
}

export default IntroductionContent
