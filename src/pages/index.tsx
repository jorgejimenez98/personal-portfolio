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
    <CustomSeo title={'Jorge Jimenez'} />
    <MainPageContent {...props} />
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()
  const pageData = await mongoDbService.getPageData()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      ...pageData
    }
  }
}

export default HomePage
