import React, { Fragment } from 'react'
import { Description, MainSkill } from '@/types'
import { TwoColumnLayout } from '@/layouts'
import { useTranslation } from 'next-i18next'
import { global_classes, header_ids } from '@/lib/constants'
import { classes } from './main-skills.classes'
import { InvisibleLink } from '@/components'

interface MainSkillsContentProps {
  mainSkills: MainSkill[]
  descriptions: Description[]
}

export const MainSkillsContent: React.FC<MainSkillsContentProps> = ({ mainSkills, descriptions }) => {
  const { t, i18n: { language } } = useTranslation()

  return <>
    <InvisibleLink id={header_ids.about_me} />
    <div>
      <TwoColumnLayout>
        {/* Main Skills */}
        <Fragment>
          {/* Title */}
          <h1 className={global_classes.left_big_text}>
            {t('Skills.Title')}
          </h1>

          {/* List */}
          {mainSkills.map((skill, idx) => (
            <div key={idx} className='mt-3'>
              <h3 className={global_classes.left_small_text}>
                {skill.name}
              </h3>
              <progress
                className={classes.progress}
                value={skill.qualification}
                max='100'
              />
            </div>
          ))}
        </Fragment>

        {/* Descriptions */}
        <div className={classes.description_content}>

          {/* What I Do */}
          <h1 className={global_classes.left_big_text}>
            {t('Skills.TitleDesc')}
          </h1>

          {/* Description List */}
          {descriptions?.map((description, idx) => (
            <div key={idx} className={classes.description_list}>
              <i className={classes.icon} />
              <p className={classes.text}>
                {description[`name_${language}` as keyof Description]}
              </p>
            </div>
          ))}
        </div>
      </TwoColumnLayout>
    </div>
  </>
}
