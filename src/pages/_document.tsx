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
        <meta name='title' content='George Jimenez' />
        <meta name='description' content={labels.web_description} />

        {/* Keywords for SEO */}
        <meta name='keywords' content={labels.keywords} />

        {/* Open Graph tags */}
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:url' content='https://www.jorgejimenez.dev/' />
        <meta property='og:title' content='George Jimenez' />
        <meta property='og:site_name' content='George Jimenez' />
        <meta property='og:image' content={images.small_profile} />
        <meta property='og:description' content={labels.web_description} />

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='George Jimenez' />
        <meta name='twitter:description' content={labels.web_description} />
        <meta name='twitter:image' content={images.small_profile} />

        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css'
        />

        {/* Schema Markup */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'George Jimenez',
            'jobTitle': 'Software Engineer',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Miami',
              'addressRegion': 'FL',
              'addressCountry': 'US'
            },
            'description': labels.seo_description,
            'url': 'https://www.jorgejimenez.dev/'
          })}
        </script>

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
    language: cookies?.language,
    theme: cookies?.theme
  }
}
