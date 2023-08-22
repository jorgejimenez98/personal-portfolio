import { GetStaticProps, NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CustomSeo } from '@/components'
import { isLocal } from '@/lib/utils'
import { MainPageContent } from '@/containers'
import { mongoDbService } from '@/database'
import { MainPageProps } from '@/types'

const HomePage: NextPage<MainPageProps> = (props)  => {

  return <>
    <CustomSeo title={'Jorge Jimenez Diaz'} />
    <MainPageContent
      socialMedias={props.socialMedias}
      mainSkills={props.mainSkills}
      descriptions={props.descriptions}
      expertises={props.expertises}
    />
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()

  await mongoDbService.process('CONNECT')
  const [socialMedias, mainSkills, descriptions, expertises] = await Promise.all([
    mongoDbService.getSocialMedias(),
    mongoDbService.getMainSkills(),
    mongoDbService.getDescriptions(),
    mongoDbService.getExpertises()
  ])
  await mongoDbService.process('DISCONNECT')

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      socialMedias,
      mainSkills,
      descriptions,
      expertises
    }
  }
}

export default HomePage
