import { MainPageProps } from '@/types'
import * as Components from './mainpage.imports'
import React from 'react'

interface MainPageSection {
  component: React.FunctionComponent<any>,
  props: object
}

export const sections = (data: MainPageProps): MainPageSection[] => [
  {
    component: Components.IntroductionContent,
    props: { socialMedias: data.socialMedias }
  },
  {
    component: Components.MainSkillsContent,
    props: {
      mainSkills: data.mainSkills,
      descriptions: data.descriptions
    }
  },
  {
    component: Components.SkillsSection,
    props: {}
  },
  {
    component: Components.ExpertiseContent,
    props: { expertises: data.expertises }
  },
  {
    component: Components.Projects,
    props: { projects: data.projects }
  },
  {
    component: Components.Education,
    props: {}
  },
  {
    component: Components.Contact,
    props: { socialMedias: data.socialMedias }
  }
]
