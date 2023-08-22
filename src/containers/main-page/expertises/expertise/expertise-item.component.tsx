import React from 'react'
import Image from 'next/image'
import { Expertise } from '@/types'
import { useTranslation } from 'next-i18next'
import { getHumanizedDate, getYearMonthDifference } from '@/lib/utils'
import { Collapse } from '@/components'
import { SkillItems } from './skills/skills.component'
import { classes } from './expertise-item.classes'

export const ExpertiseItem: React.FC<{ expertise: Expertise }> = ({ expertise }) => {
  const { t, i18n: { language } } = useTranslation()

  const skills = [
    { label: 'Frontend', items: expertise.frontendSkills },
    { label: 'Backend', items: expertise.backendSkills },
    { label: t('Expertise.Mobile'), items: expertise.mobileSkills },
    { label: t('Expertise.Descktop'), items: expertise.desktopSkills },
    { label: t('Expertise.Key'), items: expertise.keyExperiences,  isKey: true },
  ]

  return (
    <div className={classes.content}>
      <div className={classes.rounded_card}>

        {/* Header */}
        <div
          className={classes.header_content}
          style={{ backgroundColor: expertise.backgroundColor }}
        >

          {/* Company Content */}
          <div className={classes.company_content}>

            {/* Name */}
            <h3 className={classes.name}>
              {expertise[`name_${language}` as keyof Expertise]}
            </h3>

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

          {/* Dates */}
          <p>
            {getHumanizedDate(expertise.dateStart)}&nbsp;-&nbsp;
            {getHumanizedDate(expertise.dateEnd)}
            <small className={classes.small_text}>
              {getYearMonthDifference(expertise.dateStart, expertise.dateEnd)}
            </small>
          </p>

          {/* Description */}
          <p className={classes.description}>
            {expertise[`description_${language}` as keyof Expertise]}
          </p>
        </div>

        {/* Skills */}
        <Collapse title={t('Expertise.Watch')}>
          {skills.map((skill, idx) => (
            <SkillItems key={idx} {...skill} />
          ))}
        </Collapse>
      </div>
    </div>
  )
}
