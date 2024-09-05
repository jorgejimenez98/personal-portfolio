import React from 'react'
import { useTranslation } from 'next-i18next'

import { global_classes, header_ids } from '@/lib/constants'
import { ListLayout } from '@/layouts'
import { Project } from '@/types'
import { ProjectItem } from './project-item/project-item.component'
import { InvisibleLink } from '@/components'


const ProjectsSection: React.FC<{ title: string, projects: Project[] }> = ({ title, projects }) => (
  <>
    {/* Title */}
    <h1 className={global_classes.left_big_text}>
      {title}
    </h1>

    {/* Cards */}
    <ListLayout hasReverseContent={false}>
      {projects.map((project, idx) => (
        <ProjectItem
          key={idx}
          project={project}
        />
      ))}
    </ListLayout>
  </>
)

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useTranslation()

  const applications = {
    large: projects.filter(project => !project.isLandingPage),
    landingPages: projects.filter(project => project.isLandingPage)
  }

  return (
    <>
      <InvisibleLink id={header_ids.projects} />

      {/* Large Projects */}
      <ProjectsSection
        title={t('Projects.Title')}
        projects={applications.large}
      />

      {/* Landing Page Projects */}
      <div className='mt-5'>
        <ProjectsSection
          title={t('Projects.Title2')}
          projects={applications.landingPages}
        />
      </div>

      {/* Other Projects */}
      <p
        className='text-center lg:text-start mt-4'
        dangerouslySetInnerHTML={{
          __html: t('Projects.More')
        }}
      />
    </>
  )
}
