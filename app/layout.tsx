import './globals.css'
import Navbar from './Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kratos 23 | EEC',
  description: 'TODO description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={inter.style} className='flex flex-col items-center'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
