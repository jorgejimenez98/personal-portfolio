import React, { Fragment } from 'react'
import { MainSkill } from '@/types'
import { TwoColumnLayout } from '@/layouts'
import { useTranslation } from 'next-i18next'
import { global_classes } from '@/lib/constants'

export const MainSkillsContent: React.FC<{ mainSkills: MainSkill[] }> = ({ mainSkills }) => {
  const { t } = useTranslation()

  return (
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
              className='progress progress-info h-5 mt-1'
              value={skill.qualification}
              max='100'
            />
          </div>
        ))}
      </Fragment>

      {/* Descriptions */}
      <Fragment>
        Descriptions here...
      </Fragment>
    </TwoColumnLayout>
  )
}

