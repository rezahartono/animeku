import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/molecules/navbar.components'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'AnimeKu Apps',
  description: 'Website AnimeKu Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
