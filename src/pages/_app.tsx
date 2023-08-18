import '@/assets/scss/main.scss'
import { MainLayout } from '@/layouts'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default appWithTranslation(MyApp)
