import '@/assets/scss/main.scss'
import { UiProvider } from '@/context/ui'
import { MainLayout } from '@/layouts'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UiProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UiProvider>
  )
}

export default appWithTranslation(MyApp)
