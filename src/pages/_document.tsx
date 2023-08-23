import { images, labels } from '@/lib/constants'
import { AppLanguage, AppTheme } from '@/types'
import { Analytics } from '@vercel/analytics/react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

interface DocumentProps {
  appProps: DocumentInitialProps
  language: AppLanguage
  theme: AppTheme
}

export default function MyDocument({ language, theme }: DocumentProps) {

  return (
    <Html
      lang={language}
      data-theme={theme}
    >
      <Head>
        {/* Standar Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='theme-color' content='#1D1F2C' />
        <link rel='icon' href='/favicon.ico' />

        {/* Page Title and Description */}
        <meta name='title' content='Jorge Jimenez Diaz' />
        <meta name='description' content={labels.web_description} />

        {/* Open Graph tags */}
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:url' content='https://www.jorgejimenez.dev/' />
        <meta property='og:title' content='Jorge Jimenez Diaz' />
        <meta property='og:site_name' content='Jorge Jimenez Diaz' />
        <meta property='og:image' content={images.small_profile} />
        <meta property='og:description' content={labels.web_description} />

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Jorge Jimenez Diaz' />
        <meta name='twitter:description' content={labels.web_description} />
        <meta name='twitter:image' content={images.small_profile} />

        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css'
        />

      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const appProps = await Document.getInitialProps(ctx)
  const cookies = (ctx?.req as any)?.cookies

  return {
    ...appProps,
    language: cookies?.['language'] || 'en',
    theme: cookies?.['theme'] || 'cupcake'
  }
}
