import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'wanderList',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`p-4 bg-white ${inter.className}`}>
        <header>
          <h1>WanderList</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
