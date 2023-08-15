import { GetStaticProps, NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CustomSeo } from '@/components'
import { isLocal } from '@/lib/utils'

const HomePage: NextPage = ()  => {
  return <>
    <CustomSeo title={'Jorge Jimenez Diaz'} />

    <div>
      Main Content Here...
      <button className='btn'>Hello daisyUI</button>
    </div>
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])) }
  }
}


export default HomePage
