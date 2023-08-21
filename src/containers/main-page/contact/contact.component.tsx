import React from 'react'
import { useTranslation } from 'next-i18next'

import { ContactForm } from '@/forms'
import { ContactFormPayload } from '@/types'
import { classes } from './contact.classes'

export const Contact: React.FC = () => {
  const { t } = useTranslation()

  const handleSubmit = (values: ContactFormPayload) => {
    // eslint-disable-next-line no-console
    console.log({ values })
  }

  return (
    <React.Fragment>
      <div className={classes.divider} />

      {/* Label */}
      <h3 className={classes.title}>
        {t('Contact.Title')}
      </h3>

      {/* Sublabel */}
      <p className={classes.sublabel}>
        {t('Contact.Subtitle')}
      </p>

      <ContactForm
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  )
}
