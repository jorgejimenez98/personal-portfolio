import React from 'react'
import Head from 'next/head'

interface CustomSeoProps {
  title: string
}

export const CustomSeo: React.FC<CustomSeoProps> = (props) => {
  const { title } = props
  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  )
}
