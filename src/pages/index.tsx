import { GetStaticProps, NextPage } from 'next'
import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CustomSeo } from '@/components'
import { isLocal } from '@/lib/utils'
import { MainPageContent } from '@/containers'
import { mongoDbService } from '@/database'
import { MainPageProps } from '@/types'

const HomePage: NextPage<MainPageProps> = props => {
  const { t } = useTranslation()

  return <>
    <CustomSeo title={t('General.Name')} />
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
