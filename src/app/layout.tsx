import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './assets/globals.css'

const title = 'Open Source | Onchain Squad'
const description = 'Join us for 30-days of Web3 and make contribute to open-source software and crypto projects'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    type: 'website',
    title: title,
    description: description,
    url: 'https://www.onchainsquad.com',
    images: 'https://www.onchainsquad.com/og.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: 'https://www.onchainsquad.com/og.png',
  },
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
