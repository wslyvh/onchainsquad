import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './assets/globals.css'

export const metadata: Metadata = {
  title: 'Open Source | Onchain Squad',
  description: 'Join us for 30-days of Web3 and contribute to onchain open-source software',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
