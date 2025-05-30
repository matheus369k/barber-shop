import type { Metadata } from 'next'
import { Work_Sans, Barlow } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '900', '800', '700'],
})

export const metadata: Metadata = {
  title: 'Barber Shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${workSans.variable} ${barlow.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
