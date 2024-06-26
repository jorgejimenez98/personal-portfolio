import React from 'react'
import { useTranslation } from 'next-i18next'

import { global_classes, header_ids } from '@/lib/constants'
import { ListLayout } from '@/layouts'
import { Project } from '@/types'
import { ProjectItem } from './project-item/project-item.component'
import { InvisibleLink } from '@/components'

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useTranslation()

  return <>
    <InvisibleLink  id={header_ids.projects}/>
    <div>
      {/* Title */}
      <h1 className={global_classes.left_big_text}>
        {t('Projects.Title')}
      </h1>

      {/* Cards */}
      <ListLayout hasReverseContent={false}>
        {projects.map((project, idx) => (
          <ProjectItem project={project} key={idx} />
        ))}
      </ListLayout>

      {/* Other Projects */}
      <p
        className='text-center lg:text-start mt-4'
        dangerouslySetInnerHTML={{
          __html: t('Projects.More')
        }}
      />
    </div>
  </>
}
