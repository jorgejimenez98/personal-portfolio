import React from 'react'
import { useTranslation } from 'next-i18next'

import { global_classes, header_ids } from '@/lib/constants'
import { Expertise } from '@/types'
import { ExpertiseItem } from './expertise/expertise-item.component'
import { InvisibleLink } from '@/components'

export const ExpertiseContent: React.FC<{ expertises: Expertise[] }> = ({ expertises }) => {
  const { t } = useTranslation()

  return <>
    <InvisibleLink id={header_ids.expertise} />

    <div>
      {/* Title */}
      <h1 className={global_classes.left_big_text}>
        {t('Expertise.Title')}
      </h1>

      {/* List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5'>
        {expertises.map((expertise, idx) => (
          <ExpertiseItem
            expertise={expertise}
            key={idx}
          />
        ))}
      </div>
    </div>
  </>
}

