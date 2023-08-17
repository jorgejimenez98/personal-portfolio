import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
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
