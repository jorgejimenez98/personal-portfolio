import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { classes } from './expertise-item.classes'
import { Collapse } from '@/components'
import { Expertise } from '@/types'
import { getHumanizedDate, getYearMonthDifference } from '@/lib/utils'
import { SkillItems } from './skills/skills.component'
import { useWindowSize } from '@/hooks'

export const ExpertiseItem: React.FC<{ expertise: Expertise }> = ({ expertise }) => {
  const { t, i18n: { language } } = useTranslation()
  const { isMobile } = useWindowSize()

  const expertiseDescription = expertise[`description_${language}` as keyof Expertise]

  const skills = [
    { label: 'Frontend', items: expertise.frontendSkills },
    { label: 'Backend', items: expertise.backendSkills },
    { label: t('Expertise.Mobile'), items: expertise.mobileSkills },
    { label: t('Expertise.Descktop'), items: expertise.desktopSkills },
    { label: t('Expertise.Key'), items: expertise.keyExperiences,  isKey: true },
  ]

  return (
    <div>
      <div className={classes.rounded_card}>
        {/* Header */}
        <div
          className={classes.header_content}
          style={{ backgroundColor: expertise.backgroundColor }}
        >

          {/* Company Content */}
          <div className={classes.company_content}>

            {/* Name */}
            <Link
              passHref
              href={expertise.companyUrl || '#'}
              target={expertise.companyUrl ? '_blank' : '_self'}
            >
              <h3 className={classes.name}>
                {expertise[`name_${language}` as keyof Expertise]}
              </h3>
            </Link>


            {/* Logo */}
            <div className={classes.logo_content}>
              <Image
                src={expertise.logoUrl}
                width={120}
                height={120}
                data-theme='cupcake'
                className={classes.logo}
                alt={expertise.name_en}
              />
            </div>
          </div>
        </div>

        <div className={classes.body_content}>

          {/* Rol */}
          <h2 className={classes.rol_text}>
            {expertise.rol}
          </h2>

          <h2 className={classes.location_text}>
            {expertise[`location_${language}` as keyof Expertise]}
          </h2>

          {/* Dates */}
          <div className={classes.dates_content}>
            <p className={classes.center}>
              {getHumanizedDate(expertise.dateStart)}&nbsp;-&nbsp;
              {getHumanizedDate(expertise.dateEnd)}
            </p>
            <small className={classes.small_text}>
              {getYearMonthDifference(expertise.dateStart, expertise.dateEnd)}
            </small>
          </div>

          {/* Description */}
          <p className={classes.description}>
            {expertiseDescription}
          </p>
        </div>

        {/* Skills */}
        <Collapse title={isMobile ? t('General.WatchMore') : t('Expertise.Watch')}>
          <p className={classes.description_mobile}>
            {expertiseDescription}
          </p>
          {skills.map((skill, idx) => (
            <SkillItems key={idx} {...skill} />
          ))}
        </Collapse>
      </div>
    </div>
  )
}
