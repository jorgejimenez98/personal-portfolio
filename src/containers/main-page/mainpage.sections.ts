import { MainPageProps } from '@/types'
import IntroductionContent from './introduction/introduction-content.component'

export const sections = (data: MainPageProps) => {
  return [
    {
      component: IntroductionContent,
      props: { socialMedias: data.socialMedias }
    }
  ]
}
