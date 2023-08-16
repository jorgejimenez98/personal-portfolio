import React, { Fragment } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { useWindowSize } from '@/hooks'
import { TwoColumnLayout } from '@/layouts'

const IntroductionContent: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useWindowSize()
  const fullYears = new Date().getFullYear() - 2019

  return (
    <TwoColumnLayout>
      <Fragment>
        <div className='flex items-center w-full bg-blend-color'>
          <h1 className='lg:text-6xl lg:mr-5'>
            {t('Intro.Hello')}
          </h1>
          {!isMobile && (
            <Image
              src='https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif'
              alt='hand-hello'
              height={60}
              width={60}
            />
          )}
        </div>
        <p className='mt-5 text-gray-500 text-xl'>
          {t('Intro.Description', { years: fullYears })}
        </p>
      </Fragment>

      <Fragment>
        Photo Here...
      </Fragment>
    </TwoColumnLayout>
  )
}

export default IntroductionContent
