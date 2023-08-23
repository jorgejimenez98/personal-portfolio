import React from 'react'
import { useTranslation } from 'next-i18next'

import { global_classes } from '@/lib/constants'
import { Expertise } from '@/types'
import { ExpertiseItem } from './expertise/expertise-item.component'
import { ListLayout } from '@/layouts'

export const ExpertiseContent: React.FC<{ expertises: Expertise[] }> = ({ expertises }) => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      {/* Title */}
      <h1 className={global_classes.left_big_text}>
        {t('Expertise.Title')}
      </h1>

      {/* List */}
      <ListLayout>
        {expertises.map((expertise, idx) => (
          <ExpertiseItem
            expertise={expertise}
            key={idx}
          />
        ))}
      </ListLayout>
    </React.Fragment>
  )
}

