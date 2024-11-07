import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'oRPC Playground',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
