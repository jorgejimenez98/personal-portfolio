import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { TwoColumnLayout } from '@/layouts'
import { SocialMedia } from '@/types'
import SocialMediaAccounts from '@/containers/social-media/social-media.component'
import { images } from '@/lib/constants'
import { classes } from './introduction-content.classes'

export const IntroductionContent: React.FC<{ socialMedias: SocialMedia[] }> = ({ socialMedias }) => {
  const { t } = useTranslation()
  const fullYears = new Date().getFullYear() - 2019

  return (
    <TwoColumnLayout>
      <Fragment>

        {/* Intro */}
        <div className={classes.intro_content}>
          <h1 className={classes.hello_message}>
            {t('Intro.Hello')}
          </h1>
        </div>

        {/* Description */}
        <p
          className={classes.description_message}
          dangerouslySetInnerHTML={{
            __html: t('Intro.Description', { years: fullYears })
          }}
        />

        {/* Social Media */}
        <div className={classes.social_media}>
          <SocialMediaAccounts socialMedias={socialMedias} />
        </div>

        {/* Resume */}
        <div className={classes.resume_container}>
          <Link href={images.resume} passHref target='_blank'>
            <button className={classes.link_button}>
              {t('Intro.ResumeLink')}
            </button>
          </Link>
        </div>

      </Fragment>

      <Fragment>
        {/* Image */}
        <div className={classes.image_container}>
          <Image
            src={images.profile}
            width={550}
            height={550}
            className={classes.image_mask}
            alt='Jorge Jimenez Diaz'
          />
        </div>
      </Fragment>
    </TwoColumnLayout>
  )
}
