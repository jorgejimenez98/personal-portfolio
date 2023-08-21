import { Description } from './description.interface'
import { MainSkill } from './main-skill.interface'
import { SocialMedia } from './social-media.interface'

export interface SeedData {
  socialMedias: SocialMedia[]
}

export interface MainPageProps {
  socialMedias: SocialMedia[]
  mainSkills: MainSkill[]
  descriptions: Description[]
}
