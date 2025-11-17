import type { Metadata } from 'next'
import { Noto_Serif_TC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifTC = Noto_Serif_TC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '兒童讀經班 | 傳承經典 啟蒙智慧',
  description: '專業的兒童讀經教育，教授論語、唐詩、弟子規等經典，培養孩子的品格與智慧',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSerifTC.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
