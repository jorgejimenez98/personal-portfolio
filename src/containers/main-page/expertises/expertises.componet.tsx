import React from 'react'
import { useTranslation } from 'next-i18next'

import { global_classes } from '@/lib/constants'
import { Expertise } from '@/types'
import { ExpertiseItem } from './expertise/expertise-item.component'

export const ExpertiseContent: React.FC<{ expertises: Expertise[] }> = ({ expertises }) => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      {/* Title */}
      <h1 className={global_classes.left_big_text}>
        {t('Experience.Title')}
      </h1>

      {/* List */}
      <div className='flex flex-wrap -mx-4 mt-6'>
        {expertises.map((expertise, idx) => (
          <ExpertiseItem
            expertise={expertise}
            key={idx}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

