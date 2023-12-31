import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { classes } from './education.classes'
import { header_ids, images, urls } from '@/lib/constants'
import { InvisibleLink } from '@/components'

export const Education: React.FC = () => {
  const { t } = useTranslation()

  return <>
    <InvisibleLink id={header_ids.education} />

    <div className={classes.content}>
      <h1 className={classes.education_title}>
        {t('Education.Title')}
      </h1>

      <div className={classes.education_content}>

        {/* Image */}
        <div className={classes.image_content}>
          <Link
            passHref
            target='_blank'
            href={urls.university_website}
          >
            <Image
              src={images.university_logo}
              width={100}
              height={100}
              className={classes.image}
              alt='university'
              data-theme={'cupcake'}
            />
          </Link>
        </div>

        {/* Description */}
        <div className={classes.description}>

          {/* Name */}
          <h2 className={classes.name}>
            {t('Education.University')}
          </h2>

          {/* Rol */}
          <Link
            passHref
            href={urls.title}
            target='_blank'
          >
            <h3 className={classes.rol_text}>
              {t('Education.Rol')}
            </h3>
          </Link>

          {/* Dates */}
          <p className={classes.dates_text}>
            {t('Education.Dates')}
          </p>
        </div>
      </div>
    </div>
  </>
}
