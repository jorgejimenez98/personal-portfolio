import { isLocal } from '@/lib/utils'
import { GetStaticProps, NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: NextPage = ()  => {
  return (
    <div>
      Main Content Here...
      <button className='btn'>Hello daisyUI</button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])) }
  }
}


export default HomePage
