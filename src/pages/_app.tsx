import '@/assets/scss/main.scss'
import { UiProvider } from '@/context/ui'
import { MainLayout } from '@/layouts'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UiProvider>
  )
}
