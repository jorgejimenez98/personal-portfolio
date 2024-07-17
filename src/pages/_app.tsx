import '@/assets/scss/main.scss'
import { MainLayout } from '@/layouts'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
        <Analytics />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
