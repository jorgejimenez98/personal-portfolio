import { MainPageProps } from '@/types'
import * as Components from './mainpage.imports'

export const sections = (data: MainPageProps) => {
  return [
    {
      component: Components.IntroductionContent,
      props: { socialMedias: data.socialMedias }
    },
    {
      component: Components.MainSkillsContent,
      props: { mainSkills: data.mainSkills }
    },
  ]
}
