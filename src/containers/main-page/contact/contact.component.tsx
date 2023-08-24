import React from 'react'
import { useTranslation } from 'next-i18next'

import { classes } from './contact.classes'
import { ContactForm } from '@/forms'
import { SocialMedia } from '@/types'
import { SocialMediaAccounts } from '@/containers'
import { TwoColumnLayout } from '@/layouts'
import { CustomLogo } from '@/components'
import { header_ids } from '@/lib/constants'

export const Contact: React.FC<{ socialMedias: SocialMedia[] }> = ({ socialMedias }) => {
  const { t } = useTranslation()

  return (
    <div id={header_ids.contact}>
      <div className={classes.divider}/>

      <TwoColumnLayout>
        <React.Fragment>
          {/* Label */}
          <h3 className={classes.title}>
            {t('Contact.Title')}
          </h3>

          {/* Sublabel */}
          <p className={classes.sublabel}>
            {t('Contact.Subtitle')}
          </p>

          {/* LocationLabel */}
          <div className={classes.location_content}>
            <i className={classes.location_icon} />
            <p className={classes.bold}>
              {t('Contact.Location')}
            </p>
          </div>

          {/* Social Media */}
          <div className={classes.mb}>
            <SocialMediaAccounts
              socialMedias={socialMedias}
            />
          </div>

          {/* Footer Logo */}
          <div className={classes.logo}>
            <CustomLogo text={t('General.FullStack')} />
          </div>
        </React.Fragment>

        <ContactForm />
      </TwoColumnLayout>
    </div>
  )
}
