import { AppLanguage, AppTheme } from '@/types'
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
        <meta name='theme-color' content='#1D1F2C' />
        <link rel='icon' href='/favicon.ico' />

        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css'
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const appProps = await Document.getInitialProps(ctx)
  const cookies = (ctx?.req as any)?.cookies

  return {
    ...appProps,
    language: cookies?.['language'],
    theme: cookies?.['theme']
  }
}
